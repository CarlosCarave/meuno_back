-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: meuno
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eventos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(80) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `descripcion` text,
  `imagen` varchar(100) DEFAULT NULL,
  `usuario_id` int DEFAULT NULL,
  `lugar` varchar(45) DEFAULT NULL,
  `hora` time DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_eventos_usuarios_idx` (`usuario_id`),
  CONSTRAINT `fk_eventos_usuarios` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
INSERT INTO `eventos` VALUES (2,'Concierto de RUSSIAN CIRCLESnoseke','2022-07-14','Después de haber tenido que cancelar el evento por culpa de la pandemia, tras dos años, este grupo de post-metal procedente de Chicago ha anunciado su puesta en escena en la sala Custom de Sevilla. No pierdas la oportunidad de conocerlos.','https://www.binaural.es/wp-content/uploads/2019/10/russian.jpg',NULL,'Sala Custom, Sevillacuantos','20:00:00'),(9,'Concierto de RUSSIAN rectuanfjjer','2022-07-08','Después de haber tenido que cancelar el evento por culpa de la pandemia, tras dos años, este grupo de post-metal procedente de Chicago ha anunciado su puesta en escena en la sala Custom de Sevilla. No pierdas la oportunidad de conocerlos.','https://www.binaural.es/wp-content/uploads/2019/10/russian.jpg',NULL,'Sala Custom, Sevillacuantos','20:00:00'),(10,'Concierto de RUSSIAN CIRCLESnoseke','2022-07-14','Después de haber tenido que cancelar el evento por culpa de la pandemia, tras dos años, este grupo de post-metal procedente de Chicago ha anunciado su puesta en escena en la sala Custom de Sevilla. No pierdas la oportunidad de conocerlos.','https://www.binaural.es/wp-content/uploads/2019/10/russian.jpg',NULL,'Sala Custom, Sevillacuantos','20:00:00');
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `nombre_usuario_UNIQUE` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'CarlosCarave','carloscarave@gmail.com','12341234'),(2,'JonyHe93','jonyhe93@gmail.com','12341234'),(3,'jesusprat','jesusprat@gmail.com','12341234'),(4,'lolosoloyolo','lolosoloyolo@gmail.com','12341234'),(5,'elmantekas','elmantekas@gmail.com','12341234'),(6,'juanymedio','juanymedio@gmail.com','12341234'),(7,'niñocorneta','niñocorneta@gmail.com','12341234'),(8,'medioficus','medioficus@gmail.com','12341234'),(9,'tumare','tumare@gmail.com','12341234'),(10,'narutosaske','narutosaske@gmail.com','12341234'),(11,'ertijera','ertijera@gmail.com','12341234'),(12,'erpijota','erpijota@gmail.com','12341234'),(13,'erbarandilla','erbarandilla@gmail.com','12341234'),(15,'chinoconyoyos','chinoconyoyos@gmail.com','12341234'),(16,'eldepereza','eldepereza@gmail.com','12341234'),(18,'eldeperezaa','eldeperezaa@gmail.com','12341234');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios_has_eventos`
--

DROP TABLE IF EXISTS `usuarios_has_eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios_has_eventos` (
  `usuarios_id` int NOT NULL,
  `eventos_id` int NOT NULL,
  PRIMARY KEY (`usuarios_id`,`eventos_id`),
  KEY `fk_usuarios_has_eventos_eventos1_idx` (`eventos_id`),
  KEY `fk_usuarios_has_eventos_usuarios1_idx` (`usuarios_id`),
  CONSTRAINT `fk_usuarios_has_eventos_eventos1` FOREIGN KEY (`eventos_id`) REFERENCES `eventos` (`id`),
  CONSTRAINT `fk_usuarios_has_eventos_usuarios1` FOREIGN KEY (`usuarios_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios_has_eventos`
--

LOCK TABLES `usuarios_has_eventos` WRITE;
/*!40000 ALTER TABLE `usuarios_has_eventos` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios_has_eventos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-27 13:44:40
