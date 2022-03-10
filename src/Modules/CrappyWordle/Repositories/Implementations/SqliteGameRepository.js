const { GameRepository } = require('../GameRepository');
const { DatabaseConnection } = require('../../../../Infrastructure/Services/Database/DatabaseConnection');

class SqliteGameRepository extends GameRepository {
    /**
     * @param {DatabaseConnection} databaseConnection
     */
    constructor(databaseConnection) {
        super();
        this.databaseConnection = databaseConnection;
    }

    async save(game) {
        await this.databaseConnection.insert('INSERT INTO games VALUES (:id, :word, :progress)', {
            ':id': game.getID(),
            ':word': game.getWord().toString(),
            ':progress': game.getProgress().toString()
        });
    }
}

module.exports = { SqliteGameRepository };
