let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.caliph.biz.id/api/asupanloli?apikey=caliphkey', '', 'Tobat Ngent-', m)
}
handler.help = ['lolihentai2']
handler.tags = ['nsfw']
handler.command = /^(lolihentai2)$/i
handler.premium = true

module.exports = handler