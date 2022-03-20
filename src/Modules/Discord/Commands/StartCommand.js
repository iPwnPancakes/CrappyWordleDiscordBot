const { Command } = require('../Infrastructure/Commands/Command');
const { Word } = require('../../CrappyWordle/Models/Word');
const { CrappyWordle } = require('../../CrappyWordle/Models/CrappyWordle');
const { RandomWordService } = require('../../CrappyWordle/Services/RandomWordService');
const { GameRepository } = require('../../CrappyWordle/Repositories/GameRepository');

class StartCommand extends Command {
    /**
     * @param {RandomWordService} randomWordService
     * @param {GameRepository} gameRepository
     */
    constructor(randomWordService, gameRepository) {
        super();
        this.randomWordService = randomWordService;
        this.gameRepository = gameRepository;
    }

    async handle(message) {
        const randomWord = new Word(this.randomWordService.getRandomWord());
        const thread = await message.channel.threads.create({
            name: `Guess the ${ randomWord.toString().length } letter word!`,
            autoArchiveDuration: 60
        });

        // const game = new CrappyWordle(thread.id, randomWord);
        // await this.gameRepository.save(game);
    }
}

module.exports = { StartCommand };
