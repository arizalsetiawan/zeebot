let fetch = require('node-fetch')
let axios = require('axios')
let uploadImage = require('../lib/uploadImage.js')

let handler = async (m, { conn, usedPrefix, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'Kirim/Reply Gambar dengan caption .whatanime'
m.reply('Tunggu Sebentar...')
let media = await q.download()
let url = await uploadImage(media)
let hasil = await fetch(`https://api.lolhuman.xyz/api/wait?apikey=Izumi123456&img=${url}`)
let data = await hasil.json()
let json = data.result

let done = `
AnilistID : ${json.anilist_id},
Episode : ${json.episode},
Menite: ${json.at}
Title : ${json.title_romaji},
Jepang: ${json.title_native},
Inggris: ${json.title_english}
`
await m.reply(done)
await conn.sendFile(m.chat, json.video, 'wait.mp4', 'maaf kalau salah kak :)', m)
	
}
handler.help = ['whatanime']
handler.tags = ['maker']
handler.command = /^(whatanime)$/i
handler.limit = true

module.exports = handler