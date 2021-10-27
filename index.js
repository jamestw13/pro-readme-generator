// Use Inquirer from https://www.npmjs.com/package/inquirer
const inquirer = require('inquirer');

// Get user input
let promptUser = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'Title',
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
			name: 'Description',
			message: 'Enter a description of the project. ',
		},
		{
			type: 'input',
			name: 'Installation',
			message: 'Enter installation instructions. ',
		},
		{
			type: 'input',
			name: 'Usage',
			message: 'Enter usage information. ',
		},
		{
			type: 'input',
			name: 'Contributing',
			message: 'Enter contribution guidelines. ',
		},
		{
			type: 'input',
			name: 'Tests',
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
				'GNU Lesser General Public License v3.0',
				'Mozilla Public License 2.0',
				'The Unlicense',
			],
		},
		{
			type: 'input',
			name: 'Github',
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
			name: 'Email',
			message: 'Contact info: Enter an email address.',
		},
	]);
};

promptUser().then(data => {
	console.log(data);
});
