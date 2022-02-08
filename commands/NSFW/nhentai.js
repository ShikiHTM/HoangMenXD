const discord = require("discord.js");
const nhentai = require("nhentai-api");

module.exports = {
  name: "nhentai",
  aliases: ["hentai"],

  /**
   * @param {Message} message
   * @param {Client} client
   * @param {String[]} args
   */
  execute: async (client, message, args) => {
    const api = new nhentai.API();

    if (message.channel.nsfw) {
      if (args[0] === "random") {
        if (!args[0]) {
          message.channel.send({
            embed: {
              description:
                "Please choose an action!\n use `sh!nhentai help for list`",
              color: "RED",
            },
          });
        }

        await api.getRandomBook().then((res) => {
          console.log(res);
          const cover = `https://i.nhentai.net/galleries/${res.media}/1.jpg`;
          let str = "";
          for (i = 0; i < res.pureTags.length; i++) {
            str += res.pureTags[i].name + ", ";
          } //get tags
          message.channel.send({
            embed: {
              author: {
                name: res.title.english,
                url: `https://nhentai.net/g/${res.id}`,
              },
              color: "RED",
              image: { url: cover },
              description: "`#`" + res.id,
              fields: [
                { name: "Favorites:", value: res.favorites, inline: true },
                { name: "Parodies:", value: res.parodies, inline: true },
                { name: "Artist(s):", value: res.artists, inline: true },
                { name: "Character(s):", value: res.characters, inline: true },
                { name: "Tag(s):", value: str, inline: false },
              ],
            },
          });
        });
      }
    } else {
      message.reply("Go fuck yourself in horny jail"); //if the channel isnt NSFW channel, return
    }
  },
};
