module.exports.config = {
    name: "noprefix",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "HTHB",
    description: "",
    commandCategory: "Hệ Thống",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "anlon.png")) request("https://i.imgur.com/fAMATtm.png").pipe(fs.createWriteStream(dirMaterial + "anlon.png"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = "100000194247253" {
                body: `phát hiện ${name} gửi link, tiến hành gửi về cho admin húp!`,
                attachment: fs.createReadStream(__dirname + `/noprefix/anlon.gif`)
            }
    if (event.body.toLowerCase() == "m.facebook.com"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "youtube.com"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "youtube.com/"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "https://facebook.com"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "https://youtu.be/"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
    }
