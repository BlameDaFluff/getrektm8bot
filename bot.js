const Discord = require("discord.js");

const PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function(){
    console.log("ready");
});

bot.on("message", function(message){
    
    if(message.author.equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0].toLocaleLowerCase()){
        case "poon":
            message.channel.sendMessage("you can finger me so hard daddy! *moans*");
            break;
        case "ld":
            message.channel.sendMessage("what?");
            break;
        case "penis":
            var embed = new Discord.RichEmbed()
                .setTitle("*slurp noise*")
                .setColor(0xFDFEFE)
            message.channel.sendEmbed(embed);
        break;
        default:
            message.channel.sendMessage("invalid command");
    }
});

bot.login(process.env.BOT_TOKEN);
