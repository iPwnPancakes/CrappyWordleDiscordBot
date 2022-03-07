class CrappyWordle {
    constructor() {
        this._word = 'default';
    }

    /**
     *
     * @returns {boolean}
     */
    start(word) {
        this._word = word;

        return true;
    }

    /**
     * @returns {string}
     */
    getWord() {
        return this._word;
    }
}

module.exports = { CrappyWordle };
