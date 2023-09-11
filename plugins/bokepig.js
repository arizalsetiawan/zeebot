let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://saipulanuar.ga/api/bokepig', '', 'Tobat Ngent-', m)
}
handler.help = ['bokepig']
handler.tags = ['asupan']
handler.command = /^(bokepig)$/i
handler.premium = true

module.exports = handler