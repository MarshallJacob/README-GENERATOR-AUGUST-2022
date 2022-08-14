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
function generateMarkdown(data) {
  return `
# ${data.projectName}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#tests)
- [License](#license)
- [Questions](#userName)

## Description:
${data.description}

## Installation:
${data.installation}

## Usage:
${data.usage}

## Contributing:
${data.contributing}

## Testing:
${data.tests}

## License:
${data.license}

## Questions:

### If you have any questions you can find me through

Github: [${data.userName}](https://github.com/${data.userName})
or
Email: ${data.email}
`;
}

module.exports = generateMarkdown;
