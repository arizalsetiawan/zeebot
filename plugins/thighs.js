let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/thighs?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['thighs']
handler.tags = ['nsfw']
handler.command = /^(thighs)$/i
handler.premium = true

module.exports = handler