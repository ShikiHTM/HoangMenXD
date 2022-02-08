const steamAPI = require('steamapi')
const discord = require('discord.js')
const moment = require('moment')

module.exports = {
    name: 'steam',
    aliases: [''],

    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
     execute: async(client, message, args) => {
        if (args[0] === "user") {
            if (!args[0]) { 
                message.channel.send({
                    embed: {
                      description:
                        "Please choose an action!\n use `sh!steam help for list`",
                      color: "RED",
                    },
                  });
            }
        const steam = new steamAPI('1EE4E0C644AA21C28621FF2FFFDF010A')
        steam.resolve(`https://steamcommunity.com/id/${args[1]}`).then(id => {
            steam.getUserSummary(`${id}`).then(res => {
                const cTime = `${moment.unix(res.created)}`
                const LastlogOff = `${moment.unix(res.lastLogOff)}`
                console.log(res)
                message.channel.send({ 
                    embed: {
                        author: {name: `${args[1]}'s Steam Profile`, url: res.url},
                        color: '#3C7CE7',
                        thumbnail: {url: res.avatar.large},
                        description: `Steam Id: \`${res.steamID}\`\n Country: \`${res.countryCode}\``,
                        fields: [
                            {name: 'Nickname:', value: res.nickname, inline: true},
                            {name: 'Realname:', value: res.realName, inline: true},
                            {name: 'Created at:', value: cTime.substr(0, 15), inline: false},
                            {name: 'Last LogOff:', value: LastlogOff.substr(0, 15), inline: true},
                            {Name: 'GameExtra:', value: res.gameExtraInfo, inline: true}
                        ]
                }})
            })
        })
        }
    }
}
