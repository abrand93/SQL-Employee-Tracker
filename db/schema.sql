DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db

USE user_db

CREATE TABLE department(
    id INT NOT NULL PRIMARY KEY,
    department_name VARCHAR(30)

);

CREATE TABLE roles(
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30)
    salary DECIMAL
    department_id INT FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee(
    id INT NOT NULL,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT FOREIGN KEY (roles_id)
    REFERENCES roles(id)
    ON DELETE SET NULL
    manager_id INT 

);