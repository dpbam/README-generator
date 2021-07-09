// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require("./src/page-template.js");
const generateMarkdown = require("./utils/generate-site.js");


// TODO: Create an array of questions for user input
    questions = [
        {
            type: 'input',
            name: 'GitHub username',
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
        // {
        //     type: 'input',
        //     name: 'email',
        //     message: 'What is your email address?',
        //     validate: email => {
        //         if (email) {
        //             return true;
        //         } else {
        //             console.log("Try to write your email again.")
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'title',
        //     message: 'What is your project title?',
        //     validate: titleInput => {
        //         if (titleInput) {
        //             return true;
        //         } else {
        //             console.log("Hey, bonehead! Try again.")
        //             return false;
        //         }
        //     }
        // },
        // {
        //     type: 'input',
        //     name: 'description',
        //     message: 'Enter a description for your project',
        //     validate: projectDescription => {
        //         if (projectDescription) {
        //             return true;
        //         } else {
        //             console.log("Please, pretty please, enter a short description of your project or this README is going to be sparse. Gimme that sweet, sweet content.")
        //             return false;
        //         }
        //     }
        // },
        // // {
        // //     type: 'input',
        // //     name: 'tableOfContents',
        // //     message: 'If your README is very long, add a table of contents to make it easy for users to find what they need. (optional)',
        // //     validate: tableOfContents => {
        // //         if (tableOfContents) {
        // //             return true;
        // //         } else {
        // //             return false;
        // //         }
        // //     }
        // // },
        // {
        //     type: 'checkbox',
        //     name: 'languages',
        //     message: 'What did you build this project with? (Check all that apply)',
        //     choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']

        // }
    ]

    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved and the README was created!")
    });
    
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to the README.md generator 2000.\nPlease answer some questions to get started.")
    inquirer.prompt(questions)
    .then(questionValues => {
        var stringQuestionValues = JSON.stringify(questionValues);

    writeToFile('README.md', generateMarkdown(stringQuestionValues));
    })
};



// Function call to initialize app
init();

