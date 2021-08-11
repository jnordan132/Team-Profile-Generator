const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    // School from input 
    getSchool() {
        return this.school;
    }

    // Changing role to Intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;