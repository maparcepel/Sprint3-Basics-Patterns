var Score = (function() {
    var singleInstance;
    return function(players) {
        if (singleInstance) return singleInstance;

        singleInstance = this;

        this.player1 = players[0];
        this.player2 = players[1];
        this.player3 = players[2];

        this.showScore = function() {

            points = [players[0].getPoints(), players[1].getPoints(), players[2].getPoints()];
            points.sort();

            console.clear();

            console.log('********* MARCADOR *********');

            console.log(`${this.player1.name} -> ${this.player1.getPoints()} puntos ${this.player1.getPoints() == points[2] ? '   G A N A D O R' : ''}`);
            console.log(`${this.player2.name} -> ${this.player2.getPoints()} puntos ${this.player2.getPoints() == points[2] ? '   G A N A D O R' : ''}`);
            console.log(`${this.player3.name} -> ${this.player3.getPoints()} puntos ${this.player3.getPoints() == points[2] ? '   G A N A D O R' : ''}`);
            console.log('****************************\n');

        };
    }


})();

module.exports = Score;