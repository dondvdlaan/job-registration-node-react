-- MySQL dump 10.13  Distrib 8.0.31, for Linux (x86_64)
--
-- Host: localhost    Database: job
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `compID` int NOT NULL AUTO_INCREMENT,
  `compName` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `compType` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `compNote` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `compStatus` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`compID`)
) ENGINE=InnoDB AUTO_INCREMENT=127 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (27,'NTT-data','SW Solution company','approached'),(28,'Statista','Statistical data company','approached'),(31,'Sopra Steria','Digital solutions for customers','approached'),(35,'Nexadus','Specialized Engineering firm','approached'),(42,'RightpeopleGroup','Agency','approached'),(45,'opitz-consulting','SW Hersteller, kein Freelance','registered'),(46,'Toptal','Hires best of the best; Preparing for REACT examen?','registered'),(51,'Hays AG','PERSONAL­DIENSTLEISTER','registered'),(52,'freelance.de','Online-Plattform für Freelancer &amp; Projekte','registered'),(53,'progressiverecruitment.com','Recruiter','registered'),(54,'www.solcom.de','Recruiter, also for freelance','registered'),(56,'darwinrecruitment.com','US Recruitment','registered'),(59,'Knieper Consulting GmbH','Recruiter','registered'),(60,'iSAX GmbH &amp; Co. KG','Recruiter Industry','registered'),(61,'FERCHAU GmbH','Recruiter Industry','registered'),(62,'Upwork','Agency; Change email to MRD','registered'),(65,'MVP Factory','Agency; Fill in profile','approached'),(67,'freelancermap GmbH','Internet platform Kunden-Nr: 432457','registered'),(68,'GULP','Randstap uitzendbureau','approached'),(70,'IQ PLUS','Informatik-Spezialist*innen auf Zeit','registered'),(71,'Appway','OEM for BPM (Business Process Management)','registered'),(103,'Thryve','Agency','registered'),(105,'Gazelle Global ','Agency','registered'),(107,'Nortal AG','IT solution provider','registered'),(108,'Vesterling','Recruiter','registered'),(109,'elunic AG','Industrie-4.0-Softwareunternehmen','registered'),(115,'ARMON GmbH','Recruiter','registered'),(116,'microtech GmbH','ERP Hersteller','registered'),(117,'strapi.io','Open source headless CMS producer','registered'),(118,'Seven Principles Solutions & Consulting GmbH','IT Recruiter','registered'),(119,'Harvey Nash GmbH','IT Recruiter','registered'),(120,'openDEVS GmbH','IT Recruiter','registered'),(121,'Bosenet Systemhaus GmbH & Co KG','IT Recruiter','registered'),(122,'STINGEL CONSULTING GmbH','IT Recruiter','registered'),(123,'Anson McCade','Recruiter','registered'),(124,'CodeAlly','IT Recruiter Poland','registered'),(125,'Illuminet Solutions','IT Recruiter','approached'),(126,'CAES GmbH','IT Recruiter','registered');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `emplID` int NOT NULL AUTO_INCREMENT,
  `emplFirstName` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `emplLastName` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `emplTel` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emplNote` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `emplEmail` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `compID` int DEFAULT NULL,
  PRIMARY KEY (`emplID`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (27,'Leoo','Laitinen','+358 44 5915 607','lla@rightpeoplegroup.com',NULL),(28,'Kwik','Duck',NULL,NULL,NULL),(29,'Patito','Duck',NULL,NULL,NULL),(30,'Donald','Duck','6666666666666666666','adddddddddddddddddddddd@b.c',NULL),(31,'Donald','eeeeeeeeee','1234','aa@bb.ccc',NULL),(32,'Patitoo','Duck','12345','a@b.c',42),(33,'','','','',27),(34,'aaaa','bbbb','1234','a@b.c',69),(35,'ddd','lll','123','456',61),(36,'','','','',99),(37,'ddddddddddddddd','ffffffffffffff','hhhhhhhhhhh','ggggggggggggggg',51),(38,'Kevin','Oelkers','+49 40 468987791 M: +49 173 4654115','kevin.oelkers@gulp.de',68),(39,'Valentin ','Vaduva','','valentin.vaduva@mvpfactory.co',65),(40,'Rafael ','Gallus','08232906546','freelancermap@caes.de',126);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `jobID` int NOT NULL AUTO_INCREMENT,
  `jobTitle` varchar(256) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `jobDescription` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `jobDetails` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `jobDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `jobStatus` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `compID` int NOT NULL,
  PRIMARY KEY (`jobID`),
  KEY `compID` (`compID`)
) ENGINE=InnoDB AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (27,'General Full Stack','MRD offer','Only email sent','2022-06-07 11:29:40','pending',27),(28,'General Full Stack','MRD offer','Just email','2022-06-07 11:30:53','pending',28),(29,'Initiativbewerbung','General contact','Introduced persona data on their website, uploaded MRD letter','2022-06-07 11:59:20','pending',31),(30,'Initiativbewerbung','Nothing specific','Left personal data and MRD general message at their contact page','2022-06-07 12:32:58','pending',35),(52,'Freelance','Ticked boxes for comptences and countries','Only name and email. Job proposals will come(?)','2022-06-09 17:17:52','pending',39),(58,'123','123','123','2022-06-10 21:32:10','won',29),(62,'Contractor Free lance','Agency, will send jobs to email','https://onsiter.com/de/en/profile/edit registered','2022-06-12 12:06:54','pending',42),(63,'Full Stack','na','CV hoghgeladen','2022-06-20 17:07:52','pending',42),(64,'React Entwickler (m/w/d)','Schleswig-Holstein | Freiberuflich für ein Projekt','Weiterentwicklung einer modernen Webapplikation in einem agilen Umfeld','2022-06-21 06:34:37','registered',51),(68,'Freelance jobs from Database','Browse through DB for Jobs',NULL,'2022-07-11 14:14:32','registered',62),(73,'Consultant task – Software Developer (Helsinki/Remote), published: 27.07.2022','- Coding in React','Others were cheaper and more experience','2022-07-27 07:50:19','closed',42),(83,'Java Entwickler (m/w/d) für ATLAS / CCI','Java Entwickler für ATLAS / CCI: Es soll bei ATLAS eine neue ATLAS-Teilapplikation als barrierefreie Intranetanwendung entwickelt werden.','','2022-08-25 07:33:29','pending',68),(84,'Senior Full-Stack Developer - 2450035','JavaScript, React, Node CI/CD API Design','Energy sector','2022-08-25 08:51:43','pending',123),(85,'Contract Digital Developer - Java, React, Node Projekt-ID: 2451054','React, Node and Java development activities','Key technologies:  Java 11+ Spring Node RESTful APIs Jenkins','2022-08-28 11:41:12','pending',125),(86,'Full-Stack-Developer C00577144  Wolfsburg','Java SE/EE, React, Spring, Angular, JPA, Hibernate, JSON, XML, Eclipse/IntelliJ)','GULP called me 30 aug 2022, will propse me to customer, 75e on-site, 60e remote. 50% onsite. Closed: no feedback end-customer','2022-08-30 07:50:33','closed',68),(87,'Backend-Entwickler C00578390','Entwicklung mit Java unter Einsatz moderner Java-Frameworks, Microservices, JAX-RS und REST, Java-Frameworks, Microservices, JAX-RS und REST','Lost because other(s) better','2022-08-31 07:41:42','closed',68),(88,'Full Stack Web Senior Node/React developer','Front-end enhancements of a loan contract configuration and negotiation component: Status Short-listed','Node.js, expert React, expert Typescript / JavaScript expert SCSS for styling DevOps basic knowledge (docker, Linux, applications deployments) Unit / E2E testing in JavaScript / Typescript NoSQL databases, a basic understanding AWS Serverless (lambda, Cognito, DynamoDB), good overall understanding and experience Experience connecting various APIs Very good communication skills in English. Experience with Ethereum (Solidity) is a big plus M﻿ust be located within 1-2 h difference from CET.','2022-09-29 10:15:27','pending',65);
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-10-27 20:05:07
