let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomimage/aesthetic?apikey=zenzkey_ea77676bf79b', '', '', m)
}
handler.help = ['aesthetic']
handler.tags = ['main']
handler.command = /^(aesthetic)$/i

module.exports = handler