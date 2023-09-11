let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/ass?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['ass']
handler.tags = ['nsfw']
handler.command = /^(ass)$/i
handler.premium = true

module.exports = handler