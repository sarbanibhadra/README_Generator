const fs = require("fs");
const util = require("util");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write down the description?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What is the installatiion process?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage?',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'What are the credits?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which is the license?',
    choices: ['MIT', 'GPLv3', 'Apache'],
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What is the contribution?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the steps to test?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the github link?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the email?',
  },
];

// function to write README file
// function writeToFile(fileName, data) {
// }
const writeToFile = util.promisify(fs.writeFile);

// function to initialize program
function init() {
    return inquirer.prompt(questions)
}

// function call to initialize program
init()  
    .then((data) => writeToFile('README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully wrote to readme.md'))
    .catch((err) => console.error(err));

