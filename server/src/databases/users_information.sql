-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Feb 14, 2023 at 02:25 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `circular-journeys`
--

-- --------------------------------------------------------

--
-- Table structure for table `users_information`
--

CREATE TABLE `users_information` (
  `id` int(11) NOT NULL COMMENT '編號',
  `member_id` varchar(225) NOT NULL COMMENT '會員編號',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '註冊日期',
  `active_status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '狀態',
  `points` int(11) NOT NULL DEFAULT '0' COMMENT '積分',
  `ticket` int(11) NOT NULL DEFAULT '0' COMMENT '折價卷',
  `first_name` varchar(25) NOT NULL COMMENT '姓',
  `last_name` varchar(25) NOT NULL COMMENT '名',
  `birthday` date NOT NULL COMMENT '生日',
  `sex` char(1) NOT NULL COMMENT '性別',
  `password` varchar(50) NOT NULL COMMENT '密碼',
  `token` varchar(50) NOT NULL COMMENT '驗證碼',
  `email` varchar(25) NOT NULL COMMENT '信箱',
  `telephone` varchar(25) NOT NULL COMMENT '電話',
  `nation` varchar(25) NOT NULL COMMENT '國家',
  `city` varchar(30) NOT NULL COMMENT '城市',
  `districts` varchar(255) DEFAULT NULL COMMENT '區域',
  `postal_code` varchar(10) DEFAULT NULL COMMENT '郵遞區號',
  `address` varchar(50) NOT NULL COMMENT '街/道',
  `payment_type` varchar(25) DEFAULT NULL COMMENT '付款種類',
  `provider` varchar(25) DEFAULT NULL COMMENT '供應商',
  `account_no` varchar(25) DEFAULT NULL COMMENT '卡號',
  `expiry` date DEFAULT NULL COMMENT '到期日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='user_databases';

--
-- Dumping data for table `users_information`
--

INSERT INTO `users_information` (`id`, `member_id`, `created_at`, `active_status`, `points`, `ticket`, `first_name`, `last_name`, `birthday`, `sex`, `password`, `token`, `email`, `telephone`, `nation`, `city`, `districts`, `postal_code`, `address`, `payment_type`, `provider`, `account_no`, `expiry`) VALUES
(1, '123456', '2022-12-21 02:44:42', 1, 9457, 2, 'Chou', 'Alan', '1995-04-14', 'm', 'e10adc3949ba59abbe56e057f20f883e', '9994c615-f679-482b-8d4b-1c56db281f1b', 'alan@gmail.com', '0970688851', '臺灣', ' 臺中市', '太平區', '80711', '環中東路三段507號6樓之6', '信用卡', 'VISA', '1111 2222 3333 4444', '2022-12-21'),
(2, '123457', '2022-12-21 02:56:42', 1, 8778, 1, 'La', 'Kevin', '0000-00-00', 'f', 'e10adc3949ba59abbe56e057f20f883e', '8aade3d7-b683-4348-adc9-1019d2c6b15d', 'kevin@gmail.com', '0900000000', '臺灣', '高雄市', NULL, '80711', '高雄市阿公店0號水庫', '信用卡', 'VISA', '1111 2222 3333 4444', '2022-12-21'),
(4, '123458', '2022-12-21 02:58:19', 1, 8787, 8, '張', '圓圓', '1996-06-05', 'f', 'e10adc3949ba59abbe56e057f20f883e', '1edc2042-17f9-4470-b1dd-386b8823698b', 'circle@gmail.com', '0900000000', '臺灣', '高雄市', '鼓山區', '80711', '巨蛋路', '信用卡', 'VISA', '1111 2222 3333 4444', '2022-12-21');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users_information`
--
ALTER TABLE `users_information`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users_information`
--
ALTER TABLE `users_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '編號', AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
