-- Adminer 4.2.2 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `academy`;
CREATE TABLE `academy` (
  `academyID` smallint(3) NOT NULL AUTO_INCREMENT,
  `academyName` varchar(100) NOT NULL,
  `academyRemarks` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `academyStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `academyCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`academyID`),
  UNIQUE KEY `academyName` (`academyName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `academy` (`academyID`, `academyName`, `academyRemarks`, `academyStatus`, `academyCreatedDate`) VALUES
(1,	'SL Benfica',	'',	'Active',	'2019-05-15 12:57:22'),
(2,	'Southampton',	'good to Southampton',	'Active',	'2019-05-15 12:57:51'),
(3,	'Atletico Madrid',	'',	'Active',	'2019-05-15 12:58:23');

DROP TABLE IF EXISTS `adformats`;
CREATE TABLE `adformats` (
  `adformatID` smallint(3) NOT NULL AUTO_INCREMENT,
  `adformatName` varchar(100) NOT NULL,
  `adformatRemarks` varchar(200) DEFAULT NULL,
  `adformatStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `adformatCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`adformatID`),
  UNIQUE KEY `adformatName` (`adformatName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `adformats` (`adformatID`, `adformatName`, `adformatRemarks`, `adformatStatus`, `adformatCreatedDate`) VALUES
(1,	'Text Ads',	'',	'Active',	'2019-06-18 11:06:42'),
(2,	'Image Ads',	'',	'Active',	'2019-06-18 11:07:41'),
(3,	'Rich Media',	'',	'Active',	'2019-10-03 10:12:53'),
(4,	'Video Ads',	'',	'Active',	'2019-10-03 10:19:04'),
(5,	'Native Ads',	'',	'Active',	'2019-10-03 10:19:20');

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `Admin_ID` smallint(3) NOT NULL AUTO_INCREMENT,
  `Admin_Name` varchar(100) NOT NULL,
  `Admin_Email` varchar(75) NOT NULL,
  `Admin_Mobile` varchar(25) DEFAULT NULL,
  `Admin_Password` varchar(100) NOT NULL,
  `Admin_Type` enum('Admin','Subadmin') NOT NULL DEFAULT 'Admin',
  `Admin_Address` varchar(200) DEFAULT NULL,
  `Admin_Status` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `Admin_Last_Login` timestamp NULL DEFAULT NULL,
  `Created_Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Admin_Code_Reset_Password` varchar(20) NOT NULL DEFAULT '',
  `Admin_Exp_CRP` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`Admin_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `admin` (`Admin_ID`, `Admin_Name`, `Admin_Email`, `Admin_Mobile`, `Admin_Password`, `Admin_Type`, `Admin_Address`, `Admin_Status`, `Admin_Last_Login`, `Created_Date`, `Admin_Code_Reset_Password`, `Admin_Exp_CRP`) VALUES
(1,	'Admin',	'admin@admin.com',	'1234567890',	'$2y$13$qYynpuRrdVgXqtjcxfG3TOyhr9Z8NzBLSapM955T/EPaFrN.db2J6',	'Admin',	'India',	'Active',	NULL,	'2017-10-03 11:47:05',	'',	'2018-03-23 10:00:50');

DROP TABLE IF EXISTS `advsubscriptionplan`;
CREATE TABLE `advsubscriptionplan` (
  `advsubplanID` smallint(3) NOT NULL AUTO_INCREMENT,
  `advsubplanName` varchar(100) NOT NULL,
  `advsubplanRemarks` varchar(200) DEFAULT NULL,
  `advsubplanDuration` int(5) NOT NULL,
  `advsubplanDurationUnit` varchar(20) NOT NULL,
  `advsubplanPrice` decimal(7,2) NOT NULL,
  `curruncyID` smallint(3) NOT NULL,
  `advsubplanStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  PRIMARY KEY (`advsubplanID`),
  UNIQUE KEY `advsubplanName` (`advsubplanName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `advsubscriptionplan` (`advsubplanID`, `advsubplanName`, `advsubplanRemarks`, `advsubplanDuration`, `advsubplanDurationUnit`, `advsubplanPrice`, `curruncyID`, `advsubplanStatus`) VALUES
(1,	'Gold',	'',	1,	'Years',	70000.00,	5,	'Active'),
(2,	'Silver',	'',	1,	'Years',	50000.00,	4,	'Active'),
(3,	'Bronze',	'',	1,	'Years',	30000.00,	4,	'Active');

DROP TABLE IF EXISTS `agegroup`;
CREATE TABLE `agegroup` (
  `agegroupID` smallint(3) NOT NULL AUTO_INCREMENT,
  `agegroupFrom` smallint(3) NOT NULL,
  `agegroupTo` smallint(3) NOT NULL,
  `agegroupRemark` varchar(200) DEFAULT NULL,
  `agegroupStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `agegroupCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`agegroupID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `agegroup` (`agegroupID`, `agegroupFrom`, `agegroupTo`, `agegroupRemark`, `agegroupStatus`, `agegroupCreatedDate`) VALUES
(1,	0,	12,	'0 to 12 year children playing',	'Active',	'2019-05-15 10:07:34'),
(2,	13,	15,	'13 to 15 year children playing',	'Active',	'2019-05-15 10:31:24'),
(3,	16,	24,	'16 to 24 year children playing',	'Active',	'2019-05-15 10:32:03'),
(4,	25,	34,	'',	'Active',	'2019-05-23 07:00:36'),
(5,	35,	54,	'',	'Active',	'2019-06-28 06:01:24'),
(6,	55,	99,	'',	'Active',	'2019-06-28 06:01:56');

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


DROP TABLE IF EXISTS `appuserrole`;
CREATE TABLE `appuserrole` (
  `appuroleID` smallint(3) NOT NULL AUTO_INCREMENT,
  `appuroleName` varchar(100) NOT NULL,
  `apputypeID` smallint(3) NOT NULL,
  `appuroleRemarks` varchar(200) DEFAULT NULL,
  `appuroleStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `appuroleCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `appuroleImage` varchar(100) NOT NULL,
  PRIMARY KEY (`appuroleID`),
  UNIQUE KEY `appuroleName` (`appuroleName`,`apputypeID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `appuserrole` (`appuroleID`, `appuroleName`, `apputypeID`, `appuroleRemarks`, `appuroleStatus`, `appuroleCreatedDate`, `appuroleImage`) VALUES
(1,	'Players',	1,	'',	'Active',	'2019-05-17 10:18:48',	'appuroleID1.png'),
(2,	'Technical Staff',	1,	'',	'Active',	'2019-05-17 10:47:04',	'appuroleID2.png'),
(3,	'Club or Academies',	1,	'',	'Active',	'2019-06-01 06:24:27',	'appuroleID3.png'),
(4,	'Job Hunter',	2,	'',	'Active',	'2019-07-31 04:50:22',	'appuroleID4.png'),
(5,	'test',	2,	'gdfgdf',	'Active',	'2019-12-04 12:42:12',	'appuroleID5.png');

DROP TABLE IF EXISTS `appusertype`;
CREATE TABLE `appusertype` (
  `apputypeID` smallint(3) NOT NULL AUTO_INCREMENT,
  `apputypeName` varchar(100) NOT NULL,
  `apputypeRemarks` varchar(200) DEFAULT NULL,
  `apputypeStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `apputypeCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `apputypeImage` varchar(100) NOT NULL,
  PRIMARY KEY (`apputypeID`),
  UNIQUE KEY `apputypeName` (`apputypeName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `appusertype` (`apputypeID`, `apputypeName`, `apputypeRemarks`, `apputypeStatus`, `apputypeCreatedDate`, `apputypeImage`) VALUES
(1,	'Talent Pool',	'test',	'Active',	'2019-05-17 09:29:06',	'20191225114913.png'),
(2,	'Business Networking',	'Recruiters',	'Active',	'2019-05-17 09:30:49',	'20191225114901.jpg'),
(3,	'Marketplace',	'test demo',	'Active',	'2019-05-17 09:31:39',	'20191225114851.jpg'),
(6,	'test',	'TEST',	'Active',	'2019-12-04 12:57:12',	'20191225114833.jpg');

DROP TABLE IF EXISTS `channeltype`;
CREATE TABLE `channeltype` (
  `chnltypeID` smallint(3) NOT NULL AUTO_INCREMENT,
  `chnltypeName` varchar(100) NOT NULL,
  `chnltypeRemarks` varchar(200) DEFAULT NULL,
  `chnltypeStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `chnltypeCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`chnltypeID`),
  UNIQUE KEY `chnltypeName` (`chnltypeName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `channeltype` (`chnltypeID`, `chnltypeName`, `chnltypeRemarks`, `chnltypeStatus`, `chnltypeCreatedDate`) VALUES
(1,	'News',	'Breking news',	'Active',	'2019-05-15 13:13:46'),
(2,	'Product',	'',	'Active',	'2019-05-15 13:14:03'),
(3,	'Brand',	'',	'Active',	'2019-05-15 13:14:16'),
(4,	'Event',	'',	'Active',	'2019-10-03 09:35:32'),
(5,	'TV',	'',	'Active',	'2019-10-03 09:48:07');

DROP TABLE IF EXISTS `city`;
CREATE TABLE `city` (
  `cityID` int(11) NOT NULL AUTO_INCREMENT,
  `countryID` int(11) NOT NULL DEFAULT '0',
  `stateID` int(11) NOT NULL DEFAULT '0',
  `cityName` varchar(100) NOT NULL,
  `cityRemark` varchar(200) DEFAULT NULL,
  `cityStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `cityCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cityID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `city` (`cityID`, `countryID`, `stateID`, `cityName`, `cityRemark`, `cityStatus`, `cityCreatedDate`) VALUES
(1,	1,	1,	'Ahmedabad',	NULL,	'Active',	'2019-04-05 11:27:21');

DROP TABLE IF EXISTS `club`;
CREATE TABLE `club` (
  `clubID` smallint(3) NOT NULL AUTO_INCREMENT,
  `clubName` varchar(100) NOT NULL,
  `clubRemarks` varchar(200) DEFAULT NULL,
  `clubStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `clubCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`clubID`),
  UNIQUE KEY `clubName` (`clubName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `club` (`clubID`, `clubName`, `clubRemarks`, `clubStatus`, `clubCreatedDate`) VALUES
(1,	'FC Barcelona',	'',	'Active',	'2019-05-15 12:51:36'),
(2,	'Real Madrid',	'',	'Active',	'2019-05-15 12:52:08'),
(3,	'Atletico Madrid',	'',	'Active',	'2019-05-15 12:52:31');

DROP TABLE IF EXISTS `cmspage`;
CREATE TABLE `cmspage` (
  `cmspageID` int(11) NOT NULL AUTO_INCREMENT,
  `cmspageName` varchar(100) NOT NULL DEFAULT '',
  `cmspageImage` varchar(100) NOT NULL DEFAULT '',
  `cmspageContents` longtext NOT NULL,
  `cmspageIsSystemPage` enum('Yes','No') NOT NULL DEFAULT 'Yes',
  `cmspageStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `cmspageCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`cmspageID`),
  UNIQUE KEY `unique_index` (`cmspageName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `cmspage` (`cmspageID`, `cmspageName`, `cmspageImage`, `cmspageContents`, `cmspageIsSystemPage`, `cmspageStatus`, `cmspageCreatedDate`) VALUES
(1,	'About Us',	'',	'About Us content',	'Yes',	'Active',	'2019-06-04 12:21:09'),
(2,	'Privacy Policy',	'',	'Privacy Policy content',	'Yes',	'Active',	'2019-06-28 07:04:14'),
(3,	'Contact Us',	'',	'Contact details',	'Yes',	'Active',	'2019-06-28 07:05:12'),
(4,	'Terms and Conditions',	'',	'TnC contents',	'Yes',	'Active',	'2019-06-28 07:05:55');

DROP TABLE IF EXISTS `companyindustry`;
CREATE TABLE `companyindustry` (
  `compindID` smallint(3) NOT NULL AUTO_INCREMENT,
  `compindName` varchar(100) NOT NULL,
  `compindRemarks` varchar(200) DEFAULT NULL,
  `compindStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `compindCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`compindID`),
  UNIQUE KEY `compindName` (`compindName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `companyindustry` (`compindID`, `compindName`, `compindRemarks`, `compindStatus`, `compindCreatedDate`) VALUES
(1,	'Accounting',	'Accounting is Banking Work',	'Active',	'2019-05-15 12:04:21'),
(2,	'Animation',	'',	'Active',	'2019-05-15 12:05:04'),
(3,	'Marketing and Advertising',	'',	'Active',	'2019-05-15 12:05:56');

DROP TABLE IF EXISTS `companytype`;
CREATE TABLE `companytype` (
  `comptypeID` smallint(3) NOT NULL AUTO_INCREMENT,
  `comptypeName` varchar(100) NOT NULL,
  `comptypeRemarks` varchar(200) DEFAULT NULL,
  `comptypeStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `comptypeCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`comptypeID`),
  UNIQUE KEY `comptypeName` (`comptypeName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `companytype` (`comptypeID`, `comptypeName`, `comptypeRemarks`, `comptypeStatus`, `comptypeCreatedDate`) VALUES
(1,	'Commercial',	'Commercial company',	'Active',	'2019-05-15 13:03:36'),
(2,	'Advertising',	'Advertising is low price',	'Active',	'2019-05-15 13:04:04'),
(3,	'Sponsoring',	'Sponsoring company',	'Active',	'2019-05-15 13:04:26');

DROP TABLE IF EXISTS `connectiontype`;
CREATE TABLE `connectiontype` (
  `conntypeID` smallint(3) NOT NULL AUTO_INCREMENT,
  `conntypeName` varchar(100) NOT NULL,
  `conntypeRemarks` varchar(200) DEFAULT NULL,
  `conntypeStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `conntypeCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`conntypeID`),
  UNIQUE KEY `conntypeName` (`conntypeName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `connectiontype` (`conntypeID`, `conntypeName`, `conntypeRemarks`, `conntypeStatus`, `conntypeCreatedDate`) VALUES
(1,	'All',	'All company',	'Active',	'2019-05-15 12:40:32'),
(2,	'Professional',	'',	'Active',	'2019-05-15 12:40:58'),
(3,	'Friends',	'my dear Friends',	'Active',	'2019-05-15 12:41:18'),
(4,	'Acquaintances',	'',	'Active',	'2019-10-03 09:18:49'),
(5,	'Family or Cousins',	'',	'Active',	'2019-10-03 09:24:11');

DROP TABLE IF EXISTS `country`;
CREATE TABLE `country` (
  `countryID` smallint(3) NOT NULL AUTO_INCREMENT,
  `countryName` varchar(100) NOT NULL,
  `countryISO3Code` varchar(3) NOT NULL,
  `countryISO2Code` varchar(2) NOT NULL,
  `countryCurrencyCode` varchar(10) NOT NULL,
  `countryDialCode` varchar(5) NOT NULL,
  `countryFlagImage` varchar(100) NOT NULL,
  `countryRemark` varchar(200) DEFAULT NULL,
  `countryStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `countryCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`countryID`),
  UNIQUE KEY `unique_index` (`countryName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `country` (`countryID`, `countryName`, `countryISO3Code`, `countryISO2Code`, `countryCurrencyCode`, `countryDialCode`, `countryFlagImage`, `countryRemark`, `countryStatus`, `countryCreatedDate`) VALUES
(1,	'India',	'IND',	'IN',	'INR',	'+91',	'20190405164847.png',	'',	'Active',	'2019-04-05 11:18:48'),
(2,	'China',	'',	'CH',	'',	'+86',	'',	'CHINA ',	'Active',	'2019-12-04 05:50:19'),
(3,	'UK',	'',	'UK',	'',	'+44',	'',	'DEMO',	'Active',	'2019-12-04 05:54:38');

DROP TABLE IF EXISTS `countrytax`;
CREATE TABLE `countrytax` (
  `countrytaxID` int(5) NOT NULL AUTO_INCREMENT,
  `countryID` smallint(3) NOT NULL,
  `taxtypeID` smallint(3) NOT NULL,
  `countrytaxRate` decimal(5,2) NOT NULL,
  `countrytaxRemark` varchar(200) DEFAULT NULL,
  `countrytaxStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `countrytaxCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`countrytaxID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `countrytax` (`countrytaxID`, `countryID`, `taxtypeID`, `countrytaxRate`, `countrytaxRemark`, `countrytaxStatus`, `countrytaxCreatedDate`) VALUES
(1,	1,	1,	5.00,	'',	'Active',	'2019-05-27 13:06:44');

DROP TABLE IF EXISTS `currencies`;
CREATE TABLE `currencies` (
  `curruncyID` smallint(3) NOT NULL AUTO_INCREMENT,
  `curruncyName` varchar(100) NOT NULL,
  `curruncyCode` varchar(50) NOT NULL,
  `curruncyRemarks` varchar(200) DEFAULT NULL,
  `curruncystatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `curruncyCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`curruncyID`),
  UNIQUE KEY `curruncyName` (`curruncyName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `currencies` (`curruncyID`, `curruncyName`, `curruncyCode`, `curruncyRemarks`, `curruncystatus`, `curruncyCreatedDate`) VALUES
(1,	'South Africa - Rand',	'ZAR',	'',	'Active',	'2019-05-27 13:09:15'),
(2,	'India - Rupee',	'INR',	'',	'Active',	'2019-05-28 13:38:01'),
(3,	'Euro Member Countries - Euro',	'EUR',	'',	'Active',	'2019-05-29 06:05:29'),
(4,	'United States of America- Dollar',	'USD',	'',	'Active',	'2019-06-04 12:45:32'),
(5,	'Brazil - Real',	'BRL',	'',	'Active',	'2019-10-09 06:32:01'),
(6,	'Japan - Yen',	'JPY',	'',	'Active',	'2019-11-21 10:03:12');

DROP TABLE IF EXISTS `eventtype`;
CREATE TABLE `eventtype` (
  `eventtypeID` smallint(3) NOT NULL AUTO_INCREMENT,
  `eventtypeName` varchar(100) NOT NULL,
  `eventtypeRemarks` varchar(200) DEFAULT NULL,
  `eventtypeStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `eventtypeCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`eventtypeID`),
  UNIQUE KEY `eventtypeName` (`eventtypeName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `eventtype` (`eventtypeID`, `eventtypeName`, `eventtypeRemarks`, `eventtypeStatus`, `eventtypeCreatedDate`) VALUES
(1,	'Private',	'Private propties',	'Active',	'2019-05-15 13:19:57'),
(2,	'Public',	'',	'Active',	'2019-05-15 13:20:12');

DROP TABLE IF EXISTS `faq`;
CREATE TABLE `faq` (
  `faqID` int(5) NOT NULL AUTO_INCREMENT,
  `faqcategoryID` smallint(3) NOT NULL,
  `faqQuestion` varchar(200) NOT NULL,
  `faqAnswer` text NOT NULL,
  `faqStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `faqCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`faqID`),
  UNIQUE KEY `faqQuestion` (`faqQuestion`,`faqcategoryID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `faq` (`faqID`, `faqcategoryID`, `faqQuestion`, `faqAnswer`, `faqStatus`, `faqCreatedDate`) VALUES
(1,	1,	'How do I introduce users ?',	'Welcome to our team',	'Active',	'2019-05-27 13:01:15'),
(2,	2,	'How Can I make a group chat ?',	'By creating a group in some application.',	'Active',	'2019-05-27 13:01:34'),
(3,	1,	'How Do I introduce users test demo ?',	'Practically',	'Inactive',	'2019-05-29 06:11:49'),
(4,	2,	'how to do group chat',	'following are the steps to do group chat',	'Inactive',	'2019-07-29 10:29:31'),
(5,	1,	'Ramesh test?',	'<p>test</p>',	'Inactive',	'2019-12-04 09:29:18');

DROP TABLE IF EXISTS `faqcategory`;
CREATE TABLE `faqcategory` (
  `faqcategoryID` smallint(3) NOT NULL AUTO_INCREMENT,
  `faqcategoryName` varchar(100) NOT NULL,
  `faqcategoryRemarks` varchar(200) DEFAULT NULL,
  `faqcategoryStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  PRIMARY KEY (`faqcategoryID`),
  UNIQUE KEY `faqcategoryName` (`faqcategoryName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `faqcategory` (`faqcategoryID`, `faqcategoryName`, `faqcategoryRemarks`, `faqcategoryStatus`) VALUES
(1,	'Post Section ',	'',	'Active'),
(2,	'Chat sections',	'',	'Active');

DROP TABLE IF EXISTS `fooballlevel`;
CREATE TABLE `fooballlevel` (
  `footbllevelID` smallint(3) NOT NULL AUTO_INCREMENT,
  `footbllevelName` varchar(100) NOT NULL,
  `footbllevelRemarks` varchar(200) DEFAULT NULL,
  `footbllevelStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `footbllevelCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`footbllevelID`),
  UNIQUE KEY `footbllevelName` (`footbllevelName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `fooballlevel` (`footbllevelID`, `footbllevelName`, `footbllevelRemarks`, `footbllevelStatus`, `footbllevelCreatedDate`) VALUES
(1,	'Professional',	'',	'Active',	'2019-05-15 10:44:37'),
(2,	'Semi',	'',	'Active',	'2019-05-15 10:45:01'),
(3,	'Aspiring ',	'',	'Active',	'2019-05-15 10:45:31'),
(4,	'Amateur',	'',	'Active',	'2019-05-31 11:05:29');

DROP TABLE IF EXISTS `footballtype`;
CREATE TABLE `footballtype` (
  `footbltypeID` smallint(3) NOT NULL AUTO_INCREMENT,
  `footbltypeName` varchar(100) NOT NULL,
  `footbltypeRemarks` varchar(200) DEFAULT NULL,
  `footbltypeStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `footbltypeCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `footbltypeImage` varchar(100) NOT NULL,
  PRIMARY KEY (`footbltypeID`),
  UNIQUE KEY `footbltypeName` (`footbltypeName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `footballtype` (`footbltypeID`, `footbltypeName`, `footbltypeRemarks`, `footbltypeStatus`, `footbltypeCreatedDate`, `footbltypeImage`) VALUES
(1,	'Football or Soccer',	'',	'Active',	'2019-05-15 09:56:24',	'footballtypeID1.png'),
(2,	'Futsal',	'',	'Active',	'2019-05-15 09:57:58',	'footballtypeID2.png'),
(3,	'Freestyle',	'',	'Active',	'2019-05-15 09:58:36',	'footballtypeID3.png'),
(4,	'Beach Soccer',	'',	'Active',	'2019-05-22 10:42:48',	'footballtypeID4.png'),
(13,	'test',	'',	'Active',	'2019-12-04 12:41:17',	'footballtypeID13.png');

DROP TABLE IF EXISTS `hobby`;
CREATE TABLE `hobby` (
  `hobbyID` smallint(3) NOT NULL AUTO_INCREMENT,
  `hobbyName` varchar(100) NOT NULL,
  `hobbyRemarks` varchar(200) DEFAULT NULL,
  `hobbyStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `hobbyCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`hobbyID`),
  UNIQUE KEY `hobbyName` (`hobbyName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `hobby` (`hobbyID`, `hobbyName`, `hobbyRemarks`, `hobbyStatus`, `hobbyCreatedDate`) VALUES
(1,	'Help/Advice',	'Help/Advice is good Facilities',	'Active',	'2019-05-15 12:34:49'),
(2,	'Job Search',	'New job searching',	'Active',	'2019-05-15 12:35:14'),
(3,	'Networking/connecting',	'Networking job',	'Active',	'2019-05-15 12:35:38');

DROP TABLE IF EXISTS `interest`;
CREATE TABLE `interest` (
  `interestID` smallint(3) NOT NULL AUTO_INCREMENT,
  `interestName` varchar(100) NOT NULL,
  `interestRemarks` varchar(200) DEFAULT NULL,
  `interestStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `interestCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`interestID`),
  UNIQUE KEY `interestName` (`interestName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `interest` (`interestID`, `interestName`, `interestRemarks`, `interestStatus`, `interestCreatedDate`) VALUES
(1,	'Charity',	'',	'Active',	'2019-05-15 11:22:38'),
(2,	'Philanthropy',	'',	'Active',	'2019-05-15 11:23:25'),
(3,	'Reading',	'Reading book',	'Active',	'2019-05-15 11:23:47');

DROP TABLE IF EXISTS `jobfunction`;
CREATE TABLE `jobfunction` (
  `jobfuncID` smallint(3) NOT NULL AUTO_INCREMENT,
  `jobfuncName` varchar(100) NOT NULL,
  `jobfuncRemarks` varchar(200) DEFAULT NULL,
  `jobfuncStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `jobfuncCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`jobfuncID`),
  UNIQUE KEY `jobfuncName` (`jobfuncName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `jobfunction` (`jobfuncID`, `jobfuncName`, `jobfuncRemarks`, `jobfuncStatus`, `jobfuncCreatedDate`) VALUES
(1,	'Administrative',	'',	'Active',	'2019-05-15 12:18:37'),
(2,	'Advertising',	'',	'Active',	'2019-05-15 12:19:49'),
(3,	'Analyst',	'',	'Active',	'2019-05-15 12:20:45');

DROP TABLE IF EXISTS `jobtype`;
CREATE TABLE `jobtype` (
  `jobtypeID` smallint(3) NOT NULL AUTO_INCREMENT,
  `jobtypeName` varchar(100) NOT NULL,
  `jobtypeRemarks` varchar(200) DEFAULT NULL,
  `jobtypeStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `jobtypeCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`jobtypeID`),
  UNIQUE KEY `jobtypeName` (`jobtypeName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `jobtype` (`jobtypeID`, `jobtypeName`, `jobtypeRemarks`, `jobtypeStatus`, `jobtypeCreatedDate`) VALUES
(1,	'Full Time',	'',	'Active',	'2019-05-15 12:28:31'),
(2,	'Part Time',	'',	'Active',	'2019-05-15 12:28:51'),
(3,	'Contract',	'my job is contract',	'Active',	'2019-05-15 12:29:20'),
(4,	'Temporary',	'',	'Active',	'2019-10-03 09:12:58'),
(5,	'Internship',	'',	'Active',	'2019-10-03 09:13:14');

DROP TABLE IF EXISTS `language`;
CREATE TABLE `language` (
  `languageID` smallint(3) NOT NULL AUTO_INCREMENT,
  `languageName` varchar(100) NOT NULL,
  `languageRemarks` varchar(200) DEFAULT NULL,
  `languageStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `languageCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`languageID`),
  UNIQUE KEY `languageName` (`languageName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `language` (`languageID`, `languageName`, `languageRemarks`, `languageStatus`, `languageCreatedDate`) VALUES
(1,	'English',	'langauge is english',	'Active',	'2019-05-16 05:17:21'),
(2,	'Arabic',	'',	'Active',	'2019-05-16 05:17:44'),
(3,	'Hindi',	'language is hindi',	'Active',	'2019-05-16 05:18:04');

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `languagelabel`;
CREATE TABLE `languagelabel` (
  `langLabelID` int(11) NOT NULL AUTO_INCREMENT,
  `langLabelKey` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `languageID` smallint(3) NOT NULL DEFAULT '1',
  `langLabelValue` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `langLabelModule` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'General',
  `langLabelStatus` enum('Active','Inactive') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Active',
  PRIMARY KEY (`langLabelID`),
  KEY `languageID` (`languageID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `languagemsgs`;
CREATE TABLE `languagemsgs` (
  `langMsgID` int(11) NOT NULL AUTO_INCREMENT,
  `languageID` smallint(3) NOT NULL,
  `langMsgKey` varchar(250) COLLATE utf8mb4_unicode_ci NOT NULL,
  `langMsgValue` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  `langMsgStatus` enum('Active','Inactive') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Active',
  PRIMARY KEY (`langMsgID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;


DROP TABLE IF EXISTS `notification`;
CREATE TABLE `notification` (
  `notificationID` bigint(21) NOT NULL AUTO_INCREMENT,
  `notificationReferenceKey` int(11) NOT NULL DEFAULT '0',
  `userID` int(11) NOT NULL DEFAULT '0',
  `userDeviceType` varchar(10) NOT NULL DEFAULT '',
  `userDeviceID` varchar(500) NOT NULL DEFAULT '',
  `notificationType` varchar(50) NOT NULL DEFAULT '',
  `notificationTitle` varchar(500) NOT NULL DEFAULT '',
  `notificationMessageText` varchar(4000) NOT NULL DEFAULT '',
  `notificationResponse` varchar(4000) NOT NULL DEFAULT '',
  `notificationSendDate` date DEFAULT NULL,
  `notificationSendTime` time NOT NULL DEFAULT '00:00:00',
  `notificationStatus` enum('Yes','No') NOT NULL DEFAULT 'No',
  `notificationReadStatus` enum('Yes','No') NOT NULL DEFAULT 'No',
  `notificationCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `notificationData` text,
  PRIMARY KEY (`notificationID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `notification` (`notificationID`, `notificationReferenceKey`, `userID`, `userDeviceType`, `userDeviceID`, `notificationType`, `notificationTitle`, `notificationMessageText`, `notificationResponse`, `notificationSendDate`, `notificationSendTime`, `notificationStatus`, `notificationReadStatus`, `notificationCreatedDate`, `notificationData`) VALUES
(1,	0,	0,	'test1',	'',	'test1',	'Notification Test',	'Notification Test',	'Notification Test',	NULL,	'00:00:00',	'',	'No',	'2019-05-27 11:40:09',	'');

DROP TABLE IF EXISTS `notimessages`;
CREATE TABLE `notimessages` (
  `msgId` int(11) NOT NULL AUTO_INCREMENT,
  `msgTitle` varchar(100) NOT NULL,
  `msgDescription` varchar(255) NOT NULL,
  `msgStatus` enum('Active','Inactive') NOT NULL,
  `msgUserType` enum('All') NOT NULL DEFAULT 'All',
  `msgDate` date NOT NULL,
  `msgCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`msgId`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `notimessages` (`msgId`, `msgTitle`, `msgDescription`, `msgStatus`, `msgUserType`, `msgDate`, `msgCreatedDate`) VALUES
(1,	'Check',	'this is checck',	'Active',	'All',	'2019-04-19',	'2019-04-19 11:21:41');

DROP TABLE IF EXISTS `playerposition`;
CREATE TABLE `playerposition` (
  `plyrposiID` smallint(3) NOT NULL AUTO_INCREMENT,
  `plyrposiName` varchar(100) NOT NULL,
  `plyrposiRemarks` varchar(200) DEFAULT NULL,
  `plyrposiStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `plyrposiCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`plyrposiID`),
  UNIQUE KEY `plyrposiName` (`plyrposiName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `playerposition` (`plyrposiID`, `plyrposiName`, `plyrposiRemarks`, `plyrposiStatus`, `plyrposiCreatedDate`) VALUES
(1,	'Goalkeeper',	'Good Goalkeeper',	'Active',	'2019-05-15 10:55:37'),
(2,	'Corner Back',	'',	'Active',	'2019-05-15 10:55:55'),
(3,	'Line Backers',	'',	'Active',	'2019-05-15 10:56:25'),
(4,	'Running Back',	'',	'Active',	'2019-06-01 11:23:34'),
(5,	'Centre Midfielders',	'',	'Active',	'2019-10-03 08:47:36'),
(6,	'Left Midfielder',	'',	'Active',	'2019-10-03 08:48:17'),
(7,	'Right Midfielder',	'',	'Active',	'2019-10-03 08:49:02'),
(8,	'Central Forward',	'',	'Active',	'2019-10-03 08:49:41'),
(9,	'Right Safety',	'',	'Active',	'2019-10-03 08:50:13'),
(10,	'Left Safety',	'',	'Active',	'2019-10-03 08:50:32'),
(11,	'Striker',	'',	'Active',	'2019-10-03 08:50:48');

DROP TABLE IF EXISTS `reasons`;
CREATE TABLE `reasons` (
  `reasonID` smallint(3) NOT NULL AUTO_INCREMENT,
  `reasonType` varchar(50) NOT NULL,
  `reasonName` varchar(100) NOT NULL,
  `reasonRemarks` varchar(200) DEFAULT NULL,
  `reasonstatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `reasonCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`reasonID`),
  UNIQUE KEY `reasonName` (`reasonName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `reasons` (`reasonID`, `reasonType`, `reasonName`, `reasonRemarks`, `reasonstatus`, `reasonCreatedDate`) VALUES
(1,	'Cancellation',	'Subscription not useful',	'',	'Active',	'2019-05-24 09:16:01'),
(2,	'Delete Account',	'Too complicated',	'',	'Active',	'2019-05-28 13:33:58'),
(6,	'Report Spam',	'Fake Content',	'',	'Active',	'2019-09-13 06:08:53'),
(7,	'Report Spam',	'Nudity',	'',	'Active',	'2019-11-26 10:35:13');

DROP TABLE IF EXISTS `securityquestions`;
CREATE TABLE `securityquestions` (
  `secquestionID` smallint(3) NOT NULL AUTO_INCREMENT,
  `secquestionName` varchar(100) NOT NULL,
  `secquestionRemarks` varchar(200) DEFAULT NULL,
  `secquestionStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `secquestionCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`secquestionID`),
  UNIQUE KEY `secquestionName` (`secquestionName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `securityquestions` (`secquestionID`, `secquestionName`, `secquestionRemarks`, `secquestionStatus`, `secquestionCreatedDate`) VALUES
(1,	'What was your childhood nickname ?',	'',	'Active',	'2019-06-18 11:08:41'),
(2,	'In what city or town was your first job ?',	'',	'Active',	'2019-06-18 11:08:56'),
(3,	'What street did you live on in third grade?',	'',	'Active',	'2019-10-03 10:03:26'),
(4,	'What is the name of your favourite childhood friend?',	'',	'Active',	'2019-10-03 10:05:43'),
(5,	'What school did you attend for sixth grade?',	'',	'Active',	'2019-10-03 10:06:44');

DROP TABLE IF EXISTS `settings`;
CREATE TABLE `settings` (
  `settingsID` smallint(3) NOT NULL AUTO_INCREMENT,
  `settingsEmailFrom` varchar(100) NOT NULL DEFAULT '',
  `settingsEmailTo` varchar(100) NOT NULL DEFAULT '',
  `settingsEmailGateway` varchar(100) NOT NULL,
  `settingEmailID` varchar(100) NOT NULL,
  `settingsEmailPass` varchar(20) NOT NULL,
  `settingBankName` varchar(100) NOT NULL,
  `settingBankAccountNumber` varchar(100) NOT NULL,
  `settingAPIKey` varchar(200) NOT NULL,
  `settingSecretKey` varchar(255) NOT NULL,
  `settingCurrentPassword` varchar(100) NOT NULL,
  `settingRetypePassword` varchar(100) NOT NULL,
  `settingNewPassword` varchar(100) NOT NULL,
  `settingGoogleAnalyticsKey` varchar(100) NOT NULL,
  `settingGoogleMapKey` varchar(100) NOT NULL,
  `settingSupportHelplineNumber` varchar(100) NOT NULL,
  `settingsSSL` enum('Yes','No') NOT NULL,
  `settingsTLS` enum('Yes','No') NOT NULL,
  `settingEmailPort` smallint(3) NOT NULL,
  `settingSenderName` varchar(50) NOT NULL,
  `settingPGMode` enum('Sandbox','Live') NOT NULL,
  `settingsPGSandboxUrl` varchar(250) NOT NULL,
  `settingPGSandboxCustomerKey` varchar(100) NOT NULL,
  `settingsPGSandboxCustomerAuth` varchar(100) NOT NULL,
  `settingsPGLiveUrl` varchar(250) NOT NULL,
  `settingPGLiveCustomerKey` varchar(100) NOT NULL,
  `settingPGLiveCustomerAuth` varchar(100) NOT NULL,
  `settingsUserResetPinLinkExpHr` int(2) NOT NULL DEFAULT '24',
  `settingsLogDeleteDays` smallint(3) NOT NULL DEFAULT '90',
  `settingsDeliveryCharges` decimal(7,2) NOT NULL,
  `settingsTollFree` varchar(20) DEFAULT NULL,
  `settingsOrderReturnTimeMinutes` smallint(3) DEFAULT '30',
  `settingsMasterOtp` varchar(6) DEFAULT '2345',
  `settingsGST` varchar(25) DEFAULT '27AAATI1446A1Z7 ',
  `settingsStockAlert` smallint(3) NOT NULL DEFAULT '0',
  `settingsMinimumOrder` int(5) NOT NULL DEFAULT '0',
  `settingsDealerMargin` decimal(5,2) NOT NULL DEFAULT '0.00',
  `settingsMargineType` enum('Flat','%') NOT NULL,
  `settingsBulkOrderQty` smallint(2) NOT NULL DEFAULT '0',
  `settingsSupportEmail` varchar(100) NOT NULL,
  `settingsSupportMobile` varchar(20) NOT NULL,
  `settingsSupportPhone` varchar(20) NOT NULL,
  `settingsPaymentUrl` varchar(250) NOT NULL,
  `settingsPaymentSuccessUrl` varchar(250) NOT NULL,
  `settingsPaymentErrorUrl` varchar(250) NOT NULL,
  `settingsForDesiVisiForAlteration` decimal(7,2) NOT NULL DEFAULT '0.00',
  `settingsForDesiVisiForBridal` decimal(7,2) NOT NULL DEFAULT '0.00',
  `settingsForDesiVisiForBulk` decimal(7,2) NOT NULL DEFAULT '0.00',
  `settingsForDesiVisiForStitching` decimal(7,2) NOT NULL DEFAULT '0.00',
  `settingsGSTOnFabric` decimal(5,2) NOT NULL DEFAULT '5.00',
  `settingsGSTOnStitchingservice` decimal(5,2) NOT NULL DEFAULT '5.00',
  `settingsQuickbloxUserID` varchar(100) NOT NULL,
  PRIMARY KEY (`settingsID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `settings` (`settingsID`, `settingsEmailFrom`, `settingsEmailTo`, `settingsEmailGateway`, `settingEmailID`, `settingsEmailPass`, `settingBankName`, `settingBankAccountNumber`, `settingAPIKey`, `settingSecretKey`, `settingCurrentPassword`, `settingRetypePassword`, `settingNewPassword`, `settingGoogleAnalyticsKey`, `settingGoogleMapKey`, `settingSupportHelplineNumber`, `settingsSSL`, `settingsTLS`, `settingEmailPort`, `settingSenderName`, `settingPGMode`, `settingsPGSandboxUrl`, `settingPGSandboxCustomerKey`, `settingsPGSandboxCustomerAuth`, `settingsPGLiveUrl`, `settingPGLiveCustomerKey`, `settingPGLiveCustomerAuth`, `settingsUserResetPinLinkExpHr`, `settingsLogDeleteDays`, `settingsDeliveryCharges`, `settingsTollFree`, `settingsOrderReturnTimeMinutes`, `settingsMasterOtp`, `settingsGST`, `settingsStockAlert`, `settingsMinimumOrder`, `settingsDealerMargin`, `settingsMargineType`, `settingsBulkOrderQty`, `settingsSupportEmail`, `settingsSupportMobile`, `settingsSupportPhone`, `settingsPaymentUrl`, `settingsPaymentSuccessUrl`, `settingsPaymentErrorUrl`, `settingsForDesiVisiForAlteration`, `settingsForDesiVisiForBridal`, `settingsForDesiVisiForBulk`, `settingsForDesiVisiForStitching`, `settingsGSTOnFabric`, `settingsGSTOnStitchingservice`, `settingsQuickbloxUserID`) VALUES
(1,	'admin@admin.com',	'admin@admin.com',	'tls://smtp.gmail.com',	'admin@admin.com',	'123456',	'bank of india',	'1274545454',	'123',	'123',	'123456',	'12345678',	'12345678',	'2121421',	'435432',	'353535355553',	'No',	'Yes',	587,	'Fsl',	'Sandbox',	'123',	'123',	'123',	'',	'',	'',	123,	12,	200.00,	'1800180018001800',	32767,	'1595',	'27AAATI1446A1Z7 ',	0,	12,	5.00,	'%',	10,	'support@darjiwala.com',	'8787878787',	'8787878787',	'http://13.234.187.191/frontend/web/payment.php?txn=',	'http://13.234.187.191/frontend/web/paymentsuccess.php?id=',	'http://13.234.187.191/frontend/web/error.php?msg=',	200.00,	300.00,	200.00,	1000.00,	5.00,	5.00,	'93859989');

DROP TABLE IF EXISTS `skill`;
CREATE TABLE `skill` (
  `skillID` smallint(3) NOT NULL AUTO_INCREMENT,
  `skillName` varchar(100) NOT NULL,
  `skillRemarks` varchar(200) DEFAULT NULL,
  `skillStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `skillCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`skillID`),
  UNIQUE KEY `skillName` (`skillName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `skill` (`skillID`, `skillName`, `skillRemarks`, `skillStatus`, `skillCreatedDate`) VALUES
(1,	'Ball control',	'Ball control is working',	'Active',	'2019-05-15 11:02:18'),
(2,	'Dribbling',	'Good to Dribbling',	'Active',	'2019-05-15 11:02:52'),
(3,	'Passing Accuracy',	'',	'Active',	'2019-05-15 11:03:15'),
(4,	'Body control',	'',	'Active',	'2019-05-15 11:03:39'),
(5,	'Speed',	'',	'Active',	'2019-10-03 09:06:05'),
(6,	'Power',	'',	'Active',	'2019-10-03 09:06:15');

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
(1,	1,	'Gujarat',	NULL,	'Active',	'2019-04-05 11:22:12'),
(2,	1,	'Madhya Pradesh',	NULL,	'Active',	'2019-04-05 11:25:11');

DROP TABLE IF EXISTS `taxtype`;
CREATE TABLE `taxtype` (
  `taxtypeID` smallint(3) NOT NULL AUTO_INCREMENT,
  `taxtypeName` varchar(100) NOT NULL,
  `taxtypeRemarks` varchar(200) DEFAULT NULL,
  `taxtypestatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `taxtypeCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`taxtypeID`),
  UNIQUE KEY `taxtypeName` (`taxtypeName`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `taxtype` (`taxtypeID`, `taxtypeName`, `taxtypeRemarks`, `taxtypestatus`, `taxtypeCreatedDate`) VALUES
(1,	'GST',	'',	'Active',	'2019-05-27 13:05:53'),
(2,	'VAT',	'',	'Active',	'2019-05-27 13:06:16'),
(3,	'Sales Tax',	'',	'Active',	'2019-05-28 13:26:29');

DROP TABLE IF EXISTS `template`;
CREATE TABLE `template` (
  `templateID` int(5) NOT NULL AUTO_INCREMENT,
  `templateName` varchar(100) NOT NULL DEFAULT '',
  `templateConstantCode` varchar(6) NOT NULL DEFAULT '',
  `templateSubject` varchar(250) NOT NULL DEFAULT '',
  `templateEmailText` text NOT NULL,
  `templateSMSText` varchar(1000) NOT NULL DEFAULT '',
  `templateNotificationText` varchar(1000) NOT NULL DEFAULT '',
  `templateStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `templateCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`templateID`),
  UNIQUE KEY `unique_index` (`templateConstantCode`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `template` (`templateID`, `templateName`, `templateConstantCode`, `templateSubject`, `templateEmailText`, `templateSMSText`, `templateNotificationText`, `templateStatus`, `templateCreatedDate`) VALUES
(1,	'SignupOTP',	'42780',	'Jhonea OTP',	'<table style=\"border: 1px #ddd solid;\" border=\"0\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n<tbody>\r\n<tr>\r\n<td align=\"center\"><img style=\"max-width: 220px;\" src=\"../../../../../jhonea/backend/web/images/logo-lg.png\" alt=\"Jhonea\" width=\"100%\" /></td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">\r\n<p>Dear ###Receiver_userFirstName### ###Receiver_userLastName###,</p>\r\n<p>Use this <strong>###userOTP###</strong> OTP in Jhonea.</p>\r\n<p>Regards,<br />Jhonea Team</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<p>&nbsp;</p>',	'Your One Time Password(OTP) for logging into Jhonea application is ###userOTP###. It is valid for 5 Mins. PLEASE DO NOT SHARE YOUR OTP WITH ANYONE.  Jhonea',	'',	'Active',	'2018-02-20 02:07:07'),
(2,	'ResetPin',	'471852',	'Reset pin link',	'<table style=\"border: 1px #ddd solid;\" border=\"0\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n<tbody>\r\n<tr>\r\n<td align=\"center\"><img style=\"max-width: 220px;\" src=\"http://betaapplication.com/jhonea/backend/web/images/logo-lg.png\" alt=\"Jhonea\" width=\"100%\"/></td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">\r\n<p>Dear ###Receiver_userFirstName### ###Receiver_userLastName###,</p>\r\n<p>Please <a style=\"font-size: 13px; color: #00baf0; text-decoration: none;\" href=\"http://betaapplication.com/jhonea/frontend/web/index.php/userforgetpin/resetpin?code=###userforgetpinResetCode###\" target=\"_blank\" rel=\"noopener\">Click here</a> to reset the password &amp; after <strong>###settingsUserResetPinLinkExpHr### Hour </strong>link has been expired.</p>\r\n<p>Regards,<br /> Jhonea Team</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>',	'Dear ###Receiver_userFirstName### ###Receiver_userLastName### Use this link for reset pin, after ###settingsUserResetPinLinkExpHr### Hour link has been expired. http://betaapplication.com/jhonea/frontend/web/index.php/userforgetpin/resetpin?code=###userforgetpinResetCode### Regards, Jhonea Team',	'',	'Active',	'2018-02-21 07:36:09'),
(3,	'Backofficeresetpassword',	'478512',	'Jhonea reset password link',	'<table style=\"border: 1px #ddd solid;\" border=\"0\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n<tbody>\r\n<tr>\r\n<td align=\"center\"><img style=\"max-width: 220px;\" src=\"http://betaapplication.com/jhonea/backend/web/images/logo-lg.png\" alt=\"Jhonea\" width=\"100%\"/></td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">\r\n<p>Dear ###Admin_Name### ,</p>\r\n<p>Please <a style=\"font-size: 13px; color: #00baf0; text-decoration: none;\" href=\"http://betaapplication.com/jhonea/frontend/web/index.php/site/admin-reset-password?code=###Admin_Code_Reset_Password###\" target=\"_blank\" rel=\"noopener\">Click here</a> to reset the password &amp; after <strong>###settingsUserResetPinLinkExpHr### Hour </strong>link has been expired.</p>\r\n<p>Regards,<br /> Jhonea Team</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>',	'',	'',	'Active',	'2018-07-10 04:20:18'),
(4,	'SellonJhonea',	'000001',	'Sell on Jhonea request came',	'<table style=\"border: 1px #ddd solid;\" border=\"0\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n<tbody>\r\n<tr>\r\n<td align=\"center\"><img style=\"max-width: 220px;\" src=\"http://betaapplication.com/jhonea/backend/web/images/logo-lg.png\" alt=\"Jhonea\" width=\"100%\"/></td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">\r\n<p>Retailer ###RetailerName### has submitted details for Sell on Jhonea./p>\r\n<p>Regards,<br /> Jhonea Team</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>',	'',	'Thanks for submitting your interest to Jhonea. ',	'Active',	'2018-08-13 04:52:05'),
(5,	'orderstatus',	'000002',	'Jhonea Order Status',	'<table style=\"border: 1px #ddd solid;\" border=\"0\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n<tbody>\r\n<tr>\r\n<td align=\"center\"><img style=\"max-width: 220px;\" src=\"http://betaapplication.com/jhonea/backend/web/images/logo-lg.png\" alt=\"Jhonea\" width=\"100%\"/></td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">\r\n<p>Dear ###userFullName### ,</p>\r\n<p>Your order no ###orderID###\'s status changed to ###statusName### with remarks ###orderstatusRemark###</p>\r\n<p>Regards,<br /> Jhonea Team</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>',	'Your order no ###orderID###\'s status changed to ###statusName### with remarks ###orderStatusRemark###.',	'Your order no ###orderID###\'s status changed to ###statusName### with remarks ###orderStatusRemark###.',	'Active',	'2018-08-13 23:39:54'),
(6,	'BecomeaWholeseller',	'000006',	'Jhonea become a wholeseller confirmation',	'<table style=\"border: 1px #ddd solid;\" border=\"0\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n<tbody>\r\n<tr>\r\n<td align=\"center\"><img style=\"max-width: 220px;\" src=\"http://betaapplication.com/jhonea/backend/web/images/logo-lg.png\" alt=\"Jhonea\" width=\"100%\"/></td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">\r\n<p>Wholeseller ###wholesaleName### has submitted details for Become a Wholeseller on Jhonea./p>\r\n<p>Regards,<br /> Jhonea Team</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>',	'',	'',	'Active',	'2018-09-20 07:47:04'),
(7,	'OrderReceived',	'000007',	'Jhonea New Order Received',	'<table style=\"border: 1px #ddd solid;\" border=\"0\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n<tbody>\r\n<tr>\r\n<td align=\"center\"><img style=\"max-width: 220px;\" src=\"http://betaapplication.com/jhonea/backend/web/images/logo-lg.png\" alt=\"Jhonea\" width=\"100%\" /></td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">\r\n<p>Dear Admin ,</p>\r\n<p>New order ###orderID### received.</p>\r\n<p>Regards,<br /> Jhonea Team</p>\r\n</td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">&nbsp;</td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">&nbsp;</td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">&nbsp;</td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">&nbsp;</td>\r\n</tr>\r\n</tbody>\r\n</table>',	'',	'',	'Active',	'2018-09-21 02:22:40'),
(8,	'OrderPlaced',	'000008',	'Jhonea New Order Placed',	'<table style=\"border: 1px #ddd solid;\" border=\"0\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n<tbody>\r\n<tr>\r\n<td align=\"center\"><img style=\"max-width: 220px;\" src=\"http://betaapplication.com/jhonea/backend/web/images/logo-lg.png\" alt=\"Jhonea\" width=\"100%\"/></td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">\r\n<p>Dear ###userFullName### ,</p>\r\n<p>Your order ###OrderID### has been successfully placed. Jhonea Team will confirm the order soon./p>\r\n<p>Regards,<br /> Jhonea Team</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>',	'',	'Your order ###OrderID### has been successfully placed. Jhonea Team will confirm the order soon.',	'Active',	'2018-09-21 03:38:56'),
(9,	'NewProductAdded',	'000009',	'Jhonea New Products Added',	'<table style=\"border: 1px #ddd solid;\" border=\"0\" width=\"600\" cellspacing=\"0\" cellpadding=\"0\" align=\"center\">\r\n<tbody>\r\n<tr>\r\n<td align=\"center\"><img style=\"max-width: 220px;\" src=\"http://betaapplication.com/jhonea/backend/web/images/logo-lg.png\" alt=\"Jhonea\" width=\"100%\" /></td>\r\n</tr>\r\n<tr>\r\n<td style=\"background: #fff; color: #5b5b5b; border-radius: 4px; font-family: arial; font-size: 13px; padding: 10px 20px; width: 90%; margin: 20px auto; line-height: 17px; border-top: 0; clear: both;\">\r\n<p>Dear ###RetailerName###,</p>\r\n<p>There are new products added on board, have a look on the app.</p>\r\n<p>Regards,<br /> Jhonea Team</p>\r\n</td>\r\n</tr>\r\n</tbody>\r\n</table>\r\n<p>&nbsp;</p>',	'',	'Hey! New product has just been added on board. Check it out!',	'Active',	'2018-09-21 05:10:02');

DROP TABLE IF EXISTS `userforgetpass`;
CREATE TABLE `userforgetpass` (
  `userforgetpassID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL DEFAULT '0',
  `userforgetpassResetCode` varchar(10) NOT NULL DEFAULT '0',
  `userforgetpassResetCodeExp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `userforgetpassStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `userforgetpassDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userforgetpassID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `userlanguages`;
CREATE TABLE `userlanguages` (
  `userlanguageID` int(11) NOT NULL AUTO_INCREMENT,
  `languageID` smallint(3) NOT NULL,
  `userlanguageProficiency` varchar(100) NOT NULL,
  `userID` int(11) NOT NULL,
  PRIMARY KEY (`userlanguageID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `userlocation`;
CREATE TABLE `userlocation` (
  `userlocationID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `countryID` smallint(3) NOT NULL DEFAULT '0',
  `userlocationPincode` varchar(10) DEFAULT NULL,
  `cityID` int(11) NOT NULL,
  `userlocationType` varchar(20) NOT NULL COMMENT 'Current,Been etc..',
  PRIMARY KEY (`userlocationID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `userlocation` (`userlocationID`, `userID`, `countryID`, `userlocationPincode`, `cityID`, `userlocationType`) VALUES
(1,	3,	1,	'380054',	2,	'Current'),
(2,	1,	0,	NULL,	1,	'Current'),
(3,	1,	0,	NULL,	0,	'Current'),
(4,	1,	0,	NULL,	0,	'Current'),
(5,	2,	0,	NULL,	1,	'Current'),
(6,	2,	0,	NULL,	1,	'Current'),
(7,	48,	0,	NULL,	1,	'Current'),
(8,	48,	0,	NULL,	1,	'Current'),
(9,	3,	1,	'380054',	0,	'Current'),
(10,	3,	1,	'380054',	0,	'Current');

DROP TABLE IF EXISTS `userpassport`;
CREATE TABLE `userpassport` (
  `userpassport` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL,
  `countryID` smallint(3) NOT NULL,
  PRIMARY KEY (`userpassport`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `userFirstName` varchar(100) DEFAULT '',
  `userLastName` varchar(100) NOT NULL,
  `userEmail` varchar(100) DEFAULT '',
  `userCountryCode` varchar(5) NOT NULL,
  `userMobile` varchar(10) NOT NULL,
  `userGender` varchar(10) NOT NULL,
  `userPassword` varchar(100) NOT NULL COMMENT 'MD5 Encrypted',
  `userProfilePicture` varchar(100) DEFAULT 'profile_bg.png',
  `languageID` smallint(3) NOT NULL,
  `userDeviceType` varchar(10) NOT NULL,
  `userDeviceID` varchar(500) NOT NULL COMMENT 'IP if its web',
  `userOVerified` enum('Yes','No') NOT NULL DEFAULT 'No',
  `userStatus` enum('Active','Inactive') DEFAULT 'Active',
  `userOTP` varchar(6) DEFAULT '1234',
  `apputypeID` smallint(3) NOT NULL,
  `appuroleID` smallint(3) NOT NULL,
  `footbltypeID` smallint(3) NOT NULL,
  `specialityID` smallint(3) NOT NULL,
  `userFBID` varchar(255) DEFAULT NULL,
  `userReferKey` varchar(10) NOT NULL,
  `userGoogleID` varchar(255) DEFAULT NULL,
  `userLinkedinID` varchar(255) DEFAULT NULL,
  `agegroupID` smallint(3) NOT NULL,
  `userCreatedDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userID`),
  UNIQUE KEY `userMobile` (`userMobile`),
  UNIQUE KEY `userEmail` (`userEmail`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `users` (`userID`, `userFirstName`, `userLastName`, `userEmail`, `userCountryCode`, `userMobile`, `userGender`, `userPassword`, `userProfilePicture`, `languageID`, `userDeviceType`, `userDeviceID`, `userOVerified`, `userStatus`, `userOTP`, `apputypeID`, `appuroleID`, `footbltypeID`, `specialityID`, `userFBID`, `userReferKey`, `userGoogleID`, `userLinkedinID`, `agegroupID`, `userCreatedDate`) VALUES
(1,	'fdsfdsf',	'fdsf',	'sda@g.com',	'91',	'7567575675',	'Female',	'$2a$08$dZeHKK.89TVrFWtbWSCYOO8GoPT2iYCEme70HzNd.RizA.prJJgGW',	'abc.png',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	3,	0,	0,	0,	NULL,	'',	NULL,	NULL,	4,	'2019-12-11 11:18:31'),
(2,	'fghfghfghhfg',	'Hfghfg',	'gdfgdfgdf@g.com',	'91',	'6456456456',	'Female',	'$2a$08$4e9CHZFwhoRsAMmUNL5lrenFwB/2a6GZd8ECF.ReQOzq1noP.7IHm',	'',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	3,	0,	0,	0,	NULL,	'',	NULL,	NULL,	6,	'2019-12-11 11:39:55'),
(3,	'fddsffds',	'Dfsf',	'cxzc@f.com',	'91',	'6787678678',	'Female',	'$2a$08$Oefl1RvDtdlh/SAuROHrSeJ7OEUxGsAHRnMO2WvKD8rPl8VggpSDK',	'https://s3.us-east-2.amazonaws.com/stage-fsl/A0E35E28-3F8E-4FC3-A786-0C8663370BC0-12696-000006DCED2F',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	3,	0,	0,	0,	NULL,	'',	NULL,	NULL,	4,	'2019-12-12 07:10:13'),
(4,	'Deffff',	'Deffff',	'devff@gmail.com',	'91',	'7777788888',	'Female',	'$2a$08$3.mLQ9UaqAgvbHsSI5Sf5e/RFrAKo5SfJ47QaSPi1FRBFxuNJWT.u',	'https://s3.us-east-2.amazonaws.com/stage-fsl/C6D46D06-62A3-4A45-92E3-54BC9AB48171-15336-00000C00A8A1',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	3,	0,	0,	0,	NULL,	'',	NULL,	NULL,	4,	'2019-12-12 08:42:16'),
(5,	'ABC',	'abc',	'abc@gmail.com',	'+44',	'1111111111',	'Female',	'$2a$08$Q7Gs60JlemEnDf5MMMit3O7R3rmE3C5PIjtN6rmdiAhLuWWEe8qxK',	'https://s3.us-east-2.amazonaws.com/stage-fsl/57205B5F-266C-47A8-BF65-A2C9792F510F-344-0000003CA849E7',	1,	'iPhone',	'1234567890',	'No',	'Active',	'1234',	1,	1,	3,	0,	NULL,	'',	NULL,	NULL,	1,	'2019-12-12 12:02:01'),
(7,	'ABC',	'abc',	'fabc@gmail.com',	'91',	'8511397789',	'Female',	'$2a$08$wasEsC91dUDSzsfVCr5Ve.KawLlxzFnOcRg9/P9VB1cN5mtNQhmAC',	'https://s3.us-east-2.amazonaws.com/stage-fsl/57205B5F-266C-47A8-BF65-A2C9792F510F-344-0000003CA849E7',	1,	'iPhone',	'1234567890',	'No',	'Active',	'1234',	1,	1,	3,	0,	NULL,	'',	NULL,	NULL,	1,	'2019-12-12 12:03:04'),
(14,	'Abc',	'Abc',	'gabc@gmail.com',	'91',	'2222222222',	'Female',	'$2a$08$f09JF7Ri4yYqlqfMpwbqYO1juGvF2aKYP6..Cr6bGfwxXy01YQOBO',	'https://s3.us-east-2.amazonaws.com/stage-fsl/D2BE86D1-D172-4E16-A885-55E659096695-392-00000047133BAB',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	1,	1,	0,	NULL,	'',	NULL,	NULL,	3,	'2019-12-12 12:19:57'),
(15,	'Xyz',	'Xyz',	'xyz@gmail.com',	'91',	'8888888888',	'Female',	'$2a$08$n0.wkoGUYAngxjhGPj/knOsQ2RHVLP1RFlExRbnca/v/92PqnyMe2',	'https://s3.us-east-2.amazonaws.com/stage-fsl/3ED4B766-70CB-4452-9387-4CED2EB1FED2-392-00000047C48300',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	3,	1,	1,	0,	NULL,	'',	NULL,	NULL,	4,	'2019-12-12 12:21:40'),
(16,	'Abc',	'Abc',	'aha@gmail.com',	'91',	'5555555555',	'Male',	'$2a$08$wyXpIEbZAt6dazCpWUqrU.7KQDWahSCsUzNdsRbDck5EcezV1LY2m',	'https://s3.us-east-2.amazonaws.com/stage-fsl/A17E73ED-0D0B-4B82-9964-26ACF8FA422A-392-0000004F4C5B19',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	2,	2,	0,	NULL,	'',	NULL,	NULL,	6,	'2019-12-12 12:44:11'),
(17,	'Abc',	'Anc',	'sandip@yopmail.com',	'+44',	'8544455111',	'Female',	'$2a$08$2kofNjdTQ7FaLfGz.XCtpOHYckvzZZRJ2N93HxwUDKN85aJbbPAcy',	'https://s3.us-east-2.amazonaws.com/stage-fsl/0EE5C36B-2F22-4F62-8DE3-E4C9B971CA5D-572-0000008EC13DD5',	1,	'iPhone',	'1234567890',	'No',	'Active',	'1234',	1,	4,	3,	0,	NULL,	'',	NULL,	NULL,	3,	'2019-12-13 12:54:20'),
(18,	'Abc',	'Abc',	'abc@gmil.com',	'91',	'8764654545',	'Female',	'$2a$08$8O5wXwlw.Vdw9jRGIHWSS.kOmP9NAUkc2DJQnaGL5TB/P/mE6LUYq',	'https://s3.us-east-2.amazonaws.com/stage-fsl/71933F59-6002-46F8-B4ED-4FA6E2E0B4C2-592-000000958CAAC1',	1,	'iPhone',	'1234567890',	'No',	'Active',	'1234',	3,	0,	0,	0,	NULL,	'',	NULL,	NULL,	3,	'2019-12-13 13:17:31'),
(19,	'Dgdghhds',	'Hgdsg Dhsagh Hsadh',	'sadd@gmail.com',	'+44',	'9879797979',	'Male',	'$2a$08$qHCP4ZqBGKAPzG48x0ay4.hjVjsiVNH.1o47Jlr3GWfyyYjaUTeyG',	'https://s3.us-east-2.amazonaws.com/stage-fsl/22DDDD0D-38B1-40A9-9826-E2D9EBBC60F0-16220-00001A909255',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	3,	0,	0,	0,	NULL,	'',	NULL,	NULL,	2,	'2019-12-18 13:03:44'),
(20,	'Ram',	'Ramu',	'ram@gmail.com',	'+91',	'1234567890',	'Female',	'$2a$08$SM4QjiSMUtCsNmLJ9eLJpOC8eTJV7o6MPF4J/mJjb3p9hZBF832T.',	'https://s3.us-east-2.amazonaws.com/stage-fsl/4FAD5F66-E20B-4773-899F-ADE0EF6A909C-299-0000000A3FA0FA',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	1,	1,	0,	NULL,	'',	NULL,	NULL,	1,	'2019-12-24 06:49:18'),
(21,	'Desdf',	'Dfsfdsf',	'fh@g.com',	'+91',	'4645654654',	'Female',	'$2a$08$zrW6Ova5TywFi6zX7sECC.4eXF4pH2u9wmu.XVmd.bLEQWC2hW6TC',	'https://s3.us-east-2.amazonaws.com/stage-fsl/CD17FDE2-A11B-40BE-9367-8071FD51DA6D-2131-0000032C8A449',	1,	'iPhone',	'1234567890',	'No',	'Active',	'1234',	2,	0,	0,	0,	NULL,	'',	NULL,	NULL,	4,	'2019-12-26 05:53:23'),
(23,	'Desdf',	'Dfsfdsf',	'f7567h@g.com',	'+91',	'4645654686',	'Female',	'$2a$08$wMepQYCUvYvufYh1XJGXLO.JVOb8FdqW7cgW9YU6k5bSyOcEuAOIu',	'https://s3.us-east-2.amazonaws.com/stage-fsl/CD17FDE2-A11B-40BE-9367-8071FD51DA6D-2131-0000032C8A449',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	2,	0,	0,	0,	NULL,	'',	NULL,	NULL,	4,	'2019-12-26 05:54:06'),
(24,	'Esfds',	'Fdsfdsfs',	'gfd@gt.com',	'+91',	'5435434534',	'Male',	'$2a$08$cfHV3/rvLi7EZg7tMR3KO.tnESBRhwAU2KSKUJYDupjxkABZ8PAQ2',	'https://s3.us-east-2.amazonaws.com/stage-fsl/8DB82426-BF86-48C0-A5D1-AB3C9338ECDA-2313-00000389BCD50',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	2,	0,	0,	0,	NULL,	'',	NULL,	NULL,	4,	'2019-12-26 06:01:08'),
(25,	'Dgfdgdf',	'Gfdgd',	'fdfg@g.com',	'+91',	'4645645645',	'Male',	'$2a$08$T6GEqsLnf9hDDomcerkJgeB2EoV51dQueVgQe2wRxsOoygn6g.4dm',	'https://s3.us-east-2.amazonaws.com/stage-fsl/908A1728-3F4E-4E62-9AE3-BF7AB62EFAF0-2313-0000040EA6BF2',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	2,	0,	0,	0,	NULL,	'',	NULL,	NULL,	6,	'2019-12-26 06:09:24'),
(26,	'Dfsgdfgdfggdf',	'gdfgdf',	'fds@gmail.com',	'+91',	'7474747474',	'Male',	'$2a$08$bR44aQxGQ12GsCsxKkerZOPXSy9YxqZ3nBTe5yic5m6g4EyH67KAO',	'https://s3.us-east-2.amazonaws.com/stage-fsl/6B9AAE6E-F7A6-4E37-8F6A-D94A94BC865E-4901-0000086984AD4',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	2,	0,	0,	0,	NULL,	'',	NULL,	NULL,	2,	'2020-01-03 07:31:08'),
(27,	'Ffdsfdfdfdsffds',	'Sdfdsfds',	'fsdfs@d.com',	'+91',	'4564654645',	'Male',	'$2a$08$wCWwFbxH/QWr.6dKBQWteOZg1/Ogpge6ZGUqnBMV4HOfCyA6W5.Fu',	'https://s3.us-east-2.amazonaws.com/stage-fsl/FA809185-8A62-4A6E-8FC9-6AAE271A8EFB-14118-00000678EA2C',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	4,	'2020-02-11 07:01:24'),
(28,	'fdsfds',	'Fdfdf',	'dsad@ss.com',	'+91',	'7687978089',	'Male',	'$2a$08$o/gDcCSHhz7kpmI376uJC.pEcG0JQSOQK21wuUZAXkPSmH/vg3ac2',	'https://s3.us-east-2.amazonaws.com/stage-fsl/72A3F49E-AB81-48B0-978D-666FDB70BE8A-14423-0000070C8A7E',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	1,	'2020-02-11 07:10:43'),
(31,	'anc',	'anc',	'abc112@gmail.com',	'+91',	'9711111111',	'male',	'$2a$08$AAlw/o6aRpdTFfGrCAM0oeTzey4MXFNUaIJai9QTTl8PVZJd.SLbq',	'/data/user/0/com.fil.fsl/cache/IMG_11_02_2020_06_58_52668.png',	1,	'Android',	'76a5cfa94a7b3bc7',	'Yes',	'Active',	'1234',	0,	0,	0,	0,	NULL,	'0',	NULL,	NULL,	2,	'2020-02-11 13:29:44'),
(32,	'Vaikunj',	'Gandhi ',	'vaikunj68@gmail.com',	'+91',	'9824949391',	'male',	'$2a$08$DreIUDy/FDqG.nRSs..tQewmiaDswH/O/AzmtetxzgQX9lffk9Fgu',	'/data/user/0/com.fil.fsl/cache/IMG_11_02_2020_07_00_14975.png',	1,	'Android',	'17cf96e94de0af69',	'Yes',	'Active',	'1234',	0,	0,	0,	0,	NULL,	'0',	NULL,	NULL,	4,	'2020-02-11 13:31:09'),
(33,	'Ddsgdfsgdfg',	'Gdfgdfgdf',	'fghfgh@g.com',	'+91',	'6757556756',	'Male',	'$2a$08$2FOa2EBevL.6OAcWgGI3I.QrQyz6HAnMDzvZ5amtUrcFG5W1Ku.T2',	'https://s3.us-east-2.amazonaws.com/stage-fsl/412F9C11-C7C1-458D-94D2-09A66CED2F7F-2814-0000028AE2934',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	4,	'2020-02-13 05:35:56'),
(34,	'Rrtyrty',	'Ytryrt',	'd2@d.com',	'+91',	'7575675675',	'Male',	'$2a$08$6JUgKg8tRHdUR1rnrkyltueKhy3a7b5TjnvBIlTB1vjco23obqBb.',	'https://s3.us-east-2.amazonaws.com/stage-fsl/170D8A0D-0754-4BB2-BEE8-C884B65C9A23-15161-00001B38A74C',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	0,	3,	0,	NULL,	'',	NULL,	NULL,	1,	'2020-02-13 13:07:30'),
(35,	'sdfdsf',	'Fdsfds',	'd1@d.com',	'+44',	'7567567567',	'Male',	'$2a$08$MdOppsJzZ6QG8k2PzuOzC.hMKNVRaVZEGBRzmWa73sdDm.UK.7Jna',	'https://s3.us-east-2.amazonaws.com/stage-fsl/47A22DB5-E1C4-4184-93EB-4F84044AA753-15987-00001B38ED29',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	1,	'2020-02-13 13:07:32'),
(36,	'Fsdfdsf',	'ewrrwerewr',	'fdsf@f.com',	'+91',	'5363456556',	'Male',	'$2a$08$HAcKcXywN13/LKl/NQfEzOF9S69uDwCd1sHgDx7E3Mip1RyvSlv3W',	'https://s3.us-east-2.amazonaws.com/stage-fsl/3F07DC8B-F267-43EA-8D30-75CB82F63099-10978-00001765D06F',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	4,	'2020-02-15 11:11:12'),
(37,	'gdfgdfgdf',	'Gfdgdf',	'dxvxc@g.com',	'+91',	'3456456456',	'Male',	'$2a$08$JqE7HkkkezQ6koCMsxIvmeIxYXzpSXR3JyK1bCoeZd7stS1/LVf8i',	'https://s3.us-east-2.amazonaws.com/stage-fsl/0F57E21C-62C7-4A61-8AEB-44E1811E0216-4024-0000056E4DC2D',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	3,	'2020-02-17 06:44:32'),
(38,	'hggfhfghfgfghfg',	'Fghfghfg',	'fgh@das.com',	'+91',	'4564564546',	'Male',	'$2a$08$u32WjtFJrij5l3O5fQFkxe4BEoOWpKufQOIfrKdT6Fhs2QrLIyKty',	'https://s3.us-east-2.amazonaws.com/stage-fsl/B1A299AC-B513-4FF3-AEDA-037F9310CFA4-4832-000055A21E443',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	1,	'2020-02-19 07:04:50'),
(39,	'Hhsjsjsjnens',	'Ndnsnznsnn',	'bbsns@f.com',	'+44',	'9979787848',	'Male',	'$2a$08$JDeWJ/mb/85bOc7brKXH9emiv4EYH0Litb3lulHTWF62/4GZspyn2',	'https://s3.us-east-2.amazonaws.com/stage-fsl/4FBA4D2F-8B14-4E0C-A150-A969D6073FD0-1924-0000014B3EABA',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	4,	'2020-02-20 12:55:12'),
(40,	'Eva',	'Evaaa',	'eva@fmail.com',	'+91',	'1234567860',	'Female',	'$2a$08$oBJWMJvElGQV96kNxg97vukX.xK/tt9/rOWWEB3oCwXx16b/.pT0y',	'https://s3.us-east-2.amazonaws.com/stage-fsl/6A5AB8F7-4439-4A46-BD6D-EDC98B63102E-2787-000001E24650F',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	0,	2,	0,	NULL,	'',	NULL,	NULL,	3,	'2020-02-24 04:54:35'),
(41,	'vvhjv',	'vhkcgh',	'bgff@hhh.com',	'+91',	'6788687888',	'female',	'$2a$08$1lUZ6nOEPX.I06oVk5RPoeFqMKiyBJSn6ZA5cLK1dlYxhDQbrV5OG',	'/data/user/0/com.fil.fsl/cache/IMG_02_03_2020_11_38_48963.png',	1,	'Android',	'78ecec983c7a9917',	'Yes',	'Active',	'1234',	1,	5,	13,	0,	NULL,	'0',	NULL,	NULL,	4,	'2020-03-02 06:09:51'),
(42,	'Radha',	'Rani',	'radharani@gmail.com',	'91',	'3975557771',	'Female',	'$2a$08$9pvHP8XGBott12jyJf9g.ekVMJSqP77AAPawmtNPww7vWtCOEi0mm',	'',	1,	'Android',	'fs8iKiwm1EM:APA91bHktMKWaDIuUGZAyrZyzVoAcFngmVnOlbFFvTgzfUOayty1Pxyd0lRTCrW-Shap20D6djedphekA3gTn1wsOXbzbnTHjpPb-BtZ37sSzJB395ElPWdVqbvaTwIOfvQPJ3Glh02m',	'Yes',	'Active',	NULL,	0,	0,	0,	0,	NULL,	'sd343aa',	NULL,	NULL,	0,	'2020-03-04 05:35:26'),
(44,	'Test',	'Last',	'test11@gmail.com',	'+91',	'9898989898',	'Male',	'$2a$08$kqjMzAr5NPiCo7Xw0HIE5uMcmtQvpftaOkhJWXqIahMiDiWjuQ35q',	'https://s3.us-east-2.amazonaws.com/stage-fsl/D0C3D3A3-E37B-4F8B-B7A6-39813DB19F90-4358-00000348E8EE2',	1,	'iPhone',	'1234567890',	'No',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	1,	'2020-03-04 06:04:27'),
(45,	'sfjjsfds',	'Kjbhvdf',	'dev@g.com',	'+91',	'9999988888',	'Female',	'$2a$08$ueSayqv8xTzr5bB1S/iHNOnXsDcveKXdJrHyid7IvpJ5agjPJBM/m',	'https://s3.us-east-2.amazonaws.com/stage-fsl/04032020122202IOS.jpeg',	1,	'iPhone',	'1234567890',	'No',	'Active',	NULL,	1,	0,	2,	0,	NULL,	'',	NULL,	NULL,	4,	'2020-03-04 06:53:17'),
(47,	'Radha',	'Rani',	'radharani11@gmail.com',	'91',	'1231231231',	'Female',	'$2a$08$v.wFQX18xjjH6f37JWEGvuyFys2L7D9G.J9U5n3bQt.64bzi3gzQm',	'',	1,	'Android',	'fs8iKiwm1EM:APA91bHktMKWaDIuUGZAyrZyzVoAcFngmVnOlbFFvTgzfUOayty1Pxyd0lRTCrW-Shap20D6djedphekA3gTn1wsOXbzbnTHjpPb-BtZ37sSzJB395ElPWdVqbvaTwIOfvQPJ3Glh02m',	'No',	'Active',	NULL,	0,	0,	0,	0,	NULL,	'sd343aa',	NULL,	NULL,	0,	'2020-03-05 05:29:26'),
(48,	'Denny',	'John',	'denny@gmail.com',	'+91',	'1212121212',	'Male',	'$2a$08$1kF9yABcRTEjXTF5Ccwobuyn.dhkXk1mUkpAwBhC91kn2BnO4zvQG',	'https://s3.us-east-2.amazonaws.com/stage-fsl/05032020122722IOS.jpeg',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	NULL,	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	1,	'2020-03-05 06:58:29'),
(50,	'test',	'Last',	'testtt@g.com',	'+91',	'9898989888',	'Male',	'$2a$08$PqO5EVEXds9BSdIM9YrgGeYiXAdUdh0ZXozojoCGUHtYzG5fsLJgS',	'https://s3.us-east-2.amazonaws.com/stage-fsl/16032020114154IOS.jpeg',	1,	'iPhone',	'1234567890',	'No',	'Active',	NULL,	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	1,	'2020-03-16 06:15:23'),
(52,	'Denny',	'John',	'denny12@gmail.com',	'+91',	'1212121233',	'Male',	'$2a$08$a9u0CBQG/AXSuIrSAyt4oOzaDyGox7OsYs.v.Xcm4Mo/ajKYPtn0C',	'https://s3.us-east-2.amazonaws.com/stage-fsl/05032020122722IOS.jpeg',	1,	'Android',	'1234567890',	'No',	'Active',	NULL,	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	1,	'2020-03-16 09:03:56'),
(53,	'Denny',	'John',	'denny123@gmail.com',	'+91',	'1212121333',	'Male',	'$2a$08$IstcBVIbJTw/.j1Ufxu87OSwVVixbLMSSDhGEo6zO2r16CJ.lZ64a',	'https://s3.us-east-2.amazonaws.com/stage-fsl/05032020122722IOS.jpeg',	1,	'Android',	'1234567890',	'No',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	1,	'2020-03-16 09:36:55'),
(54,	'gdfgdfg',	'gfdgdfgdf',	'hgfh@f.com',	'+91',	'4564564645',	'Male',	'$2a$08$vBRM98.GbyEcxHiBht9vqutuuaB1F37FPsogr/xPaWMt6KuURJRrK',	'https://s3.us-east-2.amazonaws.com/stage-fsl/16032020045145IOS.jpeg',	1,	'iPhone',	'1234567890',	'No',	'Active',	'1234',	1,	0,	2,	0,	NULL,	'',	NULL,	NULL,	2,	'2020-03-16 11:22:43'),
(55,	'Vish',	'Patel',	'vish@g.com',	'+91',	'9879879879',	'Male',	'$2a$08$NHCJ3fE4SJuTtq8/8TIpE.Pki1/lGtxY9GdbqL6sJwvOn1sH1IvSK',	'https://s3.us-east-2.amazonaws.com/stage-fsl/16032020054950IOS.jpeg',	1,	'iPhone',	'1234567890',	'No',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	2,	'2020-03-16 12:20:27'),
(56,	'Sdfds',	'Fdsfds',	'gdfgd@d.com',	'+91',	'3434343434',	'Male',	'$2a$08$9/z8DqUCyMG/ucUoK4CIMeAXAa0.9NWKdJ4NAmlkuIkQEirTi4X1y',	'https://s3.us-east-2.amazonaws.com/stage-fsl/16032020055648IOS.jpeg',	1,	'iPhone',	'1234567890',	'No',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	1,	'2020-03-16 12:27:23'),
(57,	'Hfghh',	'Fghfg',	'fdfd@fd.com',	'+91',	'6767676767',	'Male',	'$2a$08$GkvPBMlvyA.3FFheLO5o/.dq/jhRtz8qg/0Whf/aI1W7zoaSwJrta',	'https://s3.us-east-2.amazonaws.com/stage-fsl/16032020061025IOS.jpeg',	1,	'iPhone',	'1234567890',	'No',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	1,	'2020-03-16 12:41:54'),
(58,	'Radha',	'Rani',	'radharani123@gmail.com',	'91',	'3975557123',	'Female',	'$2a$08$iOIZGyT9IWQQQtW0F2IBDO8aMJnHZVUuag/JejLlhvvUAWqD.V7jq',	'',	1,	'Android',	'fs8iKiwm1EM:APA91bHktMKWaDIuUGZAyrZyzVoAcFngmVnOlbFFvTgzfUOayty1Pxyd0lRTCrW-Shap20D6djedphekA3gTn1wsOXbzbnTHjpPb-BtZ37sSzJB395ElPWdVqbvaTwIOfvQPJ3Glh02m',	'No',	'Active',	'1234',	0,	0,	0,	0,	NULL,	'sd343aa',	NULL,	NULL,	0,	'2020-03-17 08:42:50'),
(59,	'Manan',	'Shah',	'manans98@gmail.com',	'+91',	'9723927207',	'Male',	'$2a$08$fylkz//ecCyh3x9lXClCbOM8mE/7xWrbnIXslm5ERB./FrDwfU6aq',	'https://s3.us-east-2.amazonaws.com/stage-fsl/18032020035658IOS.jpeg',	1,	'iPhone',	'1234567890',	'Yes',	'Active',	'1234',	1,	0,	1,	0,	NULL,	'',	NULL,	NULL,	4,	'2020-03-18 10:27:40');

DROP TABLE IF EXISTS `user_education`;
CREATE TABLE `user_education` (
  `usereducationID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL DEFAULT '0',
  `languageID` smallint(3) NOT NULL DEFAULT '0',
  `usereducationSchoolName` text NOT NULL,
  `usereducationGrade` varchar(50) DEFAULT NULL,
  `usereducationDegree` varchar(100) NOT NULL DEFAULT '',
  `usereducationPeriodOfTimeFrom` varchar(20) NOT NULL DEFAULT '',
  `usereducationPeriodOfTimeTo` varchar(20) NOT NULL DEFAULT '',
  `usereducationDescription` longtext NOT NULL,
  `usereducationPrivarcyType` varchar(20) NOT NULL DEFAULT 'Public',
  `usereducationPrivarcyData` text NOT NULL,
  `usereducationStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `usereducationIsDeleted` enum('1','2') NOT NULL DEFAULT '1',
  `usereducationCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`usereducationID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user_education` (`usereducationID`, `userID`, `languageID`, `usereducationSchoolName`, `usereducationGrade`, `usereducationDegree`, `usereducationPeriodOfTimeFrom`, `usereducationPeriodOfTimeTo`, `usereducationDescription`, `usereducationPrivarcyType`, `usereducationPrivarcyData`, `usereducationStatus`, `usereducationIsDeleted`, `usereducationCreatedDate`) VALUES
(100,	1,	1,	'Rockford',	NULL,	'Std 12',	'2009',	'2011',	'standard 10/grade 10 ',	'Public',	'',	'Active',	'2',	'2020-03-04 08:15:21'),
(101,	1,	1,	'Rockford',	NULL,	'Std 10',	'2009',	'2011',	'standard 10/grade 10 ',	'Public',	'',	'Active',	'2',	'2020-03-04 08:17:12'),
(102,	1,	1,	'Rockford',	NULL,	'Std 12',	'2009',	'2011',	'standard 10/grade 10 ',	'Public',	'',	'Active',	'2',	'2020-03-04 08:17:47'),
(103,	1,	1,	'Rockford',	NULL,	'Std 10',	'2009',	'2011',	'standard 10/grade 10 ',	'Public',	'',	'Active',	'2',	'2020-03-04 08:19:55'),
(104,	1,	1,	'Rockford',	NULL,	'Std 12',	'2009',	'2011',	'standard 10/grade 10 ',	'Public',	'',	'Active',	'2',	'2020-03-05 05:48:28'),
(105,	1,	1,	'Rockford',	NULL,	'Std 12',	'2009',	'2011',	'standard 10/grade 10 ',	'Public',	'',	'Active',	'2',	'2020-03-05 05:56:34'),
(106,	1,	1,	'Rockford',	NULL,	'Std 12',	'04/2009',	'04/2011',	'standard 10/grade 10 ',	'Public',	'',	'Active',	'1',	'2020-03-05 06:38:51'),
(107,	48,	1,	'Sardar Patel',	NULL,	'BE',	'03/2008',	'03/2010',	'Fghfghfghfghf',	'Public',	'',	'Active',	'1',	'2020-03-05 08:00:45'),
(108,	48,	1,	'Sardar Patel 22',	NULL,	'12th Science2',	'03/2008',	'03/2010',	'Fdsfds fdsfds gdf222',	'Public',	'',	'Active',	'1',	'2020-03-05 08:28:47'),
(109,	1,	1,	'Rockford',	NULL,	'Std 10',	'2009',	'2011',	'standard 10/grade 10 ',	'Public',	'',	'Active',	'1',	'2020-03-05 08:30:59'),
(110,	48,	1,	'Dev',	NULL,	'Sdfds',	'03/2018',	'',	'Terterter',	'Public',	'',	'Active',	'2',	'2020-03-05 08:36:33'),
(111,	48,	1,	'fdgfdg',	NULL,	'Gfgd',	'03/2020',	'',	'gdf gdf gdf',	'Public',	'',	'Active',	'2',	'2020-03-05 08:46:48'),
(112,	48,	1,	'terter',	NULL,	'Terter',	'03/2020',	'',	'terterter',	'Public',	'',	'Active',	'2',	'2020-03-05 08:51:29'),
(113,	48,	1,	'dfgdfgdfg',	NULL,	'fdgd',	'03/2020',	'',	'dfgdfgf',	'Public',	'',	'Active',	'2',	'2020-03-05 09:00:00'),
(114,	48,	1,	'ttreter',	NULL,	'terter',	'03/2020',	'',	'Renter',	'Public',	'',	'Active',	'2',	'2020-03-05 09:05:41'),
(115,	48,	1,	'ttreter',	NULL,	'terter',	'03/2020',	'03/2022',	'Renter',	'Public',	'',	'Active',	'2',	'2020-03-05 09:06:04'),
(116,	48,	1,	'ttreter3323',	NULL,	'terter32',	'03/2020',	'',	'Renter32',	'Public',	'',	'Active',	'2',	'2020-03-05 09:09:56'),
(117,	48,	1,	'ttreter3323',	NULL,	'terter32',	'03/2020',	'',	'Renter32',	'Public',	'',	'Active',	'2',	'2020-03-05 09:11:25'),
(118,	48,	1,	'yrtytr',	NULL,	'Tryrt',	'03/2020',	'',	'tryrtytryrt',	'Public',	'',	'Active',	'2',	'2020-03-05 09:13:46'),
(119,	48,	1,	'Rockford',	NULL,	'Std 10',	'2009',	'2011',	'standard 10/grade 10 ',	'Public',	'',	'Active',	'1',	'2020-03-16 09:17:25'),
(120,	48,	1,	'Fdsfdsfds',	NULL,	'Dsfdsf',	'03/2020',	'',	'Gdf gdf gdf',	'Public',	'',	'Active',	'1',	'2020-03-16 12:46:01'),
(121,	48,	1,	'Gfdgdfg',	NULL,	'Dfgdfgdf',	'03/2020',	'',	'Gdf gdf gdf',	'Public',	'',	'Active',	'1',	'2020-03-16 12:46:36');

DROP TABLE IF EXISTS `user_employement`;
CREATE TABLE `user_employement` (
  `useremployementID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL DEFAULT '0',
  `languageID` smallint(3) NOT NULL DEFAULT '0',
  `useremployementPositionCompanyName` varchar(100) NOT NULL DEFAULT '',
  `jobfuncID` smallint(3) NOT NULL DEFAULT '0',
  `useremployementPeriodOfTimeFrom` varchar(20) NOT NULL DEFAULT '',
  `useremployementPeriodOfTimeTo` varchar(20) NOT NULL DEFAULT '',
  `useremployementCityText` varchar(100) DEFAULT '',
  `useremployementCountryText` varchar(100) DEFAULT '',
  `useremployementDescription` longtext NOT NULL,
  `useremployementPrivacyType` varchar(20) NOT NULL DEFAULT 'Public',
  `useremployementPrivacyData` text NOT NULL,
  `useremployementIsCurrent` enum('Yes','No') NOT NULL DEFAULT 'No',
  `useremployementStatus` enum('Active','Inactive') NOT NULL DEFAULT 'Active',
  `useremployementIsDeleted` enum('1','2') NOT NULL DEFAULT '1',
  `useremployementCreatedDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `countryID` smallint(5) NOT NULL DEFAULT '0',
  `stateID` int(11) NOT NULL DEFAULT '0',
  `cityID` int(11) NOT NULL DEFAULT '0',
  `useremployementLatitude` varchar(50) NOT NULL DEFAULT '',
  `useremployementLongitude` varchar(50) NOT NULL DEFAULT '',
  PRIMARY KEY (`useremployementID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user_employement` (`useremployementID`, `userID`, `languageID`, `useremployementPositionCompanyName`, `jobfuncID`, `useremployementPeriodOfTimeFrom`, `useremployementPeriodOfTimeTo`, `useremployementCityText`, `useremployementCountryText`, `useremployementDescription`, `useremployementPrivacyType`, `useremployementPrivacyData`, `useremployementIsCurrent`, `useremployementStatus`, `useremployementIsDeleted`, `useremployementCreatedDate`, `countryID`, `stateID`, `cityID`, `useremployementLatitude`, `useremployementLongitude`) VALUES
(89,	1,	1,	'Rockford',	1,	'2009',	'2011',	'Ahmedabad',	'India',	'standard 10/grade 10 ',	'Public',	'',	'No',	'Active',	'1',	'2020-03-04 08:18:53',	0,	0,	0,	'',	''),
(90,	1,	1,	'Rockford',	1,	'2009',	'2011',	'Ahmedabad',	'India',	'standard 10/grade 10 ',	'Public',	'',	'No',	'Active',	'1',	'2020-03-04 08:19:39',	0,	0,	0,	'',	''),
(91,	1,	1,	'Rockford',	1,	'2009',	'2011',	'Ahmedabad',	'India',	'standard 10/grade 10 ',	'Public',	'',	'No',	'Active',	'1',	'2020-03-05 06:11:40',	0,	0,	0,	'',	''),
(92,	1,	1,	'Rockford',	1,	'2009',	'2011',	'Ahmedabad',	'India',	'standard 10/grade 10 ',	'Public',	'',	'No',	'Active',	'1',	'2020-03-05 11:14:26',	0,	0,	0,	'',	''),
(93,	48,	1,	'Fusion',	1,	'03/2017',	'03/2020',	'Ahmedabad',	'1',	'Dfhfdhfghfg',	'Public',	'',	'No',	'Active',	'1',	'2020-03-05 12:04:47',	0,	0,	0,	'',	''),
(94,	48,	1,	'Fusion',	1,	'03/2017',	'03/2019',	'Ahmedabad',	'1',	'Gdf gdf gdf',	'Public',	'',	'No',	'Active',	'1',	'2020-03-05 12:13:11',	0,	0,	0,	'',	''),
(95,	48,	1,	'Fusion',	1,	'03/2017',	'03/2018',	'Ahmedabad',	'1',	'Fgdsgdgdf',	'Public',	'',	'No',	'Active',	'1',	'2020-03-05 12:16:13',	0,	0,	0,	'',	''),
(96,	48,	1,	'Ffffg454',	1,	'03/2019',	'03/2020',	'Ahmedabad',	'',	'Hfghfghfg',	'Public',	'',	'No',	'Active',	'1',	'2020-03-05 12:21:43',	0,	0,	0,	'',	''),
(97,	48,	1,	'Fusion',	1,	'03/2019',	'03/2020',	'Ahmedabad)',	'',	'Dfgfdgdfgdf',	'Public',	'',	'No',	'Active',	'1',	'2020-03-05 12:26:57',	0,	0,	0,	'',	''),
(98,	48,	1,	'F',	1,	'03/2019',	'03/2020',	'Ahmedabad',	'',	'Test text for the description',	'Public',	'',	'No',	'Active',	'1',	'2020-03-18 10:32:22',	0,	0,	0,	'',	'');

DROP TABLE IF EXISTS `user_hobbies`;
CREATE TABLE `user_hobbies` (
  `userhobbiesID` int(11) NOT NULL AUTO_INCREMENT,
  `userID` int(11) NOT NULL DEFAULT '0',
  `hobbyID` smallint(3) NOT NULL DEFAULT '0',
  `userhobbiesDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`userhobbiesID`),
  UNIQUE KEY `unique_index` (`userID`,`hobbyID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `user_hobbies` (`userhobbiesID`, `userID`, `hobbyID`, `userhobbiesDate`) VALUES
(26,	1,	1,	'2020-03-04 15:31:12'),
(27,	1,	2,	'2020-03-04 15:31:12'),
(30,	48,	1,	'2020-03-06 06:34:00'),
(31,	48,	2,	'2020-03-06 06:34:01'),
(37,	48,	3,	'2020-03-06 06:48:18');

-- 2020-05-05 05:42:38
