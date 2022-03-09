const { User } = require('../../../../src/Modules/Discord/Models/User');
const { DiscordMessageController } = require('../../../../src/Modules/Discord/Controllers/DiscordMessageController');
const sinon = require('sinon');
const { expect } = require('chai');
const { Message } = require('../../../../src/Modules/Discord/Models/Message');
const { MessageBroker } = require('../../../../src/Infrastructure/MessageBroker');

describe('Parses incoming messages coming from Discord', () => {
    it('Should ignore messages that dont mention the Bot', () => {
        const fakeBotUser = new User('snowflake', 'botname', 'testeroni');
        const fakePublishFn = sinon.spy();
        const messageBroker = makeMessageBroker(fakePublishFn);
        const controller = new DiscordMessageController(fakeBotUser, messageBroker);
        const messageUser = new User('dip', 'test_user', 'test_discriminator');
        const message = makeMessage('test_message', [messageUser]);

        controller.handleMessageCreated(message);

        expect(fakePublishFn.called).to.equal(false);
    });

    it('Should notify any relevant parties if Bot is mentioned', () => {
        const fakeBotUser = new User('snowflake', 'botname', 'testeroni');
        const fakePublishFn = sinon.spy();
        const messageBroker = makeMessageBroker(fakePublishFn);
        const controller = new DiscordMessageController(fakeBotUser, messageBroker);
        const message = makeMessage('test_message', [fakeBotUser]);

        controller.handleMessageCreated(message);

        expect(fakePublishFn.called).to.equal(true);
    });
});

function makeMessageBroker(pub, sub) {
    const messageBroker = new MessageBroker();

    if (pub) {
        messageBroker.publish = pub;
    }

    if (sub) {
        messageBroker.subscribe = sub;
    }

    return messageBroker;
}

function makeMessage(body, initialMentions = []) {
    const mentions = new Map();

    for (let i = 0; i < initialMentions.length; i++) {
        mentions.set(initialMentions[i].getID(), initialMentions[i]);
    }

    return new Message(body, mentions);
}
