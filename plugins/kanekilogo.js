let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
   if (!args[0]) return m.reply('masukkan text\n\nContoh: .kanekilogo izumi')
   m.reply('Tunggu Sebentar...')
  let res = `https://api-xcoders.site/api/maker/kaneki?text=${response[0]}&apikey=QlIqlETx5XzRWBk`
  conn.sendFile(m.chat, res, 'kaneki.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['kanekilogo'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(kanekilogo)$/i

module.exports = handler