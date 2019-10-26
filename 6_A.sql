/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 10.1.13-MariaDB : Database - dbarkademy_exam
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dbarkademy_exam` /*!40100 DEFAULT CHARACTER SET latin1 */;

/*Table structure for table `cashier` */

DROP TABLE IF EXISTS `cashier`;

CREATE TABLE `cashier` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `cashier` */

insert  into `cashier`(`id`,`name`) values (1,'Pevita Pearce'),(2,'Raisa Andriana');

/*Table structure for table `category` */

DROP TABLE IF EXISTS `category`;

CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `category` */

insert  into `category`(`id`,`name`) values (1,'Food'),(2,'Drink');

/*Table structure for table `product` */

DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `id_category` int(11) DEFAULT NULL,
  `id_cashier` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_category` (`id_category`),
  KEY `id_cashier` (`id_cashier`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`id_category`) REFERENCES `category` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `product_ibfk_2` FOREIGN KEY (`id_cashier`) REFERENCES `cashier` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `product` */

insert  into `product`(`id`,`name`,`price`,`id_category`,`id_cashier`) values (1,'Latte',10000,2,1),(2,'Cake',20000,1,2);

/*Table structure for table `v_query_product` */

DROP TABLE IF EXISTS `v_query_product`;

/*!50001 DROP VIEW IF EXISTS `v_query_product` */;
/*!50001 DROP TABLE IF EXISTS `v_query_product` */;

/*!50001 CREATE TABLE  `v_query_product`(
 `cashier` varchar(255) ,
 `product` varchar(255) ,
 `category` varchar(255) ,
 `price` double 
)*/;

/*Table structure for table `v_query_product_web` */

DROP TABLE IF EXISTS `v_query_product_web`;

/*!50001 DROP VIEW IF EXISTS `v_query_product_web` */;
/*!50001 DROP TABLE IF EXISTS `v_query_product_web` */;

/*!50001 CREATE TABLE  `v_query_product_web`(
 `id` int(11) ,
 `name` varchar(255) ,
 `price` double ,
 `id_category` int(11) ,
 `id_cashier` int(11) ,
 `cashier` varchar(255) ,
 `category` varchar(255) 
)*/;

/*View structure for view v_query_product */

/*!50001 DROP TABLE IF EXISTS `v_query_product` */;
/*!50001 DROP VIEW IF EXISTS `v_query_product` */;

/*!50001 CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `v_query_product` AS select `cashier`.`name` AS `cashier`,`product`.`name` AS `product`,`category`.`name` AS `category`,`product`.`price` AS `price` from ((`product` join `cashier` on((`cashier`.`id` = `product`.`id_cashier`))) join `category` on((`category`.`id` = `product`.`id_category`))) */;

/*View structure for view v_query_product_web */

/*!50001 DROP TABLE IF EXISTS `v_query_product_web` */;
/*!50001 DROP VIEW IF EXISTS `v_query_product_web` */;

/*!50001 CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `v_query_product_web` AS select `product`.`id` AS `id`,`product`.`name` AS `name`,`product`.`price` AS `price`,`product`.`id_category` AS `id_category`,`product`.`id_cashier` AS `id_cashier`,`cashier`.`name` AS `cashier`,`category`.`name` AS `category` from ((`product` join `cashier` on((`cashier`.`id` = `product`.`id_cashier`))) join `category` on((`category`.`id` = `product`.`id_category`))) */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
