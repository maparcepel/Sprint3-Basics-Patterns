const inquirer = require('inquirer');

const menu = async(topics) => {

    const question = [{
        type: 'list',
        name: 'option',
        message: 'Escoge un tópico para comentar',
        choices: [{
                value: 0,
                name: `1-${topics[0].name} - Suscriptores:${
                    topics[0].subscriptors.map(e=>' ' + e.name)
                }`
            },
            {
                value: 1,
                name: `2-${topics[1].name} - Suscriptores:${
                    topics[1].subscriptors.map(e=>' ' + e.name)
                }`
            },
            {
                value: 2,
                name: '3-Salir'
            }
        ]
    }];

    const { option } = await inquirer.prompt(question);

    return option;

}

const readComment = async() => {
    const question = [{
        type: 'input',
        name: 'comment',
        message: 'Escribe tu comentario',
        validate(value) {
            if (value.length === 0) {
                return 'Debes escribir algo'
            }
            return true;
        }
    }];

    const { comment } = await inquirer.prompt(question);
    return comment;
}



module.exports = {
    menu,
    readComment
}