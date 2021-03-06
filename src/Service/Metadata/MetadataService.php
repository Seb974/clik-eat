<?php

namespace App\Service\Metadata;

use App\Entity\Metadata;
use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;

class MetadataService
{
    protected $entityManager;

    /**
     * __construct
     * @param  Doctrine\ORM\EntityManagerInterface $entityManager
     *
     * @return void
     */
    public function __construct(EntityManagerInterface $entityManager) {
        $this->entityManager = $entityManager;
    }

    /**
     * createMetadata
     * @param  App\Form\MetadataType $form
     * @param  App\Entity\User $user
     *
     * @return void
     */
    public function createMetadata($form, User $user)
    {
        $phone = strval($form->get('phone_number')->getData());
        $billing_line_1 = $form->get('billing_line_1')->getData();
        $billing_line_2 = $form->get('billing_line_2')->getData();
        $billing_city = strval($form->get('billing_city')->getData()->getId());
        $type1 = 'phone_number';
        $type1_billing = 'billing_line_1';
        $type2_billing = 'billing_line_2';
        $type4_billing = 'billing_city';

        $delivery_line_1 = $form->get('delivery_line_1')->getData();
        $delivery_line_2 = $form->get('delivery_line_2')->getData();
        $delivery_city = strval($form->get('delivery_city')->getData()->getId());
        $type1_delivery = 'delivery_line_1';
        $type2_delivery = 'delivery_line_2';
        $type4_delivery = 'delivery_city';

        if ($phone) {
            $this->hydrateNewMetadata($phone, $type1, $user);
        }
        if ($billing_line_1) {
            $this->hydrateNewMetadata($billing_line_1, $type1_billing, $user);
        }
        if ($billing_line_2) {
            $this->hydrateNewMetadata($billing_line_2, $type2_billing, $user);
        }
        if ($billing_city) {
            $this->hydrateNewMetadata($billing_city, $type4_billing, $user);
        }

        if ($delivery_line_1) {
            $this->hydrateNewMetadata($delivery_line_1, $type1_delivery, $user);
        }
        if ($delivery_line_2) {
            $this->hydrateNewMetadata($delivery_line_2, $type2_delivery, $user);
        }
        if ($delivery_city) {
            $this->hydrateNewMetadata($delivery_city, $type4_delivery, $user);
        }
    }

    /**
     * updateMetadata
     * @param  App\Form\MetadataType $form
     * @param  App\Entity\User $user
     *
     * @return void
     */
    public function updateMetadata($form, User $user)
    {
        $phone = strval($form->get('phone_number')->getData());
        $delivery_line_1 = $form->get('delivery_line_1')->getData();
        $delivery_line_2 = $form->get('delivery_line_2')->getData();
        $delivery_city = strval($form->get('delivery_city')->getData()->getId());
        $type1 = 'phone_number';
        $type1_delivery = 'delivery_line_1';
        $type2_delivery = 'delivery_line_2';
        $type4_delivery = 'delivery_city';

        $billing_line_1 = $form->get('billing_line_1')->getData();
        $billing_line_2 = $form->get('billing_line_2')->getData();
        $billing_city = strval($form->get('billing_city')->getData()->getId());
        $type1_billing = 'billing_line_1';
        $type2_billing = 'billing_line_2';
        $type4_billing = 'billing_city';

        $metadata = $user->getMetadata()->unwrap();

        foreach ($metadata as $data) { 
            if ($data->getType() == $type1 && $phone) {
                $data->setField($phone);
            };
            if ($data->getType() == $type1_delivery && $delivery_line_1) {
                $data->setField($delivery_line_1);
            };
            if ($data->getType() == $type2_delivery && $delivery_line_2) {
                $data->setField($delivery_line_2);
            }
            if ($data->getType() == $type4_delivery && $delivery_city) {
                $data->setField($delivery_city);
            };
            if ($data->getType() == $type1_billing && $billing_line_1) {
                $data->setField($billing_line_1);
            };
            if ($data->getType() == $type2_billing && $billing_line_2) {
                $data->setField($billing_line_2);
            }
            if ($data->getType() == $type4_billing && $billing_city) {
                $data->setField($billing_city);
            };
        }
    }
    
    /**
     * hydrateNewMetadata
     * @param  string $field corresponding to the value of a metadata
     * @param  string $type corresponding to the name of the metadata registered into the "field" attribute
     * @param  App\Entity\User $user
     *
     * @return void
     */
    private function hydrateNewMetadata(String $field, String $type, User $user)
    {
        $metadata = new Metadata();
        $metadata->setField($field);
        $metadata->setType($type);
        $this->entityManager->persist($metadata);
        $user->addMetadata($metadata);
        $this->entityManager->flush();
    }

}
