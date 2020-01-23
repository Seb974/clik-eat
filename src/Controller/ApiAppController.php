<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\OrderEntity;
use App\Entity\Delivery;
use App\Service\Mercure\TargetAgents;
use App\Repository\VariantRepository;
use App\Service\JSONRequest\JsonRequestService;
use App\Service\Serializer\SerializerService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Messenger\MessageBusInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

/**
 * @Route("/app")
 */
class ApiAppController extends AbstractController
{
    /**
     * @Route("/stock/update", name="hub_stock_update", methods={"POST"})
     */
    public function updateStock(Request $request, MessageBusInterface $bus, VariantRepository $variantRepository, SerializerService $serializerService, SerializerInterface $serializer)
    {
        if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
            $data = json_decode($request->getContent(), true);
            $request->request->replace(is_array($data) ? $data : array());
        }
        $article = $variantRepository->find($request->request->get("id"));
        if ($request->request->get("action") === 'DECREASE_PRODUCT_STOCK') {
            $newQty = $article->getStock()->getQuantity() - $request->request->get("quantity");
            $newQty > 0 ? $article->getStock()->setQuantity($newQty): $article->getStock()->setQuantity(0);
        } elseif ($request->request->get("action") === 'INCREASE_PRODUCT_STOCK') {
            $article->getStock()->setQuantity( $article->getStock()->getQuantity() + $request->request->get("quantity") );
        } else {
            $article->getStock()->setQuantity( $request->request->get("quantity") );
        }
        $this->getDoctrine()->getManager()->flush();
        $jsonArticle = $serializerService->serializeEntity($article, 'variant');
        $arrayResponse = json_decode($jsonArticle, true);
        $arrayResponse['dataType'] = "stock-update";
        $response = json_encode($arrayResponse);
        $update = new Update("stock/update", $response);
        $bus->dispatch($update);
	    return JsonResponse::fromJsonString($response);
    }

    /**
     * @Route("/order/{id}/deliverer/{user_id}", name="hub_set_deliverer", methods={"GET"})
     * @ParamConverter("user", options={"id" = "user_id"})
     */
    public function setDelivererToOrder(OrderEntity $order, User $user, MessageBusInterface $bus, SerializerService $serializerService, SerializerInterface $serializer, TargetAgents $targetService)
    {
        $delivery = new Delivery();
        $delivery->setDeliverer($user);
        $em = $this->getDoctrine()->getManager();
        $em->persist($delivery);
        $order->setDelivery($delivery);
        $em->flush();
        
        $target = $targetService->defineTarget();
		$jsonEntity = $serializerService->serializeEntity($order, 'order');
        $arrayEntity = json_decode($jsonEntity, true);
        $arrayEntity['dataType'] = 'order-set-deliverer';
		$response = json_encode($arrayEntity);
        $update = new Update('order/update', $response, $target);
        $bus->dispatch($update);
        return JsonResponse::fromJsonString($response);
    }

    /**
     * @Route("/order/{id}/update", name="hub_update_order", methods={"POST"})
     */
    public function updateStatusOrder(OrderEntity $order, Request $request, MessageBusInterface $bus, SerializerService $serializerService, SerializerInterface $serializer, TargetAgents $targetService)
    {
        if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
            $data = json_decode($request->getContent(), true);
            $request->request->replace(is_array($data) ? $data : array());
        }

        $order->setStatus($request->request->get('status'));
        $this->getDoctrine()->getManager()->flush();
        
        $target = $targetService->defineTarget();
		$jsonEntity = $serializerService->serializeEntity($order, 'order');
        $arrayEntity = json_decode($jsonEntity, true);
        $arrayEntity['dataType'] = $request->request->get('dataType');
		$response = json_encode($arrayEntity);
        $update = new Update('order/update', $response, $target);
        $bus->dispatch($update);
        return JsonResponse::fromJsonString($response);
    }

    /**
     * @Route("/error", name="error_action", methods={"GET","POST"})
     */
    public function errorAction(): RedirectResponse
    {
        return $this->redirectToRoute('index_api');
    }

}
