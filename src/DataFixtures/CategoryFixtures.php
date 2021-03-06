<?php

namespace App\DataFixtures;

use App\Entity\Category;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;

class CategoryFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
		$categories = array(
			array('name' => 'burger'),
			array('name' => 'boisson'),
			array('name' => 'produit laitier'),
			array('name' => 'legume'),
			array('name' => 'fruits'),
			array('name' => 'plats cuisinés')
		  );

		foreach ( $categories as $key => $value ) {
			$category = new Category();
			$category->setName( $value['name'] );
			$manager->persist($category);
		}
        $manager->flush();
    }
}
