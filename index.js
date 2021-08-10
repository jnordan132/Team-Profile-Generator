// Node modules
const fs = require('fs');
const inquirer = require('inquirer');
const Choice = require('inquirer/lib/objects/choice');

// Team prfile modules
const { teamGenerator } = require('./src/teamGenerator');
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

// Questions array
const questions = [{
        type: "input",
        name: "manName",
        message: "Manager name?"
    },
    {
        type: "input",
        name: "manId",
        message: "What is this managers employee ID?"
    },
    {
        type: "input",
        name: "manEmail",
        message: "What is this managers email address"
    },
    {
        type: "input",
        name: "manOfficeNum",
        message: "What is this managers office number?"
    },
    {
        type: "list",
        name: "engOrInt",
        message: "Would you like to add an engineer, intern, or finish?",
        choices: ["Engineer", "Intern", "Finish"]
    },
    {
        type: "input",
        name: "empName",
        message: `${} name?`
    },
    {
        type: "input",
        name: "empId",
        message: `What is this ${} employee ID?`
    },
    {
        type: "input",
        name: "empEmail",
        message: `What is this ${} email address?`
    },
    {
        type: "input",
        name: "github",
        message: "What is this engineers GitHub username?",
        when(input) {
            input.engOrInt === "Engineer"
        }
    },
    {
        type: "input",
        name: "school",
        message: "What school does this intern go to?",
        when(choices) {
            choices.engOrInt === "Intern"
        }
    }
]

// Write to file
const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(data),
            err ? console.log(err) : console.log("Team profile page successfully created!")
    })
}

// Initialize HTML
const init = () => {
    inquirer.prompt(questions)
        .then(function(data) {
            writeFile("./dist/index.html", teamGenerator(data));
            console.log(data)
        })
}

init();