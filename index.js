// Node modules
const fs = require('fs');
const inquirer = require('inquirer');

// Team prfile modules
const { generateHTML } = require('./src/teamGenerator');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamArray = [];

const addManager = () => {
    return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: 'Manager name?'
            },
            {
                type: 'input',
                name: 'id',
                message: "What is this manager's ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this manager's email address?"
            },
            {
                type: 'input',
                name: 'officeNum',
                message: "What is this manager's office number"
            }
        ])
        .then(managerInput => {
            const { name, id, email, officeNum } = managerInput;
            const manager = new Manager(name, id, email, officeNum);
            teamArray.push(manager);
            console.log(manager);
        })
};

const addEmployee = () => {
    return inquirer.prompt([{
                type: 'list',
                name: 'role',
                message: "What is this employee's role?",
                choices: ['Engineer', 'Intern']
            },
            {
                type: 'input',
                name: 'name',
                message: "Employee name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is this employee's ID number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is this employee's email address?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is this employee's github username?",
                when: (input) => input.role === "Engineer"
            },
            {
                type: 'input',
                name: 'school',
                message: "What school does this intern attend?",
                when: (input) => input.role === "Intern"
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: "Are there any other employee's you would like to add?",
                default: false
            }
        ])
        .then(employeeData => {
            let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
            let employee;
            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            }
            teamArray.push(employee);
            if (confirmAddEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        console.log(data),
            err ? console.log(err) : console.log("HTML with team data successfully created.")
    })
}

addManager()
    .then(addEmployee).then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });