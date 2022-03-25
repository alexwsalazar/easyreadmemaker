// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(){
inquirer.prompt([
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Give a description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Describe how to use this program',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'Give me instalation instructions',
        name: 'instalation',
      },
      {
          type:'list',
          message: 'what is your project license under?',
          name:'license',
          choices:['apache','MIT','mozilla','none']

      }
    ,
  ])
  .then((response) => {

    fs.writeFileSync('README2.md', generateMarkdown(response))
    
  })
}
// Function call to initialize app
init();
