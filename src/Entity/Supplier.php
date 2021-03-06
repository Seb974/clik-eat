<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SupplierRepository")
 * @ApiResource(
 *    attributes={
 *          "security"="is_granted('ROLE_SUPPLIER')",
 *          "normalization_context"={"groups"={"supplier"}}
 *     },
 *    subresourceOperations={
 *          "api_products_supplier_get_subresource"={
 *              "method"="GET",
 *              "normalization_context"={"groups"={"product", "order"}}
 *          },
 *          "api_users_supplier_get_subresource"={
 *              "method"="GET",
 *              "normalization_context"={"groups"={"user"}}
 *          }
 *     },
  *     collectionOperations={
  *         "get"={"security"="is_granted('ROLE_SUPPLIER')"},
  *         "post"={"security"="is_granted('ROLE_ADMIN')"}
  *     },
  *     itemOperations={
  *         "get"={"security"="is_granted('ROLE_SUPPLIER') or user in object.users"},
  *         "put"={"security"="is_granted('ROLE_ADMIN') or user in object.users"},
  *         "patch"={"security"="is_granted('ROLE_ADMIN') or user in object.users"},
  *         "delete"={"security"="is_granted('ROLE_ADMIN')"},
  *     }
 * )
 */
class Supplier
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"product", "supplier", "user", "order"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=120)
     * @Groups({"product", "supplier", "user", "order"})
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\User", mappedBy="supplier")
     * @Groups({"supplier"})
     * @ApiSubresource
     */
    private $users;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Product", mappedBy="supplier")
     * @Groups({"supplier"})
     */
    private $products;

    /**
     * @ORM\Column(type="text")
     * @Groups({"supplier"})
     */
    private $address;

    /**
     * @ORM\Column(type="time")
     * @Groups({"product", "supplier", "order", "user"})
     */
    private $preparationPeriod;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     * @Groups({"supplier"})
     */
    private $gps;

    public function __construct()
    {
        $this->users = new ArrayCollection();
        $this->products = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|User[]
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addUser(User $user): self
    {
        if (!$this->users->contains($user)) {
            $this->users[] = $user;
            $user->setSupplier($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->users->contains($user)) {
            $this->users->removeElement($user);
            // set the owning side to null (unless already changed)
            if ($user->getSupplier() === $this) {
                $user->setSupplier(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Product[]
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->setSuppliers($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->contains($product)) {
            $this->products->removeElement($product);
            // set the owning side to null (unless already changed)
            if ($product->getSuppliers() === $this) {
                $product->setSuppliers(null);
            }
        }

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(string $address): self
    {
        $this->address = $address;

        return $this;
    }

    public function getPreparationPeriod(): ?\DateTimeInterface
    {
        return $this->preparationPeriod;
    }

    public function setPreparationPeriod(\DateTimeInterface $preparationPeriod): self
    {
        $this->preparationPeriod = $preparationPeriod;

        return $this;
    }

    public function getGps(): ?string
    {
        return $this->gps;
    }

    public function setGps(?string $gps): self
    {
        $this->gps = $gps;

        return $this;
    }
}
