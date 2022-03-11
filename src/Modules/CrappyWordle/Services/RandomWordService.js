class RandomWordService {
    /**
     * @return {String}
     */
    getRandomWord() {
        const words = ['Elden', 'Ring', 'Daniel', 'Backpack', 'Common', 'Suffer', 'Undead', 'Reborn', 'Wordle'];

        return this._getRandomElement(words);
    }

    /**
     *
     * @param {Array} arr
     * @private
     */
    _getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
}

module.exports = { RandomWordService };
