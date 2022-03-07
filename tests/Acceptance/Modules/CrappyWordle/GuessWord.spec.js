const { CrappyWordle } = require('../../../../src/Modules/CrappyWordle/Models/CrappyWordle');
const { Word } = require('../../../../src/Modules/CrappyWordle/Models/Word');
const { Guess } = require('../../../../src/Modules/CrappyWordle/Models/Guess');
const { expect } = require('chai');

describe('Guess Word', () => {
    it('Should update progress when any correct letters guessed', () => {
        // Assemble
        const word = new Word('abcd');
        const progress = new Word('a*c*');
        const game = new CrappyWordle(word, progress);
        const guess = new Guess('adce');

        // Act
        game.guessWord(guess);

        // Assert
        expect(game.getProgress().toString()).to.equal('a*c*');
    });
});
