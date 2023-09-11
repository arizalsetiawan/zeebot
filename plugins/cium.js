let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let res = `https://api.lolhuman.xyz/api/random2/kiss?apikey=Izumi123456`
  conn.sendFile(m.chat, res, 'kiss.gif', `Nih kak`, m, false)
}
handler.help = ['cium']
handler.tags = ['sticker']
handler.customPrefix = /^(cium|.cium)/i
handler.limit = false

module.exports = handler