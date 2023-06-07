INSERT INTO department (department_name)
VALUES ("CEO"),
        ( "Sales"),
        ( "IT"),
        ( "Production");

INSERT INTO role (title, salary, department_id)
VALUES 
("CEO",2055512.52,1 ),
("VP of Sales", 152000.00, 2),
( "Director of IT", 75000.00, 3),
("Production Tech", 42000.00, 4);

INSERT INTO employee(first_name, last_name, manger_id, role_id)
VALUES ("Andrew","Jackson", 1,1),
("John","Dhoe",3,1),
("Tony","Stark",2,1),
("James","Joe",3,3);