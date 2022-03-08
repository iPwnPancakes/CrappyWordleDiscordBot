const { CrappyWordle } = require('../../../../src/Modules/CrappyWordle/Models/CrappyWordle');
const { expect } = require('chai');
const { Word } = require('../../../../src/Modules/CrappyWordle/Models/Word');

describe('Start CrappyWordle', () => {
    it('Random word should be chosen when game is started', () => {
        // Assert
        const game = new CrappyWordle();

        // Act
        game.start(new Word('random12'));

        // Assert
        expect(game.getWord().toString()).to.equal('random12');
    });

    it('Game should be initialized with progress', () => {
        // Assert
        const word = new Word('random12');
        const game = new CrappyWordle();

        // Act
        game.start(word);

        // Assert
        expect(game.getProgress().toString()).to.equal('********');
    });
});
