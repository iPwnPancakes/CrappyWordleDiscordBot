const { Word } = require('./Word');
const { Progress } = require('./Progress');

class CrappyWordle {
    /**
     *
     * @param {Word} word
     * @param {Progress} progress
     */
    constructor(word = null, progress = null) {
        if (word && progress) {
            this._word = word;
            this._progress = progress;
        } else {
            this._word = new Word('default');
            this._progress = new Progress(this._word);
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
     * @returns {Progress}
     */
    getProgress() {
        return this._progress;
    }
}

module.exports = { CrappyWordle };
