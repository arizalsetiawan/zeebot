let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/cum?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['cum']
handler.tags = ['nsfw']
handler.command = /^(cum)$/i
handler.premium = true

module.exports = handler