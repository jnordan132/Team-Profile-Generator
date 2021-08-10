const Employee = require('./employee');

class Manager {
    constructor(name, id, email, officeNum) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNum = officeNum;
    }
}

const manager = new Manager();