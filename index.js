const { Client } = require('discord.js');
const client = new Client();
const prefix = '!';
const ownerID = 'your id';

client.on('ready', () => console.log('Ready!'));

client.on('message',  async msg => {
    if(msg.author.id != ownerID) return msg.channel.send('only the owner of the bot can use this command.');

    if(msg.content.startsWith(`${prefix}unbanall`)) {
        msg.guild.fetchBans()
        .then(bans => {
            bans.forEach(user => {
                /*
                Debug works
                console.log(user.id);
                */
                msg.guild.unban(user.id);
            });
        })
        .catch(e => console.log(e));
    }
});

client.login('TOKEN');
