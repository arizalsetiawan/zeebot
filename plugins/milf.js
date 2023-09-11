let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/milf?apikey=Izumi123456', '', 'Tobat Ngent-', m)
}
handler.help = ['milf']
handler.tags = ['nsfw']
handler.command = /^(milf)$/i
handler.premium = true

module.exports = handler