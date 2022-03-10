const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const { DatabaseConnection } = require('./DatabaseConnection');

class DatabaseConnectionFactory {
    /**
     * @param {String} filename
     */
    constructor(filename) {
        this.filename = filename;
    }

    /**
     * @returns {Promise<DatabaseConnection>}
     */
    async createConnection() {
        const driver = await open({
            filename: this.filename,
            driver: sqlite3.Database
        });

        return new DatabaseConnection(driver);
    }
}

module.exports = { DatabaseConnectionFactory };
