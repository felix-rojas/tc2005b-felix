-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 31, 2022 at 06:35 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lab25`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarDeposito` (IN `U_NoCuenta` INT, IN `U_Monto` FLOAT)  BEGIN
INSERT INTO operaciones_bancarias
VALUES (U_NoCuenta, 1, CURRENT_TIMESTAMP, U_Monto);

UPDATE clientes SET Saldo=Saldo+U_Monto 
WHERE NoCuenta = U_NoCuenta;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `registrarMovimientoBancario` (IN `U_NoCuenta` INT, IN `U_idTipo` INT, IN `U_Monto` INT)  BEGIN 
INSERT INTO operaciones_bancarias
VALUES(U_NoCuenta,U_idTipo,CURRENT_TIMESTAMP,U_Monto);
CASE U_idTipo 
	WHEN 1 THEN UPDATE clientes SET Saldo = Saldo + U_Monto WHERE 	 NoCuenta=U_NoCuenta;
	WHEN 2 THEN UPDATE clientes SET Saldo = Saldo - U_Monto WHERE NoCuenta=U_NoCuenta;
END CASE;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `clientes`
--

CREATE TABLE `clientes` (
  `NoCuenta` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Saldo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `clientes`
--

INSERT INTO `clientes` (`NoCuenta`, `Nombre`, `Saldo`) VALUES
(123, 'Petronela Pascual', 50000),
(1232, 'Julio Juárez', 1000),
(1234, 'Pascacio Pérez', 500);

-- --------------------------------------------------------

--
-- Table structure for table `operaciones_bancarias`
--

CREATE TABLE `operaciones_bancarias` (
  `NoCuenta` int(11) DEFAULT NULL,
  `idMovimiento` int(11) NOT NULL,
  `Fecha` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `Monto` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `operaciones_bancarias`
--

INSERT INTO `operaciones_bancarias` (`NoCuenta`, `idMovimiento`, `Fecha`, `Monto`) VALUES
(123, 1, '2022-03-31 15:52:28', 2000),
(1234, 2, '2022-03-31 16:16:04', 500),
(123, 1, '2022-03-31 16:27:32', 50000),
(123, 2, '2022-03-31 16:31:34', 2100);

-- --------------------------------------------------------

--
-- Table structure for table `tipo_operacion`
--

CREATE TABLE `tipo_operacion` (
  `idTipo` int(11) DEFAULT NULL,
  `Descripcion` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tipo_operacion`
--

INSERT INTO `tipo_operacion` (`idTipo`, `Descripcion`) VALUES
(1, 'Deposito'),
(2, 'Retiro'),
(3, 'Cuenta');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`NoCuenta`);

--
-- Indexes for table `operaciones_bancarias`
--
ALTER TABLE `operaciones_bancarias`
  ADD KEY `NoCuenta` (`NoCuenta`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `operaciones_bancarias`
--
ALTER TABLE `operaciones_bancarias`
  ADD CONSTRAINT `NoCuenta` FOREIGN KEY (`NoCuenta`) REFERENCES `clientes` (`NoCuenta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
