// Used Inquirer from https://www.npmjs.com/package/inquirer
const inquirer = require('inquirer');
// Adapted license information collected and used by https://www.npmjs.com/package/github-licenses
const licenses = require('./utils/licenses.json');
// Importing Node file system library for writeFile function
const fs = require('fs');
// README.md template
const generateMarkdown = require('./utils/generateMarkdown.js');

// Question array to be used by inquirer
const questions = [
	{
		type: 'input',
		name: 'Title',
		message: "Enter the project's title: ",
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
		message: 'Enter a description of the project: ',
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
		message: 'Enter installation instructions: ',
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
		message: 'Enter usage information: ',
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
		message: 'Enter guidelines for contributing to the project: ',
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
		message: 'Enter instructions for testing. ',
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
		message: 'Choose a License: ',
		choices: Object.keys(licenses),
	},
	{
		type: 'input',
		name: 'Github',
		message: 'Contact info: Enter your github username: ',
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
		message: 'Contact info: Enter an email address: ',
		validate: input => {
			if (input) return true;
			else {
				console.log('This information is required.');
				return false;
			}
		},
	},
];

// Starting function to run program
const init = () => {
	// Prompt user for input
	return inquirer.prompt(questions);
};

// Node file system - write filled out template to file
const writeToFile = (filename, data) => {
	return new Promise((resolve, reject) => {
		fs.writeFile(filename, data, err => {
			if (err) {
				reject(err);
				return;
			}
			console.log('README created in /dist directory');
			resolve({
				ok: true,
				message: 'file created',
			});
		});
	});
};

// Collect user input
init()
	// Send collected data into markdown file template
	.then(data => {
		return generateMarkdown(data);
	})
	// Create file from filled in template
	.then(data => {
		writeToFile('./dist/README.md', data);
	})
	// Error handling
	.catch(err => {
		console.log(err);
	});
