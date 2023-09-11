let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.zahwazein.xyz/api/morensfw/maid?apikey=rembotku', '', 'Tobat Ngent-', m)
}
handler.help = ['maid']
handler.tags = ['nsfw']
handler.command = /^(maid)$/i
handler.premium = true

module.exports = handler