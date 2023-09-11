let fetch = require('node-fetch')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .pencil'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await (await fetch(`https://api.lolhuman.xyz/api/editor/pencil?apikey=Izumi123456&img=${url}`)).buffer()
await conn.sendFile(m.chat, hasil, '', '2023 © zᴇᴇʙoт-мᴅ', m)
	
}
handler.help = ['pencil']
handler.tags = ['maker']
handler.command = /^(pencil)$/i
handler.limit = true

module.exports = handler