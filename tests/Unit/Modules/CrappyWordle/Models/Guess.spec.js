const { Guess } = require('../../../../../src/Modules/CrappyWordle/Models/Guess');
const { Word } = require('../../../../../src/Modules/CrappyWordle/Models/Word');
const { expect } = require('chai');

describe('Models: Guess', () => {
    it('getCharacterUnion should not change any characters that differ', () => {
        const guess = new Guess('test');
        const compare = new Word('t**t');

        expect(guess.getCharacterUnion(compare).toString()).to.equal(compare.toString());
    });
});
