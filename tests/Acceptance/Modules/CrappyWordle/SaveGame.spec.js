const { CrappyWordle } = require('../../../../src/Modules/CrappyWordle/Models/CrappyWordle');
const { CrappyWordleService } = require('../../../../src/Modules/CrappyWordle/Services/CrappyWordleService');
const { expect } = require('chai');
const { GameRepository } = require('../../../../src/Modules/CrappyWordle/Repositories/GameRepository');
const sinon = require('sinon');

describe('Save Game', () => {
    it('Should be able to save a CrappyWordleGame', async () => {
        const gameRepository = new GameRepository();
        const fakeSaveMethod = sinon.spy();
        gameRepository.save = fakeSaveMethod;
        const service = new CrappyWordleService(gameRepository);
        const game = new CrappyWordle();

        await service.save(game);

        expect(fakeSaveMethod.calledWith(game)).to.be.true;
    });
});
