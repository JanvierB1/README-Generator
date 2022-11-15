const inquirer = require('inquirer');
const displayMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const licenseChoices = ['MIT', 'Apache 2.0', 'GPLv3', 'ISC', 'none']

const writeToFile = (data) => 
displayMarkdown.generateMarkdown(data);

// INIT FUNCTION
function init() {
inquirer
  .prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license are you using for your project?',
      choices: licenseChoices,
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a short description of the project: ',
    },
    {
      type: 'input',
      name: 'install',
      message: 'What commands should be run to install the dependencies for this project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Write a description of how your project can be used: ',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'How can people contribute to the project: ',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'What commands should be use to run tests on the project?',
    },
  ])
  .then((data) => {
    const readmeContent = writeToFile(data);
    fs.writeFile('./generatedReadMe/README.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created the README.md')
    );

  });
}

// RUNS PROGRAM
init();