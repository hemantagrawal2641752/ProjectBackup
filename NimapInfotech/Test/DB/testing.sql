-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 14, 2021 at 02:10 PM
-- Server version: 10.4.10-MariaDB
-- PHP Version: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testing`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cart`
--

CREATE TABLE `tbl_cart` (
  `cartID` int(11) NOT NULL,
  `userID` int(11) DEFAULT NULL,
  `totalQuantity` int(11) DEFAULT NULL,
  `netAmount` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cart`
--

INSERT INTO `tbl_cart` (`cartID`, `userID`, `totalQuantity`, `netAmount`, `createdAt`, `updatedAt`) VALUES
(1, 1, 5, 52500, '2021-01-14 12:25:02', '2021-01-14 12:25:02'),
(2, 1, 5, 52500, '2021-01-14 12:25:46', '2021-01-14 12:25:46'),
(3, 1, 5, 52500, '2021-01-14 12:27:51', '2021-01-14 12:27:51'),
(4, 1, 32, 52500, '2021-01-14 12:30:12', '2021-01-14 12:30:12'),
(5, 1, 5, 52500, '2021-01-14 12:30:36', '2021-01-14 12:30:36'),
(6, 1, 5, 52500, '2021-01-14 12:34:07', '2021-01-14 12:34:07'),
(7, 1, 5, 52500, '2021-01-14 12:35:05', '2021-01-14 12:35:05'),
(8, 1, 5, 52500, '2021-01-14 12:36:12', '2021-01-14 12:36:12'),
(9, 1, 5, 52500, '2021-01-14 12:38:26', '2021-01-14 12:38:26'),
(10, 1, 5, 52500, '2021-01-14 12:38:58', '2021-01-14 12:38:58'),
(11, 1, 5, 52500, '2021-01-14 12:42:41', '2021-01-14 12:42:41'),
(12, 1, 5, 52500, '2021-01-14 12:43:08', '2021-01-14 12:43:08'),
(13, 1, 5, 52500, '2021-01-14 12:44:30', '2021-01-14 12:44:30'),
(14, 1, 5, 52500, '2021-01-14 12:44:49', '2021-01-14 12:44:49');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_cartproduct`
--

CREATE TABLE `tbl_cartproduct` (
  `id` int(11) NOT NULL,
  `cartID` int(11) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `productsID` int(11) DEFAULT NULL,
  `netAmount` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_cartproduct`
--

INSERT INTO `tbl_cartproduct` (`id`, `cartID`, `Quantity`, `productsID`, `netAmount`, `createdAt`, `updatedAt`) VALUES
(1, 8, 3, 1, 22500, '2021-01-14 12:36:12', '2021-01-14 12:36:12'),
(2, 8, 2, 2, 30000, '2021-01-14 12:36:12', '2021-01-14 12:36:12'),
(3, 9, 3, 1, 22500, '2021-01-14 12:38:26', '2021-01-14 12:38:26'),
(4, 9, 2, 2, 30000, '2021-01-14 12:38:26', '2021-01-14 12:38:26'),
(5, 10, 3, 1, 22500, '2021-01-14 12:38:58', '2021-01-14 12:38:58'),
(6, 10, 2, 2, 30000, '2021-01-14 12:38:58', '2021-01-14 12:38:58'),
(7, 11, 2, 2, 30000, '2021-01-14 12:42:42', '2021-01-14 12:42:42'),
(8, 11, 3, 1, 22500, '2021-01-14 12:42:42', '2021-01-14 12:42:42'),
(9, 12, 3, 1, 22500, '2021-01-14 12:43:08', '2021-01-14 12:43:08'),
(10, 12, 2, 2, 30000, '2021-01-14 12:43:08', '2021-01-14 12:43:08'),
(11, 13, 3, 1, 22500, '2021-01-14 12:44:30', '2021-01-14 12:44:30'),
(12, 13, 2, 2, 30000, '2021-01-14 12:44:30', '2021-01-14 12:44:30'),
(13, 14, 3, 1, 22500, '2021-01-14 12:44:49', '2021-01-14 12:44:49'),
(14, 14, 2, 2, 30000, '2021-01-14 12:44:49', '2021-01-14 12:44:49');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category1`
--

CREATE TABLE `tbl_category1` (
  `category1ID` int(11) NOT NULL,
  `Name` varchar(30) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_category1`
--

INSERT INTO `tbl_category1` (`category1ID`, `Name`, `createdAt`, `updatedAt`) VALUES
(1, 'electronic', NULL, NULL),
(2, 'toys', NULL, NULL),
(3, 'shoes', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category2`
--

CREATE TABLE `tbl_category2` (
  `category2ID` int(11) NOT NULL,
  `category1ID` int(11) DEFAULT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_category2`
--

INSERT INTO `tbl_category2` (`category2ID`, `category1ID`, `Name`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'MI', NULL, NULL),
(2, 1, 'samsung', NULL, NULL),
(3, 1, 'LG', NULL, NULL),
(4, 3, 'Nike', NULL, NULL),
(5, 3, 'adidas', NULL, NULL),
(6, 3, 'Bata', NULL, NULL),
(7, 2, 'Lego', NULL, NULL),
(8, 2, 'Barbie', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_category3`
--

CREATE TABLE `tbl_category3` (
  `category3ID` int(11) NOT NULL,
  `category2ID` int(11) DEFAULT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_category3`
--

INSERT INTO `tbl_category3` (`category3ID`, `category2ID`, `Name`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'Mobile', NULL, NULL),
(2, 3, 'Mobile Accessories', NULL, NULL),
(3, 3, 'Refrigerators', NULL, NULL),
(4, 1, 'Refrigerators', NULL, NULL),
(5, 1, 'phone', NULL, NULL),
(6, 2, 'phone', NULL, NULL),
(7, 2, 'Refrigerators', NULL, NULL),
(8, 2, 'TV', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_products`
--

CREATE TABLE `tbl_products` (
  `productsID` int(11) NOT NULL,
  `category3ID` int(11) DEFAULT NULL,
  `Name` varchar(500) DEFAULT NULL,
  `Price` int(11) NOT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_products`
--

INSERT INTO `tbl_products` (`productsID`, `category3ID`, `Name`, `Price`, `Quantity`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'LG V60 ThinQ 5G\r\n', 7500, 2, NULL, '2021-01-14 12:44:50'),
(2, 4, 'LG 235 L 4 Star Inverter Direct-Cool Single Door Refrigerator (GL-D241ABCY, Blue Charm)', 15000, 5, NULL, '2021-01-14 12:44:50'),
(3, 8, 'Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)', 42000, 8, NULL, NULL),
(4, 5, 'LG V60 ThinQ 4G', 19999, 7, '2021-01-14 10:51:45', '2021-01-14 10:51:45');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE `tbl_users` (
  `userID` int(11) NOT NULL,
  `userName` varchar(30) DEFAULT NULL,
  `userEmail` varchar(50) DEFAULT NULL,
  `userPassword` varchar(100) DEFAULT NULL,
  `userMobile` varchar(10) DEFAULT NULL,
  `userRoleID` enum('Admin','User') DEFAULT 'User',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`userID`, `userName`, `userEmail`, `userPassword`, `userMobile`, `userRoleID`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin@gmail.com', 'cc03e747a6afbbcbf8be7668acfebee5', '9687862624', 'Admin', '2021-01-14 07:32:09', '2021-01-14 07:32:09'),
(2, 'test2', 'test1@gmail.com', 'cc03e747a6afbbcbf8be7668acfebee5', '9687862625', 'User', '2021-01-14 07:34:38', '2021-01-14 07:34:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  ADD PRIMARY KEY (`cartID`);

--
-- Indexes for table `tbl_cartproduct`
--
ALTER TABLE `tbl_cartproduct`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_category1`
--
ALTER TABLE `tbl_category1`
  ADD PRIMARY KEY (`category1ID`);

--
-- Indexes for table `tbl_category2`
--
ALTER TABLE `tbl_category2`
  ADD PRIMARY KEY (`category2ID`),
  ADD KEY `category1ID` (`category1ID`);

--
-- Indexes for table `tbl_category3`
--
ALTER TABLE `tbl_category3`
  ADD PRIMARY KEY (`category3ID`),
  ADD KEY `category2ID` (`category2ID`);

--
-- Indexes for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD PRIMARY KEY (`productsID`),
  ADD KEY `category3ID` (`category3ID`);

--
-- Indexes for table `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`userID`),
  ADD UNIQUE KEY `userEmail` (`userEmail`),
  ADD UNIQUE KEY `userMobile` (`userMobile`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_cart`
--
ALTER TABLE `tbl_cart`
  MODIFY `cartID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_cartproduct`
--
ALTER TABLE `tbl_cartproduct`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `tbl_category1`
--
ALTER TABLE `tbl_category1`
  MODIFY `category1ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_category2`
--
ALTER TABLE `tbl_category2`
  MODIFY `category2ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `tbl_category3`
--
ALTER TABLE `tbl_category3`
  MODIFY `category3ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `tbl_products`
--
ALTER TABLE `tbl_products`
  MODIFY `productsID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `userID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_category2`
--
ALTER TABLE `tbl_category2`
  ADD CONSTRAINT `tbl_category2_ibfk_1` FOREIGN KEY (`category1ID`) REFERENCES `tbl_category1` (`category1ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_category3`
--
ALTER TABLE `tbl_category3`
  ADD CONSTRAINT `tbl_category3_ibfk_1` FOREIGN KEY (`category2ID`) REFERENCES `tbl_category2` (`category2ID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tbl_products`
--
ALTER TABLE `tbl_products`
  ADD CONSTRAINT `tbl_products_ibfk_1` FOREIGN KEY (`category3ID`) REFERENCES `tbl_category3` (`category3ID`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
