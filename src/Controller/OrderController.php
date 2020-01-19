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

use App\Entity\Orders;
use App\Repository\OrdersRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/order")
 */
class OrderController extends AbstractController
{
    /**
     * getOrdersToPrepare
     * @Route("/preparations", name="get_order", methods={"GET"})
     * @param  App\Repository\OrdersRepository $ordersRepository
     * @return void
     */
    public function getOrdersToPrepare(OrdersRepository $ordersRepository)
    {
        $user = $this->getUser();
        $greaterRole = (in_array('ROLE_ADMIN', $user->getRoles())) ? 'ROLE_ADMIN' : 'ROLE_SUPPLIER';
        if ($greaterRole === 'ROLE_ADMIN') {
            $orders = $ordersRepository->findBy(['orderStatus' => 'ON_PREPARE']);
        }
        else {
            if ( $user->getSupplier() ) {
                $orders = $ordersRepository->findBy(['orderStatus' => 'ON_PREPARE', 'supplier' => $user->getSupplier()]);
            } else {
                $orders =  new orders();
            }
        }
        return $this->render('order/index.html.twig', [
            'orders' => $orders,
        ]);
    }

    /**
     * getOrdersToDeliver
     * @Route("/deliveries", name="get_deliveries", methods={"GET"})
     * @param  App\Repository\OrdersRepository $ordersRepository
     * @return void
     */
    public function getOrdersToDeliver(OrdersRepository $ordersRepository)
    {
        $user = $this->getUser();
        $orders = $ordersRepository->findBy(['orderStatus' => 'FOR_DELIVERY']);

        return $this->render('order/index.html.twig', [
            'orders' => $orders,
        ]);
    }
}
