let fetch = require('node-fetch')
let handler = async (m, { text, command, conn }) => {

  if (!text) throw 'Masukan teks untuk diubah menjadi gambar'

  let response = await fetch(`https://api.botcahx.live/api/search/openai-image?text=${encodeURIComponent(text)}&apikey=kondolodon`)
  let image = await response.buffer()
  conn.sendFile(m.chat, image, 'aiimg.jpg',  wm, m)

}
handler.help = ['imageai']
handler.tags = ['fun']
handler.command = /^(img|imgai|imageai)$/i
module.exports = handler