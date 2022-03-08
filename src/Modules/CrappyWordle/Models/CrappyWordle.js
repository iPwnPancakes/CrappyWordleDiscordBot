const { Word } = require('./Word');

class CrappyWordle {
    /**
     *
     * @param {Word} word
     * @param {Word} progress
     */
    constructor(word, progress) {
        if (word && progress) {
            this._word = word;
            this._progress = progress;
        } else {
            this._word = new Word('default');
            this._progress = new Word('*******');
        }

    }

    /**
     * @param {Word} word
     *
     * @returns {boolean}
     */
    start(word) {
        this._word = word;
        this._progress = new Word(word.toString().slice().replace(/./g, '*'));

        return true;
    }

    /**
     * @returns {Word}
     */
    getWord() {
        return this._word;
    }

    /**
     * @returns {Word}
     */
    getProgress() {
        return this._progress;
    }
}

module.exports = { CrappyWordle };
