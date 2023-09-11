let fetch = require('node-fetch')
let handler = async (m, { text, command, conn }) => {

  let response = await fetch(`https://api.zahwazein.xyz/searching/pinterest2?query=${text}&apikey=rembotku`)
  let image = await response.buffer()
  conn.sendFile(m.chat, image, 'pinterest.jpg',  wm, m)

}
handler.help = ['pinterest']
handler.tags = ['internet']
handler.command = /^(pin|pinterest)$/i
module.exports = handler