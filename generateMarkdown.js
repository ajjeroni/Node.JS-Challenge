// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
 
  return `
# ${answers.Title}

## Description
${answers.Description}

## Table of Contents
${answers['Table of Contents']}

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
   
GitHub: ${answers.Github}
  
Email: ${answers.Email}
  
`};



module.exports = generateMarkdown;
