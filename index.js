const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const path = require("path");
// array of questions for user
const questions = [
  {
    type: "input",
    message: "Title of application?",
    name: "title",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please enter a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "Describe the application",
    name: "description",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please enter a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "How do you use the app?",
    name: "usage",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please enter a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "How do you install the app?",
    name: "installation",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please enter a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "How do you report any issues with the application?",
    name: "report",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please enter a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "How do you make contributions?",
    name: "contributions",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "please enter a value to continue";
      }
    },
  },
  {
      type: "list",
      message: "What license should this appplication have?",
      name: "license",
      choices: ["MIT", "APACHE"]  
  }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((userAnswers) => {
    const dataReadMe = generateMarkdown(userAnswers);
    console.log(userAnswers)
    const currentWorkingDirectory = process.cwd();
    const newFilePath = path.join(
      currentWorkingDirectory,
      "generatedReadMe.md"
    );
    writeToFile(newFilePath, dataReadMe);
  });
}

// function call to initialize program
init();
