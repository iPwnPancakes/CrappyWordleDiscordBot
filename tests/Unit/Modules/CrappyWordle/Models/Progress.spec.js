const { Word } = require('../../../../../src/Modules/CrappyWordle/Models/Word');
const { Progress } = require('../../../../../src/Modules/CrappyWordle/Models/Progress');
const { expect } = require('chai');

describe('Models: Progress', () => {
    it('getProgress should return current progress as a Word', () => {
        const word = new Word('test');
        const initialProgress = new Word('t**t');
        const progress = new Progress(word, initialProgress);

        expect(progress.getProgressAsWord().toString()).to.equal('t**t');
    });

    it('applyWord should replace any matching characters', () => {
        const word = new Word('test');
        const initialProgress = new Word('t**t');
        const progress = new Progress(word, initialProgress);
        const guess = new Word('text');

        progress.applyWord(guess);

        expect(progress.getProgressAsWord().toString()).to.equal('te*t');
    });
});
