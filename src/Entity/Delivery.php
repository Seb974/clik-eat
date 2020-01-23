<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\DeliveryRepository")
 * @ApiResource(
 * attributes={
 *          "normalization_context"={"groups"={"delivery"}}
 *      },
 *      subresourceOperations={
 *          "api_orderEntities_delivery_get_subresource"={
 *              "method"="GET",
 *              "normalization_context"={"groups"={"order"}}
 *          }
 *     },
  *     collectionOperations={
  *         "get"={"security"="is_granted('ROLE_SUPPLIER') or is_granted('ROLE_DELIVERER')"},
  *         "post"
  *     },
  *     itemOperations={
  *         "get"={"security"="is_granted('ROLE_SUPPLIER') or is_granted('ROLE_DELIVERER')"},
  *         "put"={"security"="is_granted('ROLE_SUPPLIER') or is_granted('ROLE_DELIVERER')"},
  *         "patch"={"security"="is_granted('ROLE_SUPPLIER') or is_granted('ROLE_DELIVERER')"},
  *         "delete"={"security"="is_granted('ROLE_ADMIN')"},
  *     }
 * )
 */
class Delivery
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"delivery", "order"})
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\OrderEntity", inversedBy="delivery", cascade={"persist", "remove"})
     * @Groups({"delivery"})
     */
    private $orderEntity;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @Groups({"delivery", "order"})
     */
    private $deliverer;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderEntity(): ?OrderEntity
    {
        return $this->orderEntity;
    }

    public function setOrderEntity(?OrderEntity $orderEntity): self
    {
        $this->orderEntity = $orderEntity;

        return $this;
    }

    public function getDeliverer(): ?User
    {
        return $this->deliverer;
    }

    public function setDeliverer(?User $deliverer): self
    {
        $this->deliverer = $deliverer;

        return $this;
    }
}
