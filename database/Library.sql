-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Oct 09, 2020 at 11:38 AM
-- Server version: 10.0.38-MariaDB-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Library`
--

-- --------------------------------------------------------

--
-- Table structure for table `Author`
--

CREATE TABLE `Author` (
  `Id` int(11) NOT NULL,
  `Author_Id` int(11) NOT NULL,
  `Book_Id` int(11) NOT NULL,
  `Author_Name` varchar(255) NOT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Created_On` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Author`
--

INSERT INTO `Author` (`Id`, `Author_Id`, `Book_Id`, `Author_Name`, `Address`, `Created_On`) VALUES
(0, 0, 0, 'Joseph', 'Parrys', '2020-10-09 01:02:53'),
(1, 1, 0, 'willington', 'Saaroo', '2020-10-09 01:26:01');

-- --------------------------------------------------------

--
-- Table structure for table `Book`
--

CREATE TABLE `Book` (
  `Id` int(11) NOT NULL,
  `Book_Id` int(11) NOT NULL,
  `Book_Name` varchar(255) NOT NULL,
  `ISBN` varchar(50) NOT NULL,
  `Edition` varchar(10) NOT NULL,
  `Author_Id` int(11) NOT NULL,
  `Pub_Id` int(11) NOT NULL,
  `Rack_No` int(11) NOT NULL,
  `Price` float DEFAULT NULL,
  `Created_On` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Book`
--

INSERT INTO `Book` (`Id`, `Book_Id`, `Book_Name`, `ISBN`, `Edition`, `Author_Id`, `Pub_Id`, `Rack_No`, `Price`, `Created_On`) VALUES
(0, 0, 'Principle of Compiler', 'A123', '2008', 0, 0, 0, 500, '2020-10-09 01:16:21'),
(1, 0, 'DataMining', 'B123', '2006', 0, 0, 0, 250, '2020-10-09 01:16:33');

-- --------------------------------------------------------

--
-- Table structure for table `Login`
--

CREATE TABLE `Login` (
  `Id` int(11) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `User_Name` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Role_Id` int(11) NOT NULL,
  `Last_Login` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Login`
--

INSERT INTO `Login` (`Id`, `User_Id`, `User_Name`, `Password`, `Role_Id`, `Last_Login`) VALUES
(0, 0, 'sugi', 'sugi', 0, '2020-10-09 01:07:56'),
(1, 1, 'subi', 'subi', 1, '2020-10-09 01:07:56');

-- --------------------------------------------------------

--
-- Table structure for table `ManageBook`
--

CREATE TABLE `ManageBook` (
  `Issue_Id` int(11) NOT NULL,
  `Book_Id` int(11) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `Issue_Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Return_date` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `Created_On` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `Modified_On` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `ManageBook`
--

INSERT INTO `ManageBook` (`Issue_Id`, `Book_Id`, `User_Id`, `Issue_Date`, `Return_date`, `Created_On`, `Modified_On`) VALUES
(0, 0, 0, '2020-10-09 01:08:27', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(1, 1, 1, '2020-10-09 01:08:27', '0000-00-00 00:00:00', '0000-00-00 00:00:00', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `Publisher`
--

CREATE TABLE `Publisher` (
  `Id` int(11) NOT NULL,
  `Pub_Id` int(11) NOT NULL,
  `Book_Id` int(11) NOT NULL,
  `Author_Id` int(11) NOT NULL,
  `Pub_Name` varchar(255) NOT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Created_On` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Publisher`
--

INSERT INTO `Publisher` (`Id`, `Pub_Id`, `Book_Id`, `Author_Id`, `Pub_Name`, `Address`, `Created_On`) VALUES
(0, 0, 0, 0, 'Tata', 'Kolkata', '2020-10-09 01:09:35'),
(1, 1, 1, 1, 'MCGrill', 'HongKong', '2020-10-09 01:26:51');

-- --------------------------------------------------------

--
-- Table structure for table `Session`
--

CREATE TABLE `Session` (
  `Id` int(11) NOT NULL,
  `User_Id` int(11) NOT NULL,
  `Access_Token` varchar(255) NOT NULL,
  `Valid` int(200) NOT NULL,
  `Created_On` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `Last_Access` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Session`
--

INSERT INTO `Session` (`Id`, `User_Id`, `Access_Token`, `Valid`, `Created_On`, `Last_Access`) VALUES
(0, 0, '12345654321', 0, '2020-10-09 01:10:14', '0000-00-00 00:00:00'),
(1, 1, '234567654', 0, '2020-10-09 01:10:14', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `Id` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `User_Name` varchar(255) NOT NULL,
  `Phone` varchar(11) NOT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Role_Id` int(11) NOT NULL,
  `Created_On` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `User`
--

INSERT INTO `User` (`Id`, `UserId`, `User_Name`, `Phone`, `Address`, `Role_Id`, `Created_On`) VALUES
(0, 0, 'Sugitha', '94423436765', 'Marthandam', 0, '2020-10-09 02:11:05'),
(1, 1, 'Subitha', '9878765676', 'Kulesekaram', 1, '2020-10-09 02:11:14');

-- --------------------------------------------------------

--
-- Table structure for table `UserRole`
--

CREATE TABLE `UserRole` (
  `Role_Name` varchar(255) NOT NULL,
  `Role_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `UserRole`
--

INSERT INTO `UserRole` (`Role_Name`, `Role_Id`) VALUES
('Admin', 0),
('Non_Admin', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Author`
--
ALTER TABLE `Author`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `Book`
--
ALTER TABLE `Book`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `Login`
--
ALTER TABLE `Login`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `ManageBook`
--
ALTER TABLE `ManageBook`
  ADD PRIMARY KEY (`Issue_Id`);

--
-- Indexes for table `Publisher`
--
ALTER TABLE `Publisher`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `Session`
--
ALTER TABLE `Session`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`Id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
