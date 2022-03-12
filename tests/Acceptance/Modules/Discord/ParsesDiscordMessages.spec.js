const { User } = require('../../../../src/Modules/Discord/Models/User');
const { DiscordMessageController } = require('../../../../src/Modules/Discord/Controllers/DiscordMessageController');
const sinon = require('sinon');
const { expect } = require('chai');
const { CommandRouter } = require('../../../../src/Modules/Discord/Infrastructure/Commands/CommandRouter');

describe('Parses incoming messages coming from Discord', () => {
    it('Should ignore messages that dont mention the Bot', () => {
        const fakeBotUser = new User('snowflake', 'botname', 'testeroni');
        const fakeRouteMethod = sinon.fake();
        let router = getCommandRouter(fakeRouteMethod);
        const controller = new DiscordMessageController(fakeBotUser, router);
        const messageUser = new User('dip', 'test_user', 'test_discriminator');
        const message = makeMessage('test_message', [messageUser]);

        controller.handleMessageCreated(message);

        expect(fakeRouteMethod.called).to.equal(false);
    });
});

function getCommandRouter(routeMethod) {
    let router = new CommandRouter(sinon.fake(), new Map(), sinon.fake());
    router.route = routeMethod;
    return router;
}

function makeMessage(body, initialMentions = []) {
    const mentions = new Map();

    for (let i = 0; i < initialMentions.length; i++) {
        mentions.set(initialMentions[i].getID(), initialMentions[i]);
    }

    const message = sinon.spy();
    message.mentions = mentions;
    message.content = body;

    return message;
}
