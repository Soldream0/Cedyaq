const Discord = require('discord.js');
const robot = new Discord.Client();

robot.login("NDMzNzI2NTMxNTUwODM4Nzg5.DbAFOw._cmsVxdWHC5OTnY_azsXE97qudE");

robot.on('message',(message) => {
    if(message.content == "торт2") {
        message.channel.send("Да, я люблю торты!");
    }
});