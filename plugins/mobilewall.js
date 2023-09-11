let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/mobilewall?apikey=rembotku', '', 'Nih Asu', m)
}
handler.help = ['mobilewall']
handler.tags = ['nsfw']
handler.command = /^(mobilewall)$/i
handler.premium = false

module.exports = handler