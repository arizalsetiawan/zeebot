let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tagnya = `@${m.sender.split`@`[0]}`
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktok.com/xxxx`
try {
let res = await fetch(`https://api.botcahx.live/api/dowloader/tiktok?url=${args[0]}&apikey=kondolodon`)
let data = await res.json()
let json = data.result

let done = `
Username : ${json.username},
Deskripsi : ${json.description}
`
await m.reply(done)
await conn.sendFile(m.chat, json.video2, 'tiktok.mp4', 'ini sayang', m)
} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttdl|tiktok|tiktokdl|tiktokdownload|tt|tiktokvid|ttvid)$/i

module.exports = handler