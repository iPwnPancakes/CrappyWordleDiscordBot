const { Word } = require('../../../../../src/Modules/CrappyWordle/Models/Word');
const { expect } = require('chai');

describe('Models: Word', () => {
    it('toString should return the string it was constructed with', () => {
        const word = new Word('asdf');

        expect(word.toString()).to.equal('asdf');
    });
});
