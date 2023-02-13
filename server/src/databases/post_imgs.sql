-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2023 年 02 月 13 日 12:53
-- 伺服器版本： 10.4.21-MariaDB
-- PHP 版本： 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `cj`
--

-- --------------------------------------------------------

--
-- 資料表結構 `post_imgs`
--

CREATE TABLE `post_imgs` (
  `img_id` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '圖片編碼',
  `img_index` bigint(255) NOT NULL COMMENT '圖片順序',
  `img_url` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '圖片路徑',
  `post_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '文章編號'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `post_imgs`
--

INSERT INTO `post_imgs` (`img_id`, `img_index`, `img_url`, `post_id`) VALUES
('p10i1', 1, 'images/Blog/p10i1.jpeg', 'p10'),
('p10i2', 2, 'images/Blog/p10i2.jpeg', 'p10'),
('p1i1', 1, 'images/Blog/p1i1.jpeg', 'p1'),
('p1i2', 2, 'images/Blog/p1i2.jpeg', 'p1'),
('p2i1', 1, 'images/Blog/p2i1.jpeg', 'p2'),
('p2i2', 2, 'images/Blog/p2i2.jpeg', 'p2'),
('p2i3', 3, 'images/Blog/p2i3.jpeg', 'p2'),
('p2i4', 4, 'images/Blog/p2i4.jpeg', 'p2'),
('p3i1', 1, 'images/Blog/p3i1.jpeg', 'p3'),
('p3i2', 2, 'images/Blog/p3i2.jpeg', 'p3'),
('p3i3', 3, 'images/Blog/p3i3.jpeg', 'p3'),
('p4i1', 1, 'images/Blog/p4i1.jpeg', 'p4'),
('p4i2', 2, 'images/Blog/p4i2.jpeg', 'p4'),
('p4i3', 3, 'images/Blog/p4i2.jpeg', 'p4'),
('p4i4', 4, 'images/Blog/p4i2.jpeg', 'p4'),
('p5i1', 1, 'images/Blog/p5i1.jpeg', 'p5'),
('p5i2', 2, 'images/Blog/p5i2.jpeg', 'p5'),
('p6i1', 1, 'images/Blog/p6i1.jpeg', 'p6'),
('p6i2', 2, 'images/Blog/p6i2.jpeg', 'p6'),
('p6i3', 3, 'images/Blog/p6i3.jpeg', 'p6'),
('p7i1', 1, 'images/Blog/p7i1.jpeg', 'p7'),
('p7i2', 2, 'images/Blog/p7i1.png', 'p7'),
('p8i1', 1, 'images/Blog/p8i1.jpeg', 'p8'),
('p8i2', 2, 'images/Blog/p8i1.jpeg', 'p8'),
('p8i3', 3, 'images/Blog/p8i3.jpeg', 'p8'),
('p9i1', 1, 'images/Blog/p9i1.jpeg', 'p9'),
('p9i2', 2, 'images/Blog/p9i2.jpeg', 'p9'),
('p9i3', 3, 'images/Blog/p9i3.jpeg', 'p9'),
('p9i4', 4, 'images/Blog/p9i4.jpeg', 'p9');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `post_imgs`
--
ALTER TABLE `post_imgs`
  ADD PRIMARY KEY (`img_id`),
  ADD KEY `post_id` (`post_id`);

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `post_imgs`
--
ALTER TABLE `post_imgs`
  ADD CONSTRAINT `post_imgs_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
