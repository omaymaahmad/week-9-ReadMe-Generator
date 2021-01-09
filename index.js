const inquirer = require('inquirer');
const fs = require('fs');
// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Title of application?',
        name: 'title',
        validate: (value)=> { if(value){return true} else {return "please enter a value to continue"}},
    },
    {
        type:'input',
        message:'How do you use the app?',
        name: 'usage',
        validate: (value)=> { if(value){return true} else {return "please enter a value to continue"}},
    },
    {
        type:'input',
        message:'How do you install the app?',
        name: 'installation',
        validate: (value)=> { if(value){return true} else {return "please enter a value to continue"}},
    },
    {
        type:'input',
        message:'How do you report any issues with the application?',
        name: 'report',
        validate: (value)=> { if(value){return true} else {return "please enter a value to continue"}},
    },
    {
        type:'input',
        message:'How do you make contributions?',
        name: 'contributions',
        validate: (value)=> { if(value){return true} else {return "please enter a value to continue"}},
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
