const sinon = require('sinon');
const { CrappyWordle } = require('../../../../src/Modules/CrappyWordle/Models/CrappyWordle');
const { CrappyWordleService } = require('../../../../src/Modules/CrappyWordle/Services/CrappyWordleService');
const { expect } = require('chai');

describe('Save Game', () => {
    it('Should be able to save a CrappyWordleGame', () => {
        const fakeSaveFn = sinon.spy();
        const fakeGameRepository = { save: fakeSaveFn };
        const service = new CrappyWordleService(fakeGameRepository);
        const game = new CrappyWordle();

        service.save(game);

        expect(fakeSaveFn.calledWith(game)).to.be.true;
    });
});
