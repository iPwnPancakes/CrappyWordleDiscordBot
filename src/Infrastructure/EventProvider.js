const { BotMentioned } = require('../Modules/Discord/Events/BotMentioned');
const { CrappyWordleEventController } = require('../Modules/CrappyWordle/Controllers/CrappyWordleEventController');
const { Event } = require('../Infrastructure/Event');

class EventProvider {
    /**
     *
     * @param {CrappyWordleEventController} gameEventController
     */
    constructor(gameEventController) {
        this.gameEventcontroller = gameEventController;
        this._eventMap = new Map();
    }

    boot() {
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
