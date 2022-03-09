const { BotMentioned } = require('../Modules/Discord/Events/BotMentioned');
const { CrappyWordleEventController } = require('../Modules/CrappyWordle/Controllers/CrappyWordleEventController');
const { Provider } = require('./Provider');

class EventProvider extends Provider {
    /**
     *
     * @param {CrappyWordleEventController} gameEventController
     */
    constructor(gameEventController) {
        super();
        this.gameEventcontroller = gameEventController;
        this._eventMap = new Map();
    }

    register() {
        this._eventMap.set(BotMentioned.getName(), [this.gameEventcontroller.handleIntentToCreateNewGame]);
    }

    /**
     * @returns {Map<String, Function[]>}
     */
    getEventMap() {
        return this._eventMap;
    }
}

module.exports = { EventProvider };
