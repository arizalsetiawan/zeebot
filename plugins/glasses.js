let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/glasses?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['glasses']
handler.tags = ['nsfw']
handler.command = /^(glasses)$/i
handler.premium = true

module.exports = handler