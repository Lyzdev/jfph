create database jfph;
use jfph;

DROP TABLE IF EXISTS `borrow`;
CREATE TABLE `borrow` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `userid` varchar(50) NOT NULL COMMENT '用户昵称',
  `borrowmoney` int(50) DEFAULT NULL COMMENT '借款金额',
  `interest` float(255,0) DEFAULT NULL COMMENT '借款利息',
  `minbid` int(50) DEFAULT NULL COMMENT '最小投标',
  `days` int(3) DEFAULT NULL COMMENT '招标天数',
  `title` varchar(50) DEFAULT NULL COMMENT '招标标题',
  `info` varchar(255) DEFAULT NULL COMMENT '借款描述',
  `borrowtime` int(2) DEFAULT NULL COMMENT '借款期限（单位：月）',
  `repaytype` int(1) DEFAULT NULL COMMENT '还款方式（0 按月，1到期）',
  `ownmoney` int(10) DEFAULT '0' COMMENT '已借款金额',
  `bouns` int(10) DEFAULT '0',
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `pwd` varchar(255) COLLATE utf8_estonian_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_estonian_ci NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) COLLATE utf8_estonian_ci DEFAULT NULL,
  `nickname` varchar(255) COLLATE utf8_estonian_ci DEFAULT NULL,
  `totalmoney` int(255) DEFAULT '0',
  `phone` bigint(255) DEFAULT '0',
  `regtime` datetime DEFAULT NULL,
  `aduitlo` int(255) DEFAULT '0',
  `usablemoney` int(255) DEFAULT '0',
  `blockedmoney` int(255) DEFAULT '0',
  `lastlogintime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
);



