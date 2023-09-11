let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/masturbation?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['masturbation']
handler.tags = ['nsfw']
handler.command = /^(masturbation)$/i
handler.premium = true

module.exports = handler