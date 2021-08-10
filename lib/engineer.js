const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    // Github username from input 
    getGithub() {
        return this.github;
    }

    // Changing role to Engineer
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;