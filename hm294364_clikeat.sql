-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  mer. 06 nov. 2019 à 11:30
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `ap_hero`
--

-- --------------------------------------------------------

--
-- Structure de la table `allergen`
--

CREATE TABLE `allergen` (
  `id` int(11) NOT NULL,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `allergen`
--

INSERT INTO `allergen` (`id`, `name`) VALUES
(1, 'anhydride sulfureux et sulfites'),
(2, 'arachides'),
(3, 'crustacés'),
(4, 'gluten'),
(5, 'oeufs'),
(6, 'poissons'),
(7, 'soja'),
(8, 'lait'),
(9, 'fruits à coques'),
(10, 'céleri'),
(11, 'moutarde'),
(12, 'graines de sésame'),
(13, 'lupin'),
(14, 'mollusques');

-- --------------------------------------------------------

--
-- Structure de la table `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `total_to_pay` double NOT NULL,
  `is_validated` tinyint(1) NOT NULL,
  `total_tax` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `cart`
--

INSERT INTO `cart` (`id`, `user_id`, `total_to_pay`, `is_validated`, `total_tax`) VALUES
(1, 10, 0, 0, 0),
(2, 11, 0, 0, 0),
(3, 12, 19, 0, 0.399);

-- --------------------------------------------------------

--
-- Structure de la table `cart_item`
--

CREATE TABLE `cart_item` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `cart_id` int(11) DEFAULT NULL,
  `orders_id` int(11) DEFAULT NULL,
  `quantity` double NOT NULL,
  `is_paid` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `cart_item`
--

INSERT INTO `cart_item` (`id`, `product_id`, `cart_id`, `orders_id`, `quantity`, `is_paid`) VALUES
(1, 4, 1, NULL, 1, 1),
(2, 7, 1, NULL, 1, 1),
(3, 1, 1, NULL, 1, 1),
(4, 12, 2, NULL, 1, 1),
(5, 15, 2, NULL, 1, 1),
(6, 7, 3, NULL, 1, 0),
(7, 8, 3, NULL, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `category`
--

INSERT INTO `category` (`id`, `name`) VALUES
(1, 'burger'),
(2, 'boisson'),
(3, 'produit laitier'),
(4, 'legume'),
(5, 'fruits'),
(6, 'plats cuisinés');

-- --------------------------------------------------------

--
-- Structure de la table `city`
--

CREATE TABLE `city` (
  `id` int(11) NOT NULL,
  `zip_code` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_deliverable` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `city`
--

INSERT INTO `city` (`id`, `zip_code`, `name`, `is_deliverable`) VALUES
(1, 97440, 'ST ANDRE', 0),
(2, 97429, 'PETITE ILE', 0),
(3, 97460, 'ST PAUL', 0),
(4, 97430, 'LE TAMPON', 1),
(5, 97412, 'BRAS PANON', 0),
(6, 97438, 'STE MARIE', 0),
(7, 97417, 'ST DENIS', 0),
(8, 97480, 'ST JOSEPH', 0),
(9, 97435, 'ST PAUL', 0),
(10, 97433, 'SALAZIE', 0),
(11, 97425, 'LES AVIRONS', 1),
(12, 97470, 'ST BENOIT', 0),
(13, 97400, 'ST DENIS', 0),
(14, 97432, 'ST PIERRE', 1),
(15, 97410, 'ST PIERRE', 1),
(16, 97437, 'ST BENOIT', 0),
(17, 97490, 'ST DENIS', 0),
(18, 97419, 'LA POSSESSION', 0),
(19, 97434, 'ST PAUL', 0),
(20, 97442, 'ST PHILIPPE', 0),
(21, 97420, 'LE PORT', 0),
(22, 97411, 'ST PAUL', 0),
(23, 97413, 'CILAOS', 0),
(24, 97421, 'ST LOUIS', 1),
(25, 97431, 'LA PLAINE DES PALMISTES', 0),
(26, 97439, 'STE ROSE', 0),
(27, 97418, 'LE TAMPON', 1),
(28, 97436, 'ST LEU', 0),
(29, 97423, 'ST PAUL', 0),
(30, 97424, 'ST LEU', 0),
(31, 97416, 'ST LEU', 0),
(32, 97450, 'ST LOUIS', 0),
(33, 97414, 'ENTRE DEUX', 1),
(34, 97426, 'LES TROIS BASSINS', 0),
(35, 97422, 'ST PAUL', 0),
(36, 97427, 'L ETANG SALE', 0),
(37, 97441, 'STE SUZANNE', 0);

-- --------------------------------------------------------

--
-- Structure de la table `cron_job`
--

CREATE TABLE `cron_job` (
  `id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `command` varchar(1024) COLLATE utf8mb4_unicode_ci NOT NULL,
  `schedule` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `cron_report`
--

CREATE TABLE `cron_report` (
  `id` int(11) NOT NULL,
  `job_id` int(11) DEFAULT NULL,
  `run_at` datetime NOT NULL,
  `run_time` double NOT NULL,
  `exit_code` int(11) NOT NULL,
  `output` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `greeting`
--

CREATE TABLE `greeting` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `metadata`
--

CREATE TABLE `metadata` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `field` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `metadata`
--

INSERT INTO `metadata` (`id`, `user_id`, `type`, `field`) VALUES
(1, 1, 'phone_number', '0692406298'),
(2, 1, 'billing_line_1', '8 Chemin Savignan, Saint-Louis, La Réunion, France'),
(3, 1, 'billing_line_2', 'Le Ouaki, La Rivière Saint Louis'),
(4, 1, 'billing_city', '97421'),
(5, 1, 'delivery_line_1', '8 Chemin Savignan, Saint-Louis, La Réunion, France'),
(6, 1, 'delivery_line_2', 'Le Ouaki, La Rivière Saint Louis'),
(7, 1, 'delivery_city', '97421'),
(8, 11, 'phone_number', '692406298'),
(9, 11, 'billing_line_1', '19 chemin Raphaël'),
(10, 11, 'billing_line_2', 'Ligne Paradis'),
(11, 11, 'billing_city', '97410'),
(12, 11, 'delivery_line_1', '19 chemin Raphaël'),
(13, 11, 'delivery_line_2', 'Ligne Paradis'),
(14, 11, 'delivery_city', '97410'),
(15, 12, 'phone_number', '692406298'),
(16, 12, 'billing_line_1', '8 chemin Savignan'),
(17, 12, 'billing_line_2', 'Le Ouaki'),
(18, 12, 'billing_city', '97421'),
(19, 12, 'delivery_line_1', '8 chemin Savignan'),
(20, 12, 'delivery_line_2', 'Le Ouaki'),
(21, 12, 'delivery_city', '97421'),
(22, 8, 'phone_number', '0692371944'),
(23, 8, 'delivery_line_1', '5 Chemin Graviter, Saint-Louis, La Réunion, France'),
(24, 8, 'delivery_line_2', 'Le Ouaki'),
(25, 8, 'delivery_city', '97421'),
(26, 8, 'billing_line_1', '5 bis, chemin Graviter'),
(27, 8, 'billing_line_2', 'Le Ouaki'),
(28, 8, 'billing_city', '97421'),
(29, 8, 'delivery_gps', '-21.2803,55.4491'),
(32, 1, 'delivery_gps', '-21.2738,55.4447');

-- --------------------------------------------------------

--
-- Structure de la table `migration_versions`
--

CREATE TABLE `migration_versions` (
  `version` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
  `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migration_versions`
--

INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
('20191009164413', '2019-10-10 06:02:12');

-- --------------------------------------------------------

--
-- Structure de la table `nutritionals`
--

CREATE TABLE `nutritionals` (
  `id` int(11) NOT NULL,
  `k_j` double DEFAULT NULL,
  `k_cal` double DEFAULT NULL,
  `protein` double DEFAULT NULL,
  `carbohydrates` double DEFAULT NULL,
  `sugar` double DEFAULT NULL,
  `fat` double DEFAULT NULL,
  `trans_ag` double DEFAULT NULL,
  `salt` double DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `nutritionals`
--

INSERT INTO `nutritionals` (`id`, `k_j`, `k_cal`, `protein`, `carbohydrates`, `sugar`, `fat`, `trans_ag`, `salt`) VALUES
(1, 28, 45, 75, 3, 74, 8, 100, 74),
(2, 87, 3, 62, 78, 90, 19, 71, 10),
(3, 27, 33, 20, 18, 18, 94, 52, 48),
(4, 9, 51, 46, 89, 69, 20, 57, 8),
(5, 100, 8, 58, 42, 76, 60, 44, 67),
(6, 61, 47, 83, 63, 50, 47, 29, 32),
(7, 72, 64, 28, 76, 91, 27, 3, 57),
(8, 44, 1, 4, 11, 64, 28, 21, 94),
(9, 7, 77, 5, 80, 53, 43, 62, 61),
(10, 98, 40, 65, 1, 72, 23, 92, 54),
(11, 14, 25, 49, 3, 100, 22, 27, 98),
(12, 62, 65, 86, 62, 48, 3, 58, 73),
(13, 98, 76, 2, 31, 78, 4, 57, 64),
(14, 31, 99, 9, 62, 64, 71, 28, 41),
(15, 31, 17, 46, 22, 86, 90, 74, 20),
(16, 64, 53, 93, 52, 13, 25, 62, 58),
(17, 92, 79, 37, 76, 89, 83, 74, 99),
(18, 6, 18, 3, 84, 39, 67, 60, 47),
(19, 25, 37, 43, 59, 0, 12, 5, 35),
(20, 42, 49, 4, 72, 74, 93, 84, 41),
(21, 67, 41, 59, 56, 53, 33, 11, 10),
(22, 52, 5, 1, 62, 94, 68, 5, 50),
(23, 45, 71, 95, 76, 11, 27, 57, 59),
(24, 54, 79, 84, 42, 97, 47, 42, 92),
(25, 86, 99, 23, 33, 56, 65, 82, 84),
(26, 1200, 300, 32, 16, 8, 12, 1.5, 0.9),
(27, 799.6, 199.9, 22, 11.1, 4.1, 7.5, 1.2, 0.89),
(28, 536.8, 134.2, 18, 7, 1.8, 3.8, 0.9, 1.1),
(29, 913.2, 228.3, 17.3, 19.3, 11.4, 9.1, 3.4, 1.1),
(30, 697.2, 174.3, 12, 11.1, 10, 9.1, 8, 1.5),
(31, 321.6, 80.4, 0.3, 18, 17.8, 0.8, 0.03, 0.045),
(32, 1126, 281.5, 21.4, 16.8, 9.3, 14.3, 4.6, 1.04),
(33, 1396, 349, 31.5, 22, 11, 15, 4.8, 1.3);

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `cart_item_id` int(11) NOT NULL,
  `supplier_id` int(11) NOT NULL,
  `payment_id` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payment_type` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_to_pay_ttc` double NOT NULL,
  `total_to_pay_ht` double NOT NULL,
  `total_tax` double NOT NULL,
  `order_status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tax_rate` double NOT NULL,
  `internal_id` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cart_id` int(11) NOT NULL,
  `pay_date_time` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `orders`
--

INSERT INTO `orders` (`id`, `user_id`, `cart_item_id`, `supplier_id`, `payment_id`, `payment_type`, `total_to_pay_ttc`, `total_to_pay_ht`, `total_tax`, `order_status`, `tax_rate`, `internal_id`, `cart_id`, `pay_date_time`) VALUES
(1, 10, 1, 2, 'pay_joA0XzpNozkr7IrF539wp', 'payplug', 19, 17.511520737327, 19, 'ON_PREPARE', 0.085, 'sebastien.apero974@gmail.com5d9f2f847322c', 1, '2019-10-10 15:19:47'),
(2, 10, 2, 1, 'pay_joA0XzpNozkr7IrF539wp', 'payplug', 7, 6.8560235063663, 7, 'ON_PREPARE', 0.021, 'sebastien.apero974@gmail.com5d9f2f847322c', 1, '2019-10-10 15:19:47'),
(3, 10, 3, 3, 'pay_joA0XzpNozkr7IrF539wp', 'payplug', 7, 6.8560235063663, 7, 'ON_PREPARE', 0.021, 'sebastien.apero974@gmail.com5d9f2f847322c', 1, '2019-10-10 15:19:47'),
(4, 11, 4, 3, 'pay_39rTOGP63xdwmEWuMuAWJd', 'payplug', 21, 20.568070519099, 21, 'ON_PREPARE', 0.021, 'sebastien351@hotmail.com5d9f308d1238f', 2, '2019-10-10 15:22:43'),
(5, 11, 5, 1, 'pay_39rTOGP63xdwmEWuMuAWJd', 'payplug', 4, 3.9177277179236, 4, 'ON_PREPARE', 0.021, 'sebastien351@hotmail.com5d9f308d1238f', 2, '2019-10-10 15:22:43'),
(6, 12, 6, 1, 'pay_6IUXioOrKVoUWcQW2v3pn3', 'payplug', 7, 6.8560235063663, 7, 'PENDING', 0.021, 'sebastien.apero974@gmail.com5dbb982697a27', 3, NULL),
(7, 12, 7, 1, 'pay_6IUXioOrKVoUWcQW2v3pn3', 'payplug', 12, 11.753183153771, 12, 'PENDING', 0.021, 'sebastien.apero974@gmail.com5dbb982697a27', 3, NULL);

-- --------------------------------------------------------

--
-- Structure de la table `pics`
--

CREATE TABLE `pics` (
  `id` int(11) NOT NULL,
  `b64` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `pics`
--

INSERT INTO `pics` (`id`, `b64`) VALUES
(1, 'banane-5d9f14d394623.jpeg'),
(2, 'laitue-5d9f1722b7079.jpeg'),
(3, 'tomates-5d9f1e79d3497.jpeg'),
(4, 'laitue-5d9f1722b7079.jpeg'),
(5, 'laitue-5d9f1722b7079.jpeg'),
(6, 'banane-5d9f14d394623.jpeg'),
(7, 'tomates-5d9f1e79d3497.jpeg'),
(8, 'laitue-5d9f1722b7079.jpeg'),
(9, 'tomates-5d9f1e79d3497.jpeg'),
(10, 'laitue-5d9f1722b7079.jpeg'),
(11, 'banane-5d9f14d394623.jpeg'),
(12, 'laitue-5d9f1722b7079.jpeg'),
(13, 'tomates-5d9f1e79d3497.jpeg'),
(14, 'banane-5d9f14d394623.jpeg'),
(15, 'laitue-5d9f1722b7079.jpeg'),
(16, 'banane-5d9f14d394623.jpeg'),
(17, 'tomates-5d9f1e79d3497.jpeg'),
(18, 'banane-5d9f14d394623.jpeg'),
(19, 'laitue-5d9f1722b7079.jpeg'),
(20, 'laitue-5d9f1722b7079.jpeg'),
(21, 'tomates-5d9f1e79d3497.jpeg'),
(22, 'banane-5d9f14d394623.jpeg'),
(23, 'tomates-5d9f1e79d3497.jpeg'),
(24, 'laitue-5d9f1722b7079.jpeg'),
(25, 'tomates-5d9f1e79d3497.jpeg'),
(26, 'banane-5d9f14d394623.jpeg'),
(27, 'laitue-5d9f1722b7079.jpeg'),
(28, 'laitue-5d9f1a4da40c5.jpeg'),
(29, 'tomates-5d9f1e79d3497.jpeg');

-- --------------------------------------------------------

--
-- Structure de la table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `picture_id` int(11) DEFAULT NULL,
  `nutritionals_id` int(11) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `tva_id` int(11) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `product`
--

INSERT INTO `product` (`id`, `picture_id`, `nutritionals_id`, `category_id`, `tva_id`, `supplier_id`, `name`, `description`) VALUES
(1, 1, 1, 1, 1, 3, 'Bacon Cheese Dog', 'Debitis fuga eligendi praesentium incidunt ut reprehenderit.'),
(2, 2, 2, 2, 2, 2, 'Miller Lite', 'Praesentium necessitatibus labore fugiat omnis optio doloremque eveniet.'),
(3, 3, 3, 3, 1, 1, 'Milk', 'Tenetur praesentium esse eveniet sunt quidem.'),
(4, 4, 4, 4, 1, 1, 'Celery', 'Expedita voluptatem iure fugit eos non.'),
(5, 5, 5, 5, 1, 3, 'Raisin', 'Distinctio optio rem officiis rerum qui iure sit exercitationem eum.'),
(6, 6, 6, 6, 1, 1, 'Chicken breast', 'Velit qui non eveniet quia est est possimus.'),
(7, 7, 7, 1, 1, 3, 'Little Hamburger', 'Sit perferendis magnam molestias unde et ipsa.'),
(8, 8, 8, 2, 2, 2, 'Orange Juice', 'Culpa aut quis optio adipisci et accusamus ducimus corrupti nam.'),
(9, 9, 9, 3, 1, 1, 'Butter', 'Nesciunt totam officiis dolore quis fuga eos eius nihil suscipit unde.'),
(10, 10, 10, 4, 1, 1, 'Eggplant', 'Cupiditate illum et omnis earum eligendi adipisci esse.'),
(11, 11, 11, 5, 1, 3, 'Watermelon', 'Fugiat adipisci reprehenderit eos quia dolores.'),
(12, 12, 12, 6, 1, 1, 'Chicken wing', 'Quae quas doloribus et reiciendis tempora veritatis natus et.'),
(13, 13, 13, 1, 1, 3, 'Veggie Sandwich', 'Nulla eius provident sed impedit eos doloremque non voluptatibus.'),
(14, 14, 14, 2, 2, 2, 'Bud Light', 'Ut assumenda qui iste natus dolorem occaecati consequatur.'),
(15, 15, 15, 3, 1, 1, 'Cream', 'Veniam atque voluptatibus tempore et nam alias odio excepturi.'),
(16, 16, 16, 4, 1, 1, 'Parsley', 'Molestiae sit corporis excepturi quam id culpa libero.'),
(17, 17, 17, 5, 1, 3, 'Blueberry', 'Rem laboriosam molestiae voluptatem perferendis tenetur.'),
(18, 18, 18, 6, 1, 1, 'Beef', 'Iusto eos ad eaque autem voluptatum tempore ut.'),
(19, 19, 19, 1, 1, 3, 'Veggie Sandwich', 'Velit atque blanditiis iusto in quod dolorem velit aut magnam eveniet.'),
(20, 20, 20, 2, 2, 2, 'Orange Juice', 'Exercitationem et rerum accusamus est qui illo rem quis.'),
(21, 21, 21, 3, 1, 1, 'Sour cream', 'Quis quo ea ipsam in molestiae repellat quo velit quam.'),
(22, 22, 22, 4, 1, 1, 'Cucumber', 'Pariatur hic totam quasi aliquam ea quo ut vel officia.'),
(23, 23, 23, 5, 1, 3, 'Lychee', 'Nemo consequatur ut laborum porro dignissimos similique veritatis accusamus explicabo et.'),
(24, 24, 24, 6, 1, 1, 'Pork', 'Illo recusandae alias sequi tempora voluptates.'),
(25, 25, 25, 1, 1, 3, 'Hamburger', 'Quas impedit corrupti nemo ducimus quod sint minima.'),
(26, 26, 26, 1, 1, 1, 'Boeuf au fromage', 'Du boeuf et du fromage'),
(27, 27, 27, 6, 1, 1, 'Soupe Miso', 'De l\'eau et du museau'),
(28, 28, 28, 1, 1, 1, 'Salade chinoise', 'Salade, mais, sarcive'),
(29, NULL, 29, 1, 1, 1, 'Shop suey saumon', 'Du shop suey et du saumon'),
(30, NULL, 30, 1, 1, 1, 'Teriyaki de pintade', 'De la pintade, de la sauce... c\'est bon !'),
(31, NULL, 31, 2, 1, 1, 'Coca Cool ah !', 'Coca la cour'),
(32, NULL, 32, 1, 1, 1, 'Macatia Boeuf', 'Macatia nature avec n\'tranche boeuf en\'dan'),
(33, 29, 33, 1, 1, 1, 'Burger de riz au saumon', 'Du pain de riz et du saumon');

-- --------------------------------------------------------

--
-- Structure de la table `product_allergen`
--

CREATE TABLE `product_allergen` (
  `product_id` int(11) NOT NULL,
  `allergen_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `product_allergen`
--

INSERT INTO `product_allergen` (`product_id`, `allergen_id`) VALUES
(26, 4),
(26, 7),
(26, 8),
(26, 11),
(26, 12),
(27, 4),
(27, 7),
(27, 9),
(27, 12),
(27, 14),
(28, 1),
(28, 3),
(28, 4),
(28, 7),
(28, 14),
(29, 3),
(29, 4),
(29, 6),
(29, 7),
(30, 3),
(30, 4),
(30, 7),
(30, 14),
(31, 4),
(31, 8),
(32, 2),
(32, 4),
(32, 7),
(32, 9),
(32, 11),
(32, 12),
(33, 3),
(33, 4),
(33, 6),
(33, 7);

-- --------------------------------------------------------

--
-- Structure de la table `stock`
--

CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `stock`
--

INSERT INTO `stock` (`id`, `product_id`, `quantity`) VALUES
(1, 1, 0),
(2, 2, 10),
(3, 3, 39),
(4, 4, 17),
(5, 5, 1),
(6, 6, 47),
(7, 7, 15),
(8, 8, 19),
(9, 9, 26),
(10, 10, 50),
(11, 11, 24),
(12, 12, 20),
(13, 13, 12),
(14, 14, 43),
(15, 15, 42),
(16, 16, 32),
(17, 17, 1),
(18, 18, 23),
(19, 19, 45),
(20, 20, 29),
(21, 21, 28),
(22, 22, 3),
(23, 23, 35),
(24, 24, 9),
(25, 25, 19),
(26, 26, 31),
(27, 27, 22),
(28, 28, 22),
(29, 29, 23),
(30, 30, 33),
(31, 31, 24),
(32, 32, 1),
(33, 33, 48),
(34, 34, 16),
(35, 35, 37),
(36, 36, 4),
(37, 37, 13),
(38, 38, 6),
(39, 39, 20),
(40, 40, 4),
(41, 41, 29),
(42, 42, 1),
(43, 43, 16),
(44, 44, 39),
(45, 45, 43),
(46, 46, 50),
(47, 47, 23),
(48, 48, 49),
(49, 49, 19),
(50, 50, 38),
(51, 51, 20),
(52, 52, 20),
(53, 53, 34),
(54, 54, 1),
(55, 55, 45),
(56, 56, 11),
(57, 57, 9),
(58, 58, 45),
(59, 59, 29),
(60, 60, 5),
(61, 61, 11),
(62, 62, 19),
(63, 63, 17),
(64, 64, 31),
(65, 65, 43),
(66, 66, 15),
(67, 67, 11),
(68, 68, 24),
(69, 69, 32),
(70, 70, 43),
(71, 71, 22),
(72, 72, 0),
(73, 73, 0),
(74, 74, 0),
(75, 75, 0),
(76, 76, 0),
(77, 77, 0),
(78, 78, 0),
(79, 79, 0),
(80, 80, 0),
(81, 81, 0),
(82, 82, 0),
(83, 83, 0),
(84, 84, 0),
(85, 85, 0),
(86, 86, 0),
(87, 87, 0),
(88, 88, 0),
(89, 89, 0),
(90, 90, 0);

-- --------------------------------------------------------

--
-- Structure de la table `supplier`
--

CREATE TABLE `supplier` (
  `id` int(11) NOT NULL,
  `name` varchar(120) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `preparation_period` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `supplier`
--

INSERT INTO `supplier` (`id`, `name`, `address`, `preparation_period`) VALUES
(1, 'Osaka', '4175 Grady Route\nVeldaport, KY 67738', '00:43:00'),
(2, 'La Maison du Whisky', '394 Schmidt Fall\nOlafmouth, NE 39089', '00:30:00'),
(3, 'BurgerMary', '5997 Myrl Manor Apt. 844\nReneehaven, MS 26422-6873', '00:44:00');

-- --------------------------------------------------------

--
-- Structure de la table `tva`
--

CREATE TABLE `tva` (
  `id` int(11) NOT NULL,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `taux` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `tva`
--

INSERT INTO `tva` (`id`, `name`, `taux`) VALUES
(1, '2.1%', 0.021),
(2, '8.5%', 0.085);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `avatar_id` int(11) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` longtext NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `username` varchar(60) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_banned` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `avatar_id`, `supplier_id`, `email`, `roles`, `password`, `username`, `is_banned`) VALUES
(1, NULL, NULL, 'm_seb@icloud.com', '[\"ROLE_ADMIN\"]', '$argon2id$v=19$m=65536,t=4,p=1$8G5L9Kr8wPnORrQWOB0gRw$5e0NIjTI0VyhoObQQfolDhyO0cEmVGX2AJdaKsjjLvY', 'Sébastien', 0),
(2, NULL, NULL, 'anne-marion.vitry@coding-academy.fr', '[\"ROLE_ADMIN\"]', '$argon2id$v=19$m=65536,t=4,p=1$MA/sXUbU9kM9W0Co2WtgAQ$Uo5iNLjytpfCcoU2M8urQIwxkzVm6etnb0EC0DL72/Y', 'Anna', 0),
(3, NULL, NULL, 'yen.linkwang@nigao.re', '[\"ROLE_ADMIN\"]', '$argon2id$v=19$m=65536,t=4,p=1$YeBsxZ9LXPrw/OR9+xjXow$MN52n2Ae/Swfql4bzzBf2wD8x+wzJInn67hrhTX0iKg', 'Yen', 0),
(4, NULL, 1, 'contact@osaka.re', '[\"ROLE_SUPPLIER\"]', '$argon2id$v=19$m=65536,t=4,p=1$Dg14t3M14cU079pLjXS/KA$lREeLuWycljBVrgPBs2Xcr+jqhVq/JVut3rJ/wRfTkY', 'OSAKA', 0),
(5, NULL, 1, 'brenda@osaka.re', '[\"ROLE_SUPPLIER\"]', '$argon2id$v=19$m=65536,t=4,p=1$BKC/FuAAUP69hXAxfuD8Uw$Yl4qSw5sX1kWqaXX6twyfYG3nXKpEQs7hr5jES8rI6A', 'Brenda', 0),
(6, NULL, 3, 'contact@burger.re', '[\"ROLE_SUPPLIER\"]', '$argon2id$v=19$m=65536,t=4,p=1$uxW/4FUCxFHlsUcIMN5p3w$r7LjjHkavVINeHLXhVYUtyqq74FYPE/h3ai8T+nGjBk', 'BurgerMary', 0),
(7, NULL, NULL, 'cyclist@uber.com', '[\"ROLE_DELIVERER\"]', '$argon2id$v=19$m=65536,t=4,p=1$/svwfm+z1hEtjrqvIKznEA$v3LOEWhO7m6TMrq6jZnO6idE2OH99MnEav8V/vcqG+U', 'UberEats', 0),
(8, NULL, NULL, 'kevin@epitech.eu', '[\"ROLE_USER\"]', '$argon2id$v=19$m=65536,t=4,p=1$M9KR/abHWQO1MQ87doy2jA$ZlPG40klFludtB09btn1KNazJrjkkFyQSJV7tHoU8og', 'Kévin', 0),
(9, NULL, NULL, 'marvin@coding-academy.fr', '[\"ROLE_USER\"]', '$argon2id$v=19$m=65536,t=4,p=1$T9XwWogS1XJLdQKR1uCIHA$hYmhmane6WS+VHm2CFja5ujk6Q8MJdqWx7x0WYHpT8c', 'Marvin', 1),
(10, NULL, NULL, '1570713587X_xX@Xx-X1570713587.re', '[\"ROLE_GUEST\"]', '$argon2id$v=19$m=65536,t=4,p=1$Q0V0goRwK7NgtZeuBJbr4w$CQwk8R2lO4wRURWVUW83pS7mxt8qxM/yWjAg1acaaaU', 'Anonyme', 1),
(11, NULL, NULL, '1570713763X_xX@Xx-X1570713763.re', '[\"ROLE_GUEST\"]', '$argon2id$v=19$m=65536,t=4,p=1$JcwuM6PSS0sSiJ+XqDWRgA$dcE2UVZ0hNRcJp0ioAhTVtDY3m+UCA3/M1iqqizclE8', 'Anonyme', 1),
(12, NULL, NULL, 'sebastien.apero974@gmail.com', '[\"ROLE_GUEST\"]', '$argon2id$v=19$m=65536,t=4,p=1$xcyoaQARkqPuZlAs5q4rZg$kjVVO+0ConmgNrGr57l48xTBHSA4W9ODlOTegELR8UE', 'sebastien.apero974@gmail.com', 0);

-- --------------------------------------------------------

--
-- Structure de la table `variant`
--

CREATE TABLE `variant` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `name` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` double NOT NULL,
  `tva_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `variant`
--

INSERT INTO `variant` (`id`, `product_id`, `name`, `price`, `tva_id`) VALUES
(1, 1, 'small', 7, 1),
(2, 1, 'xl', 13, 1),
(3, 1, 'xxl', 14, 1),
(4, 2, '25cl', 19, 1),
(5, 2, '33cl', 21, 1),
(6, 2, '75cl', 22, 1),
(7, 3, '100g', 7, 1),
(8, 3, '200g', 12, 1),
(9, 4, '100g', 6, 1),
(10, 4, '500g', 12, 1),
(11, 4, '1kg', 14, 1),
(12, 5, '1 tas', 21, 1),
(13, 5, '2 tas', 26, 1),
(14, 5, '3 tas', 28, 1),
(15, 6, 'congelé', 4, 1),
(16, 6, 'surgelé', 10, 1),
(17, 6, 'frais', 12, 1),
(18, 7, 'small', 6, 1),
(19, 7, 'xl', 10, 1),
(20, 7, 'xxl', 15, 1),
(21, 8, '25cl', 5, 1),
(22, 8, '33cl', 7, 1),
(23, 8, '75cl', 7, 1),
(24, 9, '100g', 4, 1),
(25, 9, '200g', 8, 1),
(26, 10, '100g', 17, 1),
(27, 10, '500g', 21, 1),
(28, 10, '1kg', 25, 1),
(29, 11, '1 tas', 12, 1),
(30, 11, '2 tas', 18, 1),
(31, 11, '3 tas', 21, 1),
(32, 12, 'congelé', 12, 1),
(33, 12, 'surgelé', 15, 1),
(34, 12, 'frais', 21, 1),
(35, 13, 'small', 9, 1),
(36, 13, 'xl', 12, 1),
(37, 13, 'xxl', 16, 1),
(38, 14, '25cl', 0, 1),
(39, 14, '33cl', 3, 1),
(40, 14, '75cl', 3, 1),
(41, 15, '100g', 6, 1),
(42, 15, '200g', 11, 1),
(43, 16, '100g', 11, 1),
(44, 16, '500g', 17, 1),
(45, 16, '1kg', 17, 1),
(46, 17, '1 tas', 3, 1),
(47, 17, '2 tas', 7, 1),
(48, 17, '3 tas', 11, 1),
(49, 18, 'congelé', 10, 1),
(50, 18, 'surgelé', 16, 1),
(51, 18, 'frais', 18, 1),
(52, 19, 'small', 21, 1),
(53, 19, 'xl', 24, 1),
(54, 19, 'xxl', 27, 1),
(55, 20, '25cl', 25, 1),
(56, 20, '33cl', 26, 1),
(57, 20, '75cl', 27, 1),
(58, 21, '100g', 2, 1),
(59, 21, '200g', 5, 1),
(60, 22, '100g', 24, 1),
(61, 22, '500g', 27, 1),
(62, 22, '1kg', 31, 1),
(63, 23, '1 tas', 4, 1),
(64, 23, '2 tas', 8, 1),
(65, 23, '3 tas', 13, 1),
(66, 24, 'congelé', 2, 1),
(67, 24, 'surgelé', 6, 1),
(68, 24, 'frais', 11, 1),
(69, 25, 'small', 8, 1),
(70, 25, 'xl', 12, 1),
(71, 25, 'xxl', 15, 1),
(72, 26, '1/2 Portion', 8.9, 1),
(73, 26, '1 Portion', 12, 1),
(74, 26, 'Papa Portion', 15.9, 1),
(75, 27, '25 Cl', 4, 1),
(76, 27, '50 Cl', 7.5, 1),
(77, 27, '100 Cl', 14, 1),
(78, 28, 'Entrée', 5.5, 1),
(79, 28, 'Plat', 8.9, 1),
(80, 29, 'Demi-portion', 4.5, 1),
(81, 29, 'Portion', 6.5, 1),
(82, 30, '1/2 pintade', 6, 1),
(83, 30, 'Pintade entière', 10, 1),
(84, 31, '20 Cl', 1, 1),
(85, 31, '50 Cl', 1.8, 1),
(86, 32, 'Simple', 9.5, 1),
(87, 32, 'Double', 14.5, 1),
(88, 32, 'Triple', 19.8, 1),
(89, 33, 'Simple', 14.5, 1),
(90, 33, 'Double', 21.5, 1);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `allergen`
--
ALTER TABLE `allergen`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_BA388B7A76ED395` (`user_id`);

--
-- Index pour la table `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_F0FE25274584665A` (`product_id`),
  ADD KEY `IDX_F0FE25271AD5CDBF` (`cart_id`),
  ADD KEY `IDX_F0FE2527CFFE9AD6` (`orders_id`);

--
-- Index pour la table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `city`
--
ALTER TABLE `city`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `cron_job`
--
ALTER TABLE `cron_job`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `un_name` (`name`);

--
-- Index pour la table `cron_report`
--
ALTER TABLE `cron_report`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B6C6A7F5BE04EA9` (`job_id`);

--
-- Index pour la table `greeting`
--
ALTER TABLE `greeting`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `metadata`
--
ALTER TABLE `metadata`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_4F143414A76ED395` (`user_id`);

--
-- Index pour la table `migration_versions`
--
ALTER TABLE `migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `nutritionals`
--
ALTER TABLE `nutritionals`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_E52FFDEEE9B59A59` (`cart_item_id`),
  ADD KEY `IDX_E52FFDEEA76ED395` (`user_id`),
  ADD KEY `IDX_E52FFDEE2ADD6D8C` (`supplier_id`);

--
-- Index pour la table `pics`
--
ALTER TABLE `pics`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_D34A04ADEE45BDBF` (`picture_id`),
  ADD UNIQUE KEY `UNIQ_D34A04AD2D37E0CC` (`nutritionals_id`),
  ADD KEY `IDX_D34A04AD12469DE2` (`category_id`),
  ADD KEY `IDX_D34A04AD4D79775F` (`tva_id`),
  ADD KEY `IDX_D34A04AD2ADD6D8C` (`supplier_id`);

--
-- Index pour la table `product_allergen`
--
ALTER TABLE `product_allergen`
  ADD PRIMARY KEY (`product_id`,`allergen_id`),
  ADD KEY `IDX_EE0F62594584665A` (`product_id`),
  ADD KEY `IDX_EE0F62596E775A4A` (`allergen_id`);

--
-- Index pour la table `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_4B3656604584665A` (`product_id`);

--
-- Index pour la table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `tva`
--
ALTER TABLE `tva`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`),
  ADD UNIQUE KEY `UNIQ_8D93D64986383B10` (`avatar_id`),
  ADD KEY `IDX_8D93D6492ADD6D8C` (`supplier_id`);

--
-- Index pour la table `variant`
--
ALTER TABLE `variant`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_F143BFAD4584665A` (`product_id`),
  ADD KEY `IDX_F143BFAD4D79775F` (`tva_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `allergen`
--
ALTER TABLE `allergen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `cart_item`
--
ALTER TABLE `cart_item`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `city`
--
ALTER TABLE `city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `cron_job`
--
ALTER TABLE `cron_job`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `cron_report`
--
ALTER TABLE `cron_report`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `greeting`
--
ALTER TABLE `greeting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `metadata`
--
ALTER TABLE `metadata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `nutritionals`
--
ALTER TABLE `nutritionals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `pics`
--
ALTER TABLE `pics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT pour la table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT pour la table `stock`
--
ALTER TABLE `stock`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT pour la table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `tva`
--
ALTER TABLE `tva`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `variant`
--
ALTER TABLE `variant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FK_BA388B7A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `cart_item`
--
ALTER TABLE `cart_item`
  ADD CONSTRAINT `FK_F0FE25271AD5CDBF` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`),
  ADD CONSTRAINT `FK_F0FE25274584665A` FOREIGN KEY (`product_id`) REFERENCES `variant` (`id`),
  ADD CONSTRAINT `FK_F0FE2527CFFE9AD6` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`);

--
-- Contraintes pour la table `cron_report`
--
ALTER TABLE `cron_report`
  ADD CONSTRAINT `FK_B6C6A7F5BE04EA9` FOREIGN KEY (`job_id`) REFERENCES `cron_job` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `metadata`
--
ALTER TABLE `metadata`
  ADD CONSTRAINT `FK_4F143414A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Contraintes pour la table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK_E52FFDEE2ADD6D8C` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`),
  ADD CONSTRAINT `FK_E52FFDEEA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FK_E52FFDEEE9B59A59` FOREIGN KEY (`cart_item_id`) REFERENCES `cart_item` (`id`);

--
-- Contraintes pour la table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK_D34A04AD12469DE2` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `FK_D34A04AD2ADD6D8C` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`),
  ADD CONSTRAINT `FK_D34A04AD2D37E0CC` FOREIGN KEY (`nutritionals_id`) REFERENCES `nutritionals` (`id`),
  ADD CONSTRAINT `FK_D34A04AD4D79775F` FOREIGN KEY (`tva_id`) REFERENCES `tva` (`id`),
  ADD CONSTRAINT `FK_D34A04ADEE45BDBF` FOREIGN KEY (`picture_id`) REFERENCES `pics` (`id`);

--
-- Contraintes pour la table `product_allergen`
--
ALTER TABLE `product_allergen`
  ADD CONSTRAINT `FK_EE0F62594584665A` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_EE0F62596E775A4A` FOREIGN KEY (`allergen_id`) REFERENCES `allergen` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `stock`
--
ALTER TABLE `stock`
  ADD CONSTRAINT `FK_4B3656604584665A` FOREIGN KEY (`product_id`) REFERENCES `variant` (`id`);

--
-- Contraintes pour la table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK_8D93D6492ADD6D8C` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`id`),
  ADD CONSTRAINT `FK_8D93D64986383B10` FOREIGN KEY (`avatar_id`) REFERENCES `pics` (`id`);

--
-- Contraintes pour la table `variant`
--
ALTER TABLE `variant`
  ADD CONSTRAINT `FK_F143BFAD4584665A` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `FK_F143BFAD4D79775F` FOREIGN KEY (`tva_id`) REFERENCES `tva` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
