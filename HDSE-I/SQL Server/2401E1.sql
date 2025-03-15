-- ________________________________________________________DAY 1________________________________________________

-- ________________________________________________________DAY 2________________________________________________
CREATE DATABASE _2401E1;

USE _2401E1;

CREATE TABLE students(id INT IDENTITY(101, 1), sname VARCHAR(255), email VARCHAR(255));

SELECT * FROM students;

INSERT INTO students
VALUES('Noman', 'noman@gmail.com'),
('Ahmed', 'ahmed@gmail.com'),
('Farhan', 'farhan@gmail.com');

ALTER TABLE students
ADD gender VARCHAR(255);

EXEC sp_rename 'students.gender', 'result', 'COLUMN';

ALTER TABLE students
ALTER COLUMN result BIT;

ALTER TABLE students
ADD address VARCHAR(255);

ALTER TABLE students
DROP COLUMN address; 

-- REname table;
EXEC sp_rename 'students', 'std';




-- ________________________________________________________DAY 3________________________________________________

-- Database rename
ALTER DATABASE xyz MODIFY NAME = _2401E1;

--Delete Database
DROP DATABASE abc;

SELECT * INTO std2 FROM std;

SELECT * FROM std;
SELECT * FROM std2;

TRUNCATE TABLE std2;

DROP TABLE std2;

DELETE FROM std2 WHERE id = 104;

DELETE FROM std2;


-- ________________________________________________________DAY 4________________________________________________


SELECT TOP 2 * FROM std;

SELECT TOP 15 percent * FROM std;

SELECT * FROM std;

CREATE TABLE stdRec(
id INT PRIMARY KEY IDENTITY(10, 1),
name VARCHAR(255) NOT NULL,
email VARCHAR(255) UNIQUE,
age INT CHECK (age >= 18),
city VARCHAR(255) DEFAULT 'Karachi'
);


INSERT INTO stdRec (name, email, age, city)
VALUES 
('Ali Khan', 'ali.khan1@example.com', 22, 'Karachi'),
('Sara Ahmed', 'sara.ahmed2@example.com', 24, 'Lahore'),
('Ahmed Raza', 'ahmed.raza3@example.com', 21, 'Islamabad'),
('Fatima Noor', 'fatima.noor4@example.com', 23, 'Karachi'),
('Bilal Aslam', 'bilal.aslam5@example.com', 26, 'Rawalpindi'),
('Ayesha Tariq', 'ayesha.tariq6@example.com', 25, 'Lahore'),
('Hassan Malik', 'hassan.malik7@example.com', 28, 'Karachi'),
('Nida Parveen', 'nida.parveen8@example.com', 20, 'Islamabad'),
('Zain Abbas', 'zain.abbas9@example.com', 27, 'Peshawar'),
('Maha Javed', 'maha.javed10@example.com', 22, 'Quetta'),
('Usman Khan', 'usman.khan11@example.com', 30, 'Karachi'),
('Rabia Sheikh', 'rabia.sheikh12@example.com', 21, 'Lahore'),
('Danish Ali', 'danish.ali13@example.com', 23, 'Islamabad'),
('Saima Riaz', 'saima.riaz14@example.com', 29, 'Rawalpindi'),
('Fahad Anwar', 'fahad.anwar15@example.com', 24, 'Peshawar'),
('Shazia Khan', 'shazia.khan16@example.com', 25, 'Karachi'),
('Tariq Mehmood', 'tariq.mehmood17@example.com', 26, 'Lahore'),
('Lubna Akram', 'lubna.akram18@example.com', 22, 'Islamabad'),
('Kamran Arif', 'kamran.arif19@example.com', 28, 'Quetta'),
('Farhan Javed', 'farhan.javed20@example.com', 23, 'Karachi'),
('Rida Naeem', 'rida.naeem21@example.com', 24, 'Lahore'),
('Imran Saeed', 'imran.saeed22@example.com', 27, 'Islamabad'),
('Amna Pervez', 'amna.pervez23@example.com', 21, 'Rawalpindi'),
('Zubair Hassan', 'zubair.hassan24@example.com', 30, 'Peshawar'),
('Mehwish Khan', 'mehwish.khan25@example.com', 29, 'Karachi'),
('Asad Rehman', 'asad.rehman26@example.com', 22, 'Lahore'),
('Noreen Farooq', 'noreen.farooq27@example.com', 23, 'Islamabad'),
('Tahir Mahmood', 'tahir.mahmood28@example.com', 28, 'Rawalpindi'),
('Amina Malik', 'amina.malik29@example.com', 25, 'Peshawar'),
('Ali Raza', 'ali.raza30@example.com', 26, 'Karachi');

