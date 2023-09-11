let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tagnya = `@${m.sender.split`@`[0]}`
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} 108033165,ambil id nya saja di link nya`
try {
let res = await fetch(`https://api.lolhuman.xyz/api/pixivdl/${args[0]}?apikey=Izumi123456`)
let data = await res.json()
let json = data.result

let done = `
ID : ${json.id},
Title : ${json.title}
`
await m.reply(done)
await conn.sendFile(m.chat, json.images, 'pixivdl.mp4', 'ini sayang', m)
} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['pixiv'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(pixiv)$/i

module.exports = handler