DROP DATABASE IF EXISTS E2E_DB;
CREATE OR REPLACE DATABASE E2E_DB;
USE E2E_DB;
CREATE OR REPLACE SCHEMA e2e_test;
CREATE OR REPLACE TABLE e2e_test.regions(region_id INT PRIMARY KEY,region_name VARCHAR(25));
CREATE OR REPLACE TABLE e2e_test.countries(country_id CHAR(2) PRIMARY KEY,country_name VARCHAR (40),region_id INT NOT NULL);
CREATE OR REPLACE TABLE e2e_test.locations(e2e_testlocation_id INT PRIMARY KEY,e2e_teststreet_address VARCHAR (40),e2e_testpostal_code VARCHAR (12),e2e_testcity VARCHAR (30) NOT NULL,e2e_teststate_province VARCHAR (25),e2e_testcountry_id CHAR (2) NOT NULL);
CREATE OR REPLACE TABLE e2e_test.jobs(e2e_testjob_id INT PRIMARY KEY,e2e_testjob_title VARCHAR (35) NOT NULL,e2e_testmin_salary DECIMAL (8, 2),e2e_testmax_salary DECIMAL (8, 2));
CREATE OR REPLACE TABLE e2e_test.test_departments(e2e_testdepartment_id INT PRIMARY KEY,e2e_testdepartment_name VARCHAR (30) NOT NULL,e2e_testlocation_id INT);
CREATE OR REPLACE TABLE e2e_test.test_employees(e2e_testemployee_id INT PRIMARY KEY,e2e_testfirst_name VARCHAR (20),e2e_testlast_name VARCHAR (25) NOT NULL,e2e_testemail VARCHAR (100) NOT NULL,e2e_testphone_number VARCHAR (20),e2e_testhire_date DATE NOT NULL,e2e_testjob_id INT NOT NULL,e2e_testsalary DECIMAL (8, 2) NOT NULL,e2e_testmanager_id INT,e2e_testdepartment_id INT);
CREATE OR REPLACE TABLE e2e_test.test_dependents(e2e_testdependent_id INT PRIMARY KEY,e2e_testfirst_name VARCHAR (50) NOT NULL,e2e_testlast_name VARCHAR (50) NOT NULL,e2e_testrelationship VARCHAR (25) NOT NULL,e2e_testemployee_id INT NOT NULL);
