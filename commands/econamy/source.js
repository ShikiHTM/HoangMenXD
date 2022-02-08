const axios = require('axios')
const { default: sagiri } = require('sagiri')
const Sagiri = require('sagiri')
const { pagination } = require('reconlx')
const discord= require('discord.js')

module.exports = {
    name: 'sauce',
    aliases: ['sauce'],
    category: 'Economy',

    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
     execute: async(client, message, args) => {
        const messageHadAttachment = message.attachments.first()

        if(messageHadAttachment) {
            console.log(messageHadAttachment.proxyURL)
            const url = messageHadAttachment.proxyURL
            const sagiri = Sagiri('6e3cafde32a8373b40dcc76005cfe4bc8d3c4799')
            await sagiri(url).then(res => {
                for(i=0; i<res.length; i++){
            //        console.log(res[i])
                    const embed = new discord.MessageEmbed()
                    .setAuthor(`Sauce Found!`)
                    .setColor(`${message.member.displayHexColor}`)
                    .setDescription(`**Site:** ${res[i].site}\n**Link:** [Click here](${res[i].url})`)
                    .setImage(res[i].thumbnail)
                    message.channel.send(embed)
                }
            }).then(msg => setTimeout(() => msg.delete(),10000))
        if(!messageHadAttachment) {
            message.channel.send("Please insert valid image")
        }
        }
    }
    }
