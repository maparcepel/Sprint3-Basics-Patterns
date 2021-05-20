const { menu } = require('./menu');
const Score = require('./score');

const main = async() => {

    do {

        [option, players] = await menu();

        if (players[option] !== undefined) {

            players[option].addPoint();

            var score = new Score(players);
            score.showScore();
        }

    } while (players[option] !== undefined);

}

main();