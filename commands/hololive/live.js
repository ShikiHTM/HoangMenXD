const axios = require('axios')
const discord = require('discord.js')
const HLmember = require('./HLmember.json')

module.exports = {
    name: 'live',
    aliases: [''],
    category: 'Hololive',

    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
     execute: async(client, message, args) => {
    //----------------------OPTION FOR API----------------------------
 
    var options = {
        "baseURL": "https://holodex.net/api/v2", //web base api url
        "X-API": "032d4743-62ac-4638-80a3-148e526d439b",
        "StreamURL": "https://youtube.com/watch?v=",
        "thumbURL" : `https://img.youtube.com/vi/`,
        "quality" : "maxresdefault.jpg"
    }
    //----------------------API DATA FETCH----------------------------

    const url = `${options.baseURL}/live`
    const response = await axios.get(url) //get data who's livestream 
    const data = response.data
    console.log(data)
    async function searching(character) {
        for (i=0; i<data.length; i++) {
            if(data[i].channel.id === character)
            {
            //console.log(data[i])
            const embed = new discord.MessageEmbed()
            .setTitle(data[i].title)
            .setURL(`${options.StreamURL}` + data[i].id)
            .setColor(`#DCB1F1`)
            .setImage(`https://img.youtube.com/vi/${data[i].id}/maxresdefault.jpg`)
            .setFooter(`${data[i].channel.name}`, data[i].channel.photo)
            .setTimestamp()
            message.channel.send(embed)
            break;
        }
        }
    }
    //gen 0
    if(args[0] === 'sora') {
        if(data.some(e => e.channel.id === HLmember.sora)) {
            searching(HLmember.sora)
        } else{
            message.channel.send(`**Tokino Sora** is not Streaming!`)
        }
    }
    if(args[0] === 'miko') {
        if(data.some(e => e.channel.id === HLmember.miko)) {
            searching(HLmember.miko)
        } else{
            message.channel.send(`**Sakura Miko** is not Streaming!`)
        }
    }
    if(args[0] === 'azki') {
        if(data.some(e => e.channel.id === HLmember.azki)) {
            searching(HLmember.azki)
        } else{
            message.channel.send(`**AzkI** is not Streaming!`)
        }
    }
    if(args[0] === 'suisei') {
        if(data.some(e => e.channel.id === HLmember.suisei)) {
            searching(HLmember.suisei)
        } else{
            message.channel.send(`**Hoshimachi Suisei** is not Streaming!`)
        }
    }
    if(args[0] === 'roboco') {
        if(data.some(e => e.channel.id === HLmember.roboco)) {
            searching(HLmember.roboco)
        } else{
            message.channel.send(`**Roboco** is not Streaming!`)
        }
    }
    
    
    //gen 1
    if(args[0] === 'fubuki') {
        if(data.some(e => e.channel.id === HLmember.fubuki)) {
            searching(HLmember.fubuki)
        } else{
            message.channel.send(`**Shirakami Fubuki** is not Streaming!`)
        }
    }
    if(args[0] === 'matsuri') {
        if(data.some(e => e.channel.id === HLmember.matsuri)) {
            searching(HLmember.matsuri)
        } else{
            message.channel.send(`**Natsuiro Matsuri** is not Streaming!`)
        }
    }
    if(args[0] === 'aki') {
        if(data.some(e => e.channel.id === HLmember.aki)) {
            searching(HLmember.aki)
        } else{
            message.channel.send(`**Aki Rosenthal** is not Streaming!`)
        }
    }
    if(args[0] === 'mel') {
        if(data.some(e => e.channel.id === HLmember.mel)) {
            searching(HLmember.mel)
        } else{
            message.channel.send(`**Yozora Mel** is not Streaming!`)
        }
    }
    if(args[0] === 'haachama') {
        if(data.some(e => e.channel.id === HLmember.haato)) {
            searching(HLmember.haato)
        } else{
            message.channel.send(`**Akai Haato** is not Streaming!`)
        }
    }
    
    
    //gen 2
    if(args[0] === 'shion') {
        if(data.some(e => e.channel.id === HLmember.shion)) {
            searching(HLmember.shion)
        } else{
            message.channel.send(`**Murasaki Shion** is not Streaming!`)
        }
    }
    if(args[0] === 'aqua') {
        if(data.some(e => e.channel.id === HLmember.aqua)) {
            searching(HLmember.aqua)
        } else{
            message.channel.send(`**Minato Aqua** is not Streaming!`)
        }
    }
    if(args[0] === 'choco') {
        if(data.some(e => e.channel.id === HLmember.choco)) {
            searching(HLmember.choco)
        } else{
            message.channel.send(`**Yuzuki Choco** is not Streaming!`)
        }
    }
    if(args[0] === 'ayame') {
        if(data.some(e => e.channel.id === HLmember.ayame)) {
            searching(HLmember.ayame)
        } else{
            message.channel.send(`**Nakiri Ayame** is not Streaming!`)
        }
    }
    if(args[0] === 'subaru') {
        if(data.some(e => e.channel.id === HLmember.subaru)) {
            searching(HLmember.subaru)
        } else{
            message.channel.send(`**Oozora Subaru** is not Streaming!`)
        }
    }


    //gen 3
    if(args[0] === 'rushia') {
        if(data.some(e => e.channel.id === HLmember.rushia)) {
            searching(HLmember.rushia)
        } else{
            message.channel.send(`**Uruha Rushia** is not Streaming!`)
        }
    }
    if(args[0] === 'pekora') {
        if(data.some(e => e.channel.id === HLmember.pekora)) {
            searching(HLmember.pekora)
        } else{
            message.channel.send(`**Tokino Sora** is not Streaming!`)
        }
    }
    if(args[0] === 'flare') {
        if(data.some(e => e.channel.id === HLmember.flare)) {
            searching(HLmember.flare)
        } else{
            message.channel.send(`**Shiranui Falre** is not Streaming!`)
        }
    }
    if(args[0] === 'Noel') {
        if(data.some(e => e.channel.id === HLmember.Noel)) {
            searching(HLmember.Noel)
        } else{
            message.channel.send(`**Shirogane Noel** is not Streaming!`)
        }
    }
    if(args[0] === 'marine') {
        if(data.some(e => e.channel.id === HLmember.marine)) {
            searching(HLmember.marine)
        } else{
            message.channel.send(`**Houshou Marine** is not Streaming!`)
        }
    }


    //gen 4
    if(args[0] === 'kanata') {
        if(data.some(e => e.channel.id === HLmember.kanata)) {
            searching(HLmember.kanata)
        } else{
            message.channel.send(`**Amane Kanata** is not Streaming!`)
        }
    }
    if(args[0] === 'coco') {
        if(data.some(e => e.channel.id === HLmember.coco)) {
            searching(HLmember.coco)
        } else{
            message.channel.send(`**Kiryu Coco** is not Streaming!`)
        }
    }
    if(args[0] === 'towa') {
        if(data.some(e => e.channel.id === HLmember.towa)) {
            searching(HLmember.towa)
        } else{
            message.channel.send(`**Tokoyami Towa** is not Streaming!`)
        }
    }
    if(args[0] === 'watame') {
        if(data.some(e => e.channel.id === HLmember.watame)) {
            searching(HLmember.watamae)
        } else{
            message.channel.send(`**Tsunomaki Watame** is not Streaming!`)
        }
    }
    if(args[0] === 'Luna') {
        if(data.some(e => e.channel.id === HLmember.luna)) {
            searching(HLmember.luna)
        } else{
            message.channel.send(`**Himemori Luna** is not Streaming!`)
        }
    }


    //gen 5
    if(args[0] === 'botan') {
        if(data.some(e => e.channel.id === HLmember.botan)) {
            searching(HLmember.botan)
        } else{
            message.channel.send(`**Shishiro Botan** is not Streaming!`)
        }
    }
    if(args[0] === 'lamy') {
        if(data.some(e => e.channel.id === HLmember.lamy)) {
            searching(HLmember.lamy)
        } else{
            message.channel.send(`**Yukihana Lamy** is not Streaming!`)
        }
    }
    if(args[0] === 'polka') {
        if(data.some(e => e.channel.id === HLmember.polka)) {
            searching(HLmember.polka)
        } else{
            message.channel.send(`**Omaru Polka** is not Streaming!`)
        }
    }
    if(args[0] === 'nene') {
        if(data.some(e => e.channel.id === HLmember.nene)) {
            searching(HLmember.nene)
        } else{
            message.channel.send(`**Momosuzu Nene** is not Streaming!`)
        }
    }

        //HoloX
        if(args[0] === 'laplus') {
            if(data.some(e => e.channel.id === HLmember.laplus)) {
                searching(HLmember.laplus)
            } else{
                message.channel.send(`**La+ Darkness** is not Streaming!`)
            }
        }
        if(args[0] === 'iroha') {
            if(data.some(e => e.channel.id === HLmember.iroha)) {
                searching(HLmember.iroha)
            } else{
                message.channel.send(`**Kazama Iroha** is not Streaming!`)
            }
        }
        if(args[0] === 'koyori') {
            if(data.some(e => e.channel.id === HLmember.koyori)) {
                searching(HLmember.koyori)
            } else{
                message.channel.send(`**Hakui Koyori** is not Streaming!`)
            }
        }
        if(args[0] === 'chloe') {
            if(data.some(e => e.channel.id === HLmember.chloe)) {
                searching(HLmember.chloe)
            } else{
                message.channel.send(`**Sakamata Chloe** is not Streaming!`)
            }
        }
        if(args[0] === 'lui') {
            if(data.some(e => e.channel.id === HLmember.lui)) {
                searching(HLmember.lui)
            } else{
                message.channel.send(`**Takane Lui** is not Streaming!`)
            }
        }


    //EN gen 1
    if(args[0] === 'gura') {
        if(data.some(e => e.channel.id === HLmember.gura)) {
            searching(HLmember.gura)
        } else{
            message.channel.send(`**Gawr Gura** is not Streaming!`)
        }
    }
    if(args[0] === 'calli') {
        if(data.some(e => e.channel.id === HLmember.calli)) {
            searching(HLmember.calli)
        } else{
            message.channel.send(`**Mori Calliope** is not Streaming!`)
        }
    }
    if(args[0] === 'ina') {
        if(data.some(e => e.channel.id === HLmember.ina)) {
            searching(HLmember.ina)
        } else{
            message.channel.send(`**Ninomae Ina'nis** is not Streaming!`)
        }
    }
    if(args[0] === 'amelia') {
        if(data.some(e => e.channel.id === HLmember.watson)) {
            searching(HLmember.watson)
        } else{
            message.channel.send(`**Amelia Watson** is not Streaming!`)
        }
    }
    if(args[0] === 'kiara') {
        if(data.some(e => e.channel.id === HLmember.kiara)) {
            searching(HLmember.kiara)
        } else{
            message.channel.send(`**Takanashi Kiara** is not Streaming!`)
        }
    }


    //EN gen 2
    if(args[0] === 'mumei') {
        if(data.some(e => e.channel.id === HLmember.mumei)) {
            searching(HLmember.mumei)
        } else{
            message.channel.send(`**Nanashi Mumei** is not Streaming!`)
        }
    }
    if(args[0] === 'baelz') {
        if(data.some(e => e.channel.id === HLmember.baelz)) {
            searching(HLmember.baelz)
        } else{
            message.channel.send(`**Hakos Baelz** is not Streaming!`)
        }
    }
    if(args[0] === 'kronii') {
        if(data.some(e => e.channel.id === HLmember.kronii)) {
            searching(HLmember.kronii)
        } else{
            message.channel.send(`**Ouro Kronii** is not Streaming!`)
        }
    }
    if(args[0] === 'fauna') {
        if(data.some(e => e.channel.id === HLmember.fauna)) {
            searching(HLmember.fauna)
        } else{
            message.channel.send(`**Ceres Fauna** is not Streaming!`)
        }
    }
    if(args[0] === 'sana') {
        if(data.some(e => e.channel.id === HLmember.sana)) {
            searching(HLmember.sana)
        } else{
            message.channel.send(`**Tsukumo Sana** is not Streaming!`)
        }
    }

    
    //HOPE
    if(args[0] === 'irys') {
        if(data.some(e => e.channel.id === HLmember.irys)) {
            searching(HLmember.irys)
        } else{
            message.channel.send(`**IRyS** is not Streaming!`)
        }
    }


    //ID Gen 1
    if(args[0] === 'risu') {
        if(data.some(e => e.channel.id === HLmember.risu)) {
            searching(HLmember.risu)
        } else{
            message.channel.send(`**Ayunda Risu** is not Streaming!`)
        }
    }
    if(args[0] === 'moona') {
        if(data.some(e => e.channel.id === HLmember.mona)) {
            searching(HLmember.mona)
        } else{
            message.channel.send(`**Hoshinova Moona** is not Streaming!`)
        }
    }
    if(args[0] === 'iofi') {
        if(data.some(e => e.channel.id === HLmember.iofi)) {
            searching(HLmember.iofi)
        } else{
            message.channel.send(`**Airani Iofiteen** is not Streaming!`)
        }
    }
    

    //ID Gen 2
    if(args[0] === 'ollie') {
        if(data.some(e => e.channel.id === HLmember.ollie)) {
            searching(HLmember.ollie)
        } else{
            message.channel.send(`**Kureiji Oliie** is not Streaming!`)
        }
    }
    if(args[0] === 'reine') {
        if(data.some(e => e.channel.id === HLmember.reine)) {
            searching(HLmember.reine)
        } else{
            message.channel.send(`**Pavolia Reine** is not Streaming!`)
        }
    }
    if(args[0] === 'anya') {
        if(data.some(e => e.channel.id === HLmember.anya)) {
            searching(HLmember.anya)
        } else{
            message.channel.send(`**Melfissa Anya** is not Streaming!`)
        }
    }

    //GAMERS
    if(args[0] === 'mio') {
        if(data.some(e => e.channel.id === HLmember.mio)) {
            searching(HLmember.mio)
        } else{
            message.channel.send(`**Ookami Mio** is not Streaming!`)
        }
    }
    if(args[0] === 'okayu') {
        if(data.some(e => e.channel.id === HLmember.okayu)) {
            searching(HLmember.okayu)
        } else{
            message.channel.send(`**Nekomata Okayu** is not Streaming!`)
        }
    }
    if(args[0] === 'korone') {
        if(data.some(e => e.channel.id === HLmember.korone)) {
            searching(HLmember.korone)
        } else{
            message.channel.send(`**Inugami Korone** is not Streaming!`)
        }
    }
    }
}