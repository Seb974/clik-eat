<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\CityRepository")
 * @ApiResource(
 *      attributes={
 *          "pagination_enabled"=false,
 *          "normalization_context"={"groups"={"city"}}
 *      },
  *     collectionOperations={
  *         "get",
  *         "post"={"security"="is_granted('ROLE_ADMIN')"}
  *     },
  *     itemOperations={
  *         "get",
  *         "put"={"security"="is_granted('ROLE_ADMIN')"},
  *         "patch"={"security"="is_granted('ROLE_ADMIN')"},
  *         "delete"={"security"="is_granted('ROLE_ADMIN')"},
  *     }
 * )
 */
class City
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"city"})
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     * @Groups({"city"})
     */
    private $zipCode;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"city"})
     */
    private $name;

    /**
     * @ORM\Column(type="boolean")
     * @Groups({"city"})
     */
    private $isDeliverable;

    /**
     * @ORM\Column(type="time", nullable=true)
     * @Groups({"city"})
     */
    private $deliveryPeriod;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getZipCode(): ?int
    {
        return $this->zipCode;
    }

    public function setZipCode(int $zipCode): self
    {
        $this->zipCode = $zipCode;

        return $this;
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

    public function getIsDeliverable(): ?bool
    {
        return $this->isDeliverable;
    }

    public function setIsDeliverable(bool $isDeliverable): self
    {
        $this->isDeliverable = $isDeliverable;

        return $this;
    }

    public function getDeliveryPeriod(): ?\DateTimeInterface
    {
        return $this->deliveryPeriod;
    }

    public function setDeliveryPeriod(?\DateTimeInterface $deliveryPeriod): self
    {
        $this->deliveryPeriod = $deliveryPeriod;

        return $this;
    }
}
