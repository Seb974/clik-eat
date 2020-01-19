<?php
	/**
     * HomePage Controller
     *
     * This controller manage all about Home page
     *
     * @package      Some Package
     * @subpackage   Some Subpackage
     * @category     Home Page
     * @author       War Machines
     */
namespace App\Controller;

use App\Entity\CartItem as CartItem;
use App\Entity\Metadata;
use App\Entity\User;
use App\Entity\City;
use App\Entity\Item;
use App\Entity\OrderEntity;
use App\Entity\Orders;
use App\Entity\Variant;
use App\Service\Anonymize\AnonymizeService;
use App\Service\Cart\CartService;
use Doctrine\Common\Persistence\ObjectManager;
use Doctrine\ORM\EntityManagerInterface;
use Payplug;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use App\Repository\UserRepository;
use App\Repository\VariantRepository;
use App\Service\Serializer\SerializerService;
use App\Service\Mercure\MercureCookieGenerator;

class PaiementController extends AbstractController
{
    /**
	 * checkout
     * @Route("/checkout/{id}", name="checkout")
	 * @param  integer $id corresponding to the id of the current user
     * @param  App\Service\Cart\CartService $cartService
     * @param  Doctrine\ORM\EntityManagerInterface $em
	 *
	 * @return void
     */
    public function checkout($id, CartService $cartService, EntityManagerInterface $em )
    {
		Payplug\Payplug::setSecretKey( $_ENV['PAYPLUG_KEY'] );
		$user    = $em->getRepository( User::class )->find( $id );
		$cart    = $user->getCart();
		$uniq_id = uniqid( $user->getEmail() );

		$payment = \Payplug\Payment::create(array(
			'amount'   => $cart->getTotalToPay() * 100,
			'currency' => 'EUR',
			'billing'        => array(
				'title'      => 'mr'               ,
				'first_name' => 'John'             ,
				'last_name'  => 'Watson'           ,
				'email'      => $user->getEmail()  ,
				'address1'   => '221B Baker Street',
				'postcode'   => 'NW16XE'           ,
				'city'       => 'London'           ,
				'country'    => 'FR'               ,
				'language'   => 'fr'
			),

			'shipping'          => array(
				'title'         => 'mr'               ,
				'first_name'    => 'John'             ,
				'last_name'     => 'Watson'           ,
				'email'         => $user->getEmail()  ,
				'address1'      => '221B Baker Street',
				'postcode'      => 'NW16XE'           ,
				'city'          => 'London'           ,
				'country'       => 'FR'               ,
				'language'      => 'fr'               ,
				'delivery_type' => 'BILLING'
			),

			'hosted_payment' => array(
				'return_url' => "{$_ENV['SERVER_URL']}/payment/success/{$id}?id={$uniq_id}",
				'cancel_url' => "{$_ENV['SERVER_URL']}/payment/fail?id={$uniq_id}"
		),

			// 'notification_url' => "{$_ENV['SERVER_URL']}/payment/notif?id={$uniq_id}"
		));

		$cartItems = $user->getCart()->getCartItems();
		foreach ( $cartItems as $key => $value ) {
			if ( $value->getIsPaid() === false ) {
				$OneCartItem = $value;
			}
		}

		$payment_url     = $payment->hosted_payment->payment_url;
		$payment_id      = $payment->id;
		$itemOrder_exist = $em->getRepository( Orders::class )->findOneBy( [ 'cartItem' => $OneCartItem ] );
		$count           = 0;

		if ( ! $itemOrder_exist ) {
			$cartService->convertCartToOrders( $user->getCart(), $uniq_id, $payment_id, 'payplug' );
		} else {
			//! Must resolve this to not have 2 existing payment at same time during 15mn
			// Abort old payment
			$old_payplug_id = $itemOrder_exist->getPaymentId();
			if ( 1 === 3 ) {
				$payment = \Payplug\Payment::abort( $old_payplug_id );
			}

			// Update Internal & External ID of new Payment
			foreach ( $user->getCart()->getCartItems() as $key => $value ) {
				if ( ! $value->getIsPaid() ) {
					$item = $em->getRepository( Orders::class )->findOneBy( [ 'cartItem' => $value ] );
					$item->setPaymentId( $payment_id );
					$item->setInternalId( $uniq_id );
					$em->flush();
					$count++;
				}
			}
		};
		$metas['billing1'    ]["field"  ] = "";
		$metas['billing2'    ]["field"  ] = "";
		$metas['billing_city']["zipCode"] = "";
		$metas['billing_city']["name"   ] = "";
		$billing_city = $em->getRepository( Metadata::class )->findOneBy( [ 'user' => $user, 'type' => 'billing_city'  ] );
		if ( $billing_city ) {
			$metas['billing1'      ] = $em->getRepository( Metadata::class )->findOneBy( [ 'user' => $user, 'type' => 'billing_line_1' ] );
			$metas['billing2'      ] = $em->getRepository( Metadata::class )->findOneBy( [ 'user' => $user, 'type' => 'billing_line_2' ] );
			$metas['billing_city'  ] = $em->getRepository( City    ::class )->find( $billing_city );
		}

		$metas['phone'] = $em->getRepository( Metadata::class )->findOneBy( [ 'user' => $user, 'type' => 'phone_number' ] );
		if ( ! $metas['phone'] ) {
			$metas['phone']["field"] = "";
		}

		$api['ALGOLIA_APPID']  = $_ENV['ALGOLIA_APPID' ];
		$api['ALGOLIA_APIKEY'] = $_ENV['ALGOLIA_APIKEY'];

        return $this->render('paiement/checkout.html.twig', [
			'payment_url' => $payment_url,
			'payment'     => $payment,
			'cart'		  => $user->getCart(),
			'user' 		  => $user,
			'count'		  => $count,
			'metas'       => $metas,
			'api'         => $api
		]);
	}

