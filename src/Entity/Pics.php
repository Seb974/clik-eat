<?php

namespace App\Entity;

use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PicsRepository")
 * @ApiResource(
 *      attributes={
 *          "normalization_context"={"groups"={"pics"}}
 *      },
 *      subresourceOperations={
 *          "api_products_pics_get_subresource"={
 *              "method"="GET",
 *              "normalization_context"={"groups"={"product"}}
 *          }
 *      },
 *      collectionOperations={
 *         "post"={
 *             "controller"=CreateMediaObjectAction::class,
 *             "deserialize"=false,
 *             "access_control"="is_granted('ROLE_USER')",
 *             "validation_groups"={"Default", "media_object_create"},
 *             "openapi_context"={
 *                 "requestBody"={
 *                     "content"={
 *                         "multipart/form-data"={
 *                             "schema"={
 *                                 "type"="object",
 *                                 "properties"={
 *                                     "file"={
 *                                         "type"="string",
 *                                         "format"="binary"
 *                                     }
 *                                 }
 *                             }
 *                         }
 *                     }
 *                 }
 *             }
 *         },
 *         "get"
 *     },
 *     itemOperations={
 *         "get"
 *     }
 * )
 * @Vich\Uploadable
 */
class Pics
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"product", "variant"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"product", "variant"})
     */
    private $b64;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getB64(): ?string
    {
        return $this->b64;
    }

    public function setB64(string $b64): self
    {
        $this->b64 = $b64;

        return $this;
    }
}
