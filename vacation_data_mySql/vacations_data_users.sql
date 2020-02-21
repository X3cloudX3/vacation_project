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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `salt` varchar(200) DEFAULT NULL,
  `user_type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'X3deidaraX3@gmail.com','$2a$08$rqcFcjwJ2cmaXxHsGBz3Hu3XCE5P9x2SqNlOkXxw0HGMAZtuqpiha','roman','barshay','$2a$08$rqcFcjwJ2cmaXxHsGBz3Hu','admin'),(5,'x3deidarax31@gmail.com','$2a$08$rqcFcjwJ2cmaXxHsGBz3HuSXzJVdHy8GvqDdtm3cj6mYbUTCmYb5q','dsfdsfds','sdfdsfsdf','$2a$08$rqcFcjwJ2cmaXxHsGBz3Hu',NULL),(6,'x3deidarax32@gmail.com','$2a$08$rqcFcjwJ2cmaXxHsGBz3Hu3XCE5P9x2SqNlOkXxw0HGMAZtuqpiha','dsasdasd','asdasdasdsad','$2a$08$rqcFcjwJ2cmaXxHsGBz3Hu',NULL),(7,'x3deidarax33@gmail.com','$2a$08$rqcFcjwJ2cmaXxHsGBz3Hu3XCE5P9x2SqNlOkXxw0HGMAZtuqpiha','dsasdasd','asdasdasdsad','$2a$08$rqcFcjwJ2cmaXxHsGBz3Hu',NULL),(8,'x3deidarax1234@gmail.com','$2a$08$rqcFcjwJ2cmaXxHsGBz3Hu3XCE5P9x2SqNlOkXxw0HGMAZtuqpiha','roman','barshay','$2a$08$rqcFcjwJ2cmaXxHsGBz3Hu',NULL);
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

-- Dump completed on 2020-02-21 10:48:50
