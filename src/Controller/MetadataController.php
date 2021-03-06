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

use App\Entity\Metadata;
use App\Form\MetadataType;
use App\Form\MetadataTypeAdmin;
use App\Repository\MetadataRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;

/**
 * @Route("/metadata")
 */
class MetadataController extends AbstractController
{
    /**
     * index
     * @Route("/", name="metadata_index", methods={"GET"})
     *
     * @param  App\Repository\MetadataRepository $metadataRepository
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function index(MetadataRepository $metadataRepository): Response
    {
        return $this->render('metadata/index.html.twig', [
            'metadata' => $metadataRepository->findAll(),
        ]);
    }

    /**
     * new
     * @Route("/new", name="metadata_new", methods={"GET","POST"})
     *
     * @param  Symfony\Component\HttpFoundation\Request $request
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function new(Request $request): Response
    {
        $metadata = new Metadata();
        $form = $this->createForm(MetadataType::class, $metadata);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($metadata);
            $entityManager->flush();

            return $this->redirectToRoute('metadata_index');
        }

        return $this->render('metadata/new.html.twig', [
            'metadata' => $metadata,
            'form' => $form->createView(),
        ]);
    }

    /**
     * show
     * @Route("/{id}", name="metadata_show", methods={"GET"})
     *
     * @param  App\Entity\Metadata; $metadata
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function show(Metadata $metadata): Response
    {
        return $this->render('metadata/show.html.twig', [
            'metadata' => $metadata,
        ]);
    }

    /**
     * edit
     * @Route("/{id}/edit", name="metadata_edit", methods={"GET","POST"})
     *
     * @param  Symfony\Component\HttpFoundation\Request $request
     * @param  App\Entity\Metadata; $metadata
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function edit(Request $request, Metadata $metadata): Response
    {
        $form = $this->createForm(MetadataType::class, $metadata);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('metadata_index');
        }

        return $this->render('metadata/edit.html.twig', [
            'metadata' => $metadata,
            'form' => $form->createView(),
        ]);
    }

    /**
     * delete
     * @Route("/{id}", name="metadata_delete", methods={"DELETE"})
     *
     * @param  Symfony\Component\HttpFoundation\Request $request
     * @param  App\Entity\Metadata; $metadata
     *
     * @return Symfony\Component\HttpFoundation\Response
     */
    public function delete(Request $request, Metadata $metadata): Response
    {
        if ($this->isCsrfTokenValid('delete'.$metadata->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($metadata);
            $entityManager->flush();
        }

        return $this->redirectToRoute('metadata_index');
    }
}
