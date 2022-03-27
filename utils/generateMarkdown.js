// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==='apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license==='MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license==='mozilla'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else{return`no license`}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  if (license==='apache'){
  return `(https://opensource.org/licenses/Apache-2.0)`
}
else if(license==='MIT'){
  return `(https://opensource.org/licenses/MIT)`
}
else if(license==='mozilla'){
  return `(https://opensource.org/licenses/MPL-2.0)`
}
else{return`no license`}}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Table of Contents
 [Description](#description)
 [Instalation](#instalation)
 [Usage](#usage)
 [Contribution](#contribution)
 [license ](#license)
 [Test](#test)
## Description
${data.description}

## Instalation
${data.instalation} 

## Usage
${data.usage}

## license 
${data.license}
license wedsite: ${renderLicenseLink(data.license)}

##Contribution
${data.contribution}

##Test
${data.test}


`;
}

module.exports = generateMarkdown;
