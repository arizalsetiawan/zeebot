let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/gangbang?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['gangbang']
handler.tags = ['nsfw']
handler.command = /^(gangbang)$/i
handler.premium = true

module.exports = handler