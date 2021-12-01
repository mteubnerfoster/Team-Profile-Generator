const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const output_dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_dir, "team.html");

const render = require("./lib/htmlRenderer");

const questions = [
    {
        type: "list",
        name: "type",
        message: "Please select your employment type. ",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "name",
        message: "Enter your first and last name. "
    },
    {
        type: "input",
        name: "id",
        message: "Enter your employee ID. "
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address. "
    }
];

const engineerQ = {
    type: "input",
    name: "github",
    message: "Enter your GitHub username. "
};

const managerQ = {
    type: "input",
    name: "officeNum",
    message: "Enter your office number. "
};

const internQ = {
    type: "input",
    name: "school",
    message: "What school do you attend? "
};

const addAnother = {
    type: "confirm",
    name: "addAnother",
    message: "Would you like to add another employee? "
}

let type, name, id, email, github, officeNum, school;
let employeesArr = [];

function addEmployee() {
    inquirer
        .prompt(questions)
        .then(data => {
            type = data.type;
            name = data.name;
            id = data.id;
            email = data.email;
            return type;
        })
        .then(type => {
            let followupQ;

            if (type === "Engineer") {
                followupQ = engineerQ;
            } else if (type === "Intern") {
                followupQ = internQ;
            } else {
                followupQ = managerQ;
            };

            return inquirer.prompt(followupQ);
        })
        .then(data => {
            let value = Object.values(data)[0];
            let employee;

            if (type === "Engineer") {
                github = value;
                employee = new engineer(name, id, email, github);
            } else if (type === "Intern") {
                school = value;
                employee = new intern(name, id, email, school);
            } else {
                officeNum = value;
                employee = new manager(name, id, email, officeNum);
            };

            console.log(employee);

        });

};

addEmployee();
