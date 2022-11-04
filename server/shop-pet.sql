-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 04, 2022 at 10:07 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop-pet`
--

-- --------------------------------------------------------

--
-- Table structure for table `pets`
--

CREATE TABLE `pets` (
  `productId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `assess` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `species` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `number` int(11) NOT NULL DEFAULT 1,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `categoryId` int(11) NOT NULL,
  `updatedAt` datetime(6) NOT NULL DEFAULT current_timestamp(6) ON UPDATE current_timestamp(6),
  `poster` varchar(255) NOT NULL,
  `posterPhoneNumber` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pets`
--

INSERT INTO `pets` (`productId`, `userId`, `title`, `description`, `assess`, `price`, `species`, `image`, `number`, `createdAt`, `categoryId`, `updatedAt`, `poster`, `posterPhoneNumber`) VALUES
(2, 2, 'dog', 'husky', 0, 3000, 'husky', '', 1, '2022-11-04 08:49:11.236780', 0, '2022-11-04 08:49:11.236780', '', 0),
(3, 2, 'cat', 'cat cute', 0, 2000, 'short haired cat', '', 1, '2022-11-04 08:50:10.849391', 0, '2022-11-04 08:50:10.849391', '', 0),
(5, 2, 'cat', 'cat stupid', 0, 10, 'log haired cat', '', 1, '2022-11-04 14:21:32.106041', 0, '2022-11-04 14:21:32.106041', '', 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `numberPhone` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `role` int(11) NOT NULL DEFAULT 1,
  `sex` varchar(255) NOT NULL,
  `avatar` varchar(255) NOT NULL,
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `numberPhone`, `address`, `role`, `sex`, `avatar`, `createdAt`) VALUES
(1, 'trong', '', 'phucdeptrai@gmail.com', '$2b$12$gwDUQ.1lAulifBRhF4RWk.BZfwn2CImNOWdEOYbAd2.wqbU0GV/F6', '', '', 1, '', '', '2022-11-03 15:26:57.003445'),
(2, 'tram', 'uyen', 'dtu@gmail.com', '$2b$12$iXB2yjyQJv3Xqk32UjSqjuj/Jlu52dCov6H.vay06pesyKzCi1pB.', '', '', 1, '', '', '2022-11-03 16:07:53.238334');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `FK_a9f39dd54113410cdd3a04e80eb` (`userId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pets`
--
ALTER TABLE `pets`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `pets`
--
ALTER TABLE `pets`
  ADD CONSTRAINT `FK_a9f39dd54113410cdd3a04e80eb` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
