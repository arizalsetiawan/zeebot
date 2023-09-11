let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/femdom?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['femdom']
handler.tags = ['nsfw']
handler.command = /^(femdom)$/i
handler.premium = true

module.exports = handler