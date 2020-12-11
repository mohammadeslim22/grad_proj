-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 11, 2020 at 03:06 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `database_development`
--

-- --------------------------------------------------------

--
-- Table structure for table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `car_number` varchar(10) NOT NULL,
  `status` int(1) DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cars`
--

INSERT INTO `cars` (`id`, `car_number`, `status`, `created_at`, `updated_at`) VALUES
(1, 'new car1', 0, '2020-12-01 14:47:10', '2020-12-01 14:47:10'),
(2, 'new car2', 0, '2020-12-01 14:48:19', '2020-12-01 14:48:19'),
(3, 'wergwergwe', 0, '2020-12-03 13:46:35', '2020-12-03 13:46:35'),
(4, 'wdfgeg', 0, '2020-12-03 13:54:44', '2020-12-03 13:54:44'),
(5, 'ewrgewrg', 0, '2020-12-03 13:56:38', '2020-12-03 13:56:38'),
(6, 'werfg3rg', 0, '2020-12-03 14:06:28', '2020-12-03 14:06:28'),
(7, '3rt35gg', 0, '2020-12-03 14:06:56', '2020-12-03 14:06:56'),
(8, 'helll ', 0, '2020-12-03 14:08:19', '2020-12-03 14:08:19'),
(9, 'cozmo', 0, '2020-12-03 14:09:01', '2020-12-03 14:09:01'),
(10, 'trwethrth', 0, '2020-12-03 14:10:48', '2020-12-03 14:10:48'),
(11, 'rg4t54hy', 0, '2020-12-03 14:11:25', '2020-12-03 14:11:25'),
(12, 'w3rgfegegt', 0, '2020-12-03 14:11:30', '2020-12-03 14:11:30'),
(13, '34g45g', 0, '2020-12-03 14:11:35', '2020-12-03 14:11:35'),
(14, '3rg5y4h57y', 0, '2020-12-03 14:11:42', '2020-12-03 14:11:42'),
(15, 'tr4h5yjhe', 0, '2020-12-03 14:11:47', '2020-12-03 14:11:47'),
(16, '[ppooi', 0, '2020-12-03 14:12:08', '2020-12-03 14:12:08'),
(17, 'mohammad ', 0, '2020-12-03 14:13:51', '2020-12-03 14:13:51'),
(18, 'rfrgg3e', 0, '2020-12-03 14:14:20', '2020-12-03 14:14:20'),
(19, 'ju7y', 0, '2020-12-03 14:14:51', '2020-12-03 14:14:51'),
(20, 'ahmed', 0, '2020-12-06 18:05:01', '2020-12-06 18:05:01'),
(21, 'hello', 0, '2020-12-06 18:29:05', '2020-12-06 18:29:05'),
(22, '', 0, '2020-12-07 15:14:16', '2020-12-07 15:14:16');

-- --------------------------------------------------------

--
-- Table structure for table `cars_transactions`
--

CREATE TABLE `cars_transactions` (
  `id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `car_number` varchar(10) NOT NULL,
  `transaction_time` datetime DEFAULT current_timestamp(),
  `transaction_type` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `cars_transactions`
--

INSERT INTO `cars_transactions` (`id`, `car_id`, `user_id`, `car_number`, `transaction_time`, `transaction_type`, `created_at`, `updated_at`) VALUES
(1, 20, 2, 'ahmed', '2020-12-06 18:28:53', 0, '2020-12-06 18:28:53', '2020-12-06 18:28:53'),
(2, 17, 2, 'mohammad', '2020-12-06 18:28:58', 0, '2020-12-06 18:28:58', '2020-12-06 18:28:58'),
(3, 21, 2, 'hello', '2020-12-06 18:29:05', 0, '2020-12-06 18:29:05', '2020-12-06 18:29:05'),
(4, 20, 2, 'ahmed', '2020-12-06 18:29:56', 1, '2020-12-06 18:29:56', '2020-12-06 18:29:56'),
(5, 21, 2, 'hello', '2020-12-06 18:37:25', 1, '2020-12-06 18:37:25', '2020-12-06 18:37:25'),
(6, 20, 2, 'ahmed', '2020-12-06 18:37:47', 0, '2020-12-06 18:37:47', '2020-12-06 18:37:47'),
(7, 17, 2, 'mohammad', '2020-12-06 18:45:47', 1, '2020-12-06 18:45:47', '2020-12-06 18:45:47'),
(8, 21, 2, 'hello', '2020-12-06 18:46:01', 0, '2020-12-06 18:46:01', '2020-12-06 18:46:01'),
(9, 20, 2, 'ahmed', '2020-12-07 08:43:53', 1, '2020-12-07 08:43:53', '2020-12-07 08:43:53'),
(10, 22, 2, '', '2020-12-07 15:14:16', 0, '2020-12-07 15:14:16', '2020-12-07 15:14:16'),
(11, 22, 2, '', '2020-12-07 15:14:16', 0, '2020-12-07 15:14:16', '2020-12-07 15:14:16'),
(12, 21, 2, 'hello', '2020-12-07 15:18:12', 1, '2020-12-07 15:18:12', '2020-12-07 15:18:12');

-- --------------------------------------------------------

--
-- Table structure for table `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `car_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `car_number` varchar(10) NOT NULL,
  `invoice_amount` double DEFAULT NULL,
  `Invoice_hour_number` double NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `cars_transaction_id` int(11) NOT NULL,
  `total_hours` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `invoices`
--

