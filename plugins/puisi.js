let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://api.lolhuman.xyz/api/random/puisi?apikey=Izumi123456')
  let puisi = await url.json()
let hasil = `
*Powered By ZeeBot*

${puisi.result}
`.trim()

  m.reply(hasil)
}
handler.help = ['puisi']
handler.tags = ['internet']
handler.command = /^puisi$/i
handler.limit = true

module.exports = handler