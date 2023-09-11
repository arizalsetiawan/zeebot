let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/bdsm?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['bdsm']
handler.tags = ['nsfw']
handler.command = /^(bdsm)$/i
handler.premium = true

module.exports = handler