let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomimage/wallhp?apikey=zenzkey_ea77676bf79b', '', '', m)
}
handler.help = ['wallhp']
handler.tags = ['main']
handler.command = /^(wallhp)$/i

module.exports = handler