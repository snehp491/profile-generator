const inquirer = require('inquirer');
const fs = require('fs');

// Models
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

// Html template
const createCards = require('./src/template');

const team = [];
const options = ['Manager', 'Engineer', 'Intern', 'Generate Team Profiles'];

function addManager() {
    console.log('add manager');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the manager name'
        }, {
            type: 'input',
            name: 'id',
            message: 'Enter the managers id'
        }, {
            type: 'input',
            name: 'email',
            message: 'Enter the managers email'
        }, {
            type: 'input',
            name: 'office',
            message: 'Enter the managers office number'
        }]).then((response) => {
            team.push(new Manager(
                response['id'],
                response['name'],
                response['email'],
                response['office']));

                prompt();
    });
}

function addEngineer() {
    console.log('add engineer');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the engineers name'
        }, {
            type: 'input',
            name: 'id',
            message: 'Enter the engineers id'
        }, {
            type: 'input',
            name: 'email',
            message: 'Enter the engineers email'
        }, {
            type: 'input',
            name: 'github',
            message: 'Enter the engineers GitHub profile'
        }]).then((response) => {
        team.push(new Engineer(
            response['id'],
            response['name'],
            response['email'],
            response['github']));

        prompt();
    });
}

function addIntern() {
    console.log('add intern');
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Enter the interns name'
        }, {
            type: 'input',
            name: 'id',
            message: 'Enter the interns id'
        }, {
            type: 'input',
            name: 'email',
            message: 'Enter the interns email'
        }, {
            type: 'input',
            name: 'school',
            message: 'Enter the school for the intern'
        }]).then((response) => {
        team.push(new Intern(
            response['id'],
            response['name'],
            response['email'],
            response['school']));

        prompt();
    });
}

function build() {
    console.log('build');
    fs.writeFileSync('./dist/index.html', createCards(team));
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
        } else if (response['role'] === 'Generate Team Profiles') {
            build();
        } else {
            prompt();
        }
    });
}

function init() {
    prompt();
}

// Function call to initialize app
init();