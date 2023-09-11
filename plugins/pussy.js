let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/pussy?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['pussy']
handler.tags = ['nsfw']
handler.command = /^(pussy)$/i
handler.premium = true

module.exports = handler