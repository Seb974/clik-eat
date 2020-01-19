<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ItemRepository")
 * @ApiResource(
 *      attributes={
 *          "normalization_context"={"groups"={"item"}}
 *      },
 *      subresourceOperations={
 *          "api_orders_item_get_subresource"={
 *              "method"="GET",
 *              "normalization_context"={"groups"={"order"}}
 *          }
 *     },
  *     collectionOperations={
  *         "get"={"security"="is_granted('ROLE_ADMIN')"},
  *         "post"
  *     },
  *     itemOperations={
  *         "get"={"security"="is_granted('ROLE_ADMIN')"},
  *         "put"={"security"="is_granted('ROLE_ADMIN')"},
  *         "patch"={"security"="is_granted('ROLE_ADMIN')"},
  *         "delete"={"security"="is_granted('ROLE_ADMIN')"},
  *     }
 * )
 */
class Item
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"item", "order"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Variant")
     * @Groups({"item", "order"})
     */
    private $variant;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups({"item", "order"})
     */
    private $quantity;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\OrderEntity", inversedBy="items")
     * @Groups({"item"})
     */
    private $orderEntity;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getVariant(): ?Variant
    {
        return $this->variant;
    }

    public function setVariant(?Variant $variant): self
    {
        $this->variant = $variant;

        return $this;
    }

    public function getQuantity(): ?int
    {
        return $this->quantity;
    }

    public function setQuantity(?int $quantity): self
    {
        $this->quantity = $quantity;

        return $this;
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
}
