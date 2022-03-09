class CrappyWordleService {
    constructor(gameRepository) {
        this.gameRepository = gameRepository;
    }

    /**
     * Persists the game
     *
     * @param {CrappyWordle} game
     */
    save(game) {
        this.gameRepository.save(game);
    }
}

module.exports = { CrappyWordleService };
