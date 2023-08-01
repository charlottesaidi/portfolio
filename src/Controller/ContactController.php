<?php

namespace App\Controller;

use App\Entity\Contact;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ContactController extends BaseController
{
    public function __construct(private ValidatorInterface $validator)
    {}
    
    public function index(Request $request): Response
    {
        try {
            $data = json_decode($request->getContent(), true);
            $contact = new Contact();

            $contact->setFirstName($data['contact[first_name]'])
                ->setLastName($data['contact[last_name]'])
                ->setEmail($data['contact[email]'])
                ->setObject($data['contact[object]'])
                ->setMessage($data['contact[message]']);

            $errors = $this->validator->validate($contact);

            if(count($errors) > 0) {
                return $this->json(['error' => $errors]);
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($contact);
            $entityManager->flush();

            return $this->json(['success' => 'Merci, votre message m\'est bien parvenu. Je vous répondrai très bientôt !']);
        } catch (\Exception $e) {
            return $this->json(['error' => $e->getMessage()]);
        }
    }
}