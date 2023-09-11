let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/kayes?apikey=rembotku', 'asupan.mp4', 'Nih kak\n2023 © ZeeBot MD', m)
}
handler.help = ['kayes']
handler.tags = ['asupan']

handler.command = /^(kayes)$/i
handler.premium = false
handler.register = true
handler.limit = 1
module.exports = handler