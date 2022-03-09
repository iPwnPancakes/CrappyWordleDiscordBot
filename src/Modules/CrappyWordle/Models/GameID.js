const uuid = require('uuid');

class GameID {
    /**
     * @param {String} id
     */
    constructor(id = null) {
        this.id = id ?? uuid.v4();
    }

    /**
     * @returns {String}
     */
    getID() {
        return this.id;
    }
}

module.exports = { GameID };
