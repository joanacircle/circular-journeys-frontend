-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2022 年 12 月 24 日 12:57
-- 伺服器版本： 10.4.27-MariaDB
-- PHP 版本： 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `circular_journeys`
--

-- --------------------------------------------------------

--
-- 資料表結構 `users_information`
--

CREATE TABLE `users_information` (
  `id` int(11) NOT NULL COMMENT '編號',
  `member_id` varchar(25) NOT NULL COMMENT '會員編號',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() COMMENT '註冊日期',
  `active_status` tinyint(1) NOT NULL COMMENT '狀態',
  `first_name` varchar(25) NOT NULL COMMENT '姓',
  `last_name` varchar(25) NOT NULL COMMENT '名',
  `birthday` date NOT NULL COMMENT '生日',
  `sex` char(1) NOT NULL COMMENT '性別',
  `password` varchar(50) NOT NULL COMMENT '密碼',
  `token` varchar(50) NOT NULL COMMENT '驗證碼',
  `email` varchar(25) NOT NULL COMMENT '信箱',
  `telephone` varchar(25) NOT NULL COMMENT '電話',
  `country` varchar(25) NOT NULL COMMENT '國家',
  `city` varchar(30) NOT NULL COMMENT '城市',
  `postal_code` varchar(10) NOT NULL COMMENT '郵遞區號',
  `address` varchar(50) NOT NULL COMMENT '地址',
  `payment_type` varchar(25) NOT NULL COMMENT '付款種類',
  `provider` varchar(25) NOT NULL COMMENT '供應商',
  `account_no` varchar(25) NOT NULL COMMENT '卡號',
  `expiry` date NOT NULL COMMENT '到期日'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='user_databases';

--
-- 傾印資料表的資料 `users_information`
--

INSERT INTO `users_information` (`id`, `member_id`, `created_at`, `active_status`, `first_name`, `last_name`, `birthday`, `sex`, `password`, `token`, `email`, `telephone`, `country`, `city`, `postal_code`, `address`, `payment_type`, `provider`, `account_no`, `expiry`) VALUES
(1, '12345', '2022-12-21 02:44:42', 1, 'Chou', 'Alan', '0000-00-00', 'm', '123456', 'f1b699cc9af3eeb98e5de244ca7802ae38e77bae', 'alan@gmail.com', '0900000000', '台灣', '高雄市', '80711', '高雄市阿公店水庫', '信用卡', 'VISA', '1111 2222 3333 4444', '2022-12-21'),
(2, '12346', '2022-12-21 02:56:42', 1, 'La', 'Kevin', '0000-00-00', 'f', '123456', 'f1b699cc9af3eeb98e5de244ca7802ae38e77bae', 'kevin@gmail.com', '0900000000', '台灣', '高雄市', '80711', '高雄市阿公店0號水庫', '信用卡', 'VISA', '1111 2222 3333 4444', '2022-12-21'),
(3, '12347', '2022-12-21 02:57:28', 1, '陳', '家禾', '0000-00-00', 'f', '123456', 'f1b699cc9af3eeb98e5de244ca7802ae38e77bae', 'kevin@gmail.com', '0900000000', '台灣', '高雄市', '80711', '高雄市阿公店1號水庫', '信用卡', 'VISA', '1111 2222 3333 4444', '2022-12-21'),
(4, '12348', '2022-12-21 02:58:19', 1, '張', '圓圓', '1996-06-05', 'f', '123456', 'f1b699cc9af3eeb98e5de244ca7802ae38e77bae', 'circle@gmail.com', '0900000000', '台灣', '高雄市', '80711', '高雄市阿公店1號水庫', '信用卡', 'VISA', '1111 2222 3333 4444', '2022-12-21'),
(7, 'PFDGF7JOVB', '2022-12-23 07:22:54', 1, '陳', '小雪', '1955-01-15', 'f', '42c17f8d84f7aee34c58d8c68b9ce2a13fc22ac6', '42c17f8d84f7aee34c58d8c68b9ce2a13fc22ac6', 'ggmod@gmail.com', '0911888888', '臺灣', '新竹縣', '112321', '公園裡', '信用卡', 'MasterCard', '7890 1278 5712 8037', '2026-03-26'),
(8, '95L1A3SYV5', '2022-12-23 08:27:07', 1, '陳', '阿美', '1999-11-16', 'f', 'bccdcf4ff371bb560d8792147b51f73400dc3da3', 'bccdcf4ff371bb560d8792147b51f73400dc3da3', 'yyy123@gmail.com', '0913123123', '臺灣', '新北市', '131231', '耶誕城廁所內', '信用卡', 'JCB', '3412 3412 4214 2141', '2026-09-09'),
(9, 'WY9TK8JKKL', '2022-12-23 09:18:19', 1, '王', '八蛋', '2022-12-21', 'm', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', '7110eda4d09e062aa5e4a390b0a572ac0d2c0220', '8873743@yaoo.com', '033942882', '臺灣', '高雄市', '211', 'hjdfkhakdjfhsjkdf', '信用卡', 'VISA', '4444 5555 7777 2222', '2022-12-04');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `users_information`
--
ALTER TABLE `users_information`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_id` (`member_id`),
  ADD UNIQUE KEY `member_id` (`member_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `users_information`
--
ALTER TABLE `users_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '編號', AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;