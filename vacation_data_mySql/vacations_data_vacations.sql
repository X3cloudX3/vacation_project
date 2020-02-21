CREATE DATABASE  IF NOT EXISTS `vacations_data` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `vacations_data`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: vacations_data
-- ------------------------------------------------------
-- Server version	8.0.17

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
-- Table structure for table `vacations`
--

DROP TABLE IF EXISTS `vacations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vacations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `capital` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `price` varchar(45) DEFAULT NULL,
  `imageURL` varchar(400) DEFAULT NULL,
  `start_date` varchar(45) DEFAULT NULL,
  `end_date` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vacations`
--

LOCK TABLES `vacations` WRITE;
/*!40000 ALTER TABLE `vacations` DISABLE KEYS */;
INSERT INTO `vacations` VALUES (61,'City of Victoria','Hong Kong','live the beauty of Hong Kong\'s City of Victoria for the cheapest price there is','1700$','https://images.unsplash.com/photo-1541529229255-5762a41dfba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','2020-02-12','2020-02-15'),(62,'Bangui','Central African Republic','live the beauty of Central African Republic\'s Bangui for the cheapest price there is','589$','https://images.unsplash.com/photo-1512552288940-3a300922a275?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','2020-02-25','2020-02-25'),(63,'Prague','Czech Republic','live the beauty of Czech Republic\'s Prague for the cheapest price there is','1100$','https://images.unsplash.com/photo-1487975460695-a2e5c4ea12c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','2020-02-18','2020-02-19'),(64,'Ouagadougou','Burkina Faso','live the beauty of Burkina Faso\'s Ouagadougou for the cheapest price there is','727$','https://images.unsplash.com/photo-1453668672224-b2a35684489b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','2020-06-05','2020-12-30'),(65,'Kuwait City','Kuwait','live the beauty of Kuwait\'s Kuwait City for the cheapest price there is','455$','https://www.nyalahotel.com/wp-content/uploads/2017/04/coppia-trekking-liguria.jpg','2020-02-29','2020-02-27'),(66,'Canberra','Australia','live the beauty of Australia\'s Canberra for the cheapest price there is','1507$','https://images.unsplash.com/photo-1484255877288-39571777fade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','2020-02-23','2020-02-26'),(67,'Gaborone','Botswana','live the beauty of Botswana\'s Gaborone for the cheapest price there is','917$','https://images.unsplash.com/photo-1503174768371-25049f8bf3f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','2020-02-12','2020-02-13'),(68,'Addis Ababa','Ethiopia','live the beauty of Ethiopia\'s Addis Ababa for the cheapest price there is','701$','https://images.unsplash.com/photo-1551524392-9a61031f0246?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','2020-02-25','2020-02-29'),(69,'Malabo','Equatorial Guinea','live the beauty of Equatorial Guinea\'s Malabo for the cheapest price there is','1687$','https://images.unsplash.com/photo-1503174768371-25049f8bf3f7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','2020-02-25','2020-02-26'),(70,'Brasília','Brazil','live the beauty of Brazil\'s Brasília for the cheapest price there is','1559$','https://images.unsplash.com/photo-1484255877288-39571777fade?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60','2020-02-18','2020-02-23');
/*!40000 ALTER TABLE `vacations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-02-21 10:48:50
