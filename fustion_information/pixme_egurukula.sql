-- Adminer 4.2.2 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `apilog`;
CREATE TABLE `apilog` (
  `apiID` int(11) NOT NULL AUTO_INCREMENT,
  `apiName` varchar(200) NOT NULL,
  `apiIP` varchar(50) DEFAULT NULL,
  `apiRequest` text,
  `apiResponse` text NOT NULL,
  `apiType` enum('iphone','android','web') NOT NULL,
  `apiVersion` varchar(5) NOT NULL,
  `apiCallDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`apiID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner` (
  `bannerID` smallint(3) NOT NULL AUTO_INCREMENT,
  `bannerName` varchar(100) NOT NULL,
  `bannerFileType` enum('Image','Video') NOT NULL DEFAULT 'Image',
  `bannerFile` varchar(100) NOT NULL,
  `bannerRemarks` varchar(200) DEFAULT NULL,
  `bannerStatus` enum('Active','Inactive') NOT NULL,
  `bannerPosition` smallint(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`bannerID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `banner` (`bannerID`, `bannerName`, `bannerFileType`, `bannerFile`, `bannerRemarks`, `bannerStatus`, `bannerPosition`) VALUES
(1,	'E Learning',	'Image',	'296X720XADMIN20191005113453.jpeg',	'<p>Online Learning</p>',	'Active',	1),
(2,	'Education ',	'Image',	'275X725XADMIN20191005113536.jpeg',	'',	'Active',	2),
(3,	'Promotion',	'Image',	'340X698XADMIN20191005114621.png',	'',	'Active',	3),
(20,	'E-Learning',	'Video',	'20191022171614.mp4',	'<p>fsfs</p>',	'Active',	2),
(21,	'Demo Banne',	'Video',	'20191022171845.mp4',	'<p>test</p>',	'Active',	2),
(24,	'tesrt',	'Image',	'20191107162746.jpg',	'<p>test</p>',	'Inactive',	1),
(25,	'E-Learning',	'Image',	'216X300XADMIN20191107163528.jpeg',	'<p>teas</p>',	'Inactive',	2),
(26,	'E-Learning',	'Video',	'20191113113713.mp4',	'<p>gvdgdgfdgfds</p>',	'Active',	2);

DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `cityID` int(11) NOT NULL AUTO_INCREMENT,
  `countryID` int(11) NOT NULL DEFAULT '0',
  `stateID` int(11) NOT NULL DEFAULT '0',
  `cityName` varchar(100) NOT NULL,
  `cityRemarks` varchar(200) DEFAULT NULL,
  `cityStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `cityCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cityID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `city` (`cityID`, `countryID`, `stateID`, `cityName`, `cityRemarks`, `cityStatus`, `cityCreatedDate`) VALUES
(1,	1,	1,	'Ahmedabad',	'',	'Active',	'2019-07-20 08:11:25'),
(2,	1,	4,	'Kochi',	'good',	'Active',	'2019-08-01 10:07:15'),
(3,	1,	2,	'Mumbai',	'good',	'Active',	'2019-08-02 10:19:40'),
(4,	1,	3,	'Bangalore',	'good',	'Active',	'2019-08-20 10:27:41');

DROP TABLE IF EXISTS `cmspage`;
CREATE TABLE `cmspage` (
  `cmspageID` int(11) NOT NULL AUTO_INCREMENT,
  `cmspageName` varchar(100) NOT NULL DEFAULT '',
  `cmspageContents` longtext NOT NULL,
  `cmspageIsSystemPage` enum('Yes','No') NOT NULL DEFAULT 'Yes',
  `cmspageStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `cmspageCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cmspageID`),
  UNIQUE KEY `unique_index` (`cmspageName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `cmspage` (`cmspageID`, `cmspageName`, `cmspageContents`, `cmspageIsSystemPage`, `cmspageStatus`, `cmspageCreatedDate`) VALUES
(1,	'About Us',	'<p>About us</p>\r\n<p>Kendus is an internationally growing company specialized in education technology. Our focus is on providing the best user experience for our customers, and their employees or students. With a team of 25 dedicated, friendly owls we strive every day to improve and give you excellent support. We do this with a smile, and a cup of coffee in our hands!</p>\r\n<p>&nbsp;</p>\r\n<p>&nbsp;</p>',	'Yes',	'Active',	'2019-07-20 08:25:51'),
(2,	'Terms and Condition',	'<div class=\"Halfwidth halfwidthcontent fullwidth\">\r\n<h2 class=\"halfwidthhdng\">Terms of Use</h2>\r\n<p class=\"halfwidthdescrptn\">We would request you to kindly read the terms of service carefully and consider these as the terms of agreement between you and us. This governs the use and access to the website and the services to you and your associates.</p>\r\n<p class=\"halfwidthdescrptn\">Think exam is an Online Examination System to streamline your preparation and performance. The terms will be liable to a customer the moment, the customer creates an account on the website. These terms are effective to timely amendments on the choice of the provider.</p>\r\n</div>',	'Yes',	'Active',	'2019-08-08 05:47:48'),
(3,	'Privacy Policy',	'<p>This Privacy Policy discloses the privacy practices for kendus and online-learning.For the purposes of this Privacy Policy, unless otherwise noted, all references to \"Kendus\".</p>\r\n<p><strong>WHAT INFORMATION DO WE GATHER ABOUT YOU?</strong></p>\r\n<p>We collect information from you when you access kendus and when you subscribe to our email service.</p>\r\n<p><strong>WHAT DO WE USE YOUR INFORMATION FOR?</strong></p>\r\n<p>We use your IP address to help diagnose problems with our server and to administer our website by identifying which parts of our site are most heavily used and which portion of our audience comes from within kendus network.</p>',	'Yes',	'Active',	'2019-08-21 12:51:36'),
(4,	'Contact Us',	'<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <strong>We are here to help you</strong></p>\r\n<p>&nbsp;Please reach out to us either via email or phone if</p>\r\n<p>&nbsp;you want to convey any concerns or good wishes.</p>\r\n<p>&nbsp;For support relatedqueries right to</p>\r\n<div>&nbsp;<strong>support@kendus.com</strong></div>\r\n<p>&nbsp;Call us</p>\r\n<p>&nbsp;<strong>(180)&nbsp; 018-0017</strong></p>',	'Yes',	'Active',	'2019-08-21 13:01:18');

DROP TABLE IF EXISTS `country`;
CREATE TABLE `country` (
  `countryID` smallint(3) NOT NULL AUTO_INCREMENT,
  `countryName` varchar(100) NOT NULL,
  `countryISO3Code` varchar(3) NOT NULL,
  `countryISO2Code` varchar(2) NOT NULL,
  `countryCurrencyCode` varchar(10) NOT NULL,
  `countryDialCode` varchar(5) NOT NULL,
  `countryFlagImage` varchar(100) NOT NULL,
  `countryRemark` varchar(200) DEFAULT NULL COMMENT ' ',
  `countryStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `countryCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`countryID`),
  UNIQUE KEY `unique_index` (`countryName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `country` (`countryID`, `countryName`, `countryISO3Code`, `countryISO2Code`, `countryCurrencyCode`, `countryDialCode`, `countryFlagImage`, `countryRemark`, `countryStatus`, `countryCreatedDate`) VALUES
(1,	'India',	'IND',	'IN',	'INR',	'91',	'20190720133650.png',	'',	'Active',	'2019-07-20 08:06:50'),
(2,	'test country',	'TCC',	'TC',	'TCS',	'222',	'20190726111544.png',	'',	'Inactive',	'2019-07-26 05:45:44');

DROP TABLE IF EXISTS `faq`;
CREATE TABLE `faq` (
  `faqID` smallint(3) NOT NULL AUTO_INCREMENT,
  `faqtopicID` smallint(3) NOT NULL,
  `faqQuestion` varchar(200) NOT NULL,
  `faqAnswer` tinytext NOT NULL,
  `faqStatus` enum('Active','Inactive') NOT NULL,
  PRIMARY KEY (`faqID`),
  UNIQUE KEY `faqtopicID` (`faqtopicID`,`faqQuestion`) USING BTREE
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `faq` (`faqID`, `faqtopicID`, `faqQuestion`, `faqAnswer`, `faqStatus`) VALUES
(1,	1,	'How to enroll?',	'<p>We have instructions given how to enroll yourself.</p>\r\n<p>Please follow those instructions.</p>',	'Active'),
(2,	2,	'How can i pay?',	'<p>We have instructions given how to pay fees online.</p>\r\n<p>Please follow those instructions.</p>\r\n<p>&nbsp;</p>',	'Active');

DROP TABLE IF EXISTS `faqtopic`;
CREATE TABLE `faqtopic` (
  `faqtopicID` smallint(3) NOT NULL AUTO_INCREMENT,
  `faqtopicName` varchar(100) NOT NULL,
  `faqtopicStatus` enum('Active','Inactive') NOT NULL,
  PRIMARY KEY (`faqtopicID`),
  UNIQUE KEY `faqtopicName` (`faqtopicName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `faqtopic` (`faqtopicID`, `faqtopicName`, `faqtopicStatus`) VALUES
(1,	'Courses',	'Active'),
(2,	'Fees',	'Active');

DROP TABLE IF EXISTS `grade`;
CREATE TABLE `grade` (
  `gradeID` smallint(2) NOT NULL AUTO_INCREMENT,
  `gradeName` varchar(10) NOT NULL,
  `gradeMin` smallint(2) NOT NULL,
  `gradeMax` smallint(2) NOT NULL,
  PRIMARY KEY (`gradeID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `grade` (`gradeID`, `gradeName`, `gradeMin`, `gradeMax`) VALUES
(1,	'A-1',	91,	100),
(2,	'A-2',	81,	90),
(3,	'B-1',	71,	80),
(4,	'B-2',	61,	70),
(5,	'C-1',	51,	60),
(6,	'C-2',	41,	50),
(7,	'D',	31,	40),
(8,	'E-1',	21,	30),
(9,	'E-2',	0,	20);

DROP TABLE IF EXISTS `institute`;
CREATE TABLE `institute` (
  `instituteID` int(11) NOT NULL AUTO_INCREMENT,
  `instituteName` varchar(100) NOT NULL,
  `instituteContactName` varchar(100) NOT NULL,
  `instituteEmailExtension` varchar(50) NOT NULL,
  `institutePhone` varchar(70) NOT NULL,
  `instituteAddress` varchar(300) NOT NULL,
  `institutePincode` varchar(10) NOT NULL,
  `countryID` smallint(3) NOT NULL,
  `stateID` int(11) NOT NULL,
  `cityID` int(11) NOT NULL,
  `instituteStatus` enum('Active','Inactive') NOT NULL,
  `instituteCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`instituteID`),
  UNIQUE KEY `instituteName` (`instituteName`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `institute` (`instituteID`, `instituteName`, `instituteContactName`, `instituteEmailExtension`, `institutePhone`, `instituteAddress`, `institutePincode`, `countryID`, `stateID`, `cityID`, `instituteStatus`, `instituteCreatedDate`) VALUES
(1,	'Nirma Institute Of Technology',	'Sarat Dalai',	'director.is@nirmauni.ac.in',	'7971652000',	'Nirma University, S G Highway , Ahmedabad ',	'382481',	1,	1,	1,	'Active',	'2019-07-20 14:17:24'),
(2,	'Reva University',	'Sunilkumar S Manvi',	'info@reva.edu.in',	'9538874444',	'Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bangalore',	'560064',	1,	3,	4,	'Active',	'2019-08-01 11:23:39'),
(3,	'Campion School',	'Shrinivas Chauhan',	'www.campionschool.in',	'7855245451',	'Cooperage Road, Fort',	'400076',	1,	2,	3,	'Active',	'2019-08-20 13:25:52'),
(4,	'Cochin Public School',	'Sai Reddy',	'infoschool@ac.in',	'0484254125',	'Cochin Public School Rd, Pipeline Junction, Thrikkakara, Edappally, Ernakulam, ',	'682021',	1,	4,	2,	'Active',	'2019-08-20 13:35:47');

DROP TABLE IF EXISTS `language`;
CREATE TABLE `language` (
  `languageID` smallint(3) NOT NULL AUTO_INCREMENT,
  `languageName` varchar(100) NOT NULL,
  `languageStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `languageCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`languageID`),
  UNIQUE KEY `languageName` (`languageName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `reason`;
CREATE TABLE `reason` (
  `reasonID` smallint(3) NOT NULL AUTO_INCREMENT,
  `reasonName` varchar(100) NOT NULL,
  `reasonStatus` enum('Active','Inactive') NOT NULL,
  `reasonCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`reasonID`),
  UNIQUE KEY `reasonName` (`reasonName`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `reason` (`reasonID`, `reasonName`, `reasonStatus`, `reasonCreatedDate`) VALUES
(1,	'Sick',	'Active',	'2019-07-20 15:00:21'),
(2,	'Not Available',	'Active',	'2019-08-21 06:16:15'),
(3,	's',	'Inactive',	'2019-11-08 10:31:04');

DROP TABLE IF EXISTS `smslog`;
CREATE TABLE `smslog` (
  `smslogID` int(11) NOT NULL AUTO_INCREMENT,
  `smslogMobile` varchar(20) NOT NULL DEFAULT '',
  `smslogMessage` varchar(500) NOT NULL DEFAULT '',
  `smslogResponse` varchar(500) NOT NULL DEFAULT '',
  `smslogDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`smslogID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `state`;
CREATE TABLE `state` (
  `stateID` int(11) NOT NULL AUTO_INCREMENT,
  `countryID` int(11) NOT NULL DEFAULT '0',
  `stateName` varchar(100) NOT NULL,
  `stateRemark` varchar(200) DEFAULT NULL,
  `stateStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `stateCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`stateID`),
  UNIQUE KEY `countryID` (`countryID`,`stateName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `state` (`stateID`, `countryID`, `stateName`, `stateRemark`, `stateStatus`, `stateCreatedDate`) VALUES
(1,	1,	'Gujarat',	'Good',	'Active',	'2019-07-20 08:10:44'),
(2,	1,	'Maharashtra',	'Good',	'Active',	'2019-07-25 05:32:22'),
(3,	1,	'Karnataka',	'Good ',	'Active',	'2019-07-25 05:33:28'),
(4,	1,	'Kerala',	'Good',	'Inactive',	'2019-07-26 05:44:20');

DROP TABLE IF EXISTS `stream`;
CREATE TABLE `stream` (
  `streamID` smallint(3) NOT NULL AUTO_INCREMENT,
  `streamName` varchar(100) NOT NULL,
  `streamRemarks` varchar(200) DEFAULT NULL,
  `streamStatus` enum('Active','Inactive') NOT NULL,
  `streamCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`streamID`),
  UNIQUE KEY `streamName` (`streamName`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `stream` (`streamID`, `streamName`, `streamRemarks`, `streamStatus`, `streamCreatedDate`) VALUES
(1,	'Arts',	NULL,	'Active',	'2019-07-20 12:18:17'),
(2,	'Science',	NULL,	'Active',	'2019-08-01 10:29:27'),
(3,	'Commerce',	NULL,	'Active',	'2019-08-20 11:30:17'),
(4,	'sci',	'DFWSFSAF',	'Active',	'2019-11-07 11:51:48'),
(5,	'FDFDF',	'DFWSFSAF',	'Active',	'2019-11-07 11:51:54');

DROP TABLE IF EXISTS `subject`;
CREATE TABLE `subject` (
  `subjectID` int(11) NOT NULL AUTO_INCREMENT,
  `coursestdID` smallint(3) NOT NULL,
  `subjectName` varchar(100) NOT NULL,
  `subjectLastMonth` varchar(20) NOT NULL,
  `subjectColor` varchar(20) NOT NULL,
  `subjectIcon` varchar(100) NOT NULL,
  `subjectRemarks` varchar(200) DEFAULT NULL,
  `subjectStatus` enum('Active','Inactive') NOT NULL,
  `subjectCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`subjectID`),
  UNIQUE KEY `subjectName` (`subjectName`,`coursestdID`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

INSERT INTO `subject` (`subjectID`, `coursestdID`, `subjectName`, `subjectLastMonth`, `subjectColor`, `subjectIcon`, `subjectRemarks`, `subjectStatus`, `subjectCreatedDate`) VALUES
(1,	1,	'Physics',	'June',	'#fcfcfc',	'600X600XADMIN20190801163014.jpeg',	'study',	'Active',	'2019-07-20 14:00:15');

-- 2020-05-12 10:29:14
