const { Provider } = require('./Provider');

class App {
    /**
     * @param {Provider[]} providers
     */
    constructor(providers = []) {
        this.providers = providers;
    }

    register() {
        this.providers.forEach(provider => provider.register());
    }

    boot() {
        this.providers.forEach(provider => provider.boot());
    }
}

module.exports = { App };
