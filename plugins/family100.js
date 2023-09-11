let fetch = require('node-fetch')
let winScore = 999
let timeout = 45000
let family100_api = [
    ['zein', '/entertainment/family100', null, 'APIKEY', json => {
        if (!json.status) throw json
        return json
    }],
    ['bg', '/family100', null, null, json => {
        if (!json.status) throw json
        return {
            soal: json.result.soal,
            jawaban: json.result.jawaban
        }
    }],
    ['https://raw.githubusercontent.com', '/BochilTeam/database/master/games/family100.json', null, null, json => {
        return json[Math.floor(Math.random * json.length)]
    }]
]
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', this.game[id].msg)
        throw false
    }

            let res = await fetch('https://api.zahwazein.xyz/entertainment/family100?apikey=rembotku')
  if (res.status !== 200) throw await res.text()
  let kata = await res.json()
  let json = kata.result
    let caption = `
*Soal:* ${json.soal},
Timeout *${(timeout / 1000).toFixed(2)} detik*,
Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} XP tiap jawaban benar
    `.trim()
    this.game[id] = {
        id,
        msg: await m.reply(caption),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
    setTimeout(() => {
    	conn.reply(m.chat, `Waktu habis!\nJawabannya adalah *${json.jawaban}*`, conn.game[id][0])
      delete conn.game[id]
    }, timeout)
}
handler.help = ['family100']
handler.tags = ['game']
handler.command = /^family100$/i

module.exports = handler