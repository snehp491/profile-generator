class Manager extends Employee {

    constructor(id, name, email, officeNumber) {
        super(id, name, email);

        this.officeNumber = officeNumber;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}