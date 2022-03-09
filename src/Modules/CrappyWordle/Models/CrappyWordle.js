const { Word } = require('./Word');
const { Progress } = require('./Progress');
const { GameID } = require('./GameID');

class CrappyWordle {
    /**
     *
     * @param {GameID} id
     * @param {Word} word
     * @param {Progress} progress
     */
    constructor(id = null, word = null, progress = null) {
        this.id = id ?? new GameID();
        this._word = word ?? new Word('default');
        this._progress = word && progress ? progress : new Progress(this._word);
    }

    getID() {
        return this.id.getID();
    }

    /**
     * @param {Word} word
     *
     * @returns {boolean}
     */
    start(word) {
        this._word = word;
        this._progress = new Progress(word);

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
        return this._progress.getProgressAsWord();
    }

    /**
     *
     * @param {Word} guess
     */
    guessWord(guess) {
        this._progress.applyWord(guess);
    }
}

module.exports = { CrappyWordle };
