const { DatabaseConnection } = require('../../../../Infrastructure/Services/Database/DatabaseConnection');
const { GameRepository } = require('../GameRepository');

class PostgresGameRepository extends GameRepository {
    /**
     * @param {DatabaseConnection} databaseConnection
     */
    constructor(databaseConnection) {
        super();
        this.databaseConnection = databaseConnection;
    }

    async save(game) {
        await this.databaseConnection.insert('INSERT INTO games VALUES ($1, $2, $3)', [
            game.getID(),
            game.getWord().toString(),
            game.getProgress().toString()
        ]);
    }
}

module.exports = { PostgresGameRepository };
