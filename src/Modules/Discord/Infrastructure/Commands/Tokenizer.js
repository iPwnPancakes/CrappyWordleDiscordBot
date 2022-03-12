const { TokenList } = require('./TokenList');
const { Token } = require('./Token');

class Tokenizer {
    /**
     * Creates a list of Tokens from a string
     *
     * @param {String} str
     *
     * @return {TokenList}
     */
    makeListFromString(str) {
        const trimmed = str.trim().toLowerCase();
        const list = new TokenList();

        trimmed.split(' ').forEach(raw => {
            if (!raw.match(/<@!.+>/)) {
                list.add(new Token(raw));
            }
        });

        return list;
    }
}

module.exports = { Tokenizer };
