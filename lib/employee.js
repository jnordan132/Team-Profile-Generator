class Employee {
    constructor(name, id, email) {
            this.name = name;
            this.id = id;
            this.email = email;
        }
        // Name from input
    getName() {
        return this.name;
    }

    // ID from input
    getId() {
        return this.id;
    }

    // Email from input
    getEmail() {
        return this.email;
    }

    // Role from input 
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;