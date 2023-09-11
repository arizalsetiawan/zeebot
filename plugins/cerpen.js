let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch('https://api.lolhuman.xyz/api/cerpen?apikey=XGEN')
let json = await res.json()
let dann = `Judul: ${json.result.title}

Creator: ${json.result.creator}
Cerita: ${json.result.cerpen}
`.trim()

  m.reply(dann)
}
handler.help = ['cerpen']
handler.tags = ['internet']
handler.command = /^cerpen$/i
handler.limit = true

module.exports = handler