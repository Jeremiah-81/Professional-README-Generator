// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "firstName",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "lastName",
    message: "What is your last name?",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "What is your job email address?",
  },
  {
    type: "input",
    name: "userName",
    message: "What is your gitHub user name?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your repository?",
  },
  {
    type: "input",
    name: "installation",
    message: "List installation instructions.",
  },
  {
    type: "input",
    name: "Usage",
    message: "What is this application used for?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a licence for free.",
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      'BSD 2-Clause "Simplified" License',
      'BSD 3-Clause "New" or "Revised" License',
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
    ],
  },
  {
    type: "input",
    name: "contribution",
    message:"Explain how other developers can contribute to your project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Can we run some tests?",
  },
  {
    type: "input",
    name: "questions",
    message: "Leave contact information if there are any questions.  ",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const markdown = generateMarkdown(data);
    fs.writeFile("README.MD", markdown, (err) => {
      if (err) {
        console.log(err);
      }
      console.log("README file generated");
    });
  });
}

// Function call to initialize app
init();
