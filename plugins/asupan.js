let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://api.zahwazein.xyz/randomasupan/asupantiktok?apikey=rembotku', 'asupan.mp4', '2023 © ZeeBot-MD', m)
}
handler.help = ['asupan']
handler.tags = ['asupan']

handler.command = /^(asupan)$/i
handler.premium = false
handler.register = true
handler.limit = 5
module.exports = handler