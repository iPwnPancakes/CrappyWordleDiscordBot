const { User } = require('../../../../src/Modules/Discord/Models/User');
const { DiscordMessageController } = require('../../../../src/Modules/Discord/Controllers/DiscordMessageController');
const sinon = require('sinon');
const { expect } = require('chai');
const { Message } = require('../../../../src/Modules/Discord/Models/Message');
const { PubSub } = require('../../../../src/Infrastructure/PubSub');

describe('Parses incoming messages coming from Discord', () => {
    it('Should ignore messages that dont include the Bot\'s ID', () => {
        const fakeBotUser = new User('snowflake', 'botname', 'testeroni');
        const messageUser = new User('dip', 'test_user', 'test_discriminator');
        const fakePublishFn = sinon.spy();
        const pubSub = new PubSub();
        pubSub.publish = fakePublishFn;
        const controller = new DiscordMessageController(fakeBotUser, pubSub);
        const mentions = new Map();
        mentions.set(messageUser.getID(), messageUser);
        const message = new Message('test', mentions);

        controller.handleMessageCreated(message);

        expect(fakePublishFn.called).to.equal(false);
    });
});
