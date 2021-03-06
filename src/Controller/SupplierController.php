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

use App\Entity\Supplier;
use App\Form\SupplierType;
use App\Repository\SupplierRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/supplier")
 */
class SupplierController extends AbstractController
{
    /**
     * index
     * @Route("/", name="supplier_index", methods={"GET"})
     * @param  App\Repository\SupplierRepository $supplierRepository
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function index(SupplierRepository $supplierRepository): Response
    {
        return $this->render('supplier/index.html.twig', [
            'suppliers' => $supplierRepository->findAll(),
        ]);
    }

    /**
     * new
     * @Route("/new", name="supplier_new", methods={"GET","POST"})
     * @param  Symfony\Component\HttpFoundation\Request $request
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function new(Request $request): Response
    {
        $supplier = new Supplier();
        $form = $this->createForm(SupplierType::class, $supplier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $users = $form->get('users')->getData();
            $products = $form->get('products')->getData();
            foreach($users as $user) {
                $user->setSupplier($supplier);
                if ( !in_array('ROLE_ADMIN', $user->getRoles()) && !in_array('ROLE_SUPPLIER', $user->getRoles()) ) {
                    $user->setRoles(["ROLE_SUPPLIER"]);
                }
            }
            if ($products) {
                foreach($products as $product) {
                    $product->setSupplier($supplier);
                }
            }
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($supplier);
            $entityManager->flush();

            return $this->redirectToRoute('supplier_index');
        }

        return $this->render('supplier/new.html.twig', [
            'supplier' => $supplier,
            'form' => $form->createView(),
        ]);
    }

    /**
     * show
     * @Route("/{id}", name="supplier_show", methods={"GET"})
     * @param  App\Entity\Supplier $supplier
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function show(Supplier $supplier): Response
    {
        return $this->render('supplier/show.html.twig', [
            'supplier' => $supplier,
        ]);
    }

    /**
     * edit
     * @Route("/{id}/edit", name="supplier_edit", methods={"GET","POST"})
     * @param  Symfony\Component\HttpFoundation\Request $request
     * @param  App\Entity\Supplier $supplier
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function edit(Request $request, Supplier $supplier): Response
    {
        $form = $this->createForm(SupplierType::class, $supplier);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('supplier_index');
        }

        return $this->render('supplier/edit.html.twig', [
            'supplier' => $supplier,
            'form' => $form->createView(),
        ]);
    }

    /**
     * delete
     * @Route("/{id}", name="supplier_delete", methods={"DELETE"})
     * @param  Symfony\Component\HttpFoundation\Request $request
     * @param  App\Entity\Supplier $supplier
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function delete(Request $request, Supplier $supplier): Response
    {
        if ($this->isCsrfTokenValid('delete'.$supplier->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($supplier);
            $entityManager->flush();
        }

        return $this->redirectToRoute('supplier_index');
    }
}
