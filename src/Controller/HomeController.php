<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use App\Service\Cart\CartService;
use App\Repository\VariantRepository;
use App\Repository\ProductRepository;
use App\Entity\Product;
use App\Entity\User;
use App\Mercure\JwtProvider;
use App\Service\Serializer\SerializerService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Mercure\Publisher;
use Symfony\Component\Mercure\Update;
use Symfony\Component\Messenger\MessageBusInterface;
use App\Service\Mercure\MercureCookieGenerator;

/**
 * This controller is about homepage
 */
class HomeController extends AbstractController
{
    /**
     * Page d'accueil du site donnant une vue globale de tous les produits et leur variantes.
     * @Route("/bois", name="index")
     *
     * @param  App\Repository\ProductRepository $productRepository
     * @param  Symfony\Component\HttpFoundation\Request $request
     * @param  App\Service\Cart\CartService $cartService
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function index( ProductRepository $productRepository, Request $request , CartService $cartService): Response
    {
        $user = $this->getUser();
        if ($user) {
            if ($user->getCart() && empty($cartService->getCart())) {
                $cartService->generateCartSession($user->getCart());
            }
        }

		$cart_items = $request->getSession()->get('cart', []);
		$cart_count = 0;
		foreach ( $cart_items as $id => $qty) {
			$cart_count += $qty;
		}

        return $this->render('home/index.html.twig', [
			'controller_name' => 'HomeController',
			'products'        => $productRepository->findAll(),
			'cart'            => $cart_count
        ]);
    }

    /**
     * @Route("/", name="index_api")
     */
    public function __invoke(MercureCookieGenerator $cookieGenerator)
    {
        $response = $this->render('base.html.twig');
        $response->headers->setCookie($cookieGenerator->generate());
        return $response;
    }
}
