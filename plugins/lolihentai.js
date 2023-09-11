let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=Izumi123456', '', 'Tobat Ngent-', m)
}
handler.help = ['lolihentai']
handler.tags = ['nsfw']
handler.command = /^(lolihentai)$/i
handler.premium = true

module.exports = handler