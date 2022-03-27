// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license==='Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if(license==='MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if(license==='Mozilla'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else{return`No License`}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {  
  if (license==='Apache'){
  return `(https://opensource.org/licenses/Apache-2.0)`
}
else if(license==='MIT'){
  return `(https://opensource.org/licenses/MIT)`
}
else if(license==='Mozilla'){
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
 [Questions](#questions)

## Description
${data.description}

## Instalation
${data.instalation} 

## Usage
${data.usage}

## License 
${data.license}
license wedsite:${renderLicenseLink(data.license)}

## Contribution
${data.contribution}

## Test
${data.test}

## Questions
Heres a [link](https://www.github.com/${data.github}) to my GitHub profile,
for additional question, email ${data.email} 

# Heres a working video of the application :p

https://github.com/alexwsalazar/easyreadmemaker/blob/main/video/first-practice.mp4

`;
}

module.exports = generateMarkdown;

