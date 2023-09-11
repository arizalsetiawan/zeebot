var fetch = require('node-fetch');
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* Siapa presiden Indonesia? `
await m.reply(wait)
  var apii = await fetch(`https://api.betabotz.org/api/search/openai-logic?text=${text}?&logic=aku%20ZeeBot%20ai%20yang%20dibuat%20oleh%20Arzee%20namaku%20ZeeBot%20ai&apikey=Arzee`)
  var js = await apii.json()
  await m.reply(js.message)
}
handler.help = ['openai']
handler.tags = ['fun']
handler.command = /^(chat|ai|openai)$/i
handler.premium = false

module.exports = handler