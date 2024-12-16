const config = require('../config');
const {cmd , commands} = require('../command');
const axios = require('axios')


cmd({

    pattern: "modapk",
   alias: ["dlapk","apkdl"],
    desc: "Download apk.",

    category: "download",

    filename: __filename

},

async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

try {

await m.react("📦")

      

const apiUrl = `https://androidapksfree.com/?s=${q}`;

const response = await axios.get(apiUrl);

const data = response.data;

let step1 = data.datalist.list[0].size % 1000000

let step2 = `.` + step1

let step3 = data.datalist.list[0].size / 1000000

let correctsize = step3 - step2

    

let desc = `

*➴🧚‍♂️𝗦𝗨𝗛𝗔𝗦-𝗠𝗗 𝗔𝗣𝗞 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥🧚‍♂️➶*

*📦 SUHAS-MD APK Details 📦*

*🏷️ Nᴀᴍᴇ :* ${data.datalist.list[0].name}

*📦 Sɪᴢᴇ :* ${correctsize}MB

*🔖 Pᴀᴄᴋᴀɢᴇ :* ${data.datalist.list[0].package}

*📆 Lᴀꜱᴛ Uᴘᴅᴀᴛᴇ :* ${data.datalist.list[0].updated}

*👤 Dᴇᴠᴇʟᴏᴘᴇʀꜱ :* ${data.datalist.list[0].developer.name}\n\n\n> *© 𝙿𝚘𝚠𝚎𝚛𝚍 𝙱𝚢 🧚‍♂️⃝𝚂𝚄𝙷𝙰𝚂-𝙼𝙳 𝚅8 💕⃟*`

await conn.sendMessage(from,{image: {url: data.datalist.list[0].icon},caption: desc},{quoted: mek})

await conn.sendMessage(from,{document: {url: data.datalist.list[0].file.path_alt},fileName: data.datalist.list[0].name + ".apk",mimetype: 'application/vnd.android.package-archive',caption: ``},{quoted: mek})

        

await m.react("✅")

}catch(e){

console.log(e)

reply(`${e}`)

}

})

