-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- 主機： localhost:8889
-- 產生時間： 2023 年 03 月 01 日 13:15
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
-- 資料庫： `circular_journeys`
--

-- --------------------------------------------------------

--
-- 資料表結構 `orders`
--

CREATE TABLE `orders` (
  `o_id` int(11) NOT NULL,
  `member_id` varchar(225) NOT NULL,
  `total_price` decimal(10,2) NOT NULL COMMENT '總額',
  `is_paid` int(11) NOT NULL DEFAULT '0' COMMENT '付了嗎',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '時間'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `order_detail`
--

CREATE TABLE `order_detail` (
  `d_id` int(11) NOT NULL,
  `o_id` int(11) NOT NULL,
  `p_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL DEFAULT '0' COMMENT '數量'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `posts`
--

CREATE TABLE `posts` (
  `post_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '文章編號',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '創立時間',
  `modify_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '修改時間',
  `member_id` varchar(225) NOT NULL COMMENT '會員編號',
  `post_title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '文章標題',
  `post_content` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '文章內文',
  `total_likes` bigint(255) NOT NULL DEFAULT '0' COMMENT '按讚數',
  `cover` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '首圖路徑'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `posts`
--

INSERT INTO `posts` (`post_id`, `create_at`, `modify_at`, `member_id`, `post_title`, `post_content`, `total_likes`, `cover`) VALUES
('p01126208-b5bf-40e3-8336-812be7a72ff9', '2023-01-01 13:49:31', '2023-03-01 03:14:46', '123458', '高雄之旅：遊覽城市景點、品嘗美食和體驗文化', '<p>高雄是台灣南部的一座繁華都市，有許多美麗的景點和美食可供遊客品嘗。在這裡，你可以沿著高雄市中心的愛河散步，感受城市的活力；也可以前往高雄市區周邊的山區遊玩，享受大自然的美景。<br>一天的行程可以從早上在高雄車站附近的早餐店享用豐富的早餐開始。接著，你可以前往高雄市立美術館，欣賞當地藝術家的作品，或者到高雄塔遊覽，俯瞰整個城市風光。</p><p><img src=\"http://localhost:3001/blog/85933e10-ea21-4084-8f3f-738a338965ab.jpeg\"><br>中午，你可以前往高雄市中心品嘗當地的美食，比如高雄小吃的經典——老周燒肉。晚上，你可以前往愛河沿岸的風景區，欣賞夜景，或者到高雄的夜市小吃區品嘗當地的小吃。</p><figure class=\"image\"><img src=\"http://localhost:3001/blog/fa4ccfb2-ced3-4c58-b27b-8568340ccd8a.jpeg\"></figure><p><br>如果你想要體驗更多的自然景觀，你可以前往高雄市區周邊，例如旗津、阿公店水庫等。在這裡，你可以漫步在綠意盎然的山谷中，或者登上山頂，俯瞰周圍的美景。<br>總的來說，高雄是一座美麗的城市，有許多的景點和美食可供遊客品嘗。除了上述提到的景點之外，高雄還有許多其他值得一遊的地方。</p><figure class=\"image\"><img src=\"http://localhost:3001/blog/10e09179-37f1-4042-a1e6-e8e76770a594.jpeg\"></figure><p>例如，你可以前往高雄85大樓，俯瞰整座城市的美景；也可以到高雄市立歷史博物館；或者到高雄市立圖書館，欣賞當地文化藝術展覽。<br>如果你想要體驗當地的文化，你可以到高雄的蓮池潭區遊覽，這裡有許多古蹟和寺廟，還有著名的蓮潭公園。此外，高雄市還有許多漂亮的海灘可供遊客游泳和曬太陽，例如旗津海水浴場、柯打海水浴場等。<br>總的來說，高雄是一座美麗的城市，有豐富的歷史文化和自然風光。在這裡，你可以沿著愛河散步，感受城市的活力；也可以前往周邊的山區，享受大自然的美景。無論你是想要欣賞藝術、品嘗美食、了解當地文化，還是想要游泳海灘，高雄都能滿足你的需求。</p>', 0, '<figure class=\"image\"><img src=\"http://localhost:3001/blog/87e8df09-bbcb-4580-892c-82c9def0a489.jpeg\"></figure>'),
('p11d58b32-1832-430b-8491-a6c166aad3a1', '2023-01-05 13:52:15', NULL, '123456', '高雄壽山動物園一日遊', '<p>高雄市壽山動物園是南部最大的公立動物園，為高雄市觀光局轄管，是台灣三座市立動物園之一，規模僅次於臺北市立動物園，2022年改善了動物的家與戶外活動空間，並設置動物友善的空中觀察廊道，讓高雄居民與遊客能以不同角度、低干擾的情況下，近距離觀察可愛動物的日常生活，是個適合親子休閒、戶外教學、生態科普的教育場所。</p><p>友善觀察動物與牠們的棲地<br>壽山動物園內透過植栽柔化邊界，設置空中廊道穿梭在動物的棲地上，兩旁隨之增高的網狀藩籬，讓遊客隱身其中並可從高處觀看動物們的互動，走進豎立於空橋的2座挑高山屋，與懸掛空橋下的4座動物觀察廊道，透過大面積的落地玻璃，能夠看見貼近牠們原生的棲地環境，看見水豚愜意地泡湯、獅子慵懶地曬太陽，或是台灣黑熊自在地磨蹭樹幹抓癢，各種動物可愛真實的樣貌，讓人彷彿走進動物的家，多重體驗牠們的生活空間。</p><p>改建後的壽山動物園，成為一處融合自然的和諧參觀場所，園區動線與道路進行改善，提供遊園小火車帶你逛園區；在參觀路線上設置趣味性的影片與解說牌，讓大小朋友能更深入了解動物的習性；而親水廣場變身超好玩的噴泉、像煙囪的水霧，讓小朋友可在清涼的水池打水仗；更將老舊獸舍進行改造，打開部分屋頂，導入陽光和雨水，改善獸舍的通風、清潔與排水功能，打造舒適的動物生活空間。</p><figure class=\"image\"><img src=\"http://localhost:3001/blog/091732e7-9ed4-402f-98fd-dd4d0e54a2c6.jpeg\"></figure><p>景點資訊<br>開放時間：<br>週二至週日 09:00~17:00(最後入園時間16:30)，週一及除夕休園，如週一遇國定假日則照常開園</p><p>門票資訊：<br>試營運期間採預購門票制，平日限額2000張、假日3000張，將於111年12月14日上午10點開放售票，民眾可至線上預約訂票系統完成註冊後預約入園時段，也可到7-11 ibon或kkday購票。詳請請上壽山動物園官方網站</p><p>連絡電話：<br>+886-7-5215187</p><p>傳真：<br>+886-7-5331502</p><p>地址：<br>高雄市鼓山區萬壽路350號<br>&nbsp;</p>', 0, '<figure class=\"image\"><img src=\"http://localhost:3001/blog/5defc0fd-6919-4604-8512-685dc5908b32.jpeg\"></figure>'),
('p1493b79d-7206-49a3-bff8-78a7e4f06a19', '2023-01-10 13:44:43', NULL, '123458', '高雄藝術之旅', '<p>今天我們去了大東藝術中心，那裡有許多精彩的展覽和活動。我們先參觀了當代藝術展，展出了許多創意十足的作品。接著我們參加了為期一個小時的雕塑工作坊，學習如何製作雕塑。整個旅程令人耳目一新，我們都很享受。</p><figure class=\"image\"><img src=\"http://localhost:3001/blog/72d35d49-309d-4529-b847-e13dfd22cfdd.jpeg\"></figure><p>接下來我們到高雄市立美術館，他是一座不容錯過的文化景點。該館自1985年開幕以來，一直致力於收藏、展示、教育和保育台灣的藝術文化遺產。館內展出的藝術作品涵蓋了台灣近百年的歷史，包括傳統工藝、繪畫、雕塑、攝影等各類媒材。除了定期展覽，高雄市立美術館也舉辦各種文化活動，如講座、工作坊、音樂會、戶外雕塑展等，讓民眾有機會更深入地接觸藝術。</p><figure class=\"image\"><img src=\"http://localhost:3001/blog/0c6f7198-dcc7-46a1-961b-9c6f47de08e0.jpeg\"></figure><p>最後，我們在外面的卡啡那咖啡廳休息了一會兒，欣賞著美麗的城市風景</p><figure class=\"image\"><img src=\"http://localhost:3001/blog/cbd6766f-3422-406d-8565-2a163a0b477f.jpeg\"></figure>', 0, '<figure class=\"image\"><img src=\"http://localhost:3001/blog/64e7af90-c1cd-4981-8ba2-ab8dd2ef0177.jpeg\"></figure>'),
('p310521a5-9b40-47b4-a569-31f3fabd9b37', '2023-01-15 13:41:28', NULL, '123458', '高雄一日遊-駁二、愛河、瑞豐夜市', '<p>今天我們先去高雄的駁二藝術特區裡有許多精彩的藝術展覽，我們看了很久才走出來，我們沿著小路漫步，欣賞著各式各樣的藝術作品。接著，我們走到了愛河畔，沿著小徑悠閒地散步，看著河水悠悠地流過。</p><p>最後，我們到了瑞豐夜市，吃了許多美味的小吃。首先，我們品嘗了一道傳統的台灣小吃——臭豆腐。臭豆腐的味道香醇，口感酥脆，而且很有嚼勁。接著，我們點了一道高雄特色的海鮮炒麵，裡面有豐富的海鮮，搭配著Q彈的麵條，吃起來非常美味。最後，我們點了一杯珍珠奶茶，清新的口感搭配著珍珠的Q彈，讓我們在逛夜市的同時又能消暑。整個晚上，我們品嘗了許多美味的小吃，並且在瑞豐夜市的氣氛中度過了一個愉快的夜晚。</p><figure class=\"image\"><img src=\"http://localhost:3001/blog/216e13cf-b6c9-45a6-a6a1-a1f57c3b6ab1.jpeg\"></figure>', 0, '<figure class=\"image\"><img src=\"http://localhost:3001/blog/bb3a678c-662a-45bb-88f2-bacba29a846a.jpeg\"></figure>'),
('p387a64fe-67ad-4fb1-b139-08d4dc09d60f', '2023-01-20 14:01:18', NULL, '123457', '夜間觀光 | 高雄夜景', '<p>有別於白天的艷陽活力，夜晚的高雄有著人文、靜謐的氣息，暢遊高雄山海河港美景，可以從白天玩到晚上、從海邊玩到山上，體驗愛河灣、新光碼頭與旗津風車公園的海濱浪漫，大崗山風景區、壽山Love情人觀景台的繽紛夢幻，以及愛河畔異國風味的白色戀人貨櫃屋，12處越夜越美麗的景點不藏私推薦，與家人、情人伴侶、朋友，一起串起夜之高雄的旅行記憶。</p><figure class=\"image\"><img src=\"http://localhost:3001/blog/f9abfb40-89d9-4514-91e5-17f41f640242.jpeg\"></figure><p>旗津風車公園它銜接旗津漁港的觀光步道，扮演過港隧道進入旗津門面的第一個海岸印象景點，旗津擁有豐沛的風力資源，七座造型獨特的三葉式風車面對遼闊的海面不停轉動，園區內有觀海看台及表演廣場，造型獨特又可愛的海洋生物拼貼創作，既生動又有趣，堪稱旗津最療癒的景點。</p><p>大港橋</p><p><img src=\"http://localhost:3001/blog/5b42202d-2f5c-4056-b0e6-17525ef86448.jpeg\"><br>是全臺首座水平旋轉景觀橋樑，也是亞洲最長的跨港旋轉橋，串連駁二藝術特區與棧貳庫2處熱門景點，是目前最新潮的旅遊路線，晚間橋身燈光點綴，景色格外迷人。</p><p>住宿：<br>城市商旅駁二館</p><p><img src=\"http://localhost:3001/blog/a6c6d4f3-dc2f-47a6-9215-56ab97314799.jpeg\"><br>高雄市旅館491號<br>高雄市鹽埕區公園二路83號<br>&nbsp;</p>', 0, '<figure class=\"image\"><img src=\"http://localhost:3001/blog/1c0d6c7c-964e-461e-a7ae-dda8adef1461.jpeg\"></figure>'),
('p3b1b5f5a-eee7-48fc-bdfc-e2010bb0c48c', '2023-01-25 13:56:02', NULL, '123458', '高雄逛街行程', '<p>全方位一日遊生活體驗最佳去處<br>統一夢時代購物中心<br>全台最大的購物中心，和國內外知名800家進駐廠商及1,000個知名品牌，建構出多元豐富的購物休閒空間，其中取名為高雄之眼的摩天輪可以登高飽覽港都風光，更是夢時代最具特色的遊憩景點。<br>鄰近景點：MLD台鋁生活商場、凱旋青年夜市<br>交通方式：捷運紅線R6凱旋站，轉輕軌C5夢時代站</p><p><img src=\"http://localhost:3001/blog/8e70740f-0a41-4317-9093-0f6fd7cf3530.png\"><br>凱旋夜市<br>佔地一萬四千多坪，四百多格攤位整齊規劃，用綠色棚架搭建排開，即使寬大的場地依然擠滿人潮，排上滷味、豆乳雞等銅板小吃的隊伍，聽著叫賣聲和遊戲機電子音效展開美食生活尋寶之旅。</p><p>營業時間：<br>週四至週日17:00-00:00；週一至週三休息<br>交通方式：<br>搭乘高捷紅線至「凱旋站」，出站轉乘免費接駁車或步行5分鐘即可抵達<br>&nbsp;</p>', 0, '<figure class=\"image\"><img src=\"http://localhost:3001/blog/bf77d286-78a3-4b13-85b7-d530b8f609dc.jpeg\"></figure>'),
('p7879f16e-76a4-4767-97f8-dde83551e1b2', '2023-01-25 13:58:40', NULL, '123456', '高雄名產美食集合', '<p>今天天氣太熱了，所以我們決定先去吃冰！<br>散步路徑：<br>左營區新庄仔路546巷4號, Kaohsiung, Taiwan<br>07 556 1620<br><a href=\"https://www.facebook.com/wpichsieh\">facebook.com/wpichsieh</a></p><p><img src=\"http://localhost:3001/blog/838d083c-e0be-4271-b8fd-2ccf8263a78c.jpeg\"><br>外出旅遊除了美好的回憶外，不免俗地會帶上在地的特產，讓出遊的喜悅在返家後還能細細品味！高雄除了烏魚子、旗山香蕉、美濃白蘿蔔……等生鮮外，還有老字號店家的糕餅，或是具有在地特色的文創品，都是相當推薦的紀念禮品，送禮自用兩相宜！<br>吳記餅店<br>綠豆椪</p><p><img src=\"http://localhost:3001/blog/a3b2049f-7e83-4f2b-9033-349602c24202.jpeg\"><br>創立自1937年，吳記餅店琢磨於糕餅的口感，創新卻仍保留傳統手藝的精髓，將味道和心意封存在糕點永流傳。綠豆椪、鴛鴦餅、蝦米肉餅是吳記餅舖的三大經典傳香糕點，用刀鋒劃開壓印著紅字的酥黃餅皮，豪放展現豐厚餡料的切面，富有層次的酥皮在口中散開，真材實料的內餡越嚼越香，將韻味嚼進記憶深處。</p><p>07-746-2291<br>高雄市鳳山區光遠路284之1號<br>&nbsp;</p>', 0, '<figure class=\"image\"><img src=\"http://localhost:3001/blog/a53a58f3-1dd1-4423-a14c-7a3b88612826.jpeg\"></figure>'),
('pa4b04397-85ac-489b-8a38-0d88272cd0fb', '2023-01-30 13:54:19', NULL, '123456', '大岡山登山', '<p>大崗山範圍橫跨岡山、燕巢、阿蓮和田寮四區，幅員遼闊廣大，海拔最高312公尺，居高臨下的地勢優勢，在過去曾為封閉的軍事重鎮，入山還得經過申請；現在的大崗山風景區，不僅遍佈古剎名塔，亦為登山步道熱門景點，更有神秘的石灰岩地形值得一探究竟。</p><p>風景區內林蔭茂密，有著原始的生態景觀，地質屬珊瑚礁石灰岩，加上其特殊的階梯斷層構造，形成多樣且迷人的自然景觀，在清代就以「崗山樹色」名列「鳳山八景」。</p><p><img src=\"http://localhost:3001/blog/2d35614e-e62a-4d9f-ad47-571046d592a6.jpeg\"><br>大崗山自然生態區<br>生態園區面積八十公頃，園區中有多條曲折通幽的林蔭步道連結，以造形各異的美麗涼亭、平台提供遊客休憩賞景。挺拔的綠竹、相思樹林、羊蹄甲、櫻花道、黃金風鈴木…在步道旁依四季時序開放，沿途觀賞大崗山生態之美，荷花點點的生態池則是觀察鳥類及水中生物最佳的地點。</p><p>大崗山自然生態園區沿途可見豐富的自然生態及人文景觀，如詩如畫般的景緻宛如世外桃源，夜間遠眺山下如繁星點點的燈火，又有另一番風情。</p><p>石母乳與一線天<br>石母乳與一線天位於大崗山後山，可由田寮區的朝元寺方向進入，後山少了大批的遊客、多了原始天然的綠意。大崗山屬於珊瑚礁石灰岩地型，步道沿途可見不少山洞溝槽，為原始山林增添不少神秘氣息。</p><p>山區的石灰岩壁千百年來經過岩融過程，岩壁的紋理如同飛瀑流動，景緻奇幻，碧水洞後的石灰岩沈積物經過漫長歲月形成鐘乳石，終年滴水不斷的奇特景觀被當地人稱之為石母乳。</p><p>走過石母乳旁的山中棧道，像劈裂天地般的高達二至三公尺的峽谷聳立眼前，頗有大自然開天闢地的壯闊感。相傳在明朝年間大崗山忽然發出「山鳴」，山脊自南向北龜裂，形成這道長約百米的山溝，由於入內仰望可見天空自成一線，故名「一線天」。</p><p>一線天地處石灰岩地質斷層溝谷構造，山壁上處處可見溶蝕地形，看似流動實為岩石的地型，是觀察大自然鬼斧神工地質的踏青好去處。</p><p>晚上我們住在冒煙的喬就是公寓旅店</p><p><img src=\"http://localhost:3001/blog/f860ca23-5ebb-48b1-ac2d-7eb5aef7df2e.jpeg\"><br>&nbsp;</p>', 0, '<figure class=\"image\"><img src=\"http://localhost:3001/blog/42663c16-1fcf-42dd-9753-444757e91617.jpeg\"></figure>'),
('pb4ca266a-1dd8-41be-b439-151c7ed3b960', '2023-01-31 13:46:44', NULL, '123458', '壽山賞猴子', '<p>今天我和朋友登上壽山，海拔約三百多公尺，是一座非常美麗的山。</p><p>我們從下午出發了，一路上看到許多不同的植物和鳥類。爬山的道路有很多可愛的猴子，達到山頂時，美麗的風景讓我們把疲憊忘得一乾二淨，美景令我們流連忘返。</p><figure class=\"image\"><img src=\"http://localhost:3001/blog/337c71de-c367-4e55-9e13-d7d3a66d7353.jpeg\"></figure><figure class=\"image\"><img src=\"http://localhost:3001/blog/a80e85cd-ad59-4a75-8438-c891b3a6f8f9.jpeg\"></figure><p>回程的路程比較輕鬆，我們在山腳下的小店休息了一下，享用著美味的在地小吃。</p><p>整個爬山之旅讓我們收穫頗多，也讓我們更加親近大自然。我們期待下一次登山的挑戰！</p>', 0, '<figure class=\"image\"><img src=\"http://localhost:3001/blog/ff54df45-c6f0-43a0-a52b-9a16d9fc722a.jpeg\"></figure>'),
('pd4a82e94-b5f0-459d-ac52-d7dce03a4aaa', '2023-03-01 02:31:23', NULL, '123457', '高雄名產美食介紹', '<p>今天天氣太熱了，所以我們決定先去吃冰！</p><p>散步路徑：左營區新庄仔路546巷4號, Kaohsiung, Taiwan</p><p>07 556 1620</p><p>外出旅遊除了美好的回憶外，不免俗地會帶上在地的特產，讓出遊的喜悅在返家後還能細細品味！高雄除了烏魚子、旗山香蕉、美濃白蘿蔔……等生鮮外，還有老字號店家的糕餅，或是具有在地特色的文創品，都是相當推薦的紀念禮品，送禮自用兩相宜！</p><p>吳記餅店</p><p>創立自1937年，吳記餅店琢磨於糕餅的口感，創新卻仍保留傳統手藝的精髓，將味道和心意封存在糕點永流傳。綠豆椪、鴛鴦餅、蝦米肉餅是吳記餅舖的三大經典傳香糕點，用刀鋒劃開壓印著紅字的酥黃餅皮，豪放展現豐厚餡料的切面，富有層次的酥皮在口中散開，真材實料的內餡越嚼越香，將韻味嚼進記憶深處。</p><p>07-746-2291高雄市鳳山區光遠路284之1號</p>', 0, '<figure class=\"image\"><img src=\"http://localhost:3001/blog/a3b2049f-7e83-4f2b-9033-349602c24202.jpeg\"></figure>'),
('pe7a0507c-54a1-4f63-99f4-bf7e04de6d0c', '2023-02-22 14:03:06', NULL, '123458', '高雄燈會', '<p>2023高雄燈會回歸地區燈會，首度移師至左營蓮池潭風景區辦理，結合在地文化地景特色並呼應兔年童趣元素，讓可愛的兔子們在蓮池潭陪伴大家共度春節，以小而美的療癒燈會，讓國內外遊客以不同的角度家認識蓮池潭這個國際知名的高雄景點，為高雄觀光產業注入新活水，也為高雄燈會歷史寫下創新的一頁。<br>活動時間：112年1月26日(初五)至2月6日(初十五)，每日18:00亮燈</p><p>巨蛋旅店</p><p><img src=\"http://localhost:3001/blog/2a2c529c-29ff-4bcf-98ba-0f453b7aa9e4.jpeg\"><br>高雄市旅館495號<br>高雄市鼓山區文忠路1號<br>&nbsp;</p>', 0, '<figure class=\"image\"><img src=\"http://localhost:3001/blog/f6d5f852-ee2a-4274-8e9a-87833b838daa.jpeg\"></figure>');

-- --------------------------------------------------------

--
-- 資料表結構 `post_like`
--

CREATE TABLE `post_like` (
  `id` int(250) NOT NULL COMMENT '編號',
  `post_id` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '文章編號',
  `member_id` varchar(225) NOT NULL COMMENT '會員編號'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `post_like`
--

INSERT INTO `post_like` (`id`, `post_id`, `member_id`) VALUES
(20, 'p01126208-b5bf-40e3-8336-812be7a72ff9', '123458'),
(21, 'p11d58b32-1832-430b-8491-a6c166aad3a1', '123458'),
(22, 'p1493b79d-7206-49a3-bff8-78a7e4f06a19', '123458'),
(23, 'p1493b79d-7206-49a3-bff8-78a7e4f06a19', '123457'),
(24, 'p11d58b32-1832-430b-8491-a6c166aad3a1', '123457'),
(25, 'p7879f16e-76a4-4767-97f8-dde83551e1b2', '123457'),
(32, 'pe7a0507c-54a1-4f63-99f4-bf7e04de6d0c', '123457'),
(33, 'pe7a0507c-54a1-4f63-99f4-bf7e04de6d0c', '123458');

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
('t1', '美食', 'p01126208-b5bf-40e3-8336-812be7a72ff9'),
('t1', '美食', 'p1493b79d-7206-49a3-bff8-78a7e4f06a19'),
('t1', '美食', 'p310521a5-9b40-47b4-a569-31f3fabd9b37'),
('t1', '美食', 'p7879f16e-76a4-4767-97f8-dde83551e1b2'),
('t1', '美食', 'pd4a82e94-b5f0-459d-ac52-d7dce03a4aaa'),
('t10', '爬山', 'pa4b04397-85ac-489b-8a38-0d88272cd0fb'),
('t18', '壽山動物園', 'p11d58b32-1832-430b-8491-a6c166aad3a1'),
('t18620eb4-584e-4bc7-a90a-fc27fd8b9733', '鼓山', 'pe7a0507c-54a1-4f63-99f4-bf7e04de6d0c'),
('t19', '親子', 'p11d58b32-1832-430b-8491-a6c166aad3a1'),
('t2', '景點', 'p01126208-b5bf-40e3-8336-812be7a72ff9'),
('t2', '景點', 'p02cce5be-f728-4fb2-b814-650dcfa250ad'),
('t2', '景點', 'p11d58b32-1832-430b-8491-a6c166aad3a1'),
('t2', '景點', 'p1493b79d-7206-49a3-bff8-78a7e4f06a19'),
('t2', '景點', 'p310521a5-9b40-47b4-a569-31f3fabd9b37'),
('t2', '景點', 'p387a64fe-67ad-4fb1-b139-08d4dc09d60f'),
('t2', '景點', 'p3b1b5f5a-eee7-48fc-bdfc-e2010bb0c48c'),
('t2', '景點', 'pa4b04397-85ac-489b-8a38-0d88272cd0fb'),
('t2', '景點', 'pb4ca266a-1dd8-41be-b439-151c7ed3b960'),
('t2', '景點', 'pe7a0507c-54a1-4f63-99f4-bf7e04de6d0c'),
('t20', '戶外', 'p11d58b32-1832-430b-8491-a6c166aad3a1'),
('t21', '大崗山', 'p387a64fe-67ad-4fb1-b139-08d4dc09d60f'),
('t21', '大崗山', 'pa4b04397-85ac-489b-8a38-0d88272cd0fb'),
('t23b8cf90-44ea-4902-a9e6-3c0c2c1e00cc', '台鋁', 'p3b1b5f5a-eee7-48fc-bdfc-e2010bb0c48c'),
('t28', '冒煙的喬就是公寓旅店', 'pa4b04397-85ac-489b-8a38-0d88272cd0fb'),
('t29', '夢時代', 'p3b1b5f5a-eee7-48fc-bdfc-e2010bb0c48c'),
('t29', '散步路徑', 'p7879f16e-76a4-4767-97f8-dde83551e1b2'),
('t29', '散步路徑', 'pd4a82e94-b5f0-459d-ac52-d7dce03a4aaa'),
('t3', '住宿', 'p387a64fe-67ad-4fb1-b139-08d4dc09d60f'),
('t3', '住宿', 'pe7a0507c-54a1-4f63-99f4-bf7e04de6d0c'),
('t30', '左營', 'pe7a0507c-54a1-4f63-99f4-bf7e04de6d0c'),
('t31', '特產', 'p7879f16e-76a4-4767-97f8-dde83551e1b2'),
('t40', '壽山', 'pb4ca266a-1dd8-41be-b439-151c7ed3b960'),
('t45b8cf90-44ea-4902-a9e6-3c0c2c1e11cc', '瑞豐夜市', 'p310521a5-9b40-47b4-a569-31f3fabd9b37'),
('t5', '大東藝術中心', 'p1493b79d-7206-49a3-bff8-78a7e4f06a19'),
('t7', '美術館', 'p01126208-b5bf-40e3-8336-812be7a72ff9'),
('t7', '美術館', 'p1493b79d-7206-49a3-bff8-78a7e4f06a19'),
('t741bef4d-94ab-4b61-8129-087380813188', '卡啡那', 'p1493b79d-7206-49a3-bff8-78a7e4f06a19'),
('t74330eb4-584e-4bc7-a90a-fc27fd8b8433', '駁二藝術特區', 'p310521a5-9b40-47b4-a569-31f3fabd9b37'),
('t74330eb4-584e-4bc7-a90a-fc27fd8b8433', '駁二藝術特區', 'p387a64fe-67ad-4fb1-b139-08d4dc09d60f'),
('t79049eda-5ee9-4595-81dc-f0425270d259', '吳記餅店', 'pd4a82e94-b5f0-459d-ac52-d7dce03a4aaa'),
('t83fd6430-85bd-441a-b5d7-820a64cce04b', '登山', 'pb4ca266a-1dd8-41be-b439-151c7ed3b960'),
('t86120eb4-584e-4bc7-a90a-fc27fd8b6897', '愛河', 'p01126208-b5bf-40e3-8336-812be7a72ff9'),
('t86120eb4-584e-4bc7-a90a-fc27fd8b6897', '愛河', 'p310521a5-9b40-47b4-a569-31f3fabd9b37'),
('t86120eb4-584e-4bc7-a90a-fc27fd8b6897', '愛河', 'p387a64fe-67ad-4fb1-b139-08d4dc09d60f'),
('tc646a8c5-82a5-431b-93fe-633fa619431b', '左營區', 'p7879f16e-76a4-4767-97f8-dde83551e1b2'),
('tc646a8c5-82a5-431b-93fe-633fa619431b', '左營區', 'pd4a82e94-b5f0-459d-ac52-d7dce03a4aaa'),
('tc646a8c5-82a5-431b-93fe-633fa619431b', '左營區', 'pe7a0507c-54a1-4f63-99f4-bf7e04de6d0c'),
('te0d85ef4-3197-4dab-ae4e-4c062e4e248f', '老周燒肉', 'p01126208-b5bf-40e3-8336-812be7a72ff9');

-- --------------------------------------------------------

--
-- 資料表結構 `products`
--

CREATE TABLE `products` (
  `p_id` int(11) NOT NULL,
  `title` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '標題',
  `product_desc` varchar(250) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL COMMENT '描述',
  `price` decimal(10,2) NOT NULL COMMENT '價格',
  `categories` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '分類',
  `inventory` int(11) NOT NULL COMMENT '庫存',
  `unit_sold` int(11) NOT NULL COMMENT '銷售量',
  `path1` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `path2` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `path3` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `path4` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `path5` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `path6` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `products`
--

INSERT INTO `products` (`p_id`, `title`, `product_desc`, `price`, `categories`, `inventory`, `unit_sold`, `path1`, `path2`, `path3`, `path4`, `path5`, `path6`) VALUES
(1, '80x100 單筒望遠鏡，高倍率成人望遠鏡', '專注於戶外探險愛好者，致力於攝影和相機產品研究。此高清單筒望遠鏡擁有80mm大物鏡，能帶給您更遠、更近的視界，配備BAK4棱鏡和FMC寬頻鍍膜，讓觀察野生動物更加清晰。', '5000.00', '戶外登山', 30, 60, 'p01p1', 'p01p2', 'p01p3', 'p01p4', NULL, NULL),
(2, '7合1緊急求生口哨，戶外多功能安全口哨', '附掛繩，適用於皮艇、划船、遠足、露營、攀登、狩獵、釣魚、救援信號。', '780.00', '戶外登山', 53, 67, 'p02p1', 'p02p2', 'p02p3', 'p02p4', NULL, NULL),
(3, '3支可充電長距離對講機', '帶耳機麥克風套件，USB充電器，天氣警報，3個裝。', '2100.00', '戶外登山', 22, 132, 'p03p1', 'p03p2', 'p03p3', 'p03p4', NULL, NULL),
(4, '戶外求生手環（2件裝）', '可調節，火石，哨子，適用於遠足、露營、釣魚和狩獵，黑色和黑橙色。', '1800.00', '戶外登山', 67, 458, 'p04p1', 'p04p2', 'p04p3', 'p04p4', NULL, NULL),
(5, '輕量級航空鋁徒步杖', '附延長握把和尖頭套件。', '2250.00', '戶外登山', 13, 45, 'p05p1', 'p05p2', 'p05p3', 'p05p4', NULL, NULL),
(6, '可摺疊徒步杖，鋁合金7075材質', '快速鎖定系統，伸縮式，超輕，適用於遠足、露營。', '2250.00', '戶外登山', 2, 65, 'p06p1', 'p06p2', 'p06p3', 'p06p4', NULL, NULL),
(7, '防滑鞋釘，鋼釘冰爪', '19個不銹鋼釘，適用於遠足、釣魚、散步、攀登、登山。', '2800.00', '戶外登山', 74, 21, 'p07p1', 'p07p2', 'p07p3', 'p07p4', NULL, NULL),
(8, '29合1求生工具套件', '實用的露營配件，緊急求生工具套件，適用於遠足、釣魚冒險。', '1500.00', '戶外登山', 4, 35, 'p08p1', 'p08p2', 'p08p3', 'p08p4', NULL, NULL),
(9, '可攜式單人或雙人吊床', '露營配件，室內室外均適用，附樹帶。', '3200.00', '戶外登山', 5, 12, 'p09p1', 'p09p2', 'p09p3', 'p09p4', NULL, NULL),
(10, '手搖太陽能露營燈', '便攜式超亮LED手電筒，運行時間23-26小時，USB充電器，戶外電子燈。', '2500.00', '戶外登山', 3, 54, 'p10p1', 'p10p2', 'p10p3', 'p10p4', NULL, NULL),
(11, '墨西哥手織毯', '野餐毯、沙灘毯、瑜伽毯、露營毯、汽車毯、手工織毯。', '1750.00', '戶外登山', 5, 43, 'p11p1', 'p11p2', 'p11p3', 'p11p4', NULL, NULL),
(12, '可折疊垃圾桶', '帶拉鍊蓋的33加侖彈出式垃圾桶，適用於露營回收等。', '399.00', '戶外登山', 69, 54, 'p12p1', 'p12p2', 'p12p3', 'p12p4', NULL, NULL),
(13, '輕便摺疊導演椅', '戶外，鋁製露營椅配側桌和收納袋，承重350磅。', '499.00', '戶外登山', 2, 231, 'p13p1', 'p13p2', 'p13p3', 'p13p4', NULL, NULL),
(14, 'LED露營燈', '1000LM電池供電，4種燈光模式，防水帳篷燈，適用於颶風、緊急情況、露營、釣魚、家庭等。', '1999.00', '戶外登山', 1, 111, 'p14p1', 'p14p2', 'p14p3', 'p14p4', NULL, NULL),
(15, '便攜露營桌', '帶手提袋的摺疊野餐桌，輕巧的海灘桌，帶4個杯架，適用於派對、徒步旅行、釣魚、野餐等。', '799.00', '戶外登山', 44, 23, 'p15p1', 'p15p2', 'p15p3', 'p15p4', NULL, NULL),
(16, '大號雙人睡袋連枕頭', '適合所有季節露營、徒步旅行背包，冷、暖兩用。', '899.00', '戶外登山', 23, 7, 'p16p1', 'p16p2', 'p16p3', 'p16p4', NULL, NULL),
(17, '豪華戶外攜帶式丙烷氣火爐', '帶蓋和攜帶套件，直徑19英寸，58,000 BTU，黑色', '1299.00', '戶外登山', 22, 4, 'p17p1', 'p17p2', 'p17p3', 'p17p4', NULL, NULL),
(18, 'ACEARM 單肩背包', '大容量斜挎袋 男女運動戶外健行包', '1499.00', '背包收納', 4, 19, 'p18p1', 'p18p2', 'p18p3', 'p18p4', NULL, NULL),
(19, '防盜單肩袋肩背背包', '防水胸包，帶USB充電口，輕便休閒日包。', '2999.00', '背包收納', 16, 23, 'p19p1', 'p19p2', 'p19p3', 'p19p4', NULL, NULL),
(20, '迷彩背包，迷彩戶外旅行筆記本電腦背包', '輕便耐用的學校背包，帶充電口的時尚日包，適合男女15.6英寸筆記本電腦', '1499.00', '背包收納', 22, 48, 'p20p1', 'p20p2', 'p20p3', 'p20p4', NULL, NULL),
(21, 'Surf旅行背包', '防水飛行批准手提電腦背包，帶秘密護照口袋，島民旅行背包男女皆宜', '1299.00', '背包收納', 18, 21, 'p21p1', 'p21p2', 'p21p3', 'p21p4', NULL, NULL),
(22, '軍事戰術背包', '大型陸軍三天突擊背包 Molle包行囊', '2499.00', '背包收納', 7, 28, 'p22p1', 'p22p2', 'p22p3', 'p22p4', NULL, NULL),
(23, '防火文件袋帶鎖', '14.3x10.2防火防水錢袋，帶拉鍊收口，A4信封大小的文檔、現金、手機、平板電腦、信用卡、護照儲存袋', '2100.00', '背包收納', 69, 39, 'p23p1', 'p23p2', 'p23p3', 'p23p4', NULL, NULL),
(24, '大型旅行背包女性', '登機背包，防水戶外運動背包，輕便日包，學校包，適合14英寸筆記本電腦，帶USB充電口鞋收納袋。', '3100.00', '背包收納', 52, 23, 'p24p1', 'p24p2', 'p24p3', 'p24p4', NULL, NULL),
(25, '男女輕量背包', '可收納的遠足旅行背包-可折疊戶外防水背包', '2300.00', '背包收納', 12, 13, 'p25p1', 'p25p2', 'p25p3', 'p25p4', NULL, NULL),
(26, '旅行電腦背包', '防水反盜帶鎖和USB充電口，適合男女學校商務背包黑色', '2450.00', '背包收納', 21, 24, 'p26p1', 'p26p2', 'p26p3', 'p26p4', NULL, NULL),
(27, 'TSA認證行李旅行鎖', '自設密碼鎖，適用於學校健身房儲物櫃、行李箱、行李袋、文件櫃、工具箱、手提箱', '1100.00', '背包收納', 6, 31, 'p27p1', 'p27p2', 'p27p3', 'p27p4', NULL, NULL),
(28, '旅行化妝包掛鉤式收納包', '防水化妝品收納袋，收納小物、洗漱用品的最佳選擇', '699.00', '旅行配件', 7, 23, 'p28p1', 'p28p2', 'p28p3', 'p28p4', NULL, NULL),
(29, '行李秤', '數字行李重量計旅行必備配件，可攜式手持式秤帶溫度傳感器，橡膠塗層，重量110磅，包含電池。', '250.00', '旅行配件', 4, 12, 'p29p1', 'p29p2', 'p29p3', 'p29p4', NULL, NULL),
(30, '電子收納包', '線材收納袋，可攜式旅行配件收納盒，防水雙層一體式儲物袋，適用於電纜、線材、充電器、手機、硬盤', '699.00', '旅行配件', 18, 21, 'p30p1', 'p30p2', 'p30p3', 'p30p4', NULL, NULL),
(31, '洗衣袋旅行洗衣袋', '可機洗髒衣服組織者，足夠大容納4負荷的洗衣服，輕鬆放入洗衣籃或洗衣框', '399.00', '旅行配件', 19, 22, 'p31p1', 'p31p2', 'p31p3', 'p31p4', NULL, NULL),
(32, '通用防水手機袋', '手機乾袋盒 支援iPhone, Galaxy, Pixel', '99.00', '旅行配件', 21, 37, 'p32p1', 'p32p2', 'p32p3', 'p32p4', NULL, NULL),
(33, '旅行手袋帽夾', 'PU彈性帽夾，戶外旅行配件帽子伴侶', '99.00', '旅行配件', 28, 48, 'p33p1', 'p33p2', 'p33p3', 'p33p4', NULL, NULL),
(34, '小型急救箱', '110件小型急救套件-包括應急鋁箔毯，CPR呼吸器，剪刀，適用於旅行，家庭，辦公室，車輛，露營，工作場所和戶外', '399.00', '旅行配件', 21, 109, 'p34p1', 'p34p2', 'p34p3', 'p34p4', NULL, NULL),
(35, '旅行迷你香水噴霧瓶', '可裝香水的便攜式噴霧瓶，旅行尺寸瓶', '69.00', '旅行配件', 13, 33, 'p35p1', 'p35p2', 'p35p3', 'p35p4', NULL, NULL),
(36, 'TSA批准透明旅行化妝包', '帶拉鍊手提旅行配件，夸脫尺寸化妝袋，男女適用', '69.00', '旅行配件', 15, 42, 'p36p1', 'p36p2', 'p36p3', 'p36p4', NULL, NULL),
(37, '飛行機通用手機支架掛架', '多向雙360度旋轉的桌上免提手機支架，口袋尺寸的必備旅行配件', '299.00', '旅行配件', 9, 23, 'p37p1', 'p37p2', 'p37p3', 'p37p4', NULL, NULL),
(38, '通用旅行轉換器', '一款國際牆充電器AC插頭轉接器，附有5.6A智能功率和3.0A USB Type-C，支援美國、歐盟、英國、澳洲', '199.00', '行動配備', 7, 27, 'p38p1', 'p38p2', 'p38p3', 'p38p4', NULL, NULL),
(39, '歐洲旅行插頭轉接器', '一體化通用電源轉接器，全球適用，帶2個USB 2個Type-C端口，涵蓋150+國家', '179.00', '行動配備', 4, 29, 'p39p1', 'p39p2', 'p39p3', 'p39p4', NULL, NULL),
(40, '語言翻譯器', '支援WiFi熱點的138種語言的雙向即時翻譯，適用於旅遊商務', '1799.00', '行動配備', 3, 13, 'p40p1', 'p40p2', 'p40p3', 'p40p4', NULL, NULL),
(41, '便攜式顯示器', '15.6 吋 1080p IPS 72% sRGB FHD FreeSync HDMI 或 USB C 電腦 VESA 顯示器，適用於 MAC Mini MacBook Andriod 手機 Xbox ps5 steam Deck Switch Monitor 的旅行屏幕。', '1688.00', '行動配備', 5, 23, 'p41p1', 'p41p2', 'p41p3', 'p41p4', NULL, NULL),
(42, '語言翻譯機', '支援 138 種語言，即時雙向口語翻譯，適合學習、旅行、商務。', '1788.00', '行動配備', 6, 99, 'p42p1', 'p42p2', 'p42p3', 'p42p4', NULL, NULL),
(43, '相機無人機', '1080P FPV無人機連攜帶箱，長距離四軸飛行器配備2個電池，一鍵返回/緊急停止', '4500.00', '行動配備', 2, 108, 'p43p1', 'p43p2', 'p43p3', 'p43p4', NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `users_information`
--

CREATE TABLE `users_information` (
  `id` int(11) NOT NULL COMMENT '編號',
  `member_id` varchar(225) NOT NULL COMMENT '會員編號',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '註冊日期',
  `active_status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '狀態',
  `picture` varchar(10000) DEFAULT NULL COMMENT '照片',
  `user_name` varchar(255) DEFAULT NULL COMMENT '全名',
  `user_nickname` varchar(25) DEFAULT NULL COMMENT '暱稱',
  `birthday` date DEFAULT NULL COMMENT '生日',
  `sex` char(1) DEFAULT NULL COMMENT '性別',
  `password` varchar(50) DEFAULT NULL COMMENT '密碼',
  `verify` varchar(50) DEFAULT NULL COMMENT '驗證碼 ',
  `token` varchar(50) DEFAULT NULL COMMENT '金鑰',
  `email` varchar(50) DEFAULT NULL COMMENT '信箱',
  `contact_email` varchar(50) DEFAULT NULL COMMENT '聯絡信箱',
  `telephone` varchar(25) DEFAULT NULL COMMENT '電話'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='user_databases';

--
-- 傾印資料表的資料 `users_information`
--

INSERT INTO `users_information` (`id`, `member_id`, `created_at`, `active_status`, `picture`, `user_name`, `user_nickname`, `birthday`, `sex`, `password`, `verify`, `token`, `email`, `contact_email`, `telephone`) VALUES
(1, '123456', '2022-12-21 02:44:42', 1, 'https://firebasestorage.googleapis.com/v0/b/circular-journeys.appspot.com/o/user-images%2FB1xV83xf149BztxaB533?alt=media&token=905e6830-ff11-462f-89d2-a07dbeeb5ade', '周聖倫', 'AlanChou', '1995-04-14', 'm', 'e10adc3949ba59abbe56e057f20f883e', '3OQAJU-gx', '8a2f28e2-e411-46bc-96f7-cbc582f451bd', 'alan@gmail.com', NULL, '0970688851'),
(2, '123457', '2022-12-21 02:56:42', 1, 'https://firebasestorage.googleapis.com/v0/b/circular-journeys.appspot.com/o/user-images%2FUNiFjV0eKGdUMGduaMUU?alt=media&token=76f79b08-96c8-49ed-aa46-a2c53b2f4731', '陳家禾', 'Kevin', '0000-00-00', 'f', 'e10adc3949ba59abbe56e057f20f883e', NULL, 'f8a9c231-283b-4717-ae18-04d4a6658db0', 'kevin@gmail.com', NULL, '0900000000'),
(4, '123458', '2022-12-21 02:58:19', 1, 'https://firebasestorage.googleapis.com/v0/b/circular-journeys.appspot.com/o/user-images%2FLj15qeMjiU3CsbeewuVz?alt=media&token=71a89110-107e-4ae8-9167-6a1f6f5ea79e', '張圓喬', '圓圓', '1996-06-05', 'f', 'e10adc3949ba59abbe56e057f20f883e', NULL, 'ee6274a3-173f-4775-880f-b58f221d7dc7', 'circle@gmail.com', NULL, '0900000000'),
(71, '104709174078800080046', '2023-02-24 08:49:55', 1, 'https://firebasestorage.googleapis.com/v0/b/circular-journeys.appspot.com/o/user-images%2FB1xV83xf149BztxaB533?alt=media&token=905e6830-ff11-462f-89d2-a07dbeeb5ade', '周聖倫', 'Alan', '1995-04-14', 'm', NULL, NULL, '57cac94b-e2d7-4382-814a-356b788212ce', 'alanchou19950414@gmail.com', 'choushenglun0414@gmail.com', '0970688851');

-- --------------------------------------------------------

--
-- 資料表結構 `user_address`
--

CREATE TABLE `user_address` (
  `id` int(11) NOT NULL COMMENT '編號',
  `member_id` varchar(225) CHARACTER SET utf8mb4 NOT NULL COMMENT '會員編號',
  `user_name` varchar(25) DEFAULT NULL COMMENT '姓名',
  `user_contact` varchar(25) DEFAULT NULL COMMENT '電話',
  `nation` varchar(25) DEFAULT NULL COMMENT '國家',
  `city` varchar(25) DEFAULT NULL COMMENT '城市',
  `districts` varchar(25) DEFAULT NULL COMMENT '區域',
  `address` varchar(255) DEFAULT NULL COMMENT '街道',
  `postal_code` varchar(25) DEFAULT NULL COMMENT '郵遞區號'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='通訊地址';

--
-- 傾印資料表的資料 `user_address`
--

INSERT INTO `user_address` (`id`, `member_id`, `user_name`, `user_contact`, `nation`, `city`, `districts`, `address`, `postal_code`) VALUES
(65, '104709174078800080046', '周聖倫', '0970688851', '臺灣', '臺中市', '太平區', '環中東路三段507號6樓之6', '411'),
(66, '104709174078800080046', '周聖倫', '0970688851', '臺灣', '高雄市', '左營區', '榮德街89號6樓之一', '814'),
(67, '123456', '周聖倫', '0970688851', '臺灣', '台北市', '大安區', '新生南路二段1號', '106'),
(68, '123458', '張圓喬', '0905333555', '臺灣', '高雄市', '左營區', '博愛二路777號', '813');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`o_id`),
  ADD KEY `member_id` (`member_id`);

--
-- 資料表索引 `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`d_id`),
  ADD KEY `o_id` (`o_id`),
  ADD KEY `p_id` (`p_id`);

--
-- 資料表索引 `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`post_id`),
  ADD KEY `posts_ibfk_1` (`member_id`);

--
-- 資料表索引 `post_like`
--
ALTER TABLE `post_like`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`),
  ADD KEY `post_id` (`post_id`);

--
-- 資料表索引 `post_tags`
--
ALTER TABLE `post_tags`
  ADD PRIMARY KEY (`tag_id`,`post_id`) USING BTREE,
  ADD KEY `post_tags_ibfk_1` (`post_id`);

--
-- 資料表索引 `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`p_id`);

--
-- 資料表索引 `users_information`
--
ALTER TABLE `users_information`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `member_id` (`member_id`);

--
-- 資料表索引 `user_address`
--
ALTER TABLE `user_address`
  ADD PRIMARY KEY (`id`),
  ADD KEY `member_id` (`member_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `orders`
--
ALTER TABLE `orders`
  MODIFY `o_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `d_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `post_like`
--
ALTER TABLE `post_like`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT COMMENT '編號', AUTO_INCREMENT=34;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `products`
--
ALTER TABLE `products`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `users_information`
--
ALTER TABLE `users_information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '編號', AUTO_INCREMENT=74;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `user_address`
--
ALTER TABLE `user_address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '編號', AUTO_INCREMENT=69;

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `users_information` (`member_id`);

--
-- 資料表的限制式 `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `users_information` (`member_id`);

--
-- 資料表的限制式 `user_address`
--
ALTER TABLE `user_address`
  ADD CONSTRAINT `user_address_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `users_information` (`member_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
