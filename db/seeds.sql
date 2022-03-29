INSERT INTO Departments (department_name)
VALUES
('Finance'),
('Engineering'),
('Sales'),
('Human Resources');

INSERT INTO Roles (job_title, salary, department_id)
VALUES
('Accountant', 63000, 1),
('Recruiter', 52000, 4),
('Software Engineer', 122000, 2),
('General Manager', 70000, 3),
('Business Analyst', 80000, 2),
('Digital Marketing', 65000, 3);

INSERT INTO Employees (first_name, last_name, role_id, manager_id)
VALUES
('Joshua', 'Thayer', 4, NULL),
('Jonathan', 'Chow', 1, 1),
('Manuel', 'Rodriguez', 2, 1),
('Andrea', 'Jackson', 3, 1),
('Christina', 'Smith', 5, 1),
('Gabriel', 'Cannon', 6, 1);