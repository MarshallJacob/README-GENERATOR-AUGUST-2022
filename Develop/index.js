// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What the title of your project?',
        name: 'projectName',
     },
     {
         type: 'input',
         message: 'Please enter a description of your project',
         name: 'description',
     },
     {
         type: 'input',
         message: 'Please enter any installation instructions',
         name: 'installation',
     },
     {
         type: 'input',
         message: 'Please explain what your project is used for',
         name: 'usage',
     },
     {
        type: 'input',
        message: 'Please specify the people contributing on this project',
        name: 'contributing', 
    },
    {
        type: 'input',
        message: 'Please input test instructions',
        name: 'tests',
    },
    {
        type: 'checkbox',
        message: 'Please select which license you will be using',
        name: 'license',
        choices: []
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

