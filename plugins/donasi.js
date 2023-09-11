let fs = require('fs')
let handler = async (m, { conn, args, command }) => {
let qris = 'https://telegra.ph/file/18a75d60cb3f91faf043d.jpg'
let dann =
`
┏━━━ꕥ〔 *${global.wm2}* 〕ꕥ━⬣ 
┃Dana: 085200808240
┃Pulsa: 085200808240 ( Telkomsel )
┃Gopay: 085200808240
┗━━━ꕥ
`
 await conn.sendFile(m.chat, qris, 'qris.jpg', `${dann}`, m)
}

handler.help = ['donasi']
handler.tags = ['info', 'main']
handler.command = /^(donasi|donate)$/i
module.exports = handler