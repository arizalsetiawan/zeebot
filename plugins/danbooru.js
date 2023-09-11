let fetch = require('node-fetch')
let handler = async (m, { text, command, conn }) => {

  let response = await fetch(`https://api.lolhuman.xyz/api/danbooru?apikey=Izumi123456&query=azur_lane`)
  let image = await response.buffer()
  conn.sendFile(m.chat, image, 'danbooru.jpg',  wm, m)

}
handler.help = ['danbooru']
handler.tags = ['internet']
handler.command = /^(danbooru)$/i
module.exports = handler