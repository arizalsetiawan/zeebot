let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args, text, command, usedPrefix }) => {
let tagnya = `@${m.sender.split`@`[0]}`
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://www.instagram.com/xxxx`
try {
let res = await fetch(`https://xzn.wtf/api/igdl?url=${args[0]}&apikey=IzumiMD`)
let json = await res.json()

await conn.sendFile(m.chat, json.media, 'instagram.mp4', 'ini sayang', m)
} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
} 
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ig|instagram|igdl)$/i

module.exports = handler