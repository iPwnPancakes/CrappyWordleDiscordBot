const { DriverAdapter } = require('./DriverAdapter');
const { Database } = require('sqlite');

class SqliteDriverAdapter extends DriverAdapter {
    /**
     * @param {Database} sqliteDriver
     */
    constructor(sqliteDriver) {
        super();
        this.driver = sqliteDriver;
    }

    /**
     * @inheritDoc
     */
    async get(query, data = null) {
        return await this.driver.get(query, data);
    }

    /**
     * @inheritDoc
     */
    async all(query, data = null) {
        return await this.driver.all(query, data);
    }

    /**
     * @inheritDoc
     */
    async run(query, data = null) {
        return await this.driver.run(query, data).then(() => {
        });
    }
}

module.exports = { SqliteDriverAdapter };
