const inquirer = require('inquirer');
const Player = require('./player');

const player1 = new Player('Marcel');
const player2 = new Player('María');
const player3 = new Player('Albert');

const players = [player1, player2, player3];

const question = [{
    type: 'list',
    name: 'option',
    message: 'Escoge uno de los jugadores para sumarle 1 punto',
    choices: [{
            value: 0,
            name: `1-${player1.name}`
        },
        {
            value: 1,
            name: `2-${player2.name}`
        },
        {
            value: 2,
            name: `3-${player3.name}`
        },
        {
            value: 3,
            name: '4-Salir'
        }
    ]
}];

const menu = async() => {
    const { option } = await inquirer.prompt(question);

    return [option, players];


}

module.exports = {
    menu
}