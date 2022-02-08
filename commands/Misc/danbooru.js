const fs = require('fs')

module.exports = {
    name: 'danbooru',
    aliases: ['db'],
    category: 'Misc',

    /**
     * @param {Message} message
     * @param {Client} client
     * @param {String[]} args
     */
     execute: async(client, message, args) => {
        const filter = msg => msg.author.id == message.author.id;
        let options = {
            max: 1
        };
    
        message.channel.send('Character?')
        let col2 = await message.channel.awaitMessages(filter, options)
        if(col2.first().content == 'cancel') return message.channel.send("Cancelled");
        var character = col2.first().content.replace(/ /g, '_')
        var format = /[+]/
        if(format.test(character) === true) return character.replace(/\+/g, '%2B')

        if(character == undefined) return message.channel.send('Please give valid character')

        message.channel.send('How many image did you want?')
        let col3 = await message.channel.awaitMessages(filter, options)
        if(col3.first().content == 'cancel') return message.channel.send("Cancelled");
        var tRetry = col3.first().content

        let strargs = args.toString();
        let newargs = strargs.replace(/,/g, '+');
        require('request')(`https://safebooru.donmai.us/posts.json?limit=${tRetry}&tags=${character}+order%3Arandom` + '+' + newargs,
        function(res, err, body) {
            var data = JSON.parse(body)
            let str = ""
            for( i = 0; i <= tRetry; i++) {
                if(data[i] !== undefined) {
                    //console.log(i+1 + ` ${data[i].file_url}`)
                    str += data[i].file_url + '\n'
                    message.channel.send(data[i].file_url)
            }
            }
    }
    )
}
}