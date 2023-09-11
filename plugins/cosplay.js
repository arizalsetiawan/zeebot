let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomimage/cosplay?apikey=rembotku', '', '', m)
}
handler.help = ['cosplay']
handler.tags = ['maker']
handler.command = /^(cosplay)$/i

module.exports = handler