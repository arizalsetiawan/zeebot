let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomimage/memeindo?apikey=rembotku', '', '', m)
}
handler.help = ['meme']
handler.tags = ['main']
handler.command = /^(meme)$/i

module.exports = handler