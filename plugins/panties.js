let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/panties?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['panties']
handler.tags = ['nsfw']
handler.command = /^(panties)$/i
handler.premium = true

module.exports = handler