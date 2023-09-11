var fetch = require("node-fetch")
var handler = async (m, {
 text, 
 usedPrefix, 
 command
 }) => {
    if (!text) throw `Contoh:\n${usedPrefix + command} boobs`


await conn.sendMessage(m.chat, { react: { text: `🍑`, key: m.key }})
                                  if (!text) throw `${prefix + command} big boobs`
                                  
                                  let search = await fetch(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=Izumi123456&query=${text}`)
 let hasil = await search.json()
 let json = hasil.result

let teks = '*🎭 XNXX RESULTS 🎭* '+text+'\n\n'
                                  let no = 1
                                  for (let i of hasil.result) {
                                      teks += `🔵 No : ${no++}\n👽 title - ${json.title}\n🔄 Duration : ${json.duration}\n 🤤 URL - ${json.link}\n\n─────────────────\n\n`
                                  }
                                  conn.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/2069c1a468e24999dde71.jpg' },  caption: teks }, { quoted: m })
  }                                                    
handler.command = handler.help = ['xnxxsearch'];
handler.tags = ['internet'];
module.exports = handler;