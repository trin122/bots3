const request = require('request');

const fs = global.nodemodule["fs-extra"]

module.exports.config = {

  name: "adbot",

  version: "1.0.0",

  hasPermssion: 0,

  credits: "SINGU-💌💌",

  description: "Kiểm tra thông tin adminbot",

  commandCategory: "Hệ Thống",

  usages: "adbot",

  cooldowns: 0,

  dependencies: {

"request": ""

}

};
module.exports.run = async({api,event,args,Users,global,Currencies}) => {

var callback = () => api.sendMessage(

  {body:`[💌]=== 『 INFORMATION ADMIN 』 ===[💌]
◆━━━━━━━━━━━━━━━━◆


[👀]➜ Tên: 𝐍𝐠𝐮𝐲𝐞̂̃𝐧 𝐇𝐮̛̃𝐮 𝐓𝐫𝐢𝐧 (trình)
[💮]➜ Biệt danh:  
[❎]➜ Ngày tháng năm sinh: 19/05/20xx
[👤]➜ Giới tính: Nam
[💘]➜ Mối quan hệ: Độc toàn thân
[🌎]➜ Quê quán: Sao Hoả 
[🌸]➜ Tính cách: Hòa đồng, năng nổ, dứt khoát, thân thiện và hài hước
[🌀]➜ Sở thích: GYM,Football,Chơi gái

[💌]=== 『 CONTACT 』 ===[💌]
◆━━━━━━━━━━━━━━━━◆

[👉]➜ Information: BOTSEGS 
[☎]➜ SĐT & Zalo: 086998xxxx
0[🌐]➜ Facebook: https://www.facebook.com/htrin.1905
[✉️]➜ Email: huutrinnguyen@gmail.com

[💌]=== 『 PROBLEM 』 ===[💌]
◆━━━━━━━━━━━━━━━━◆


[❗]➜ Mọi thắc mắc hay bot không hoạt động có thể hỏi trực tiếp admin hoặc dùng /callad
[📌]➜ Hãy đồng hành cùng BOT và mình nhé. Cảm ơn mọi người <3

✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏

[📝]➜ Bot được điều hành bởi admin bot`,

    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 

    fs.unlinkSync(__dirname + "/cache/1.png"));  

      return request(

        encodeURI(`https://graph.facebook.com/${100000194247253}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(

fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());

       };
