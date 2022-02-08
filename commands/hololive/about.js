const axios = require('axios')
const discord = require('discord.js')
const fs = require('fs')
const cheerio = require('cheerio')
const request = require('request')

module.exports = {
    name: 'about',
    aliases: [''],

    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
     execute: async(client, message, args) => {
       let thumb
       let embed = new discord.MessageEmbed();
        async function informations(character) {request(`https://virtualyoutuber.fandom.com/wiki/${character}`, function(err, response, html) {
            if (!err && response.statusCode == 200) {
                const $ = cheerio.load(html)
                const regex = /<br\s*[\/]?>/gi
                const description = $('figcaption[class="pi-item-spacing pi-caption"]').html()
                const title = $('.mw-parser-output > aside > h2').text()
                const originalName = $('div[class="pi-item pi-data pi-item-spacing pi-border-color"][data-source="original_name"] > div[class="pi-data-value pi-font"]').text()
                const nickname = $('div[class="pi-item pi-data pi-item-spacing pi-border-color"][data-source="nick_name"] > div[class="pi-data-value pi-font"]').html().replace(regex, '\n').replace('</small>', '').replace('<small>', '')
                const gender = $('div[class="pi-item pi-data pi-item-spacing pi-border-color"][data-source="gender"] > div[class="pi-data-value pi-font"]').text()
                var ages = $('div[class="pi-item pi-data pi-item-spacing pi-border-color"][data-source="age"] > div[class="pi-data-value pi-font"]').text()
                if(ages === "") {
                    var ages = 'Unknown'
                }
                if(ages !== null ) {
                    var ages = ages//.replace(regex, '\n')
                }
                const birthday = $('div[class="pi-item pi-data pi-item-spacing pi-border-color"][data-source="birthday"] > div[class="pi-data-value pi-font"]').text()
                const zodiac = $('div[class="pi-item pi-data pi-item-spacing pi-border-color"][data-source="zodiac_sign"] > div[class="pi-data-value pi-font"]').text()
                const height = $('div[class="pi-item pi-data pi-item-spacing pi-border-color"][data-source="height"] > div[class="pi-data-value pi-font"]').text()
                const emoji = $('div[class="pi-item pi-data pi-item-spacing pi-border-color"][data-source="emoji"] > div[class="pi-data-value pi-font"]').text()
                thumb = $('figure[class="pi-item pi-image"][data-source="image1"] > a').attr('href')
                embed.setTitle(title)
                embed.setColor('#DCB1F1')
                embed.setThumbnail(thumb)
                embed.setDescription(description)
                embed.addField('Original Name', originalName)
                embed.addField('Nickname(s)', nickname)
                embed.addField('Gender', gender)
                embed.addField('Age', ages)
                embed.addField('Birthday', birthday)
                embed.addField('Height', height)
                embed.addField('Zodiac Sign', zodiac)
                embed.addField('Emoji', emoji)
                embed.setFooter('This info is taken from virtualyoutuber.fandom.com')
                message.channel.send(embed)
            }
        })}

    //gen 0
  if (args[0] === "roboco") {
    var character = "Roboco-san";
  }
  if (args[0] === "suisei") {
    var character = "Hoshimachi_Suisei";
  }
  if (args[0] === "azki") {
    var character = "AZKi";
  }
  if (args[0] === "sora") {
    var character = "Tokino_Sora";
  }
  if (args[0] === "miko") {
    var character = "Sakura_Miko";
    embed.setThumbnail('https://static.wikia.nocookie.net/virtualyoutuber/images/7/7f/Sakura_Miko_2020_Portrait.png/revision/latest/scale-to-width-down/350?cb=20210802134259')
  }
  //gen 1
  if (args[0] === "fubuki") {
    var character = "Shirakami_Fubuki";
  }
  if (args[0] === "haachama") {
    var character = "Akai_Haato";
  }
  if (args[0] === "mel") {
    var character = "Yozora_Mel";
  }
  if (args[0] === "aki") {
    var character = "Aki_Rosenthal";
  }
  if (args[0] === "matsuri") {
    var character = "Natsuiro_Matsuri";
  }
  //gen 2
  if (args[0] === "subaru") {
    var character = "Oozora_Subaru";
  }
  if (args[0] === "ayame") {
    var character = "Nakiri_Ayame";
  }
  if (args[0] === "choco") {
    var character = "Yuzuki_Choco";
  }
  if (args[0] === "shion") {
    var character = "Murasaki_Shion";
  }
  if (args[0] === "aqua") {
    var character = "Minato_Aqua";
  }
  //GAMER
  if (args[0] === "korone") {
    var character = "Inugami_Korone";
  }
  if (args[0] === "mio") {
    var character = "Ookami_Mio";
  }
  if (args[0] === "okayu") {
    var character = "Nekomata_Okayu";
  }
  //gen 3 (hololive Fantasy)
  if (args[0] === "flare") {
    var character = "Shiranui_Flare";
  }
  if (args[0] === "pekora") {
    var character = "Usada_Pekora";
  }
  if (args[0] === "rushia") {
    var character = "Uruha_Rushia";
  }
  if (args[0] === "noel") {
    var character = "Shirogane_Noel";
  }
  if (args[0] === "marine") {
    var character = "Houshou_Marine";
  }
  //gen 4 (HoloForce)
  if (args[0] === "watame") {
    var character = "Tsunomaki_Watame";
  }
  if (args[0] === "kanata") {
    var character = "Amane_Kanata";
  }
  if (args[0] === "luna") {
    var character = "Himemori_Luna";
  }
  if (args[0] === "coco") {
    var character = "Kiryu_Coco";
  }
  if (args[0] === "towa") {
    var character = "Tokoyami_Towa";
  }
  //gen 5 (HoloFive)
  if (args[0] === "nene") {
    var character = "Momosuzu_Nene";
  }
  if (args[0] === "aloe") {
    var character = "Mano_Aloe";
  }
  if (args[0] === "botan") {
    var character = "Shishiro_Botan";
  }
  if (args[0] === "lamy") {
    var character = "Yukihana_Lamy";
  }
  if (args[0] === "polka") {
    var character = "Omaru_Polka";
  }
  //gen 6 (HoloX)
  if (args[0] === "laplus") {
    var character = "La%2B_Darknesss";
  }
  if (args[0] === "lui") {
    var character = "Takane_Lui";
  }
  if (args[0] === "koyori") {
    var character = "Hakui_Koyori";
  }
  if (args[0] === "chloe") {
    var character = "Sakamata_Chloe";
  }
  if (args[0] === "iroha") {
    var character = "Kazama_Iroha";
  }
  //EN project: HOPE
  if (args[0] === "irys") {
    var character = "IRyS";
  }
  //EN gen 1
  if (args[0] === "ina") {
    var character = "Ninomae_Ina'nis";
  }
  if (args[0] === "calli") {
    var character = "Mori_Calliope";
  }
  if (args[0] === "kiara") {
    var character = "Takanashi_Kiara";
  }
  if (args[0] === "amelia") {
    var character = "Amelia_Watson";
  }
  if (args[0] === "gura") {
    var character = "Gawr_Gura";
  }
  //EN gen 2
  if (args[0] === "sana") {
    var character = "Tsukumo_Sana";
  }
  if (args[0] === "fauna") {
    var character = "Ceres_Fauna";
  }
  if (args[0] === "mumei") {
    var character = "Nanashi_Mumei";
  }
  if (args[0] === "kronii") {
    var character = "Ouro_Kronii";
  }
  if (args[0] === "baelz") {
    var character = "Hakos_Baelz";
  }
  //ID
  if (args[0] === "ollie") {
      var character = "Kureiji_Ollie"
  }
  if (args[0] === "reine") {
    var character = "Pavolia_Reine"
}
  if (args[0] === "anya") {
    var character = "Anya_Melfissa"
}
        await informations(character)
    }
}