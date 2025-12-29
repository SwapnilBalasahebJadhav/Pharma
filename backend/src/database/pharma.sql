-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: figma
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `birthday_card`
--

DROP TABLE IF EXISTS `birthday_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `birthday_card` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dr_name` varchar(150) NOT NULL,
  `dr_photo` varchar(255) NOT NULL,
  `createdBy` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `birthday_card`
--

LOCK TABLES `birthday_card` WRITE;
/*!40000 ALTER TABLE `birthday_card` DISABLE KEYS */;
INSERT INTO `birthday_card` VALUES (1,'yash','1766943086999.jpeg','swapjadhav35@gmail.com','2025-12-28 17:31:27'),(2,'ok','1766943136569.jpeg','swapjadhav35@gmail.com','2025-12-28 17:32:16');
/*!40000 ALTER TABLE `birthday_card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bmdcamp`
--

DROP TABLE IF EXISTS `bmdcamp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bmdcamp` (
  `id` int NOT NULL AUTO_INCREMENT,
  `advait_no` varchar(50) NOT NULL,
  `dr_name` varchar(100) NOT NULL,
  `place` varchar(150) NOT NULL,
  `no_of_patients` int NOT NULL,
  `rx_generated` enum('Yes','No') NOT NULL,
  `no_of_rx_generated` int DEFAULT '0',
  `createdBy` varchar(100) NOT NULL,
  `updatedBy` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bmdcamp`
--

LOCK TABLES `bmdcamp` WRITE;
/*!40000 ALTER TABLE `bmdcamp` DISABLE KEYS */;
INSERT INTO `bmdcamp` VALUES (1,'2','shri','pune',2,'Yes',2,'swapjadhav35@gmail.com',NULL,'2025-12-28 10:45:48','2025-12-28 10:45:48');
/*!40000 ALTER TABLE `bmdcamp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `opdcamp`
--

DROP TABLE IF EXISTS `opdcamp`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `opdcamp` (
  `id` int NOT NULL AUTO_INCREMENT,
  `advait_no` varchar(50) NOT NULL,
  `dr_name` varchar(100) NOT NULL,
  `place` varchar(150) NOT NULL,
  `no_of_patients` int NOT NULL,
  `rx_generated` enum('Yes','No') NOT NULL,
  `no_of_rx_generated` int DEFAULT '0',
  `createdBy` varchar(100) NOT NULL,
  `updatedBy` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `opdcamp`
--

LOCK TABLES `opdcamp` WRITE;
/*!40000 ALTER TABLE `opdcamp` DISABLE KEYS */;
INSERT INTO `opdcamp` VALUES (1,'2','sunil','pune',2,'No',3,'swapjadhav35@gmail.com',NULL,'2025-12-28 09:53:27','2025-12-28 09:53:27'),(2,'12','swapnil','pune',1,'No',3,'swapjadhav35@gmail.com',NULL,'2025-12-28 10:18:52','2025-12-28 10:18:52'),(3,'2','shri','pune',2,'Yes',21,'swapjadhav35@gmail.com',NULL,'2025-12-28 10:36:35','2025-12-28 10:36:35');
/*!40000 ALTER TABLE `opdcamp` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pob`
--

DROP TABLE IF EXISTS `pob`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pob` (
  `id` int NOT NULL AUTO_INCREMENT,
  `chemist_name` varchar(150) NOT NULL,
  `chemist_place` varchar(150) NOT NULL,
  `associated_dr_name` varchar(150) NOT NULL,
  `associated_dr_code` varchar(50) NOT NULL,
  `brand_name` varchar(150) NOT NULL,
  `brand_quantity` int NOT NULL,
  `createdBy` varchar(100) NOT NULL,
  `updatedBy` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pob`
--

LOCK TABLES `pob` WRITE;
/*!40000 ALTER TABLE `pob` DISABLE KEYS */;
INSERT INTO `pob` VALUES (1,'abc','xyz','aaa','21','3',3,'swapjadhav35@gmail.com',NULL,'2025-12-28 18:29:49','2025-12-28 18:29:49');
/*!40000 ALTER TABLE `pob` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rx_brands`
--

DROP TABLE IF EXISTS `rx_brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rx_brands` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rx_id` int DEFAULT NULL,
  `brand_name` varchar(150) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `brand_name` (`brand_name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rx_brands`
--

LOCK TABLES `rx_brands` WRITE;
/*!40000 ALTER TABLE `rx_brands` DISABLE KEYS */;
INSERT INTO `rx_brands` VALUES (1,2,'212','2025-12-28 12:39:21'),(2,2,'21','2025-12-28 12:39:21');
/*!40000 ALTER TABLE `rx_brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rxtracker`
--

DROP TABLE IF EXISTS `rxtracker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rxtracker` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dr_name` varchar(150) NOT NULL,
  `rx_photo` varchar(255) NOT NULL,
  `createdBy` varchar(100) NOT NULL,
  `updatedBy` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rxtracker`
--

LOCK TABLES `rxtracker` WRITE;
/*!40000 ALTER TABLE `rxtracker` DISABLE KEYS */;
INSERT INTO `rxtracker` VALUES (1,'yash','1766925496744.jpeg','swapjadhav35@gmail.com',NULL,'2025-12-28 12:38:16','2025-12-28 12:38:16'),(2,'yash','1766925561393.jpeg','swapjadhav35@gmail.com',NULL,'2025-12-28 12:39:21','2025-12-28 12:39:21');
/*!40000 ALTER TABLE `rxtracker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thankyou_card`
--

DROP TABLE IF EXISTS `thankyou_card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thankyou_card` (
  `id` int NOT NULL AUTO_INCREMENT,
  `dr_name` varchar(150) NOT NULL,
  `createdBy` varchar(100) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thankyou_card`
--

LOCK TABLES `thankyou_card` WRITE;
/*!40000 ALTER TABLE `thankyou_card` DISABLE KEYS */;
INSERT INTO `thankyou_card` VALUES (1,'yash','swapjadhav35@gmail.com','2025-12-28 17:42:19');
/*!40000 ALTER TABLE `thankyou_card` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'swapnil.user','swapjadhav35@gmail.com','$2b$10$XWbZ5JGuR0lNLGw9zYD0EO05gKvTX4P61gbzHMHiteCwWhgU6vuI.',1,'user');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-12-29 13:45:05
