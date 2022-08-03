const inquirer = require('inquirer');

const team = [];
const options = ['Manager', 'Engineer', 'Intern'];

function addManager() {
    console.log('add manager');
    prompt();
}

function addEngineer() {
    console.log('add engineer');
    prompt();
}

function addIntern() {
    console.log('add intern');
    prompt();
}

function build() {
    console.log('build');
}

function prompt() {
    inquirer.prompt([{
        type: 'list',
        message: 'Select a role to add an employee to',
        name: 'role',
        choices: options
    }]).then((response) => {
        if (response['role'] === 'Manager') {
            addManager();
        } else if (response['role'] === 'Engineer') {
            addEngineer();
        } else if (response['role'] === 'Intern') {
            addIntern();
        } else {
            build();
        }
    });
}

function init() {
    prompt();
}

// Function call to initialize app
init();