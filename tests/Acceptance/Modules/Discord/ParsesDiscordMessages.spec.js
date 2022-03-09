const { User } = require('../../../../src/Modules/Discord/Models/User');
const { DiscordMessageController } = require('../../../../src/Modules/Discord/Controllers/DiscordMessageController');
const sinon = require('sinon');
const { expect } = require('chai');
const { Message } = require('../../../../src/Modules/Discord/Models/Message');
const { PubSub } = require('../../../../src/Infrastructure/PubSub');
const { BotMentioned } = require('../../../../src/Modules/Discord/Events/BotMentioned');

describe('Parses incoming messages coming from Discord', () => {
    it('Should ignore messages that dont mention the Bot', () => {
        const fakeBotUser = new User('snowflake', 'botname', 'testeroni');
        const fakePublishFn = sinon.spy();
        const pubSub = makePubSub(fakePublishFn);
        const controller = new DiscordMessageController(fakeBotUser, pubSub);
        const messageUser = new User('dip', 'test_user', 'test_discriminator');
        const message = makeMessage('test_message', [messageUser]);

        controller.handleMessageCreated(message);

        expect(fakePublishFn.called).to.equal(false);
    });

    it('Should notify any relevant parties if Bot is mentioned', () => {
        const fakeBotUser = new User('snowflake', 'botname', 'testeroni');
        const fakePublishFn = sinon.spy();
        const pubSub = makePubSub(fakePublishFn);
        const controller = new DiscordMessageController(fakeBotUser, pubSub);
        const message = makeMessage('test_message', [fakeBotUser]);

        controller.handleMessageCreated(message);

        expect(fakePublishFn.called).to.equal(true);
    });
});

function makePubSub(pub, sub) {
    const pubSub = new PubSub();

    if (pub) {
        pubSub.publish = pub;
    }

    if (sub) {
        pubSub.subscribe = sub;
    }

    return pubSub;
}

function makeMessage(body, initialMentions = []) {
    const mentions = new Map();

    for (let i = 0; i < initialMentions.length; i++) {
        mentions.set(initialMentions[i].getID(), initialMentions[i]);
    }

    return new Message(body, mentions);
}
