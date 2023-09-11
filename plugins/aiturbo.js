let fetch = require('node-fetch')
let handler = async (m, { text,  usedPrefix,  command }) => {
    if (!text) throw 'Mau nanya apa?'
let dann = await fetch(`https://api.lolhuman.xyz/api/openai-turbo?apikey=Izumi123456&text=${text}`)
let hasil = await dann.json()
 m.reply(`${hasil.result}`.trim())
    }  
handler.help = ['ai2', 'aiturbo']
handler.tags = ['internet','tools']
handler.command = /^ai(turbo|2)$/i
module.exports = handler