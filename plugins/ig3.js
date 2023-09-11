let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, usedPrefix, args, command, text }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
if (!args[0]) throw `Linknya?`
  let res = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=XGEN&url=${args[0]}`)
  let x = await res.json()
  m.reply('Tunggu Sebentar...')
  let cap = `Nih Kak Videonya >,<`
  conn.sendFile(m.chat, x.result.Normal_video, 'ig.mp4', cap, m)
}        
handler.command = handler.help = ['ig3','igdl3']
handler.tags = ['downloader']
module.exports = handler
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}