const { CrappyWordle } = require('../Models/CrappyWordle');
const { MessageBroker } = require('../../../Infrastructure/Services/MessageBroker');
const { NewGameCreated } = require('../Events/NewGameCreated');
const { CrappyWordleService } = require('../Services/CrappyWordleService');

class CrappyWordleEventController {
    /**
     * @param {MessageBroker} messageBroker
     * @param {CrappyWordleService} gameService
     */
    constructor(messageBroker, gameService) {
        this.messageBroker = messageBroker;
        this.gameService = gameService;

        this.handleIntentToCreateNewGame = this.handleIntentToCreateNewGame.bind(this);
    }

    handleIntentToCreateNewGame() {
        const game = new CrappyWordle();
        this.gameService.save(game);
        const event = new NewGameCreated(game);
        this.messageBroker.publish(event);
    }
}

module.exports = { CrappyWordleEventController };
