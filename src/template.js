const generateTOC = userInput => {
	let toc = '';
	for (let key in userInput) {
		if (key != 'Title' && key !== 'Description' && key !== 'Github' && key !== 'Email' && data[key]) {
			toc += `
      * [${key}](#${key})`;
		}
	}
};

module.exports = userInput => {
	// Validate user input
	if (!userInput) {
		return '';
	}

	const {title, description, install, usage, contributing, test, license, github, email} = userInput;

	return `
  # ${title}

  ## Description 

  ![Badge](https://img.shields.io/badge/license-${license}-blue)
  ${description}
  
  ## Table of Contents
    
  ${generateTOC(userInput)}
  * [Questions](#Questions)

  ## Installation
  
${install}
    
  ## Usage 
  
  ${usage}
  
  ## License
  
  Implement license system
    
  ## Contributing
  
  ${contributing}
  
  ## Tests
  
  ${test}
  
## Questions

[Contact ${github} with questions](https://www.github.com/${github})
OR
[Send and email](mailto:${email})

  `;
};