INSERT INTO `invoices` (`id`, `car_id`, `user_id`, `car_number`, `invoice_amount`, `Invoice_hour_number`, `created_at`, `updated_at`, `cars_transaction_id`, `total_hours`) VALUES
(1, 1, 5, 'new car1', 0, 0.3, '2020-12-01 14:47:14', '2020-12-01 14:47:14', 2, 0),
(3, 2, 5, 'new car2', 5, 0.3, '2020-12-01 20:10:30', '2020-12-01 20:10:30', 5, 5),
(4, 2, 5, 'new car2', 0, 0.3, '2020-12-01 20:12:47', '2020-12-01 20:12:47', 6, 5),
(5, 2, 5, 'new car2', 0, 0.3, '2020-12-01 20:13:37', '2020-12-01 20:13:37', 7, 5),
(6, 2, 5, 'new car2', 0, 0.3, '2020-12-01 20:14:27', '2020-12-01 20:14:27', 8, 5),
(7, 2, 5, 'new car2', 1.5, 0.3, '2020-12-01 20:14:47', '2020-12-01 20:14:47', 9, 5),
(8, 2, 5, 'new car2', 1.5, 0.3, '2020-12-01 20:16:27', '2020-12-01 20:16:27', 10, 5),
(9, 2, 5, 'new car2', 5, 1, '2020-12-01 20:20:16', '2020-12-01 20:20:16', 11, 5),
(10, 2, 1, 'new car2', 20, 1, '2020-12-02 11:44:38', '2020-12-02 11:44:38', 12, 20),
(11, 2, 1, 'new car2', 47, 1, '2020-12-03 14:04:15', '2020-12-03 14:04:15', 13, 47),
(12, 2, 1, 'new car2', 47, 1, '2020-12-03 14:04:24', '2020-12-03 14:04:24', 14, 47),
(13, 7, 3, '3rt35gg', 0, 1, '2020-12-03 14:07:07', '2020-12-03 14:07:07', 17, 0),
(14, 8, 3, 'helll ', 0, 1, '2020-12-03 14:08:32', '2020-12-03 14:08:32', 19, 0),
(15, 10, 3, 'trwethrth', 0, 1, '2020-12-03 14:10:51', '2020-12-03 14:10:51', 22, 0),
(16, 20, 2, 'ahmed', 0, 1, '2020-12-06 18:05:20', '2020-12-06 18:05:20', 33, 0),
(17, 20, 2, 'ahmed', 0, 1, '2020-12-06 18:29:56', '2020-12-06 18:29:56', 4, 0),
(18, 21, 2, 'hello', 0, 1, '2020-12-06 18:37:25', '2020-12-06 18:37:25', 5, 0),
(19, 17, 2, 'mohammad', 0, 1, '2020-12-06 18:45:47', '2020-12-06 18:45:47', 7, 0),
(20, 20, 2, 'ahmed', 14, 1, '2020-12-07 08:43:53', '2020-12-07 08:43:53', 9, 14),
(21, 21, 2, 'hello', 20, 1, '2020-12-07 15:18:12', '2020-12-07 15:18:12', 12, 20);

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20201101180946-unnamed-migration.js'),
('20201101193250-create_transactions_table.js'),
('20201101204452-create_users_table.js'),
('20201101204500-create_invoices_table.js'),
('20201101204513-create_settings_table.js'),
('20201122214039-add_transaction_id_to_invoice.js'),
('20201122214913-add_hours_total_to_invoice.js'),
('20201207104816-add_firsty.js');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(11) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `setting_code` varchar(100) DEFAULT NULL,
  `value` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `name`, `setting_code`, `value`, `created_at`, `updated_at`) VALUES
(1, 'Company Name', 'company_name', 'Parking Billing System', '2020-11-30 16:17:45', '2020-12-01 20:19:49'),
(2, 'Hourly Rate', 'hour_rate', '1', '2020-11-30 16:17:45', '2020-12-01 20:19:49'),
(3, 'Address', 'address', 'Parking Billing System Address hola hola what ever', '2020-11-30 16:17:45', '2020-12-01 20:19:49'),
(4, 'Mobile', 'mobile', '+972567505200', '2020-11-30 16:17:45', '2020-12-01 20:19:49');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `emp_user_name` varchar(50) NOT NULL,
  `emp_password` varchar(70) NOT NULL,
  `emp_name` varchar(50) DEFAULT NULL,
  `emp_address` varchar(100) DEFAULT NULL,
  `role` int(1) NOT NULL DEFAULT 0,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp(),
  `first_name` varchar(20) NOT NULL,
  `last_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `emp_user_name`, `emp_password`, `emp_name`, `emp_address`, `role`, `created_at`, `updated_at`, `first_name`, `last_name`) VALUES
(1, 'mohamad@test.com', '$2b$10$kQkvQsLfMbv9gku3UBjmn.R9r0WBfVjoOHQnocZAo/spG3/lL2ih.', 'another test', 'mohammad address', 0, '2020-11-30 12:52:43', '2020-12-07 12:12:15', 'MOHAMMAD ', 'LASTNAME'),
(2, 'test@test.com', '$2b$10$edtBwYxQxh4KUboa5gH0WuOgCYrkijx8cjZ3aM3yb/yABrqjmARqy', 'yeahyeah', 'mohammad address', 0, '2020-11-30 12:52:49', '2020-11-30 12:52:49', 'TEST', 'test'),
(3, 'mohammadeslim@gmail.com', '$2b$10$FQ0wLs5jztPxC2vRmD8Yt.OXF0aYRQtBJ/mrRDFol5VIXpvTy/Ixm', 'Mr_Amzing', 'mohammad new address', 0, '2020-11-30 12:52:57', '2020-12-07 11:50:43', 'mohammad', 'eslim');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `car_number` (`car_number`);

--
-- Indexes for table `cars_transactions`
--
ALTER TABLE `cars_transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `setting_code` (`setting_code`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `emp_user_name` (`emp_user_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `cars_transactions`
--
ALTER TABLE `cars_transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
