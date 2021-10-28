// Use Inquirer from https://www.npmjs.com/package/inquirer
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const licenses = require('./utils/licenses.json');
const fs = require('fs');

const questions = [
	{
		type: 'input',
		name: 'Title',
		message: 'Enter the projects title.',
		validate: input => {
			if (input) return true;
			else {
				console.log('This information is required.');
				return false;
			}
		},
	},

	{
		type: 'input',
		name: 'Description',
		message: 'Enter a description of the project. ',
		validate: input => {
			if (input) return true;
			else {
				console.log('This information is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'Installation',
		message: 'Enter installation instructions. ',
		validate: input => {
			if (input) return true;
			else {
				console.log('This information is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'Usage',
		message: 'Enter usage information. ',
		validate: input => {
			if (input) return true;
			else {
				console.log('This information is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'Contributing',
		message: 'Enter contribution guidelines. ',
		validate: input => {
			if (input) return true;
			else {
				console.log('This information is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'Tests',
		message: 'Enter test instructions. ',
		validate: input => {
			if (input) return true;
			else {
				console.log('This information is required.');
				return false;
			}
		},
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
				console.log('This information is required.');
				return false;
			}
		},
	},
	{
		type: 'input',
		name: 'Email',
		message: 'Contact info: Enter an email address.',
		validate: input => {
			if (input) return true;
			else {
				console.log('This information is required.');
				return false;
			}
		},
	},
];

// Get user input
const init = () => {
	return inquirer.prompt(questions);
};

const writeToFile = (filename, data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(filename, data, err => {
			if (err) {
				reject(err);
				return;
			}
			resolve({
				ok: true,
				message: 'file created',
			});
		});
	});
};

init()
	.then(data => {
		// console.log(data);
		return generateMarkdown(data);
	})
	.then(data => {
		// console.log(data);
		writeToFile('./dist/README.md', data);
	})
	.catch(err => {
		console.log(err);
	});
