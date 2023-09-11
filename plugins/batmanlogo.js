let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Text'
  m.reply('Tunggu Sebentar...')
  let res = `https://api.betabotz.org/api/textpro/batman-logo?text=${response[0]}&apikey=Izumi79109`
  conn.sendFile(m.chat, res, 'batman-logo.jpg', `Nih kak`, m, false)
}
handler.help = ['badmanlogo'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(badmanlogo)$/i
handler.limit = false

module.exports = handler