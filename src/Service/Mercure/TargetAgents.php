<?php

namespace App\Service\Mercure;

use App\Entity\User;
use App\Repository\UserRepository;

class TargetAgents 
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository) {
        $this->userRepository = $userRepository;
    }

    public function defineTarget()
	{
		$target = [];
		$agents = $this->userRepository->findAll();
		foreach ($agents as $agent) {
			if (in_array("ROLE_ADMIN", $agent->getRoles()) || in_array("ROLE_SUPPLIER", $agent->getRoles()) || in_array("ROLE_DELIVERER", $agent->getRoles())) {
				$target[] = 'https://clikeat.re/api/users/'. $agent->getId();
			}
		}
		return $target;
	}
}