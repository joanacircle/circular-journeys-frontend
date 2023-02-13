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
-- 資料表結構 `post_tags`
--

CREATE TABLE `post_tags` (
  `tag_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '關鍵字編號',
  `tag` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '關鍵字',
  `post_id` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '文章編號'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `post_tags`
--

INSERT INTO `post_tags` (`tag_id`, `tag`, `post_id`) VALUES
('t1', '駁二藝術特區', 'p1'),
('t1', '駁二藝術特區', 'p9'),
('t10', '爬山', 'p3'),
('t10', '美食', 'p4'),
('t10', '爬山', 'p6'),
('t10', '美食', 'p8'),
('t11', '老周燒肉', 'p4'),
('t12', '旗津', 'p4'),
('t12', '旗津', 'p9'),
('t13', '阿公店水庫', 'p4'),
('t14', '歷史博物館', 'p4'),
('t15', '圖書館', 'p4'),
('t16', '蓮池潭', 'p10'),
('t16', '蓮池潭', 'p4'),
('t17', '85大樓', 'p4'),
('t18', '壽山動物園', 'p5'),
('t19', '親子', 'p5'),
('t2', '愛河', 'p1'),
('t2', '愛河', 'p4'),
('t2', '愛河', 'p9'),
('t20', '戶外', 'p5'),
('t21', '大崗山', 'p6'),
('t21', '大崗山', 'p9'),
('t22', '岡山', 'p6'),
('t23', '燕巢', 'p6'),
('t24', '阿蓮', 'p6'),
('t25', '田寮', 'p6'),
('t26', '石母乳', 'p6'),
('t27', '一線天', 'p6'),
('t28', '冒煙的喬就是公寓旅店', 'p6'),
('t29', '夢時代', 'p7'),
('t29', '散步路徑', 'p8'),
('t3', '瑞豐夜市', 'p1'),
('t30', '左營', 'p10'),
('t30', '購物中心', 'p7'),
('t30', '左營', 'p8'),
('t31', '凱旋夜市', 'p7'),
('t31', '特產', 'p8'),
('t32', '小吃', 'p7'),
('t32', '旗山', 'p8'),
('t33', '凱旋站', 'p7'),
('t33', '美濃', 'p8'),
('t34', '吳記餅店', 'p8'),
('t35', '鳳山', 'p8'),
('t36', '夜景', 'p9'),
('t37', '海邊', 'p9'),
('t38', '山上', 'p9'),
('t39', '新光碼頭', 'p9'),
('t4', '小吃', 'p1'),
('t40', '壽山', 'p9'),
('t41', 'Love情人觀景', 'p9'),
('t42', '旗津風車公園', 'p9'),
('t43', '旗津漁港', 'p9'),
('t44', '過港隧道', 'p9'),
('t45', '大港橋', 'p9'),
('t46', '住宿', 'p10'),
('t46', '住宿', 'p9'),
('t47', '城市商旅', 'p9'),
('t48', '鹽埕區', 'p9'),
('t49', '高雄燈會', 'p10'),
('t5', '大東藝術中心', 'p2'),
('t50', '巨蛋旅店', 'p10'),
('t51', '鼓山區', 'p10'),
('t6', '當代藝術展', 'p2'),
('t7', '美術館', 'p2'),
('t8', '卡啡那咖啡廳', 'p2'),
('t9', '壽山', 'p3');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `post_tags`
--
ALTER TABLE `post_tags`
  ADD PRIMARY KEY (`tag_id`,`post_id`) USING BTREE,
  ADD KEY `post_tags_ibfk_1` (`post_id`);

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `post_tags`
--
ALTER TABLE `post_tags`
  ADD CONSTRAINT `post_tags_ibfk_1` FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
