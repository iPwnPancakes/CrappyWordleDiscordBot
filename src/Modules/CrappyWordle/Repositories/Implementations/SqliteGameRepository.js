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
        const query = 'INSERT INTO games (id, thread_id, word, progress) VALUES (:id, :thread_id, :word, :progress)';
        await this.databaseConnection.insert(query, {
            ':id': game.getID(),
            ':thread_id': game.getThreadID(),
            ':word': game.getWord().toString(),
            ':progress': game.getProgress().toString()
        });
    }
}

module.exports = { SqliteGameRepository };
