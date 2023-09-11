let fetch = require('node-fetch')
let axios = require('axios')
let handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktok.com/xxxx`
 let res = await fetch(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=Izumi123456&url=${args[0]}`)
let data = await res.json()
let json = data.result

m.reply('tunggu sebentar ya kak...')
await conn.sendFile(m.chat, json, 'tiktok.mp3', null, m, true, {
type: 'audioMessage',  
ptt: false, seconds: 0,contextInfo: { 
forwardingScore: fsizedoc, 
externalAdReply: { 
body: null, 
containsAutoReply: true, 
mediaType: 1, 
mediaUrl: sig, 
renderLargerThumbnail: true, 
showAdAttribution: true, 
sourceId: null, 
sourceType: 'PDF', 
previewType: 'PDF', 
sourceUrl: null, 
 thumbnailUrl: sgc,
 title: json.username }}})
}
handler.help = ['tiktokmp3'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tikaudio|tiktokmp3|ttdlmp3|ttmp3|tiktokdlmp3|gettt)$/i
module.exports = handler