--CLAUSES 
SELECT * FROM stdRec WHERE age = 22;

SELECT DISTINCT city FROM stdRec;

SELECT DISTINCT name FROM stdRec;

SELECT * FROM stdRec ORDER BY name ASC;
SELECT * FROM stdRec ORDER BY age ASC;
SELECT * FROM stdRec ORDER BY email ASC;

SELECT * FROM stdRec ORDER BY name DESC;

SELECT * FROM stdRec WHERE age = 22 AND city = 'karachi';
SELECT * FROM stdRec WHERE age = 22 AND city = 'karachi' AND name = 'bilal';

SELECT * FROM stdRec WHERE age = 22 OR city = 'karachi';
SELECT * FROM stdRec WHERE age = 22 AND city = 'karachi' OR name = 'Hassan Malik';

SELECT * FROM stdRec WHERE age >= 22 AND (city = 'karachi' OR name = 'Hassan Malik');

SELECT * FROM stdRec WHERE age >= 25;

SELECT * FROM stdRec WHERE NOT age >= 25;

SELECT * FROM stdRec WHERE age = 25 OR age = 23 OR age = 27;

SELECT * FROM stdRec WHERE age in (23, 25, 27);

SELECT * FROM stdRec WHERE age Not in (23, 25, 27);

SELECT * FROM stdRec WHERE age between 20 AND 25;
SELECT * FROM stdRec WHERE age NOT between 20 AND 25;

SELECT * FROM stdRec WHERE name LIKE 'A%';
SELECT * FROM stdRec WHERE name LIKE '%A';
SELECT * FROM stdRec WHERE name LIKE '%A_';
SELECT * FROM stdRec WHERE name LIKE '_A_';
SELECT * FROM stdRec WHERE name LIKE '_A%';
SELECT * FROM stdRec WHERE name LIKE '%A%';


-- ________________________________________________________DAY 5 - 6________________________________________________

SELECT * FROM stdRec as sr;

SELECT city as c FROM stdRec;

--AGGREGATE FUNCTION
SELECT COUNT(*) FROM stdRec;

SELECT COUNT(*) FROM stdRec;

SELECT COUNT(age) FROM stdRec;
SELECT COUNT(email) FROM stdRec;
SELECT COUNT(gender) FROM stdRec;

SELECT SUM(city) FROM stdRec;

SELECT MIN(age) FROM stdRec;
SELECT MAX(age) FROM stdRec;

SELECT AVG(age) FROM stdRec;

ALTER TABLE stdREc ADD gender VARCHAR(255);

UPDATE stdRec SET gender = 'Male' WHERE city = 'karachi';
UPDATE stdRec SET gender = 'Female' WHERE NOT city = 'karachi';

SELECT COUNT(city) FROM stdrec WHERE city = 'karachi';
SELECT COUNT(city) FROM stdrec WHERE city = 'lahore';
SELECT COUNT(city) FROM stdrec WHERE city = 'peshawar';

--GROUP BY
SELECT city,  COUNT(city) FROM stdrec GROUP BY city;

SELECT city,  COUNT(city) FROM stdrec GROUP BY city HAVING city = 'karachi';
SELECT age,  COUNT(age) FROM stdrec GROUP BY age HAVING age > 24;

SELECT * FROM stdRec;

--JOINS
CREATE TABLE Customer(
Customer_id INT PRIMARY KEY IDENTITY(1, 1),
name VARCHAR(255) NOT NULL,
email VARCHAR(255)
);

CREATE TABLE Product(
Product_id INT PRIMARY KEY IDENTITY(101, 1),
Product_name VARCHAR(255) NOT NULL,
Product_price VARCHAR(255),
c_id INT,
FOREIGN KEY (c_id) REFERENCES Customer(Customer_id)
);

ALTER TABLE Product ALTER COLUMN Product_price INT;

INSERT INTO Customer
VALUES('Bilal', 'bilal@gmail.com'),
('Iqbal', 'iqbal@gmail.com'),
('Saad', 'saad@gmail.com'),
('Affan', 'affan@gmail.com');

DELETE FROM Customer WHERE Customer_id BETWEEN 7 AND 9;
DELETE FROM Customer WHERE Customer_id = 6;

INSERT INTO Product
VALUES('Geomattery', 450, NULL),
('File', 170, 3),
('Book', 350, 1),
('Marker', 70, 2);

SELECT * FROM Customer;
SELECT * FROM Product;

--INNER JOIN
SELECT * FROM Customer INNER JOIN Product
ON Customer.Customer_id = Product.c_id;

SELECT * FROM Customer c INNER JOIN Product p
ON c.Customer_id = p.c_id;

