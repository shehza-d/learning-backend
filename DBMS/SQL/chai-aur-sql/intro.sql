SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS techwithshehzad;

USE techwithshehzad;

SELECT database();

DROP TABLE employee;

CREATE TABLE employee (
    EID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Age INT NOT NULL,
    Salary INT NOT NULL,
    Location VARCHAR(50) NOT NULL
);

SHOW TABLES;

DESC employee