let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
	if (!text) throw `uhm.. mau download apa?\n\nContoh: ${usedPrefix + command} link xnxx`
	let user = global.db.data.users[m.sender]
	if (user.age < 18) throw 'umur kamu belum cukup dek!';
	try {
		let res = await fetch(`https://api.botcahx.live/api/download/xnxxdl?url=${text}&apikey=kondolodon`)
let data = await res.json()
let json = data.result

let done = `
*Title* : ${json.title},
*Keyword* : ${json.keyword}
`
await m.reply(done)
await conn.sendFile(m.chat, json.url, 'xnxxdl.mp4', 'hadehh tobat ngent-', m)
} catch (e) {
conn.reply(m.chat, 'Tidak dapat mengambil url', m)
throw e
}
}
handler.help = ["xnxxdl", "dlxnxx"].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(xnxxdl|dlxnxx)$/i
handler.register = true
handler.premium = false
handler.private = false

module.exports = handler