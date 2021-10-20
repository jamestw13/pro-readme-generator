const inquirer = require('inquirer');

let promptUser = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'Enter the projects title. (required) ',
			validate: input => {
				if (input) return true;
				else {
					console.log('Project title is required. ');
					return false;
				}
			},
		},

		{
			type: 'input',
			name: 'description',
			message: 'Enter a description of the project. ',
		},
		{
			type: 'input',
			name: 'installInstructions',
			message: 'Enter installation instructions. ',
		},
		{
			type: 'input',
			name: 'usageInfo',
			message: 'Enter usage information. ',
		},
		{
			type: 'input',
			name: 'contributionGuidelines',
			message: 'Enter contribution guidelines. ',
		},
		{
			type: 'input',
			name: 'testInstructions',
			message: 'Enter test instructions. ',
		},
		{
			type: 'list',
			name: 'License',
			message: 'Choose a License (required). ',
			choices: [
				'None',
				'Apache License 2.0',
				'GNU General Public License v3.0',
				'MIT License',
				'BSD 2-Clause "Simplified" License',
				'BSD 3-Clause "New" or "Revised" License',
				'Boost Software License 1.0',
				'Creative Commons Zero v1.0 Universal',
				'Eclipse Public License 2.0',
				'GNU Affero General Public License v3.0',
				'GNU General Public License v2.0',
				'GNU Lesser General Public License v2.1',
				'Mozilla Public License 2.0',
				'The Unlicense',
			],
		},
		{
			type: 'input',
			name: 'github',
			message: 'Contact info: Enter a github username. (required) ',
			validate: input => {
				if (input) return true;
				else {
					console.log('');
					return false;
				}
			},
		},
		{
			type: 'input',
			name: 'email',
			message: 'Contact info: Enter an email address.',
		},
	]);
};

promptUser().then(data => console.log(data));
