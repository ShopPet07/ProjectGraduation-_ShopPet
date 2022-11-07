-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 07, 2022 lúc 07:38 AM
-- Phiên bản máy phục vụ: 10.4.24-MariaDB
-- Phiên bản PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `shop-pet`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `productId` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `cartId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`productId`, `userId`, `id`, `cartId`) VALUES
(2, 2, 5, 0),
(2, 2, 6, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `pets`
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
  `posterPhoneNumber` int(11) NOT NULL,
  `cartId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `pets`
--

INSERT INTO `pets` (`productId`, `userId`, `title`, `description`, `assess`, `price`, `species`, `image`, `number`, `createdAt`, `categoryId`, `updatedAt`, `poster`, `posterPhoneNumber`, `cartId`) VALUES
(2, 2, 'dog', 'husky', 0, 3000, 'husky', '', 1, '2022-11-04 08:49:11.236780', 0, '2022-11-04 08:49:11.236780', '', 0, NULL),
(3, 2, 'cat', 'cat cute', 0, 2000, 'short haired cat', '', 1, '2022-11-04 08:50:10.849391', 0, '2022-11-04 08:50:10.849391', '', 0, NULL),
(5, 2, 'cat', 'cat stupid', 0, 10, 'log haired cat', '', 1, '2022-11-04 14:21:32.106041', 0, '2022-11-04 14:21:32.106041', '', 0, NULL);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
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
  `createdAt` datetime(6) NOT NULL DEFAULT current_timestamp(6),
  `cartId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `email`, `password`, `numberPhone`, `address`, `role`, `sex`, `avatar`, `createdAt`, `cartId`) VALUES
(1, 'trong', '', 'phucdeptrai@gmail.com', '$2b$12$gwDUQ.1lAulifBRhF4RWk.BZfwn2CImNOWdEOYbAd2.wqbU0GV/F6', '', '', 1, '', '', '2022-11-03 15:26:57.003445', NULL),
(2, 'tram', 'uyen', 'dtu@gmail.com', '$2b$12$iXB2yjyQJv3Xqk32UjSqjuj/Jlu52dCov6H.vay06pesyKzCi1pB.', '', '', 1, '', '', '2022-11-03 16:07:53.238334', NULL),
(3, 'manh', 'huy', 'manhhuy@gmail.com', '$2b$12$NO4.kygvTH7V/bNzMFz.t.g/GBZecR5ItC4IiRjhx4i6Lt5p1vnj.', '', '', 1, '', '', '2022-11-04 16:48:43.657519', NULL),
(4, '', 'huy', 'manhhuy11@gmail.com', '$2b$12$rlqLuA6K62oerqEp1DcAneS9UXwdcQTkYouJ8CZA7dLx1byO4PvXG', '', '', 1, '', '', '2022-11-04 20:14:17.751773', NULL),
(6, '', 'huy', 'manhhuy1123@gmail.com', '$2b$12$uAoDiokatj4J9wQRpN68se.un7Gk/emMv6kOEgXlrLXQwPyvVSExO', '', '', 1, '', '', '2022-11-04 20:15:48.096561', NULL),
(11, '', '', 'd123123@gmail.com', '$2b$08$q3a19kquxzou5AF2GEVyD.Ed9mpoFCKSLCcOt/0hBVf2HHiH46GQC', '', '', 1, '', '', '2022-11-05 07:13:50.280147', NULL),
(12, 'buoi', 'tinh', 'tinhbuoi@gmail.com', '$2b$08$OEuyhU0SrcfhbmXZYryia.W61i1kmgM6LXR7TxFhwhS2.0xlMaQfy', '', '', 1, '', '', '2022-11-05 14:02:07.653591', NULL),
(19, '', '', '', '', '', '', 1, '', '', '2022-11-06 10:41:00.309507', 5);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `pets`
--
ALTER TABLE `pets`
  ADD PRIMARY KEY (`productId`),
  ADD KEY `FK_a9f39dd54113410cdd3a04e80eb` (`userId`),
  ADD KEY `FK_992b6fcfc3da25e3b72b8951d37` (`cartId`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_97672ac88f789774dd47f7c8be` (`email`),
  ADD UNIQUE KEY `REL_89502c44bd22c06e714c31c1e9` (`cartId`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `pets`
--
ALTER TABLE `pets`
  MODIFY `productId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `pets`
--
ALTER TABLE `pets`
  ADD CONSTRAINT `FK_992b6fcfc3da25e3b72b8951d37` FOREIGN KEY (`cartId`) REFERENCES `cart` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_a9f39dd54113410cdd3a04e80eb` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Các ràng buộc cho bảng `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `FK_89502c44bd22c06e714c31c1e93` FOREIGN KEY (`cartId`) REFERENCES `cart` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
