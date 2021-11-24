const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const output_dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_dir, "team.html");

const render = require("./lib/htmlRenderer");