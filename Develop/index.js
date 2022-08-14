// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const readMeGenerator = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
function readMeQuestions(){
    return inquirer.prompt([
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
        choices: [
        "Apache",
        "Academic",
        "GNU",
        "ISC",
        "MIT",
        "Mozilla",
        "Open"]
    },
])};

// TODO: Create a function to write README file
// fs.writeFile("./generate/README.md", readMeGenerator(answers)); {
// };

// TODO: Create a function to initialize app
async function init() {
    const answers = await readMeQuestions();
    const readMeContent = readMeGenerator(answers);
    fs.writeFile("./generate/README.md", readMeContent, (err) => {
        if (err)
        console.log(err)
        else {
        console.log("Your readme file has been successfully created!")
        };
    });
};
// Function call to initialize app
init();

