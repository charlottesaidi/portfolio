<?php

namespace App\Entity;

use App\Repository\ContactRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert ;

/**
 * @ORM\Table(name="portfolio_contact")
 * @ORM\Entity(repositoryClass=ContactRepository::class)
 */
class Contact
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Assert\NotBlank
     * @Assert\Regex("/^\w+/")
     * @Assert\Email(
     *    message = "Renseignez une adresse e-mail valide"
     * )
     * @ORM\Column(type="string", length=255)
     */
    private $email;

    /**
     * @Assert\NotBlank
     * @Assert\Regex("/^\w+/")
     * @ORM\Column(type="string", length=255)
     */
    private $first_name;

    /**
     * @Assert\NotBlank
     * @Assert\Regex("/^\w+/")
     * @ORM\Column(type="string", length=255)
     */
    private $last_name;

    /**
     * @Assert\Regex("/^\w+/")
     * @ORM\Column(type="string", length=255)
     */
    private $object;

    /**
     * @Assert\NotBlank
     * @Assert\Regex("/^\w+/")
     * @ORM\Column(type="text")
     */
    private $message;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="boolean")
     */
    private $unread = true;

    /**
     * @ORM\OneToMany(targetEntity=Answer::class, mappedBy="contact_answer")
     */
    private $admin_answer;

    public function __construct()
    {
        $this->created_at = new \DateTime();
        $this->admin_answer = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getFirstName(): ?string
    {
        return $this->first_name;
    }

    public function setFirstName(string $first_name): self
    {
        $this->first_name = $first_name;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->last_name;
    }

    public function setLastName(string $last_name): self
    {
        $this->last_name = $last_name;

        return $this;
    }

    public function getObject(): ?string
    {
        return $this->object;
    }

    public function setObject(string $object): self
    {
        $this->object = $object;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getUnread(): ?bool
    {
        return $this->unread;
    }

    public function setUnread(bool $unread): self
    {
        $this->unread = $unread;

        return $this;
    }

    /**
     * @return Collection|Answer[]
     */
    public function getAdminAnswer(): Collection
    {
        return $this->admin_answer;
    }

    public function addAdminAnswer(Answer $adminAnswer): self
    {
        if (!$this->admin_answer->contains($adminAnswer)) {
            $this->admin_answer[] = $adminAnswer;
            $adminAnswer->setContactAnswer($this);
        }

        return $this;
    }

    public function removeAdminAnswer(Answer $adminAnswer): self
    {
        if ($this->admin_answer->removeElement($adminAnswer)) {
            // set the owning side to null (unless already changed)
            if ($adminAnswer->getContactAnswer() === $this) {
                $adminAnswer->setContactAnswer(null);
            }
        }

        return $this;
    }
}
