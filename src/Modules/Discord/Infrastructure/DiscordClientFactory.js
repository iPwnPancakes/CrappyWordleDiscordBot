const { Client, Intents } = require('discord.js');

/**
 * @returns {Client}
 */
function discordClientFactory() {
    return new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
}

module.exports = { discordClientFactory };
