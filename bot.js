const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("514729634030551051")
setInterval(function() {
channel.send(`spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam spam `);
}, 25)
})
 
 
client.login('NTE0NzMyNjAwMzU5OTExNDI1.Dta2Rw.izKGV-KpIziAt4epr0XD_8XZfig');
if (message.startsWith("say") == true) {//Check if the message send starts with "say"
    var newMessage = message.replace("say ", "");//Making a variable where "say " is removed
    bot.sendMessage({to: channelID, message:newMessage})//Send the new variable.
}
