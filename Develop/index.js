// TODO: Include packages needed for this application

const  inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project',

      },
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project',

      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please explain how to install your project',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please explain the use(s) of your project',

      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Please explain the contribution guidelines of your project',

      },
      {
        type: 'input',
        name: 'testing',
        message: 'Please explain the testing instructions of your project',

      },
      {
        type: 'list',
        name: 'license',
        message: 'What license do you use or plan to use?',
        choices: ['None', 'Apache License 2.0', 'GNU GPLv3','MIT License'],
        filter(val) {
        return val;
        },
      },
      {
        type: 'input',
        name: 'github',
        message: 'PLease enter your Github Username',

      },
      {
        type: 'input',
        name: 'email',
        message: 'PLease enter your email',

      }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
      if (error){
        console.log(error);
      } ;
    });
  };

// TODO: Create a function to initialize app
function init() {  
    inquirer.prompt(questions)
    .then(function(inputs) {
        writeToFile("FIRSTREADME.md",generateMarkdown(inputs));
    });
};

    
// Function call to initialize app
init();
