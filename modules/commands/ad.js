module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "",
  description: "Kiểm tra thông tin admin .",
  commandCategory: "Admin",
  usages: "adm",
  cooldowns: 0,
  dependencies: {
    "request":"",
    "fs-extra":"", 
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/HDXcUN2.mp4",
"https://i.imgur.com/lzIZXcf.jpg"
    
  ];
  var callback = () => api.sendMessage({body:`🌺梁ADMIN梁🌺
  👀 Tên: 𝑵𝒈𝒖𝒚𝒆̂̃𝒏 𝑯𝒖̛̃𝒖 𝑻𝒓𝒊𝒏 (Trình)
💮 Biệt danh: Không có
❎ Tuổi: 20xx
👤 Giới tính: Nam
💘 Mối quan hệ: ế lòi con cu
🌎 Quê quán: ??
👫 Gu: Ghệ đích bự
🌸 Tính cách: trung thực 100%
🌀 Sở thích: đạo dụ
💻Contact💻
☎ SĐT&Zalo:09167?????
🌐 https://www.facebook.com/htrin.1905
✉️ Email:huutrinnguyen@gmail.com
🌸Lưu ý : 『 𝙆𝙝ô𝙣𝙜 𝙨𝙥𝙖𝙢 𝙗𝙤𝙩,𝙆𝙝ô𝙣𝙜 𝙘𝙝ử𝙞 𝙗𝙤𝙩,𝙆𝙝ô𝙣𝙜 𝙠𝙞𝙘𝙠 𝙗𝙤𝙩 𝙩ù𝙮 𝙩𝙞ệ𝙣 𝙠𝙞𝙘𝙠 𝙣𝙝ớ 𝙣ó𝙞 𝙖𝙙𝙢,𝙎𝙥𝙖𝙢 𝙗𝙤𝙩 𝙩ự 𝙗𝙖𝙣,𝙆𝙝ô𝙣𝙜 𝙧𝙚𝙥𝙤𝙧𝙩 𝙖𝙘𝙘 𝙗𝙤𝙩』
`,attachment: fs.createReadStream(__dirname + "/cache/5.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.mp4")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.mp4")).on("close",() => callback());
   };
