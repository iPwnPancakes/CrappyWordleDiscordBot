const { CrappyWordle } = require('../Models/CrappyWordle');
const { MessageBroker } = require('../../../Infrastructure/Services/MessageBroker');
const { NewGameCreated } = require('../Events/NewGameCreated');

class CrappyWordleEventController {
    /**
     * @param {MessageBroker} messageBroker
     */
    constructor(messageBroker) {
        this.messageBroker = messageBroker;

        this.handleIntentToCreateNewGame = this.handleIntentToCreateNewGame.bind(this);
    }

    handleIntentToCreateNewGame() {
        const game = new CrappyWordle();
        const event = new NewGameCreated(game);
        this.messageBroker.publish(event);
    }
}

module.exports = { CrappyWordleEventController };