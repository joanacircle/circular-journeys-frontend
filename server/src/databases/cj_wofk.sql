-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 02 月 16 日 23:17
-- 伺服器版本： 5.7.39
-- PHP 版本： 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `cj_wofk`
--

-- --------------------------------------------------------

--
-- 資料表結構 `posts`
--

CREATE TABLE `posts` (
  `post_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '文章編號',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '文章創立時間',
  `modify_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '文章修改時間',
  `member_id` varchar(225) NOT NULL COMMENT '會員編號',
  `post_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '文章標題',
  `post_content` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '文章內文',
  `total_likes` bigint(255) NOT NULL DEFAULT '0' COMMENT '按讚數'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `posts`
--

INSERT INTO `posts` (`post_id`, `create_at`, `modify_at`, `member_id`, `post_title`, `post_content`, `total_likes`) VALUES
('p1', '2022-12-01 08:34:30', '2022-12-22 16:12:00', '123458', '高雄一日遊-駁二、愛河、瑞豐夜市', '今天我們先去高雄的駁二藝術特區裡有許多精彩的藝術展覽，我們看了很久才走出來，我們沿著小路漫步，欣賞著各式各樣的藝術作品。接著，我們走到了愛河畔，沿著小徑悠閒地散步，看著河水悠悠地流過。\r\n最後，我們到了瑞豐夜市，吃了許多美味的小吃。首先，我們品嘗了一道傳統的台灣小吃——臭豆腐。臭豆腐的味道香醇，口感酥脆，而且很有嚼勁。接著，我們點了一道高雄特色的海鮮炒麵，裡面有豐富的海鮮，搭配著Q彈的麵條，吃起來非常美味。最後，我們點了一杯珍珠奶茶，清新的口感搭配著珍珠的Q彈，讓我們在逛夜市的同時又能消暑。整個晚上，我們品嘗了許多美味的小吃，並且在瑞豐夜市的氣氛中度過了一個愉快的夜晚。', 300),
('p10', '2022-12-14 08:52:31', '2023-02-10 02:52:31', '123458', '高雄燈會', '2023高雄燈會回歸地區燈會，首度移師至左營蓮池潭風景區辦理，結合在地文化地景特色並呼應兔年童趣元素，讓可愛的兔子們在蓮池潭陪伴大家共度春節，以小而美的療癒燈會，讓國內外遊客以不同的角度家認識蓮池潭這個國際知名的高雄景點，為高雄觀光產業注入新活水，也為高雄燈會歷史寫下創新的一頁。\r\n活動時間：112年1月26日(初五)至2月6日(初十五)，每日18:00亮燈\r\n\r\n巨蛋旅店\r\n高雄市旅館495號\r\n高雄市鼓山區文忠路1號\r\n', 500),
('p2', '2022-12-03 08:34:30', NULL, '123458', '高雄藝術之旅', '今天我們去了大東藝術中心，那裡有許多精彩的展覽和活動。我們先參觀了當代藝術展，展出了許多創意十足的作品。接著我們參加了為期一個小時的雕塑工作坊，學習如何製作雕塑。。整個旅程令人耳目一新，我們都很享受。\r\n接下來我們到高雄市立美術館，他是一座不容錯過的文化景點。該館自1985年開幕以來，一直致力於收藏、展示、教育和保育台灣的藝術文化遺產。館內展出的藝術作品涵蓋了台灣近百年的歷史，包括傳統工藝、繪畫、雕塑、攝影等各類媒材。除了定期展覽，高雄市立美術館也舉辦各種文化活動，如講座、工作坊、音樂會、戶外雕塑展等，讓民眾有機會更深入地接觸藝術。\r\n最後，我們在外面的咖啡廳休息了一會兒，欣賞著美麗的城市風景。', 1000),
('p3', '2022-12-04 08:34:30', '2022-12-31 04:19:00', '123458', '壽山賞猴子', '今天我和朋友登上壽山，海拔約三百多公尺，是一座非常美麗的山。\n\n我們從下午出發了，一路上看到許多不同的植物和鳥類。爬山的道路有很多可愛的猴子，達到山頂時，美麗的風景讓我們把疲憊忘得一乾二淨，美景令我們流連忘返。\n\n回程的路程比較輕鬆，我們在山腳下的小店休息了一下，享用著美味的在地小吃。\n\n整個爬山之旅讓我們收穫頗多，也讓我們更加親近大自然。我們期待下一次登山的挑戰！', 0),
('p4', '2022-12-06 08:34:30', '2022-12-26 02:04:19', '123458', '高雄之旅：遊覽城市景點、品嘗美食和體驗文化', '高雄是台灣南部的一座繁華都市，有許多美麗的景點和美食可供遊客品嘗。在這裡，你可以沿著高雄市中心的愛河散步，感受城市的活力；也可以前往高雄市區周邊的山區遊玩，享受大自然的美景。\r\n一天的行程可以從早上在高雄車站附近的早餐店享用豐富的早餐開始。接著，你可以前往高雄市立美術館，欣賞當地藝術家的作品，或者到高雄塔遊覽，俯瞰整個城市風光。\r\n中午，你可以前往高雄市中心品嘗當地的美食，比如高雄小吃的經典——老周燒肉。晚上，你可以前往愛河沿岸的風景區，欣賞夜景，或者到高雄的夜市小吃區品嘗當地的小吃。\r\n如果你想要體驗更多的自然景觀，你可以前往高雄市區周邊，例如旗津、阿公店水庫等。在這裡，你可以漫步在綠意盎然的山谷中，或者登上山頂，俯瞰周圍的美景。\r\n總的來說，高雄是一座美麗的城市，有許多的景點和美食可供遊客品嘗。除了上述提到的景點之外，高雄還有許多其他值得一遊的地方。例如，你可以前往高雄85大樓，俯瞰整座城市的美景；也可以到高雄市立歷史博物館；或者到高雄市立圖書館，欣賞當地文化藝術展覽。\r\n如果你想要體驗當地的文化，你可以到高雄的蓮池潭區遊覽，這裡有許多古蹟和寺廟，還有著名的蓮潭公園。此外，高雄市還有許多漂亮的海灘可供遊客游泳和曬太陽，例如旗津海水浴場、柯打海水浴場等。\r\n總的來說，高雄是一座美麗的城市，有豐富的歷史文化和自然風光。在這裡，你可以沿著愛河散步，感受城市的活力；也可以前往周邊的山區，享受大自然的美景。無論你是想要欣賞藝術、品嘗美食、了解當地文化，還是想要游泳海灘，高雄都能滿足你的需求。', 30000),
('p5', '2023-01-09 08:43:02', NULL, '123456', '高雄壽山動物園一日遊', '高雄市壽山動物園是南部最大的公立動物園，為高雄市觀光局轄管，是台灣三座市立動物園之一，規模僅次於臺北市立動物園，2022年改善了動物的家與戶外活動空間，並設置動物友善的空中觀察廊道，讓高雄居民與遊客能以不同角度、低干擾的情況下，近距離觀察可愛動物的日常生活，是個適合親子休閒、戶外教學、生態科普的教育場所。\r\n\r\n友善觀察動物與牠們的棲地\r\n壽山動物園內透過植栽柔化邊界，設置空中廊道穿梭在動物的棲地上，兩旁隨之增高的網狀藩籬，讓遊客隱身其中並可從高處觀看動物們的互動，走進豎立於空橋的2座挑高山屋，與懸掛空橋下的4座動物觀察廊道，透過大面積的落地玻璃，能夠看見貼近牠們原生的棲地環境，看見水豚愜意地泡湯、獅子慵懶地曬太陽，或是台灣黑熊自在地磨蹭樹幹抓癢，各種動物可愛真實的樣貌，讓人彷彿走進動物的家，多重體驗牠們的生活空間。\r\n\r\n改建後的壽山動物園，成為一處融合自然的和諧參觀場所，園區動線與道路進行改善，提供遊園小火車帶你逛園區；在參觀路線上設置趣味性的影片與解說牌，讓大小朋友能更深入了解動物的習性；而親水廣場變身超好玩的噴泉、像煙囪的水霧，讓小朋友可在清涼的水池打水仗；更將老舊獸舍進行改造，打開部分屋頂，導入陽光和雨水，改善獸舍的通風、清潔與排水功能，打造舒適的動物生活空間。\r\n\r\n景點資訊\r\n開放時間：\r\n週二至週日 09:00~17:00(最後入園時間16:30)，週一及除夕休園，如週一遇國定假日則照常開園\r\n\r\n門票資訊：\r\n試營運期間採預購門票制，平日限額2000張、假日3000張，將於111年12月14日上午10點開放售票，民眾可至線上預約訂票系統完成註冊後預約入園時段，也可到7-11 ibon或kkday購票。詳請請上壽山動物園官方網站\r\n\r\n連絡電話：\r\n+886-7-5215187\r\n\r\n傳真：\r\n+886-7-5331502\r\n\r\n地址：\r\n高雄市鼓山區萬壽路350號\r\n', 600),
('p6', '2023-01-11 02:52:31', '2023-02-09 08:52:31', '123456', '大岡山登山', '大崗山範圍橫跨岡山、燕巢、阿蓮和田寮四區，幅員遼闊廣大，海拔最高312公尺，居高臨下的地勢優勢，在過去曾為封閉的軍事重鎮，入山還得經過申請；現在的大崗山風景區，不僅遍佈古剎名塔，亦為登山步道熱門景點，更有神秘的石灰岩地形值得一探究竟。\r\n\r\n風景區內林蔭茂密，有著原始的生態景觀，地質屬珊瑚礁石灰岩，加上其特殊的階梯斷層構造，形成多樣且迷人的自然景觀，在清代就以「崗山樹色」名列「鳳山八景」。\r\n大崗山自然生態區\r\n生態園區面積八十公頃，園區中有多條曲折通幽的林蔭步道連結，以造形各異的美麗涼亭、平台提供遊客休憩賞景。挺拔的綠竹、相思樹林、羊蹄甲、櫻花道、黃金風鈴木…在步道旁依四季時序開放，沿途觀賞大崗山生態之美，荷花點點的生態池則是觀察鳥類及水中生物最佳的地點。\r\n\r\n大崗山自然生態園區沿途可見豐富的自然生態及人文景觀，如詩如畫般的景緻宛如世外桃源，夜間遠眺山下如繁星點點的燈火，又有另一番風情。\r\n\r\n石母乳與一線天\r\n石母乳與一線天位於大崗山後山，可由田寮區的朝元寺方向進入，後山少了大批的遊客、多了原始天然的綠意。大崗山屬於珊瑚礁石灰岩地型，步道沿途可見不少山洞溝槽，為原始山林增添不少神秘氣息。\r\n\r\n山區的石灰岩壁千百年來經過岩融過程，岩壁的紋理如同飛瀑流動，景緻奇幻，碧水洞後的石灰岩沈積物經過漫長歲月形成鐘乳石，終年滴水不斷的奇特景觀被當地人稱之為石母乳。\r\n\r\n走過石母乳旁的山中棧道，像劈裂天地般的高達二至三公尺的峽谷聳立眼前，頗有大自然開天闢地的壯闊感。相傳在明朝年間大崗山忽然發出「山鳴」，山脊自南向北龜裂，形成這道長約百米的山溝，由於入內仰望可見天空自成一線，故名「一線天」。\r\n\r\n一線天地處石灰岩地質斷層溝谷構造，山壁上處處可見溶蝕地形，看似流動實為岩石的地型，是觀察大自然鬼斧神工地質的踏青好去處。\r\n\r\n晚上我們住在冒煙的喬就是公寓旅店\r\n', 800),
('p7', '2023-01-12 07:07:44', '2023-02-08 08:52:31', '123458', '高雄逛街行程', '全方位一日遊生活體驗最佳去處\r\n統一夢時代購物中心\r\n全台最大的購物中心，和國內外知名800家進駐廠商及1,000個知名品牌，建構出多元豐富的購物休閒空間，其中取名為高雄之眼的摩天輪可以登高飽覽港都風光，更是夢時代最具特色的遊憩景點。\r\n鄰近景點：MLD台鋁生活商場、凱旋青年夜市\r\n交通方式：捷運紅線R6凱旋站，轉輕軌C5夢時代站\r\n凱旋夜市\r\n佔地一萬四千多坪，四百多格攤位整齊規劃，用綠色棚架搭建排開，即使寬大的場地依然擠滿人潮，排上滷味、豆乳雞等銅板小吃的隊伍，聽著叫賣聲和遊戲機電子音效展開美食生活尋寶之旅。\r\n\r\n營業時間：\r\n週四至週日17:00-00:00；週一至週三休息\r\n交通方式：\r\n搭乘高捷紅線至「凱旋站」，出站轉乘免費接駁車或步行5分鐘即可抵達\r\n', 1000),
('p8', '2022-12-13 08:52:31', '2023-02-03 02:06:52', '123456', '高雄名產美食集合', '今天天氣太熱了，所以我們決定先去吃冰！\r\n散步路徑：\r\n左營區新庄仔路546巷4號, Kaohsiung, Taiwan\r\n07 556 1620\r\nfacebook.com/wpichsieh\r\n外出旅遊除了美好的回憶外，不免俗地會帶上在地的特產，讓出遊的喜悅在返家後還能細細品味！高雄除了烏魚子、旗山香蕉、美濃白蘿蔔……等生鮮外，還有老字號店家的糕餅，或是具有在地特色的文創品，都是相當推薦的紀念禮品，送禮自用兩相宜！\r\n吳記餅店\r\n綠豆椪\r\n創立自1937年，吳記餅店琢磨於糕餅的口感，創新卻仍保留傳統手藝的精髓，將味道和心意封存在糕點永流傳。綠豆椪、鴛鴦餅、蝦米肉餅是吳記餅舖的三大經典傳香糕點，用刀鋒劃開壓印著紅字的酥黃餅皮，豪放展現豐厚餡料的切面，富有層次的酥皮在口中散開，真材實料的內餡越嚼越香，將韻味嚼進記憶深處。\r\n\r\n07-746-2291\r\n高雄市鳳山區光遠路284之1號\r\n', 700),
('p9', '2022-12-14 07:52:31', '2023-02-09 08:52:31', '123457', '夜間觀光 | 高雄夜景', '有別於白天的艷陽活力，夜晚的高雄有著人文、靜謐的氣息，暢遊高雄山海河港美景，可以從白天玩到晚上、從海邊玩到山上，體驗愛河灣、新光碼頭與旗津風車公園的海濱浪漫，大崗山風景區、壽山Love情人觀景台的繽紛夢幻，以及愛河畔異國風味的白色戀人貨櫃屋，12處越夜越美麗的景點不藏私推薦，與家人、情人伴侶、朋友，一起串起夜之高雄的旅行記憶。\r\n\r\n旗津風車公園它銜接旗津漁港的觀光步道，扮演過港隧道進入旗津門面的第一個海岸印象景點，旗津擁有豐沛的風力資源，七座造型獨特的三葉式風車面對遼闊的海面不停轉動，園區內有觀海看台及表演廣場，造型獨特又可愛的海洋生物拼貼創作，既生動又有趣，堪稱旗津最療癒的景點。\r\n\r\n大港橋\r\n是全臺首座水平旋轉景觀橋樑，也是亞洲最長的跨港旋轉橋，串連駁二藝術特區與棧貳庫2處熱門景點，是目前最新潮的旅遊路線，晚間橋身燈光點綴，景色格外迷人。\r\n\r\n住宿：\r\n城市商旅駁二館\r\n高雄市旅館491號\r\n高雄市鹽埕區公園二路83號\r\n', 2500);

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

-- --------------------------------------------------------

--
-- 資料表結構 `post_like`
--

CREATE TABLE `post_like` (
  `id` int(250) NOT NULL COMMENT '編號',
  `post_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '文章編號',
  `member_id` varchar(225) NOT NULL COMMENT '會員編號'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
('t24', '風景', 'p3'),
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

-- --------------------------------------------------------

--
-- 資料表結構 `users_information`
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
-- 傾印資料表的資料 `users_information`
--

INSERT INTO `users_information` (`id`, `member_id`, `created_at`, `active_status`, `points`, `ticket`, `first_name`, `last_name`, `birthday`, `sex`, `password`, `token`, `email`, `telephone`, `nation`, `city`, `districts`, `postal_code`, `address`, `payment_type`, `provider`, `account_no`, `expiry`) VALUES
(1, '123456', '2022-12-21 02:44:42', 1, 9457, 2, 'Chou', 'Alan', '1995-04-14', 'm', 'e10adc3949ba59abbe56e057f20f883e', '9994c615-f679-482b-8d4b-1c56db281f1b', 'alan@gmail.com', '0970688851', '臺灣', ' 臺中市', '太平區', '80711', '環中東路三段507號6樓之6', '信用卡', 'VISA', '1111 2222 3333 4444', '2022-12-21'),
(2, '123457', '2022-12-21 02:56:42', 1, 8778, 1, 'La', 'Kevin', '0000-00-00', 'f', 'e10adc3949ba59abbe56e057f20f883e', '8aade3d7-b683-4348-adc9-1019d2c6b15d', 'kevin@gmail.com', '0900000000', '臺灣', '高雄市', NULL, '80711', '高雄市阿公店0號水庫', '信用卡', 'VISA', '1111 2222 3333 4444', '2022-12-21'),
(4, '123458', '2022-12-21 02:58:19', 1, 8787, 8, '張', '圓圓', '1996-06-05', 'f', 'e10adc3949ba59abbe56e057f20f883e', '1edc2042-17f9-4470-b1dd-386b8823698b', 'circle@gmail.com', '0900000000', '臺灣', '高雄市', '鼓山區', '80711', '巨蛋路', '信用卡', 'VISA', '1111 2222 3333 4444', '2022-12-21');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`);

--
-- 資料表索引 `post_imgs`
--
ALTER TABLE `post_imgs`
  ADD PRIMARY KEY (`img_id`);

--
-- 資料表索引 `post_like`
--
ALTER TABLE `post_like`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `post_tags`
--
ALTER TABLE `post_tags`
  ADD PRIMARY KEY (`tag_id`,`post_id`) USING BTREE;

--
-- 資料表索引 `users_information`
--
ALTER TABLE `users_information`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post_like`
--
ALTER TABLE `post_like`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT COMMENT '編號';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `users_information`
--
ALTER TABLE `users_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '編號', AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
