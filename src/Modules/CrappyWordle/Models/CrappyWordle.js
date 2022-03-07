class CrappyWordle {
    constructor() {
        this._word = 'default';
        this._progress = '*******';
    }

    /**
     *
     * @returns {boolean}
     */
    start(word) {
        this._word = word;
        this._progress = word.slice().replace(/./g, '*');

        return true;
    }

    /**
     * @returns {string}
     */
    getWord() {
        return this._word;
    }

    getProgress() {
        return this._progress;
    }
}

module.exports = { CrappyWordle };
