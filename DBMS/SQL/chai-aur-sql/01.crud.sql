SHOW DATABASES;

CREATE DATABASE IF NOT EXISTS techwithshehzad;

USE techwithshehzad;

SELECT database();

-- delete table
DROP TABLE employee;

-- Table creation command
CREATE TABLE employee (
    EID INT PRIMARY KEY AUTO_INCREMENT,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Age INT NOT NULL,
    Salary INT NOT NULL,
    Location VARCHAR(50) NOT NULL
);

-- SHOW TABLES;

-- insertion command
INSERT INTO employee (FirstName, LastName, Age, Salary, Location) VALUES ('saad', 'Iqbal', 25, 50000, 'karachi');
INSERT INTO employee (FirstName, LastName, Age, Salary, Location) VALUES ('Ali', 'raza', 30, 12500, 'lahore');
INSERT INTO employee (FirstName, LastName, Age, Salary, Location) VALUES ('Ahmed', 'Talha', 22, 5000, 'isl');
INSERT INTO employee (FirstName, LastName, Age, Salary, Location) VALUES ('Saad', 'Khan', 33, 65000, 'lahore');

SELECT * FROM employee;

DESC employee;

-- Query to get all employees whose age is greater than 29
SELECT * FROM employee WHERE Age > 29;

-- update
UPDATE employee SET Location = "karachi" WHERE EID = 4;


-- delete
DELETE FROM employee WHERE EID = 2;



SELECT * FROM employee
