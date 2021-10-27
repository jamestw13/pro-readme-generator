const generateTOC = userInput => {
	console.log('in generateTOC', userInput);
	let toc = '';
	for (let key in userInput) {
		if (key != 'Title' && key !== 'Description' && key !== 'Github' && key !== 'Email' && userInput[key]) {
			toc += `
      * [${key}](#${key})`;
		}
	}
	return toc;
};

module.exports = userInput => {
	// Validate user input
	if (!userInput) {
		return '';
	}

	const {Title, Description, Install, Usage, Contributing, Tests, License, Github, Email} = userInput;

	return `
  # ${Title}

  ## Description 

  ![Badge](https://img.shields.io/badge/license-${License}-blue)
  ${Description}
  
  ## Table of Contents
    
  ${generateTOC(userInput)}
  * [Questions](#Questions)

  ## Installation
  
${Install}
    
  ## Usage 
  
  ${Usage}
  
  ## License
  
  Implement license system
    
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
