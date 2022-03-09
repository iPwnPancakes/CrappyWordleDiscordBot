const { CrappyWordle } = require('../Models/CrappyWordle');
const { Event } = require('../../../Infrastructure/Event');

class NewGameCreated extends Event {
    static getName() {
        return 'NewGameCreated';
    }

    /**
     * @param {CrappyWordle} game
     */
    constructor(game) {
        super();
        this._game = game;
    }

    getGame() {
        return this._game;
    }
}

module.exports = { NewGameCreated };
