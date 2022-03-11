const { CrappyWordle } = require('../Models/CrappyWordle');
const { MessageBroker } = require('../../../Infrastructure/Services/MessageBroker');
const { NewGameCreated } = require('../Events/NewGameCreated');
const { CrappyWordleService } = require('../Services/CrappyWordleService');
const { RandomWordService } = require('../Services/RandomWordService');
const { Word } = require('../Models/Word');

class CrappyWordleEventController {
    /**
     * @param {MessageBroker} messageBroker
     * @param {CrappyWordleService} gameService
     * @param {RandomWordService} randomWordService
     */
    constructor(messageBroker, gameService, randomWordService) {
        this.messageBroker = messageBroker;
        this.gameService = gameService;
        this.randomWordService = randomWordService;

        this.handleIntentToCreateNewGame = this.handleIntentToCreateNewGame.bind(this);
    }

    handleIntentToCreateNewGame() {
        const randomWord = new Word(this.randomWordService.getRandomWord());
        const game = new CrappyWordle(null, randomWord);
        this.gameService.save(game);
        const event = new NewGameCreated(game);
        this.messageBroker.publish(event);
    }
}

module.exports = { CrappyWordleEventController };
