let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/ahegao?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['ahegao']
handler.tags = ['nsfw']
handler.command = /^(ahegao)$/i
handler.premium = true

module.exports = handler