const fs = require('fs');
const inquirer = require('inquirer');
const teamGenerator = require('./src/teamGenerator');

const questions = [{
        type: "input",
        name: "",
        message: ""
    },
    {
        type: "input",
        name: "",
        message: ""
    },
    {
        type: "input",
        name: "",
        message: ""
    },
    {
        type: "input",
        name: "",
        message: ""
    },
    {
        type: "input",
        name: "",
        message: ""
    }
]

const writeFile = (fileName, data) => {
    fs.writeFile(fileName, data, function(err) {
        console.log(data),
            err ? console.log(err) : console.log("Team profile page successfully created!")
    })
}

const start = () => {
    inquirer.prompt(questions)
        .then(function(data) {
            writeFile("index.html", teamGenerator(data));
            console.log(data)
        })
}

start();