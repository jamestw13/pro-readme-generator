module.exports = userInput => {
	if (!userInput) {
		return '';
	}

	const {
		title,
		description,
		installInstructions,
		usageInfo,
		constributionGuidelines,
		testInstructions,
		license,
		github,
		email,
	} = userInput;

	return `
  # ${title}

  ## Description 
  
  ${description}
  
  ## Table of Contents
    
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  
  ## Installation
  
${installInstructions}
    
  ## Usage 
  
  ${usageInfo}
  
  ## License
  
  The last section of a good README is a license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, use [https://choosealicense.com/](https://choosealicense.com/)
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
    
  ## Contributing
  
  ${constributionGuidelines}
  
  ## Tests
  
  ${testInstructions}
  
  `;
};
