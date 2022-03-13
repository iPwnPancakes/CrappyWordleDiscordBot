const { open } = require('sqlite');
const sqlite3 = require('sqlite3');
const { Client } = require('pg');
const { DatabaseConnection } = require('./DatabaseConnection');
const { DatabaseInformation } = require('./DatabaseInformation');
const { DriverAdapter } = require('./DriverAdapters/DriverAdapter');
const { SqliteDriverAdapter } = require('./DriverAdapters/SqliteDriverAdapter');
const path = require('path');
const { PostgresDriverAdapter } = require('./DriverAdapters/PostgresDriverAdapter');

class DatabaseConnectionFactory {
    /**
     * @param {DatabaseInformation} databaseInformation
     *
     * @returns {Promise<DatabaseConnection>}
     */
    async createConnection(databaseInformation) {
        const driver = await this.getDriverByType(databaseInformation);
        return new DatabaseConnection(driver);
    }

    /**
     * Creates Driver from DatabaseInformation
     *
     * @param databaseInformation
     * @return {Promise<DriverAdapter>}
     */
    async getDriverByType(databaseInformation) {
        switch (databaseInformation.getDriver().toLowerCase()) {
            case 'postgres':
                return await this._createPostgresDriver(databaseInformation);
            default:
                return await this._createSqliteDriver(databaseInformation);
        }
    }

    /**
     * Creates Driver for Postgres database
     *
     * @param {DatabaseInformation} databaseInformation
     * @return {Promise<PostgresDriverAdapter>}
     * @private
     */
    async _createPostgresDriver(databaseInformation) {
        const config = databaseInformation.toObject();
        const client = new Client({
            ...config,
            user: config.username,
            ssl: {
                rejectUnauthorized: false
            }
        });
        await client.connect();

        return new PostgresDriverAdapter(client);
    }

    /**
     * Creates Driver for Sqlite database
     *
     * @param {DatabaseInformation} databaseInformation
     * @return {Promise<SqliteDriverAdapter>}
     * @private
     */
    async _createSqliteDriver(databaseInformation) {
        const filename = path.join('database', databaseInformation.getDatabase() ?? 'testing.sqlite');

        const sqliteDriver = await open({
            filename,
            driver: sqlite3.Database
        });

        return new SqliteDriverAdapter(sqliteDriver);
    }
}

module.exports = { DatabaseConnectionFactory };
