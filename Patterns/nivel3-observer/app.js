const { menu, readComment } = require('./menu');
const eventEmitter = require('events').EventEmitter;
const util = require('util');

const Topic = require('./topic');
const User = require('./user');

util.inherits(Topic, eventEmitter);

const main = async() => {

    console.clear();

    const peliculas = new Topic('Películas');
    const musica = new Topic('Música');
    peliculas.on('comment', (comment) => {
        peliculas.addComment(comment);
    });
    musica.on('comment', (comment) => {
        musica.addComment(comment);
    });

    const topics = [peliculas, musica];

    const marcel = new User('Marcel');
    const maria = new User('María');
    const albert = new User('Albert');
    const users = [marcel, maria, albert];

    peliculas.addSubscriptor(marcel);
    peliculas.addSubscriptor(maria);
    musica.addSubscriptor(albert);

    do {

        users.forEach(user => {
            console.log(`Usuario: ${user.name}
Bandeja de entrada: ${user.inbox.map(e => '\n- ' + e)}
            `);
            console.log('--------------------\n')
        });

        option = await menu(topics);

        if (option == 2) {
            break;
        }

        comment = await readComment();

        console.clear();
        console.log(`Nuevo comentario: ${comment}`);
        console.log('--------------------\n');

        topics[option].emit('comment', comment);

    } while (option !== 2);

}

main();