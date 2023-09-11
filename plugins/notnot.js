let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/notnot?apikey=rembotku', 'asupan.mp4', 'Nih kak\n2023 © ZeeBot-MD', m)
}
handler.help = ['notnot']
handler.tags = ['asupan']

handler.command = /^(notnot|ntnt)$/i
handler.premium = false
handler.register = true
handler.limit = 1
module.exports = handler