const { Word } = require('./Word');

class Progress {
    /**
     * @param {Word} word
     * @param {Word} initialProgress
     */
    constructor(word, initialProgress = null) {
        this._word = word;

        if (initialProgress) {
            this._progress = initialProgress;
        } else {
            this._progress = new Word(word.toString().replace(/./g, '*'));
        }

    }

    getProgressAsWord() {
        return this._progress;
    }

    /**
     * Applies any matching characters to the progress
     *
     * @param {Word} guess
     */
    applyWord(guess) {
        const currentWord = this._word.toString();

        for (let i = 0; i < currentWord.length; i++) {
            if (this._matchesAt(guess, i) && !this.hasCharAtBeenGuessed(i)) {
                this._progress.setCharAt(guess.getCharAt(i), i);
            }
        }
    }

    hasCharAtBeenGuessed(i) {
        return this._progress.toString().charAt(i) !== '*';
    }

    _matchesAt(guess, i) {
        return guess.toString().charAt(i) === this._word.toString().charAt(i);
    }
}

module.exports = { Progress };
