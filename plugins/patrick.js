let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = `https://api.lolhuman.xyz/api/sticker/patrick?apikey=Izumi123456`
  conn.sendFile(m.chat, res, 'patrick.jpg', `Nih kak`, m, false)
}
handler.help = ['patrick']
handler.tags = ['sticker']
handler.command = /^(patrick)$/i
handler.limit = false

module.exports = handler