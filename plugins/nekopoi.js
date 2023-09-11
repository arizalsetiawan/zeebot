let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tagnya = `@${m.sender.split`@`[0]}`
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://nekopoi.care/xxxx`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/nekopoi?apikey=Izumi123456&url=${args[0]}`)
let data = await res.json()
let json = data.result

let done = `
Title : ${json.title},
Sinopsis : ${json.sinopsis},
Genre : ${json.genre},
Link : ${json.720p.ZippyShare}

`
await m.reply(done)
await conn.sendFile(m.chat, json.thumbnail, 'nekopoi.jpg', `${done}`, m)
} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['nekopoi'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(nekopoi)$/i

module.exports = handler