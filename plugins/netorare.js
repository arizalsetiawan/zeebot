let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/netorare?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['netorare']
handler.tags = ['nsfw']
handler.command = /^(netorare)$/i
handler.premium = true

module.exports = handler