class Player {

    constructor(name) {
        this.name = name;
        this.points = 0;
    }

    addPoint() {
        this.points++;
    }

    getPoints() {
        return this.points;
    }

}

module.exports = Player;