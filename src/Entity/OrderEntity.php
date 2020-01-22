<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\OrderRepository")
 * @ApiResource(
 *      attributes={
 *          "normalization_context"={"groups"={"order"}}
 *      },
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
class OrderEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"order"})
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @Groups({"order"})
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=120, nullable=true)
     * @Groups({"order"})
     */
    private $paymentId;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"order"})
     */
    private $paymentDateTime;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"order"})
     */
    private $totalTTC;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"order"})
     */
    private $totalHT;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"order"})
     */
    private $totalTax;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Item", mappedBy="orderEntity")
     * @Groups({"order"})
     */
    private $items;

    /**
     * @ORM\Column(type="string", length=120, nullable=true)
     * @Groups({"order"})
     */
    private $status;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @Groups({"order"})
     */
    private $deliveryAddress;

    public function __construct()
    {
        $this->items = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getPaymentId(): ?string
    {
        return $this->paymentId;
    }

    public function setPaymentId(?string $paymentId): self
    {
        $this->paymentId = $paymentId;

        return $this;
    }

    public function getPaymentDateTime(): ?\DateTimeInterface
    {
        return $this->paymentDateTime;
    }

    public function setPaymentDateTime(?\DateTimeInterface $paymentDateTime): self
    {
        $this->paymentDateTime = $paymentDateTime;

        return $this;
    }

    public function getTotalTTC(): ?float
    {
        return $this->totalTTC;
    }

    public function setTotalTTC(?float $totalTTC): self
    {
        $this->totalTTC = $totalTTC;

        return $this;
    }

    public function getTotalHT(): ?float
    {
        return $this->totalHT;
    }

    public function setTotalHT(?float $totalHT): self
    {
        $this->totalHT = $totalHT;

        return $this;
    }

    public function getTotalTax(): ?float
    {
        return $this->totalTax;
    }

    public function setTotalTax(?float $totalTax): self
    {
        $this->totalTax = $totalTax;

        return $this;
    }

    /**
     * @return Collection|Item[]
     */
    public function getItems(): Collection
    {
        return $this->items;
    }

    public function addItem(Item $item): self
    {
        if (!$this->items->contains($item)) {
            $this->items[] = $item;
            $item->setOrderEntity($this);
        }

        return $this;
    }

    public function removeItem(Item $item): self
    {
        if ($this->items->contains($item)) {
            $this->items->removeElement($item);
            if ($item->getOrderEntity() === $this) {
                $item->setOrderEntity(null);
            }
        }
        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getDeliveryAddress(): ?string
    {
        return $this->deliveryAddress;
    }

    public function setDeliveryAddress(?string $deliveryAddress): self
    {
        $this->deliveryAddress = $deliveryAddress;

        return $this;
    }
}