    /**
     * checkout
     * @Route("/pay", name="pay", methods={"GET", "POST"})
     */
    public function paymentProcess(Request $request, SessionInterface $session)
    {
		if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
            $data = json_decode($request->getContent(), true);
            $request->request->replace(is_array($data) ? $data : array());
		}
		$dataUser = $request->request->get('dataUser');
		$dataItems = $request->request->get('dataItems');

		Payplug\Payplug::setSecretKey( $_ENV['PAYPLUG_KEY'] );
		$uniq_id = uniqid($request->request->get('email'));

		$payment = \Payplug\Payment::create(array(
			'amount'   => $dataItems['totalToPayTTC'] * 100,
			'currency' => 'EUR',
			'billing'        => array(
				'title'      => 'mr'               ,
				'first_name' => 'John'             ,
				'last_name'  => 'Watson'           ,
				'email'      => $dataUser['email'] ,
				'address1'   => '221B Baker Street',
				'postcode'   => 'NW16XE'           ,
				'city'       => 'London'           ,
				'country'    => 'FR'               ,
				'language'   => 'fr'
			),

			'shipping'          => array(
				'title'         => 'mr'               ,
				'first_name'    => 'John'             ,
				'last_name'     => 'Watson'           ,
				'email'         => $dataUser['email'] ,
				'address1'      => '221B Baker Street',
				'postcode'      => 'NW16XE'           ,
				'city'          => 'London'           ,
				'country'       => 'FR'               ,
				'language'      => 'fr'               ,
				'delivery_type' => 'BILLING'
			),
			'hosted_payment' => array(
				'return_url' => $_ENV['SERVER_URL'] . "/payment/success?id=" . $uniq_id,
				'cancel_url' => $_ENV['SERVER_URL'] . "/payment/fail?id=" . $uniq_id
			),
		));
			$payment_url     = $payment->hosted_payment->payment_url;
			$payment_id      = $payment->id;
			$count           = 0;

