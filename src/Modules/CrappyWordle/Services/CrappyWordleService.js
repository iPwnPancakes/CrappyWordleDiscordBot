const { GameRepository } = require('../Repositories/GameRepository');

class CrappyWordleService {
    /**
     *
     * @param {GameRepository} gameRepository
     */
    constructor(gameRepository) {
        this.gameRepository = gameRepository;
    }

    /**
     * Persists the game
     *
     * @param {CrappyWordle} game
     *
     * @return Promise<void>
     */
    async save(game) {
        await this.gameRepository.save(game);
    }
}

module.exports = { CrappyWordleService };
