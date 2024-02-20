// function to generate markdown for README
function generateMarkdown(data) {

  var badge = "";
  if (data.license == 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
    badge_description='https://opensource.org/licenses/MIT'
  } else if (data.license == 'GPLv3') {
    badge = '![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)'
    badge_description='https://www.gnu.org/licenses/gpl-3.0'
  } else if (data.license == 'Apache') {
    badge = '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
    badge_description='https://opensource.org/licenses/Apache-2.0'
  }
  
  return `# ${data.title} ${badge}

## Description
  ${data.description}
   
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## License
  ${badge_description}

## How to Contribute
  ${data.contribution}

## Tests
  ${data.tests}

## Questions

- Link to the GitHub profile: ${data.github}

- Please reach to this email address with additional questions:  ${data.email}



  `;
}

module.exports = generateMarkdown;
