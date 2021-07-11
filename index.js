// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// questions for user input
    questions = [
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: githubName => {
                if (githubName) {
                    return true;
                } else {
                    console.log("Try again.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("Try to write your email again.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project title?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Hey, bonehead! Try again.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project:',
            validate: projectDescription => {
                if (projectDescription) {
                    return true;
                } else {
                    console.log("Please, pretty please, enter a short description of your project or this README is going to be sparse. Gimme that sweet, sweet content.")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'List the steps needed to install your project.',
            validate: installation => {
                if (installation) {
                    return true;
                } else {
                    console.log("Please list the steps we need to take to successfully install your application.");
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use your project?',
            validate: yourUsage => {
                if (yourUsage) {
                    return true;
                } else {
                    console.log("Seriously, how do you use this thing?")
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']

        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license from the list that suits your project.',
            choices: ['Apache%202.0','ISC'],
            validate: userLicense => {
                if (userLicense) {
                    return true;  
                } else {
                    console.log("Select a license for the project.");
                    return false;
                }

            }        
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'How can other users contribute to this project?',
            validate: yourContribution => {
                if (yourContribution) {
                    return true;
                } else {
                    console.log("Provide some info on how to contribute to your project.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'How does the user test this app to make sure it is functioning properly?',
            validate: yourTests => {
                if (yourTests) {
                    return true;
                } else {
                    console.log("Please try again to explain how to test this app. Thanks.");
                    return false;
                }
            }
        },
    ]

    
// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved and the README was created!")
    });
    
}

// function to initialize app
function init() {
    console.log("Welcome to the README.md generator 2000.\nPlease answer some questions to get started.")
    inquirer.prompt(questions)
    .then(questionValues => {
        var stringQuestionValues = questionValues;

    writeToFile('README.md', generateMarkdown(stringQuestionValues));
    })
};

// function to generate markdown

function generateMarkdown(data) {
    return(
`# ${data.title}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Languages](#languages)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Description:
 ${data.description}
## Installation:
 ${data.installation}
## Usage:
 ${data.usage}
## Languages:
 ${data.languages}
## Contributing:
 ${data.contribution}
## Tests:
 ${data.tests}
## License:
[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
## Questions:
* GitHub: 
[${data.github}](https://github.com/${data.github})
* email: 
${data.email}
`)

}

// Function call to initialize app
init();


