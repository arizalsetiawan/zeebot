/*
     * ZXcoderiD Official
     * Instagram: @ZXcoderiDalwaysalone
*/

const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let { platform } = require('node:process')
let os = require('os')

let tags = {
  'rpgabsen': '𝙍𝙋𝙂∼𝘼𝘽𝙎𝙀𝙉',
  'rpg': '𝙍𝙋𝙂',
  'game': '𝙂𝘼𝙈𝙀',
  'xp': '𝙀𝙓𝙋&𝙇𝙄𝙈𝙄𝙏',
  'asupan': '𝘼𝙎𝙐𝙋𝘼𝙉',
  'sticker': '𝙎𝙏𝙄𝙆𝙀𝙍',
  'main': '𝙈𝘼𝙆𝙀𝙍',
  'kerang': '𝙆𝙀𝙍𝘼𝙉𝙂 𝘼𝙅𝘼𝙄𝘽',
  'quotes': '𝙌𝙐𝙊𝙏𝙀𝙎',
  'admin': '𝘼𝘿𝙈𝙄𝙉',
  'group': '𝙂𝙍𝙊𝙐𝙋',
  'internet': '𝙎𝙀𝘼𝙍𝘾𝙃',
  'anonymous': '𝘼𝙉𝙊𝙉𝙔𝙈𝙊𝙐𝙎',
  'downloader': '𝘾𝙊𝙉𝙑𝙀𝙍𝙏𝙀𝙍',
  'berita': '𝙉𝙀𝙒𝙎',
  'tools': '𝙏𝙊𝙊𝙇𝙎',
  'fun': '𝙁𝙐𝙉',
  'database': '𝘿𝘼𝙏𝘼𝘽𝘼𝙎𝙀', 
  'vote': '𝙑𝙊𝙏𝙄𝙉𝙂',
  'absen': '𝘼𝘽𝙎𝙀𝙉',
  'catatan': '𝘾𝘼𝙏𝘼𝙏𝘼𝙉',
  'jadian': '𝙅𝘼𝘿𝙄𝘼𝙉',
  'islami': '𝙄𝙎𝙇𝘼𝙈𝙄',
  'owner': '𝙊𝙒𝙉𝙀𝙍',
  'advanced': '𝙇𝘼𝙉𝙅𝙐𝙏𝘼𝙉',
  'info': '𝙄𝙉𝙁𝙊',
  'audio': '𝘼𝙐𝘿𝙄𝙊',
  'maker': '𝙈𝘼𝙆𝙀𝙍',
  'nsfw': '𝙉𝙎𝙁𝙒 (+18)'
}
const defaultMenu = {
  before: `
𝗛𝗮𝗶, %ucapan %name! 👋

✐𝙅𝙖𝙢 :
✯ %wib WIB
✯ %wita WITA
✯ %wit WIT
✯ 𝐇𝐚𝐫𝐢: %week
✯ 𝐓𝐚𝐧𝐠𝐠𝐚𝐥: %date

✐𝙈𝙚𝙢𝙤𝙧𝙮 : 
${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
✯ 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦: %platformInfo
✯ 𝐅𝐫𝐞𝐞 𝐌𝐞𝐦𝐨𝐫𝐲: %freemem
✯ 𝐓𝐨𝐭𝐚𝐥 𝐌𝐞𝐦𝐨𝐫𝐲: %totalmem
✯ 𝐑𝐮𝐧𝐭𝐢𝐦𝐞: %uptime (%muptime)
✯ 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞: %totalreg dari %rtotalreg

✐𝙍𝙋𝙂 :
✯ 𝐋𝐢𝐦𝐢𝐭: %limit
✯ 𝐋𝐞𝐯𝐞𝐥: %level
✯ 𝐗𝐏: %totalexp
%readmore`.trimStart(),
  header: '✐%category',
  body: '☞%cmd %islimit %isPremium',
  footer: '',
  after: `ᴄᴏᴘʏʀɪɢʜᴛ ʙʏ zᴇᴇʙoт-мᴅ`,
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    const dd = new Date('2023-01-01');
    const locales = 'en';
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)

// Platform Informasi
const platform = os.platform();
const arch = os.arch();
const release = os.release();
const totalMem = os.totalmem() / (1024 * 1024 * 1024);
const freeMem = os.freemem() / (1024 * 1024 * 1024);

// Platform
const platformInfo = `${platform}`;

// Informasi
const infomem = `Architecture ${arch}, ${release}`;

// Total Memori
const totalmem = `${totalMem.toFixed(2)} GB`;

// Free memori
const freemem = `${freeMem.toFixed(2)} GB`;

// Define the target date
   const targetDate = new Date('January 1, 2024 00:00:00');
// Define the current date
   const currentDate = new Date();
// Calculate the remaining time in milliseconds
   const remainingTime = targetDate.getTime() - currentDate.getTime();
// Convert milliseconds to days, hours, minutes, and seconds
   const seconds = Math.floor(remainingTime / 1000) % 60;
   const minutes = Math.floor(remainingTime / 1000 / 60) % 60;
   const hours = Math.floor(remainingTime / 1000 / 60 / 60) % 24;
   const days = Math.floor(remainingTime / 1000 / 60 / 60 / 24);
// Tampilkan Tahun Baru
    let dateCountdown = `${days} hari, ${hours} jam, ${minutes} menit, ${seconds} detik lagi menuju tahun baru!`;
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Ⓛ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, dateCountdown, wib, wit, wita, time, totalmem, totalreg, rtotalreg, platformInfo, freemem, infomem, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await m.reply('Tunggu Sebentar...')
// Fake Contact
const fcon = {
 key:
	 { fromMe: false,
	 participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "status@broadcast" } : {}) },
	 message: { "contactMessage": { "title":"sri","h": `haloo`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
	}
   await conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: '🚀️'  }}, { messageId: m.key.id })
conn.sendMessage(m.chat, {
text: text,
contextInfo: {
externalAdReply: { showAdAttribution: true, 
title: ucapan() + ' ' + name,
body: 'bodynya',
thumbnailUrl: "https://telegra.ph/file/18a75d60cb3f91faf043d.jpg",
sourceUrl: "https://chat.whatsapp.com/CigZCYRcG2tCFP3ZvuQY1R",
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: fcon})
      /**
await conn.sendFile(m.chat, 'https://telegra.ph/file/dc5a67d724b016574129b.jpg', 'menu.jpg', text, ftroli)**/
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = /^(allmenu|help2|\?)$/i

handler.register = true
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'ᴅɪɴɪ ᴋᴀᴋ!'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴘᴀɢɪ!'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ sɪᴀɴɢ!'
        } else if (hour_now >= '15' && hour_now <= '17') {
          ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ sᴏʀᴇ!'
        } else if (hour_now >= '17' && hour_now <= '18') {
          ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴘᴇᴛᴀɴɢ!'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'ᴍᴀʟᴀᴍ ᴋᴀᴋ!'
        } else {
          ucapanWaktu = 'sᴇʟᴀᴍᴀᴛ ᴍᴀʟᴀᴍ!'
        }	
        return ucapanWaktu
}