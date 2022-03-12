const { Command } = require('./Command');
const { Tokenizer } = require('./Tokenizer');

class CommandRouter {
    /**
     * Routes a particular string to command
     *
     * @param {Tokenizer} tokenizer
     * @param {Map<String, Command>} commandMap
     * @param {DisplayInvalidCommand} invalidCommand
     */
    constructor(tokenizer, commandMap, invalidCommand) {
        this.tokenizer = tokenizer;
        this.commandMap = commandMap;
        this.invalidCommand = invalidCommand;
    }

    /**
     *
     *
     * @param {String} str
     *
     * @return {Command}
     */
    route(str) {
        const tokenList = this.tokenizer.makeListFromString(str);
        if (!tokenList.has(0)) {
            return this.invalidCommand;
        }

        const firstToken = tokenList.get(0).getToken();
        if (!this.commandMap.has(firstToken)) {
            return this.invalidCommand;
        }

        return this.commandMap.get(tokenList.get(0).getToken());
    }
}

module.exports = { CommandRouter };
