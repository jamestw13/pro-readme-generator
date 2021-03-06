// const generateMarkdown = require('./generateMarkdown');
const licenses = require('./licenses.json');

// A function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = license => {
	if (!licenses[license]) {
		return 'No license chosen';
	}

	return `[Information about your license may be found here](https://opensource.org/licenses)`;
};

// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
	if (!license) {
		return 'No license chosen';
	}
	const urlLicense = license.replace(/ /g, '_').replace(/-/g, '--');
	return `![Badge](https://img.shields.io/badge/license-${urlLicense}-blue)`;
};

// A function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = license => {
	if (!license) {
		return '';
	}
	return `${licenses[license]}`;
};

// Main function for running the template
const generateMarkdown = data => {
	// Validate user input
	if (!data) {
		return '';
	}

	const {Title, Description, Installation, Usage, Contributing, Tests, License, Github, Email} = data;

	return `
# ${Title}

${renderLicenseBadge(License)}
## Description 
${Description}
  
## Table of Contents	
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${Installation}

## Usage 
${Usage}

## License
${renderLicenseLink(License)}
${renderLicenseSection(License)}

## Contributing
${Contributing}

## Tests
${Tests}
  
## Questions
[Contact ${Github} with questions](https://www.github.com/${Github})
OR
[Send and email](mailto:${Email})
`;
};

module.exports = generateMarkdown;
