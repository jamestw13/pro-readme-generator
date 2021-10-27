// Use Inquirer from https://www.npmjs.com/package/inquirer
const inquirer = require('inquirer');
const generateReadme = require('./src/template.js');

const licenses = require('./src/licenses.json');

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
			choices: Object.keys(licenses),
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

promptUser()
	.then(data => {
		// console.log(data);
		return generateReadme(data);
	})
	.then(markdown => {
		console.log(markdown);
	})
	.catch(err => {
		console.log(err);
	});
