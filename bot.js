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
                var embedLamp = new Discord.RichEmbed()
                    .setTitle("**Bröther**")
                    .setColor(0xF9E79F)
                    .setImage("https://imgix.bustle.com/uploads/image/2018/9/27/b2655359-f3c4-436e-b7dc-7ceb3d528dfd-dj92z5rvsaa7uku.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70")
                message.channel.sendEmbed(embedLamp);
                break;
        case "psat":
             var embedPsat = new Discord.RichEmbed()
                    .setColor(0xE74C3C)
                    .setThumbnail("http://i.imgur.com/sdO8tAw.png")
                    .setDescription("reddit.com/r/psatmemes/")
                    .setURL("https://www.reddit.com/r/psatmemes/")
                    .setFooter("*click the link to die laughing*")
                message.channel.sendEmbed(embedPsat);
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
                .addField("!psat", "1 million = 1,000,000")
                .setColor(0xFDFEFE)
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("invalid command");
    }
});

bot.login(process.env.BOT_TOKEN);
