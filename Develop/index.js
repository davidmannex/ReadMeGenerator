// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project',
        validate(val){
            return val;
        }
      },
    {
        type: 'list',
        name: 'license',
        message: 'What license do you use or plan to use?',
        choices: ['None', 'Apache License 2.0', ' GNU GPLv3','MIT License'],
        filter(val) {
        return val;
        },
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