SELECT c.name, p.Product_name, p.Product_price FROM Customer c INNER JOIN Product p
ON c.Customer_id = p.c_id;

--LEFT JOIN 
SELECT name, Product_name, Product_price FROM Customer c LEFT JOIN Product p
ON c.Customer_id = p.c_id;

--RIGHT JOIN
SELECT name, Product_name, Product_price FROM Customer c RIGHT JOIN Product p
ON c.Customer_id = p.c_id;

--FULL JOIN
SELECT name, Product_name, Product_price FROM Customer c FULL JOIN Product p
ON c.Customer_id = p.c_id;


-- ________________________________________________________DAY 7 - ASSESMENT________________________________________________


-- ________________________________________________________DAY 8________________________________________________

--SUBQUERY

SELECT AVG(age) FROM stdRec;
SELECT * FROM stdRec WHERE age > 24;

SELECT * FROM stdRec WHERE age > (SELECT AVG(age) FROM stdRec);
SELECT * FROM stdRec WHERE age > (SELECT age FROM stdRec WHERE name = 'Fahad Anwar');


--STORED PROCEDURE
--Create
ALTER PROCEDURE spfetchRec
AS
BEGIN
SELECT c.name, p.Product_name, p.Product_price FROM Customer c INNER JOIN Product p
ON c.Customer_id = p.c_id;
END

CREATE PROCEDURE spfetchRec1
AS
BEGIN
SELECT * FROM stdRec;
END

DROP PROC spfetchRec1;

--calling
spfetchRec;
EXEC spfetchRec;
EXECUTE spfetchRec;


CREATE PROCEDURE spfetchRecwithCon
AS
BEGIN
SELECT * FROM stdRec WHERE city = 'karachi';
END

EXEC spfetchRecwithCon;


CREATE PROCEDURE spfetchRecwithMulCon
AS
BEGIN
SELECT * FROM stdRec WHERE city = 'karachi' AND age > 25;
END

--Alter/Modify
ALTER PROCEDURE spfetchRecwithMulCon
AS
BEGIN
SELECT * FROM stdRec WHERE city = 'Lahore' AND age > 25;
END

EXEC spfetchRecwithMulCon;

--Parametarized Procedures
CREATE PROCEDURE spfetchRecwithPara
@age INT,
@city VARCHAR(255)
AS
BEGIN
SELECT * FROM stdRec WHERE city = @city AND age = @age;
END

EXEC spfetchRecwithPara 22, 'Karachi';

EXEC spfetchRecwithPara 21, 'lahore';

EXEC sp_rename 'spfetchRecwithPara', 'spfetchRecwithMulPara';

EXEC sp_helptext spfetchRecwithMulPara;


-- ________________________________________________________DAY 9________________________________________________

--VARIABLE
DECLARE @ag INT
SET @ag = 22;
SELECT * FROM stdRec WHERE age = @ag;

DECLARE @city VARCHAR(255)
SET @city = 'Karachi';
SELECT * FROM stdRec WHERE city = @city;

--FUNCTION
CREATE FUNCTION dbo.calculate (@a INT,@b INT)
RETURNS INT
AS
BEGIN
DECLARE @output INT
SET @output = @a + @b
RETURN @output
END

SELECT dbo.calculate(2, 23) as Addition;

CREATE FUNCTION dbo.addition (@fname VARCHAR(50),@lname VARCHAR(50))
RETURNS varchar(100)
AS
BEGIN
DECLARE @output VARCHAR(100)
SET @output = @fname + ' ' + @lname
RETURN @output
END

SELECT dbo.addition('Faraz', 'Inam') as Addition;

--VIEWS

--Create View
CREATE VIEW vwEmpRec
AS 
SELECT id, name, email, city FROM stdRec;

--Read View
SELECT * FROM vwEmpRec;

--Create View
CREATE VIEW vwEmpRecWithCon
AS 
SELECT id, name, email, city FROM stdRec WHERE city = 'Karachi';

--Read View
SELECT * FROM vwEmpRecWithCon;

--Insert into a View
INSERT INTO vwEmpRecWithCon VALUES('Muhammad Faizan', 'faizan@gmail.com', 'Lahore');

--Delete From View
DELETE FROM vwEmpRecWithCon WHERE id = 40;

--Fetch View structure
sp_helptext vwEmpRecWithCon;

--Create View
CREATE VIEW vwEmpRecWithCon2
WITH ENCRYPTION
AS 
SELECT id, name, age, city FROM stdRec WHERE age = 24;

--Read View
SELECT * FROM vwEmpRecWithCon2;

--Fetch View structure
sp_helptext vwEmpRecWithCon2;

SELECT * FROM stdRec;