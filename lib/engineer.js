const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, id, email, github, username) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
        this.username = username;
    }
}

const engineer = new Engineer();