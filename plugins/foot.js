let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/foot?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['foot']
handler.tags = ['nsfw']
handler.command = /^(foot)$/i
handler.premium = true

module.exports = handler