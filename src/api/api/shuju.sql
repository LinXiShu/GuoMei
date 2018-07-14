-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.7.14 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 gm01 的数据库结构
CREATE DATABASE IF NOT EXISTS `gm01` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `gm01`;

-- 导出  表 gm01.car 结构
CREATE TABLE IF NOT EXISTS `car` (
  `id` char(255) DEFAULT NULL,
  `name` text CHARACTER SET utf8,
  `photo` char(255) CHARACTER SET utf8 DEFAULT NULL,
  `qty` char(255) DEFAULT NULL,
  `price` char(255) DEFAULT NULL,
  `ip` char(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 正在导出表  gm01.car 的数据：13 rows
/*!40000 ALTER TABLE `car` DISABLE KEYS */;
REPLACE INTO `car` (`id`, `name`, `photo`, `qty`, `price`, `ip`) VALUES
	('1', 'admin', 'admin', '1', '1', 'admin'),
	('004', '华硕顽石五代(ASU\r\nS)FL8000UQ8550 15.6英寸笔记本电脑(i7-8550U 4G 1T GT940MX 2G独显)星空灰', '//gfs17\r\n.gomein.net.cn/T10VZsBXLT1RCvBVdK_400.jpg?v=20170727', '29', '4599', 'admin'),
	('004', '华硕顽石五代(ASU\r\nS)FL8000UQ8550 15.6英寸笔记本电脑(i7-8550U 4G 1T GT940MX 2G独显)星空灰', '//gfs17\r\n.gomein.net.cn/T10VZsBXLT1RCvBVdK_400.jpg?v=20170727', '29', '4599', 'admin'),
	('004', '华硕顽石五代(ASU\r\nS)FL8000UQ8550 15.6英寸笔记本电脑(i7-8550U 4G 1T GT940MX 2G独显)星空灰', '//gfs17\r\n.gomein.net.cn/T10VZsBXLT1RCvBVdK_400.jpg?v=20170727', '29', '4599', 'admin'),
	('004', '华硕顽石五代(ASU\r\nS)FL8000UQ8550 15.6英寸笔记本电脑(i7-8550U 4G 1T GT940MX 2G独显)星空灰', '//gfs17\r\n.gomein.net.cn/T10VZsBXLT1RCvBVdK_400.jpg?v=20170727', '29', '4599', 'admin'),
	('004', '华硕顽石五代(ASUS)FL8000UQ8550 15.6英寸笔记本电脑(i7-8550U 4G 1T GT940MX 2G独显)星空灰', '//gfs17.gomein.net.cn/T10VZsBXLT1RCvBVdK_400.jpg?v=20170727', '29', '4599', 'admin'),
	('004', '华硕顽石五代(ASUS)FL8000UQ8550 15.6英寸笔记本电脑(i7-8550U 4G 1T GT940MX 2G独显)星空灰', '//gfs17.gomein.net.cn/T10VZsBXLT1RCvBVdK_400.jpg?v=20170727', '29', '4599', 'admin,adadad'),
	('003', 'Apple iPhone X 64G 银色 全网通4G手机', '//gfs17.gomein.net.cn/T1qhEvBQZT1RCvBVdK_400.jpg?v=20170727', '39', '7588', 'adadad'),
	('003', 'Apple iPhone X 64G 银色 全网通4G手机', '//gfs17.gomein.net.cn/T1qhEvBQZT1RCvBVdK_400.jpg?v=20170727', '39', '7588', 'adadad'),
	('001', '神舟(HASEE)战神Z7-KP7GC 15.6英寸游戏本笔记本电脑(i7-8750H 8G 1T+128G SSD GTX1060 6G 1080P)IPS屏', '//gfs17.gomein.net.cn/T1AYdgB7Cv1RCvBVdK_400.jpg?v=20170727', '49', '7099', 'adadad'),
	('001', '神舟(HASEE)战神Z7-KP7GC 15.6英寸游戏本笔记本电脑(i7-8750H 8G 1T+128G SSD GTX1060 6G 1080P)IPS屏', '//gfs17.gomein.net.cn/T1AYdgB7Cv1RCvBVdK_400.jpg?v=20170727', '49', '7099', 'adadad'),
	('001', '神舟(HASEE)战神Z7-KP7GC 15.6英寸游戏本笔记本电脑(i7-8750H 8G 1T+128G SSD GTX1060 6G 1080P)IPS屏', '//gfs17.gomein.net.cn/T1AYdgB7Cv1RCvBVdK_400.jpg?v=20170727', '49', '7099', 'adadad'),
	('004', '华硕顽石五代(ASUS)FL8000UQ8550 15.6英寸笔记本电脑(i7-8550U 4G 1T GT940MX 2G独显)星空灰', '//gfs17.gomein.net.cn/T10VZsBXLT1RCvBVdK_400.jpg?v=20170727', '29', '4599', '');
/*!40000 ALTER TABLE `car` ENABLE KEYS */;

-- 导出  表 gm01.products 结构
CREATE TABLE IF NOT EXISTS `products` (
  `id` char(255) DEFAULT NULL,
  `name` char(255) CHARACTER SET utf8 DEFAULT NULL,
  `name1` char(255) CHARACTER SET utf8 DEFAULT NULL,
  `photo` char(255) CHARACTER SET utf8 DEFAULT NULL,
  `price` char(255) DEFAULT NULL,
  `qty` char(255) DEFAULT NULL,
  `class` char(255) CHARACTER SET utf8 DEFAULT NULL,
  `class1` char(255) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 正在导出表  gm01.products 的数据：28 rows
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
REPLACE INTO `products` (`id`, `name`, `name1`, `photo`, `price`, `qty`, `class`, `class1`) VALUES
	('001', '神舟(HASEE)战神Z7-KP7GC 15.6英寸游戏本笔记本电脑(i7-8750H 8G 1T+128G SSD GTX1060 6G 1080P)IPS屏', '八代I7-8750H处理器，六核十二线程，GTX1060 6G独显，1T+128G SSD双硬盘，IPS高清屏。', '//gfs17.gomein.net.cn/T1AYdgB7Cv1RCvBVdK_400.jpg?v=20170727', '7099', '49', '1', '1'),
	('002', 'Apple iPad 平板电脑 (32G金 WiFi版) MPGT2CH/A', '学习 上网 娱乐 创作 简简单单 妙趣横生~', '//gfs17.gomein.net.cn/T1VEWvB4Yv1RCvBVdK_400.jpg?v=20170727', '2188', '59', '1', '1'),
	('003', 'Apple iPhone X 64G 银色 全网通4G手机', '【国美线下门店现已经在北京、上海、深圳等数十个城市开展Apple产品售后服务，顾客可在门店享受售后维修、私人设置、一对一课程预约等服务，】5.8 英寸显示屏、A11 仿生、支持无线充电', '//gfs17.gomein.net.cn/T1qhEvBQZT1RCvBVdK_400.jpg?v=20170727', '7588', '39', '1', '2'),
	('004', '华硕顽石五代(ASUS)FL8000UQ8550 15.6英寸笔记本电脑(i7-8550U 4G 1T GT940MX 2G独显)星空灰', ' 8代I7！1T大硬盘！2G独显！', '//gfs17.gomein.net.cn/T10VZsBXLT1RCvBVdK_400.jpg?v=20170727', '4599', '29', '1', '3'),
	('005', '华为手机P20 (EML-AL00) 6GB+128GB AI智慧全面屏 移动联通电信 宝石蓝', '【买就送王卡，流量不限量】AI摄影大师/DxO评分过百/一秒记忆960个定格/影棚级人像自拍,美付宝支付专享优惠', '//gfs17.gomein.net.cn/T1neCgBXKv1RCvBVdK_400.jpg?v=20170727', '4298', '50', '1', '2'),
	('006', '联想(Lenovo)小新潮5000 15.6英寸笔记本电脑(i5-7200U 4G 1T  2G独显 FHD Office2016 高清屏)极光银', '质感本色回归 潮无止境 高清大屏 178度IPS广视角 1T大硬盘 2G独显', '//gfs17.gomein.net.cn/T1.mEbBCdT1RCvBVdK_400.jpg?v=20170727', '3989', '79', '1', '1'),
	('007', '小米(MI) LX01 小米小爱音箱mini 人工智能音箱 听音乐语音遥控家电 白色', '【数码影音嘉年华，索尼耳机29.9元起，更多爆品请点击】', '//gfs17.gomein.net.cn/T1qdZ_BvWv1RCvBVdK_400.jpg?v=20170727', '134', '39', '1', '1'),
	('008', '小米MI 红米5Plus 千元全面屏 金 4GB+64GB 全网通版 双卡双待', '【买就送王卡，流量不限量】千元全面屏，前置柔光自拍，4000mAh大电池，骁龙六系列8核处理器！,美付宝支付专享优惠', '//gfs17.gomein.net.cn/T1FkJgBmVT1RCvBVdK_360.jpg', '2399', '99', '1', '2'),
	('009', 'Bose Companion5 智能音箱 震撼环绕 纯正低音 简单操控 多媒体扬声器', '【数码影音嘉年华，索尼耳机29.9元起，更多爆品请点击】', '//gfs3.gomein.net.cn/T1pvCTBXLv1RCvBVdK_400.jpg?v=20170727', '3499', '19', '1', '2'),
	('010', '【国美自营】黄飞红 休闲零食 坚果炒货麻辣花生210g', NULL, '//gfs17.gomein.net.cn/T1bcKvBTKg1RCvBVdK_400.jpg?v=20170727', '9.9', '49', '1', '3'),
	('011', '【国美自营】印尼进口 皇冠丹麦曲奇饼干90g*6盒装 进口零食黄油饼', NULL, '//gfs13.gomein.net.cn/T1LgDbBChT1RCvBVdK_400.jpg?v=20170727', '39.9', '59', '2', '3'),
	('012', '【国美自营】日本进口森永达诗牛奶巧克力43.2g', NULL, '//gfs17.gomein.net.cn/T1NgVvBsKv1RCvBVdK_400.jpg?v=20170727', '7.9', '49', '2', '3'),
	('013', '【国美自营】马来西亚进口一百份黑加仑子果汁软糖150g黑加仑子味', NULL, '//gfs.gomein.net.cn/T11ULvBK_g1RCvBVdK_400.jpg?v=20170727', '8.9', '39', '2', '4'),
	('014', '【国美自营】西班牙进口 菲尼小熊猫棉花糖80g', NULL, '//gfs11.gomein.net.cn/T1dndvBgbT1RCvBVdK_400.jpg?v=20170727', '6.8', '89', '2', '4'),
	('015', '【国美自营】意大利进口 Galatine佳乐锭 牛奶片 100g   原味  儿童奶片', NULL, '//gfs17.gomein.net.cn/T1SUAvB_AT1RCvBVdK_400.jpg?v=20170727', '17.9', '19', '2', '4'),
	('016', '【国美自营】京都念慈菴 休闲零食金桔柠檬糖60克', NULL, '//gfs17.gomein.net.cn/T1BUDvBQZs1RCvBVdK_400.jpg?v=20170727', '21.9', '89', '2', '4'),
	('017', '俄罗斯进口紫皮糖果仁夹心巧克力架酥软糖500g', NULL, '//gfs3.gomein.net.cn/T1pcYvBsWv1RCvBVdK_400.jpg?v=20170727', '39.8', '59', '2', '5'),
	('018', '俄罗斯进口斯拉夫人草莓牛扎糖 果仁杏仁夹心巧克力250g', NULL, '//gfs17.gomein.net.cn/T1Q5WvBydQ1RCvBVdK_400.jpg?v=20170727', '29.8', '39', '2', '5'),
	('019', '俄罗斯进口小蜜蜂软糖喜糖休闲零食500g', NULL, '//gfs17.gomein.net.cn/T1omWgBXbT1RCvBVdK_400.jpg?v=20170727', '39.8', '39.8', '3', '5'),
	('020', '【国美自营】法国依云天然矿泉水330ml*24瓶（箱）矿泉水', NULL, '//gfs17.gomein.net.cn/T1T6AvBCZQ1RCvBVdK_400.jpg?v=20170727', '99', '59', '3', '5'),
	('021', 'Avene雅漾活泉水喷雾300ml', NULL, '//gfs.gomein.net.cn/T1QUAvBbZj1RCvBVdK_400.jpg?v=20170727', '79', '29', '3', '6'),
	('022', '欧莱雅清润全日保湿水精华凝露50ml', NULL, '//gfs2.gomein.net.cn/T1h0xvB4Jv1RCvBVdK_400.jpg?v=20170727', '89.9', '29', '3', '6'),
	('023', 'RYOE/吕 紫吕 控油防脱滋养洗发水 400ml+180ml', NULL, '//gfs17.gomein.net.cn/T1vIDTBgJv1RCvBVdK_400.jpg?v=20170727', '65', '29', '3', '6'),
	('024', '玉兰油乳液滋养沐浴香皂115g三块装', NULL, '//gfs17.gomein.net.cn/T1zUWvB5Yg1RCvBVdK_400.jpg?v=20170727', '11.9', '59', '3', '6'),
	('025', '露得清深层净化洗面乳100g*2支', NULL, '//gfs17.gomein.net.cn/T1PmETBCCT1RCvBVdK_400.jpg?v=20170727', '49', '79', '3', '7'),
	('026', ' Leaders丽得姿竹炭精华收缩毛孔黑面膜25ml*10片', NULL, '//gfs17.gomein.net.cn/T1sIVTBKVj1RCvBVdK_400.jpg?v=20170727', '69', '29', '3', '7'),
	('027', '海飞丝男士去屑洗发露劲感去油450ml*2+80ml*2', NULL, '//gfs17.gomein.net.cn/T1mrhvBThv1RCvBVdK_400.jpg?v=20170727', '59', '29', '8', '7'),
	('019', '俄罗斯进口小蜜蜂软糖喜糖休闲零食500g', NULL, '//gfs17.gomein.net.cn/T1omWgBXbT1RCvBVdK_400.jpg?v=20170727', '39.8', '39.8', NULL, '7');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;

-- 导出  表 gm01.users 结构
CREATE TABLE IF NOT EXISTS `users` (
  `id` char(255) CHARACTER SET utf8 DEFAULT NULL,
  `username` char(255) CHARACTER SET utf8 DEFAULT NULL,
  `password` char(255) DEFAULT NULL,
  `ip` char(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- 正在导出表  gm01.users 的数据：43 rows
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `username`, `password`, `ip`) VALUES
	('admin', 'admin', 'admin', 'admin'),
	('Plhq7yWZ', 'asd', 'asd', NULL),
	('RrzeZQG7', '', '', NULL),
	('cW6m0zlu', 'undefined', 'undefined', NULL),
	('uQqPm6bu', 'dqwdqwdqwwqdq', 'dqwdqwd', NULL),
	('YIUkSHzc', 'qwqwdqw', 'qdwdqwq', NULL),
	('6mN4RqBQ', 'dwqdwq', '12e12e12e', NULL),
	('SAUMHNwM', 'dwqdwqdwqd', 'qwdqwdwqd', NULL),
	('8UebRyGI', 'qwdqwdqw', 'dqwdwqd', NULL),
	('tE39IwG2', 'qwdwqdqwdwq', 'dqwdqwd', NULL),
	('ttzg4lC2', 'dqwdwqd', 'wqdwqd', NULL),
	('kKKr24kf', 'wqedwqdqwd', 'qwdqwdwqd', NULL),
	('pTeGfMMW', 'qwdwqdqw', 'dqwqd', NULL),
	('tExRXCk1', 'wdqdq', 'dqwdwqd', NULL),
	('UKnPGMbN', '212e12e', 'e1e21e', NULL),
	('Ym6gp0yZ', 'dqwdqwd', 'wqdwqd', NULL),
	('HtBu3Gdo', 'dqwdqwdqw', 'dqwdqwdwqd', NULL),
	('mEndht39', 'qwdwqdwqd', 'wqdqwdqwd', NULL),
	('EqM3qdHa', 'dwqdqwdqwdqwd', 'qwdqwdqwd', NULL),
	('XZOB00Rf', 'wqdqwd', 'wqdqwd', NULL),
	('NCxgR9Db', 'qwwqdqwd', 'wqdwqdwqd', NULL),
	('9VSMVHcM', 'qwwqdq', 'wqwdwq', NULL),
	('A88v9ske', 'qwdqwdqd', 'qwdwqdwqd', NULL),
	('cda64Fg9', 'qwdqwdq', 'wdqwdqw', NULL),
	('VLXsK5mv', 'qwdwqwqw', 'wdqwd', NULL),
	('g0TGdzbm', 'qwdwq', 'wdqwd', NULL),
	('0tmlC6lM', 'kwsdkoqwd', '123123', NULL),
	('0mcsvUio', 'wqe', '213213', NULL),
	('YEYoa6lL', 'qwdqwdwq', '123213213', NULL),
	('iAvSOtXf', 'wqewqe12', '3213', NULL),
	('WLKKdZMd', 'dasdsad1', '2312321', NULL),
	('AcOCh89M', 'sadas', '213213213', NULL),
	('0GhdwGZv', 'asdsadasda', 'sdasdsad', NULL),
	('PwLXwGNY', 'dwqdwqd', 'qwdwqd', NULL),
	('NVVy5Bf6', 'wqe2qeq2e', '123123213', NULL),
	('vYvdeQlk', 'dwqdqwd', 'qwdqwdq', NULL),
	('siUCvVNV', 'dqwdwqdqwdwqd', 'wqdwqdwqdwq', NULL),
	('A2sb0CTD', 'dqwdwqdwqd', 'wqqwdwqd', NULL),
	('gm3vUDUO', 'linxishu2', '123123', NULL),
	('i9cl1i55', 'wqdwqd', 'wqdqwdwqd', NULL),
	('XxodFtAP', '林夕树', '123123', NULL),
	('M86s9NQg', 'adadad', '123123123', NULL),
	('YcWG9eTI', 'feiheng', '123123', NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
