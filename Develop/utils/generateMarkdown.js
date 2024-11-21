// Function to return a license badge based on the license selected
function renderLicenseBadge(license) {
  if (!license) return "";
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// Function to return the license link
function renderLicenseLink(license) {
  if (!license) return "";
  return `[Learn more about ${license} license](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;
}

// Function to return the license section
function renderLicenseSection(license) {
  if (!license) return "";
  return `## License

This project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, feel free to reach out:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;