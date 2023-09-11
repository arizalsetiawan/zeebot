let handler = async (m, { text }) => {
let dann = `*❏––––––『 𝐒𝐂𝐑𝐈𝐏𝐓 𝐁𝐎𝐓 』––––––❏*

Mau Buy Scriptnya? 
Hub Owner http://wa.me/6285200808240

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕
`.trim()

  m.reply(dann)
}
handler.help = ['cerpen']
handler.tags = ['internet']
handler.command = /^(sc|script|source(code))$/i
handler.limit = true

module.exports = handler