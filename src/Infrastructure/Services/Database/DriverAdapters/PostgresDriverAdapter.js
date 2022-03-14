const { DriverAdapter } = require('./DriverAdapter');
const PG = require('pg');

class PostgresDriverAdapter extends DriverAdapter {
    /**
     * @param {PG.Client} postgresClient
     */
    constructor(postgresClient) {
        super();
        this.client = postgresClient;
    }

    async get(query, data = []) {
        const response = await this.client.query(query, data);

        return response.rows.length === 0 ? [] : response.rows[0];
    }

    async all(query, data = []) {
        const response = await this.client.query(query, data);

        return response.rows;
    }

    async run(query, data = []) {
        console.log(data);
        await this.client.query(query, data);
    }
}

module.exports = { PostgresDriverAdapter };
