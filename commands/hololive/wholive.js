const axios = require('axios')
const discord = require('discord.js')
const moment = require('moment')
const HLmember = require('./HLmember.json')
const { pagination } = require('reconlx')

module.exports = {
    name: 'wholive',
    aliases: ['wl'],
    description: 'A command let you knows who is livestreaming',
    category: 'Hololive',

    /** 
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
     execute: async(client, message, args) => {
    //----------------------OPTION FOR API----------------------------
 
        var options = {
            "baseURL": "https://api.holotools.app/v1", //web base api url
        }



    //----------------------API DATA FETCH----------------------------

        const url = `${options.baseURL}/live?hide_channel_desc=1`
        const response = await axios.get(url) //get data who's livestream 
        const data = response.data.live
        //console.log(data[1])
        const count = 0
        let str = ""
        
    //----------------------DATA EMBED--------------------
        async function searching() {for (i = 0; i < data.length; i++) {
            str += data[i].channel.name + ",\n"
            const thumbURL = `https://img.youtube.com/vi/${data[i].yt_video_key}/maxresdefault.jpg`
            const StreamURL = `https://youtube.com/watch?v=${data[i].yt_video_key}`
        //if else den chet 

        //holoX
        if(data[i].channel.name === HLmember.lui) {
            var characters = 'Lui'
        }
        if(data[i].channel.yt_channel_id === HLmember.laplus) {
            var characters = 'Laplus'
        }
        if(data[i].channel.yt_channel_id === HLmember.iroha) {
            var characters = 'Iroha'
        }
        if(data[i].channel.yt_channel_id === HLmember.chloe) {
            var characters = 'Chloe'
        }
        if(data[i].channel.yt_channel_id === HLmember.koyori) {
            var characters = 'Koyori'
        }
        //gen 5
        if(data[i].channel.yt_channel_id === HLmember.botan) {
            var characters = 'Botan'
        }
        if(data[i].channel.yt_channel_id === HLmember.lamy) {
            var characters = 'Lamy'
        }
        if(data[i].channel.yt_channel_id === HLmember.nene) {
            var characters = 'Nene'
        }
        if(data[i].channel.yt_channel_id === HLmember.polka) {
            var characters = 'Polka'
        }
        //gen 4
        if(data[i].channel.yt_channel_id === HLmember.coco) {
            var characters = 'Coco'
        }
        if(data[i].channel.yt_channel_id === HLmember.kanata) {
            var characters = 'Kanata'
        }
        if(data[i].channel.yt_channel_id === HLmember.towa) {
            var characters = 'Towa'
        }
        if(data[i].channel.yt_channel_id === HLmember.luna) {
            var characters = 'Luna'
        }
        if(data[i].channel.yt_channel_id === HLmember.watame) {
            var characters = 'Watame'
        }
        //gen 3
        if(data[i].channel.yt_channel_id === HLmember.rushia) {
            var characters = 'Rushia'
        }
        if(data[i].channel.yt_channel_id === HLmember.marine) {
            var characters = 'Marine'
        }
        if(data[i].channel.yt_channel_id === HLmember.flare) {
            var characters = 'Flare'
        }
        if(data[i].channel.yt_channel_id === HLmember.noel) {
            var characters = 'Noel'
        }
        if(data[i].channel.yt_channel_id === HLmember.pekora) {
            var characters = 'Pekora'
        }
        //gen 2
        if(data[i].channel.yt_channel_id === HLmember.shion) {
            var characters = 'Shion'
        }
        if(data[i].channel.yt_channel_id === HLmember.aqua) {
            var characters = 'Aqua'
        }
        if(data[i].channel.yt_channel_id === HLmember.choco) {
            var characters = 'Choco'
        }
        if(data[i].channel.yt_channel_id === HLmember.subaru) {
            var characters = 'Subaru'
        }
        if(data[i].channel.yt_channel_id === HLmember.ayame) {
            var characters = 'Ayame'
        }
        //GAMERS
        if(data[i].channel.yt_channel_id === HLmember.mio) {
            var characters = 'Mio'
        }
        if(data[i].channel.yt_channel_id === HLmember.korone) {
            var characters = 'Korone'
        }
        if(data[i].channel.yt_channel_id === HLmember.okayu) {
            var characters = 'Okayu'
        }
        //gen 1
        if(data[i].channel.yt_channel_id === HLmember.fubuki) {
            var characters = 'Fubuki'
        }
        if(data[i].channel.yt_channel_id === HLmember.haato) {
            var characters = 'Haato'
        }
        if(data[i].channel.yt_channel_id === HLmember.mel) {
            var characters = 'Mel'
        }
        if(data[i].channel.yt_channel_id === HLmember.aki) {
            var characters = 'Aki'
        }
        if(data[i].channel.yt_channel_id === HLmember.matsuri) {
            var characters = 'Matsuri'
        }
        //gen 0
        if(data[i].channel.yt_channel_id === HLmember.suisei) {
            var characters = 'Suisei'
        }
        if(data[i].channel.yt_channel_id === HLmember.sora) {
            var characters = 'Sora'
        }
        if(data[i].channel.yt_channel_id === HLmember.miko) {
            var characters = 'Miko'
        }
        if(data[i].channel.yt_channel_id === HLmember.azki) {
            var characters = 'Azki'
        }
        if(data[i].channel.yt_channel_id === HLmember.roboco) {
            var characters = 'Roboco'
        }

        //EN gen 1
        if(data[i].channel.yt_channel_id === HLmember.watson) {
            var characters = 'Watson'
        }
        if(data[i].channel.yt_channel_id === HLmember.gura) {
            var characters = 'Gura'
        }
        if(data[i].channel.yt_channel_id === HLmember.calli) {
            var characters = 'Calli'
        }
        if(data[i].channel.yt_channel_id === HLmember.kiara) {
            var characters = 'Kiara'
        }
        if(data[i].channel.yt_channel_id === HLmember.ina) {
            var characters = 'Ina'
        }
        //EN gen 2
        if(data[i].channel.yt_channel_id === HLmember.sana) {
            var characters = 'Sana'
        }
        if(data[i].channel.yt_channel_id === HLmember.kronii) {
            var characters = 'Kronii'
        }
        if(data[i].channel.yt_channel_id === HLmember.mumei) {
            var characters = 'Mumei'
        }
        if(data[i].channel.yt_channel_id === HLmember.bealz) {
            var characters = 'Bealz'
        }
        if(data[i].channel.yt_channel_id === HLmember.fauna) {
            var characters = 'Fauna'
        }
        //HOPE
        if(data[i].channel.yt_channel_id === HLmember.irys) {
            var characters = 'Irys'
        }

        //ID gen 1
        if(data[i].channel.yt_channel_id === HLmember.mona) {
            var characters = 'Mona'
        }
        if(data[i].channel.yt_channel_id === HLmember.risu) {
            var characters = 'Risu'
        }
        if(data[i].channel.yt_channel_id === HLmember.iofi) {
            var characters = 'Iofi'
        }
        //ID gen 2
        if(data[i].channel.yt_channel_id === HLmember.anya) {
            var characters = 'Anya'
        }
        if(data[i].channel.yt_channel_id === HLmember.ollie) {
            var characters = 'Ollie'
        }
        if(data[i].channel.yt_channel_id === HLmember.reine) {
            var characters = 'Reine'
        }
        
        // const date = moment(data[i].live_start).toLocaleString('vi-vn', {timeZone: 'GMT+7'}).substr(0,25)
        // const embed = new discord.MessageEmbed()
        // .setAuthor(`${characters} is Streaming!`, `${data[i].channel.photo}`, `${StreamURL}`)
        // .setColor(message.member.displayHexColor)
        // .setImage(thumbURL)
        // .addField('Title:', data[i].title)
        // .addField('Start at:', date)
        // .addField('View:', Intl.NumberFormat().format(data[i].live_viewers))
        // .setFooter(`${data[i].channel.name}`)
        // .setTimestamp()
        // message.channel.send(embed)
        }}
    await searching()
    const embed = new discord.MessageEmbed()
    .setColor(message.member.displayHexColor)
    .setDescription(`Currently members livestream: ${data.length}\n\n**${str}**`)
    message.channel.send(embed)
    }
}