			$session->set('items', $dataItems);
			$session->set('user', $dataUser);
			$session->set('paymentId', $payment_id);
			$response = json_encode($payment_url);
			return new JsonResponse($response);
    }

	/**
	 * payement_success
     * @Route("/payment/success", name="payment_success")
     */
	public function payement_success(SessionInterface $session, VariantRepository $variantRepository, UserRepository $userRepository, UserPasswordEncoderInterface $passwordEncoder, MessageBusInterface $bus, SerializerService $serializerService): Response {
		$dataItems = $session->get('items');
		$dataUser = $session->get('user');
		$paymentId = $session->get('paymentId');
		$user = ($dataUser['id'] !== -1) ? $userRepository->find($dataUser['id']) : $this->createUser($dataUser, $paymentId, $passwordEncoder);
		$order = $this->createOrder($user, $paymentId, $dataUser, $dataItems);
		$this->createItems($order, $dataItems, $variantRepository);
		$update = $this->createUpdate($userRepository, $serializerService, $order, 'order', 'order-add', 'order/add');
        $bus->dispatch($update);

		return $this->redirectToRoute('index_api', ['paymentStatus' => 'success']);
	}

	/**
	 * payement_fail
     * @Route("/payment/fail", name="payment_fail")
	 * @param  Symfony\Component\HttpFoundation\Request $request
	 * @param  Doctrine\ORM\EntityManagerInterface $em
	 * @return Symfony\Component\HttpFoundation\Response
     */
	public function payement_fail(): Response {
		return $this->redirectToRoute('index_api', ['paymentStatus' => 'fail']);
	}

	/**
	 * payement_notif
     * @Route("/payment/notif", name="payment_notif")
	 * @param  Symfony\Component\HttpFoundation\Request $request
	 * @return Symfony\Component\HttpFoundation\Response
     */
	public function payement_notif( Request $request ): Response {
		return $this->render('paiement/notif.html.twig', [
			'request' => $request
        ]);
	}

	private function createUser($dataUser, $paymentId, $passwordEncoder) {
		$user = new User();
		$user->setUsername($dataUser['username']);
		$user->setEmail($dataUser['email']);
		$user->setRoles(["ROLE_GUEST"]);
		$user->setPassword($passwordEncoder->encodePassword($user, $paymentId));
		$user->setIsBanned(false);
		$entityManager = $this->getDoctrine()->getManager();
		$entityManager->persist($user);
		$entityManager->flush();

		return $user;
	}

	private function createOrder(User $user, $paymentId, $dataUser, $dataItems) {
		$now = new \DateTime();
		$order = new OrderEntity();
		$order->setUser($user);
		$order->setPaymentId($paymentId);
		$order->setPaymentDateTime($now);
		$order->setTotalTTC($dataItems['totalToPayTTC']);
		$order->setTotalHT($dataItems['totalTax']);
		$order->setTotalTax($dataItems['totalToPayHT']);
		$order->setStatus('ON PREPARATION');
		$order->setDeliveryAddress($dataUser['d_address'] . ' ' . $dataUser['d_address2'] . ' ' . $dataUser['d_zipCode'] . ' ' . $dataUser['d_city']['name']);
		$entityManager = $this->getDoctrine()->getManager();
		$entityManager->persist($order);
		$entityManager->flush();

		return $order;
	}

	private function createItems(OrderEntity $order, $dataItems, VariantRepository $variantRepository) {
		$entityManager = $this->getDoctrine()->getManager();
		for ($i = 0; $i < count($dataItems['items']); ++$i) {
			$item = new Item();
			$variant = $variantRepository->find($dataItems['items'][$i]['product']['id']);
			$quantity = $dataItems['items'][$i]['quantity'];
			$item->setVariant($variant);
			$item->setQuantity($quantity);
			$entityManager->persist($item);
			$order->addItem($item);
		}
		$entityManager->flush();
	}

	private function createUpdate(UserRepository $userRepository, $serializer, $entity, string $group, string $dataType, string $route) {
		$target = $this->defineTarget($userRepository);
		dump($target);
		$jsonEntity = $serializer->serializeEntity($entity, $group);
        $arrayEntity = json_decode($jsonEntity, true);
        $arrayEntity['dataType'] = $dataType;
		$response = json_encode($arrayEntity);
		return new Update($route, $response, $target);
		// return new Update($route, $response);

	}

	private function defineTarget(UserRepository $userRepository)
	{
		$target = [];
		$agents = $userRepository->findAll();
		foreach ($agents as $agent) {
			if (in_array("ROLE_ADMIN", $agent->getRoles()) || in_array("ROLE_SUPPLIER", $agent->getRoles()) || in_array("ROLE_DELIVERER", $agent->getRoles())) {
				$target[] = 'https://clikeat.re/api/users/'. $agent->getId();
			}
		}
		return $target;
	}
}
