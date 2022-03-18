const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./db/connections');

// Create prompt with choices for employee tracking

inquirer
.prompt([
    {
        type: 'list',
        name: 'toDo',
        message: 'What would you like to do?',
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add a role",
            "Add an employee",
            "Update an employee role",
            "Exit"
        ],
    },
])
.then((answers) => {
    switch (answers.toDo) {
        case "View all departments":
            selectAllDepartments().then(([rows, fields]) => {
                console.table(rows);
                wantToExit();
            });
        break;
        case "View all roles":
            selectAllRoles().then(([rows, fields]) => {
                console.table(rows)
                wantToExit();
            });
        break;
        case "View all employees":
            selectAllEmployees().then(([rows, fields]) => {
                console.table(rows)
                wantToExit();
            });
        break;
        case "Add a department":
            addDepartment();

        break;
        case "Add a role":
            addRole();

        break;
        case "Add an employee":
            addEmployee();

        break;
        case "Updated an employee":
            updateEmployee();
        
        break;
        default:
    }
});
