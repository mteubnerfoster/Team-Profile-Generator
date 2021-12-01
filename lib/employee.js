// Define and export Employee class

class employee {
    constructor(name, id, email) {
        this.name = name;
        this.email = email;
        this.id = id;
    };

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.constructor.name;
    };
};

module.exports = employee;