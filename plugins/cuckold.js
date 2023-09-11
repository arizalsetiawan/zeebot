let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/cuckold?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['cuckold']
handler.tags = ['nsfw']
handler.command = /^(cuckold)$/i
handler.premium = true

module.exports = handler