let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  m.reply('Tunggu Sebentar...')
  let res = `https://api.botcahx.live/api/nsfw/gifs?apikey=kondolodon`
  conn.sendFile(m.chat, res, 'gifs.jpg', `Nih kak`, m, false)
}
handler.help = ['hentaigif']
handler.tags = ['nsfw']
handler.command = /^(hentaigif)$/i
handler.limit = false

module.exports = handler