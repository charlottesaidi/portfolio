<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends BaseController
{
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        if ($this->getUser()) {
            return $this->redirectToRoute('target_path');
        }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

//        return $this->render('security/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
        return $this->render('@EasyAdmin/page/login.html.twig', [
            'error' => $error,
            'last_username' => $lastUsername,
            'page_title' => '',
            'csrf_token_intention' => 'authenticate',
            'username_label' => 'Adresse email',
            'password_label' => 'Mot de passe',
            'sign_in_label' => 'Se connecter',
            'username_parameter' => 'email',
            'password_parameter' => 'password',
            'forgot_password_enabled' => true,
            'forgot_password_path' => $this->generateUrl('app_forgot_password_request', ['...' => '...']),
            'forgot_password_label' => 'Mot de passe oublié',
            'remember_me_enabled' => true,
            'remember_me_label' => 'Se souvenir de moi',
        ]);
    }

    public function logout()
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
