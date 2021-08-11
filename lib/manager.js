const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }

    // Changing role to Manager 
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;