const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const output_dir = path.resolve(__dirname, "output");
const outputPath = path.join(output_dir, "team.html");

const render = require("./lib/htmlRenderer");