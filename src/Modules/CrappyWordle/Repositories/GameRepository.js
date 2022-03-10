const { CrappyWordle } = require('../Models/CrappyWordle');

class GameRepository {
    /**
     * @param {CrappyWordle} game
     *
     * @return Promise<void>
     */
    async save(game) {
        throw new Error('Calling base GameRepository method. Should be calling a child class instead.');
    }
}

module.exports = { GameRepository };
