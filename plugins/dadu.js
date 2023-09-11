let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = `https://api.lolhuman.xyz/api/sticker/dadu?apikey=Izumi123456`
  conn.sendFile(m.chat, res, 'dadu.jpg', `Nih kak`, m, false)
}
handler.help = ['dadu']
handler.tags = ['sticker']
handler.command = /^(dadu)$/i
handler.register = false

module.exports = handler