const { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } =require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `🚩 Use example ${usedPrefix}${command} naruto blue bird`
  let vid = (await youtubeSearch(text)).video[0]
  await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })  
  if (!vid) throw 'Tidak di temukan, coba untuk membalikkan judul dan author nya'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
let vap = `╭──── 〔 𝗬 𝗢 𝗨 𝗧 𝗨 𝗕 𝗘 〕
• 𝗝𝘂𝗱𝘂𝗹: ${title}

• 𝗗𝘂𝗿𝗮𝘀𝗶: ${durationH}
• 𝗩𝗶𝗲𝘄𝘀: ${viewH}
• 𝗨𝗽𝗹𝗼𝗮𝗱: ${publishedTime}
• 𝗟𝗶𝗻𝗸: ${url}

⏳𝗠𝘂𝘀𝗶𝗸 𝗱𝗮𝗹𝗮𝗺 𝗽𝗲𝗻𝗴𝗶𝗿𝗶𝗺𝗮𝗻,
𝗺𝗼𝗵𝗼𝗻 𝘁𝘂𝗻𝗴𝗴𝘂 𝗵𝗶𝗻𝗴𝗴𝗮 𝘀𝗲𝗹𝗲𝘀𝗮𝗶.
╰────────⬣
`
conn.sendMessage(m.chat, {
text: vap,
contextInfo: {
externalAdReply: {
title: title,
thumbnailUrl: thumbnail,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  const yt = await await youtubedlv2(url).catch(async _ => await youtubedl(url)).catch(async _ => await youtubedlv3(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: "© ZeeBot MD V.1.4.1",
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }
  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play$/i

handler.exp = 0
handler.limit = true
module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}