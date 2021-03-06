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

use App\Entity\Stock;
use App\Entity\Product;
use App\Form\StockType;
use App\Repository\StockRepository;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @IsGranted("ROLE_SUPPLIER", message="No access! Get out!")
 *
 * @Route("/stock")
 */
class StockController extends AbstractController
{
    /**
     * index
     * @Route("/", name="stock_index", methods={"GET"})
     * @param  App\Repository\StockRepository $stockRepository
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function index(StockRepository $stockRepository): Response
    {
        $user = $this->getUser();
        $greaterRole = (in_array('ROLE_ADMIN', $user->getRoles())) ? 'ROLE_ADMIN' : 'ROLE_SUPPLIER';
        $allStock = $stockRepository->findAll();

        if ($greaterRole === 'ROLE_ADMIN') {
            return $this->render('stock/index.html.twig', [
                'stocks' => $allStock,
            ]);
        } else {
            $supplierStock = [];

            foreach ($allStock as $detailStock) {
                if ($detailStock->getProduct()->getProduct()->getSupplier()->getId() == $user->getSupplier()->getId()) {
                    array_push($supplierStock, $detailStock);
                }
            }

            return $this->render('stock/index.html.twig', [
                'stocks' => $supplierStock,
            ]);
        }
    }

    /**
     * new
     * @Route("/new", name="stock_new", methods={"GET","POST"})
     * @param  Symfony\Component\HttpFoundation\Request $request
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function new(Request $request): Response
    {
        $stock = new Stock();
        $form = $this->createForm(StockType::class, $stock);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($stock);
            $entityManager->flush();

            return $this->redirectToRoute('stock_index');
        }

        return $this->render('stock/new.html.twig', [
            'stock' => $stock,
            'form' => $form->createView(),
        ]);
    }

    /**
     * show
     * @Route("/{id}", name="stock_show", methods={"GET"})
     * @param  App\Entity\Stock $stock
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function show(Stock $stock): Response
    {
        return $this->render('stock/show.html.twig', [
            'stock' => $stock,
        ]);
    }

    /**
     * edit
     * @Route("/{id}/edit", name="stock_edit", methods={"GET","POST"})
     * @param  Symfony\Component\HttpFoundation\Request $request
     * @param  App\Entity\Stock $stock
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function edit(Request $request, Stock $stock): Response
    {
        $form = $this->createForm(StockType::class, $stock);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('stock_index');
        }

        return $this->render('stock/edit.html.twig', [
            'stock' => $stock,
            'form' => $form->createView(),
        ]);
    }


    /**
     * editStock
     * @Route("/{id}/editstock", name="stock_update", methods={"GET","POST"})
     * @param  Symfony\Component\HttpFoundation\Request $request
     * @param  App\Entity\Stock $stock
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function editStock(Request $request, Stock $stock): Response
    {
        $newQty = (int) $request->request->get($stock->getId());
        $stock->setQuantity($newQty);
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->persist($stock);
        $entityManager->flush();
        return $this->redirectToRoute('stock_index');
    }

    /**
     * delete
     * @Route("/{id}", name="stock_delete", methods={"DELETE"})
     * @param  Symfony\Component\HttpFoundation\Request $request
     * @param  App\Entity\Stock $stock
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function delete(Request $request, Stock $stock): Response
    {
        if ($this->isCsrfTokenValid('delete'.$stock->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($stock);
            $entityManager->flush();
        }

        return $this->redirectToRoute('stock_index');
    }
}
