<?php

namespace App\Entity;

use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TvaRepository")
 * @ApiResource(
 *      subresourceOperations={
 *          "api_products_tva_get_subresource"={
 *              "method"="GET",
 *              "normalization_context"={"groups"={"product"}}
 *          }
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
class Tva
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"product", "variant"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=60)
     * @Groups({"product", "variant"})
     */
    private $name;

    /**
     * @ORM\Column(type="float")
     * @Groups({"product", "variant"})
     */
    private $taux;

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

    public function getTaux(): ?float
    {
        return $this->taux;
    }

    public function setTaux(float $taux): self
    {
        $this->taux = $taux;

        return $this;
    }
}
