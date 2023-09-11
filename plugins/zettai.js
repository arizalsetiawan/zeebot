let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/zettairyouiki?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['zettai']
handler.tags = ['nsfw']
handler.command = /^(zettai)$/i
handler.premium = true

module.exports = handler