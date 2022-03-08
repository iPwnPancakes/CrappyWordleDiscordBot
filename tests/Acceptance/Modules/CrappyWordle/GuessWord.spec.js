const { CrappyWordle } = require('../../../../src/Modules/CrappyWordle/Models/CrappyWordle');
const { Word } = require('../../../../src/Modules/CrappyWordle/Models/Word');
const { Progress } = require('../../../../src/Modules/CrappyWordle/Models/Progress');
const { expect } = require('chai');

describe('Guess Word', () => {
    it('Should update progress when guess contains matching characters at matching indexes', () => {
        const initialWord = new Word('wordle');
        const progressAsWord = new Word('w****e');
        const initialProgress = new Progress(initialWord, progressAsWord);
        const game = new CrappyWordle(initialWord, initialProgress);
        const guess = new Word('warped');

        game.guessWord(guess);

        expect(game.getProgress().toString()).to.equal('w*r**e');
    });
});
