const badges = {
  apache:`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,  
  bsd:`[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
  eclipse: `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
  gnugplv3: `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
  mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
}

const link= {
  apache:`[Apache](https://choosealicense.com/licenses/apache-2.0/)`,  
  bsd:`[BSD-clause 3](https://choosealicense.com/licenses/bsd-3-clause/)`,
  eclipse: `[Eclipse public 2.0](https://choosealicense.com/licenses/epl-2.0/)`,
  gnugplv3: `[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)`,
  mit: `[MIT](https://choosealicense.com/licenses/mit/)`,
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license){
  if (license){  
    return badges[license];
  }
  else{
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return link[license];
  }
  else {
    return '';
  }  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `License under the ${renderLicenseLink(license)} license`;
  }else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  console.log(answers);
  const markDown = 
  `# ${answers.title}
  ${renderLicenseBadge(answers.license)}
  ## Table of Contents:
  - [Project Description](#Description)
  - [Usage](#Usage)
  - [Contributions](#Contributions)
  - [Installations](#Installations)
  - [Tests](#Tests)
  - [License](#License)
  - [Questions](#Questions)

  ## Description
  ${answers.description}

  ## Usage
  ${answers.usage}

  ## Contributions
  ${answers.contributions}
  
  ## Installations
  ${answers.installation}

  ## Tests
  ${answers.tests}

  ## License
  ${renderLicenseSection(answers.license)}
 
  ## Questions
  - Email: [${answers.email}](#${answers.email})
  - GitHub URL: [${answers.github}](#${answers.github})
  `;
  return markDown;
}

module.exports = generateMarkdown;
