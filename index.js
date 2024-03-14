const fs = require('fs');
const inquirer = require('inquirer');
const createSVG = require('./lib/shapes');


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter 3 or less characters',
        validate: (value) => {
            if (value.length < 4) {
                return true;
            } else {
                return 'Enter 3 or less characters';
            }
        },
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color or hexadecimal value for the color of the text',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'choose shape',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color or hexadecimal value for the color of the shape',
    },

];
(async () => {
    const answers = await inquirer.prompt(questions);
    const svg = createSVG(answers.text, answers.textColor, answers.shape, answers.shapeColor);
    fs.writeFileSync('logo.svg', svg);
    console.log('Logo has been generated successfully!');
})();
