const Discord = require("discord.js");

const PREFIX = "!";

var bot = new Discord.Client();

var genders = [
    "a wolf",
    "an attack helicopter",
    "a christian minecraft server",
    "a frog",
    "toilet paper"
];

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
        case "dan":
            message.channel.sendMessage("Sorry, " + message.author + ", but Dan is currently busy getting some poon");
            break;
        case "lukecampbell":
            message.channel.sendMessage(message.author + ", don't call me that boi! *or imma have to clap them cheeks*");
            break;
        case "jesuschrist":
            message.channel.sendMessage("it's jesus christ");
            break;
        case "gfcounter":
            message.channel.sendMessage("N/A");
            break;
         case "currentgender":
                var rand = genders[Math.floor(Math.random() * genders.length)];
                message.channel.sendMessage(message.author + " is currently identifying as " + rand);
            break;
        case "brother":
               message.channel.sendMessage("pass the lint *brother*");
                break;
        case "lamp":
                var i;
                    for (i = 1; i < 6; i++) { 
                         message.channel.sendMessage("Moth " + i + ": Lamp");
                    }
                break;
        case "commands":
            var embed = new Discord.RichEmbed()
                .setTitle("MY COMMANDS:")
                .addField("!poon", "spawns horny girls")
                .addField("!ld", "spawns confused gurl")
                .addField("!penis", "gives the good zucc")
                .addField("!dan", "where tf is this kid anyway?")
                .addField("!lukecampbell", "spawns salty boi")
                .addField("!jesuschrist", "brings holy boi back from the ded")
                .addField("!gfcounter", "checks if aren't gay")
                .addField("!currentgender", "tells the gender to pissed off bois")
                .addField("!brother", "passes something...")
                .addField("!lamp", "turns on the lights")
                .setColor(0xFDFEFE)
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("invalid command");
    }
});

bot.login(process.env.BOT_TOKEN);
