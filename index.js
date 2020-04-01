#!/usr/bin/env node
const shelljs = require('shelljs');
const chalk = require('chalk');
const figlet = require('figlet');
const inquirer = require('inquirer');

const createFile = async (fileName, extension) => {
    const filePath = `${process.cwd()}/${fileName}.${extension}`;

    shelljs.touch(filePath);
    return filePath;
};

const askQuestions = () => {
    const questions = [
        {
            name: "FILE_NAME",
            type: "input",
            message: "Please type the name of the new file."
        },
        {
            name: "EXTENSION",
            type: "list",
            message: "Extension of your file?",
            choices: [".rb", ".js", ".ts", ".java", ".php"],
            filter: function (val) {
                return val.split('.')[1]
            }
        }
    ];
    return inquirer.prompt(questions)
};

const init = () => {
    console.log(
        chalk.green(
            figlet.textSync(
                'File creator', {
                    font: 'Bubble',
                    horizontalLayout: 'default',
                    verticalLayout: 'default'
                }
            )
        )
    )
};

const createdFile = (filePath) => {
    console.log(
        chalk.white.bgHex('#00ccff').bold(
            `Great! The file was successfully created in the path ${filePath}`
        )
    )
};

const execute = async () => {
    try {
        // To show the library information in the header, the title using figlet
        init();

        // Questions needed in order to create the file, these are name and extension
        const {FILE_NAME, EXTENSION} = await askQuestions();

        // Creating the file
        const filePath = await createFile(FILE_NAME, EXTENSION);

        console.log('answers', {FILE_NAME, EXTENSION}, 'file created on ', filePath);
        // Once file is created, we are going to show a message to the user
        createdFile(filePath);
    } catch (_e) {
        console.log(_e);
        console.log(
            chalk.red(
                'An error has occurred, the file could not be created!'
            ),
            chalk.red(
                _e.message
            ),
        )
    }
};

execute();
