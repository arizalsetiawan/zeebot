let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.betabotz.org/api/nsfw/neko?apikey=Izumi09', '', 'Sange kok sama gambar', m)
}
handler.help = ['neko']
handler.tags = ['nsfw']
handler.command = /^(neko)$/i
handler.premium = true

module.exports = handler