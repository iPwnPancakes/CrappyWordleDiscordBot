const { CrappyWordle } = require('../../../../src/Modules/CrappyWordle/Models/CrappyWordle');
const { expect } = require('chai');

describe('Start CrappyWordle', () => {
    it('Random word should be chosen when game is started', () => {
        // Assert
        const game = new CrappyWordle();

        // Act
        game.start('random12');

        // Assert
        expect(game.getWord()).to.equal('random12');
    });
});
