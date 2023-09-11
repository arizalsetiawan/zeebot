let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/blowjob?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['blowjob']
handler.tags = ['nsfw']
handler.command = /^(blowjob)$/i
handler.premium = true

module.exports = handler