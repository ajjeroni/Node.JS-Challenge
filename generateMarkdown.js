// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(License) {
   if(answers.License === 'Mozilla Public License 2.0') {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`; 
   } else if(answers.License === 'Apache License 2.0') {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
   } else if(answers.License === 'MIT License') {
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
   } else {
      return '';
   }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(License) {
   if(answers.License === 'Mozilla Public License 2.0') {
      return `(https://opensource.org/licenses/MPL-2.0)`; 
   } else if(answers.License === 'Apache License 2.0') {
      return `(https://opensource.org/licenses/Apache-2.0)`;
   } else if(answers.License === 'MIT License') {
      return `(https://opensource.org/licenses/MIT)`;
   } else {
      return '';
   }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(answers) {
   return `
## Table of Contents
[${answers.Installation}](#installation)

[${answers.Usage}](#usage)

[${answers.Contributing}](#contributing)

[${answers.Tests}](#tests)

# ${answers.Title}

## Description
${answers.Description}

## Installation Instructions
${answers.Installation}

## Usage Information
${answers.Usage}

## Contribution Guidelines
${answers.Contributing}

## Test Instructions
${answers.Tests}

## License
This project is licensed under the ${answers.License} license.

## Questions?
    
For any questions, please contact me with the information below:
   
GitHub Link: https://github.com/${answers.GitHub} 
  
Email: ${answers.Email}
  
`};



module.exports = generateMarkdown;
