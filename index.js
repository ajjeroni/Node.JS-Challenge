const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./generateMarkdown.js');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter Project Title:',
            name: 'Title',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid Project Title is required.");
                }
                return true;
            }            
        },
        {
            type: 'input',
            message: 'Enter Description:',
            name: 'Description',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid Description is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Enter Installation Instructions:',
            name: 'Installation',
        },
        {
            type: 'input',
            message: 'Enter Usage Information:',
            name: 'Usage',
        },
        {
            type: 'input',
            message: 'Enter Contribution Guidelines:',
            name: 'Contributing',
        },
        {
            type: 'input',
            message: 'Enter Test Instructions:',
            name: 'Tests',
        },
        {
            type: 'list',
            message: 'Choose a License:',
            name: 'License',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        },
        {
            type: 'input',
            message: 'Enter GitHub Username',
            name: 'GitHub',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid Description is required.");
                }
                return true;
            }
        },
        {
            type: 'input',
            message: 'Enter Email',
            name: 'Email',
            validate: (answer) => {
                if (answer.length < 1) {
                    return console.log("A valid Description is required.");
                }
                return true;
            }
        }

    ])
    
.then((answers) => {
    writeReadMeFile(answers);
});

if (answers.Installation !== '') {
    var tocI = `[Installation](#installation)`;
    } else {
    var tocI = '';
    };
if (answers.Usage !== '') {
    var tocU = `[Usage](#usage)`;
    } else {
    var tocU = '';
    };
if (answers.Contributing !== '') {
    var tocC = `[Contributing](#contributing)`;
    } else {
    var tocC = '';
    };
if (answers.Tests !== '') {
        var tocT = `[Tests](#tests)`;
    } else {
        var tocT = '';
    };
module.exports = 

function writeReadMeFile(answers) {
    // Convert the answers object to a string
    const readmeContent = generateMarkdown(answers);
    
    // Write the content to a README.md file
    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
        console.error(err);
        return;
        }
        console.log('README.md generated successfully!');
    });
    }

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init(); 
