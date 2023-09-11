const moment = require("moment-timezone");
const fs = require("fs");
const fetch = require("node-fetch");
const jimp = require("jimp");
const PhoneNumber = require("awesome-phonenumber");
let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix: _p, __dirname, text, command }) => {
let name = await conn.getName(m.sender)
let ucpn = `${ucapan()}`

    // Time
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh}:${wibm}:${wibs}`
   
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

// Kata
let kata = `${pickRandom('Semangat!', 'Jangan menyerah!')}`
let dann = `Hai ${name}\n\n
*MENAMPILKAN TAMPILAN MENU*

┏━━━『 *tools* 』━━━◧
┣».ai2
┣».aiturbo
┣».anonfiles
┣».apk [search]
┣».buggc
┣».bugmenu
┣».cartoon 
┣».codstalk 
┣».aidraw 
┣».del 
┣».delete 
┣».font [text]
┣».styletext [text]
┣».infogempa 
┣».gempa 
┣».gitclone 
┣».stalkff 
┣».enhancer
┣».hdr
┣».colorize
┣».jadibot 
┣».jadikatalog
┣».jadilokasi
┣».kalkulator
┣».listbuggc
┣».mlstalk 
┣».mycontact 
┣».ngl  
┣».npmsearch
┣».encrypt
┣».ocr 
┣».totext 
┣».payment
┣».pembayaran
┣».presetmenu
┣».qr 
┣».qrcode 
┣».rate
┣».readmore 
┣».remini 
┣».renungan 
┣».resize 
┣».santet
┣».q 
┣».sendbug 
┣».sendtroli 
┣».spamcall 
┣».status
┣».statusbot
┣».berhenti
┣».stopjadibot
┣».tinyurl 
┣».upload [reply|media]
┣».tourl [reply|media]
┣».translate
┣».ceknomor
┣».truecaller
┣».tts 
┣».wait [caption|reply]
┣».wastalk
┣».weather
┣».whois
┣».whoislookup
┣».yts [pencarian]
┣».ytsearch [pencarian]
┣».ytstalk [channel]
┣».youtubestalk [channel
┣».zodiac *2005 16 25*
┗━━━━━━━━━━━━━━━━◧`
let menu = [
    '😱'
    ]
    conn.sendMessage(m.chat, {
text: dann,
contextInfo: {
externalAdReply: { showAdAttribution: true, 
title: ucapan() + ' ' + name,
body: 'bodynya',
thumbnailUrl: "https://telegra.ph/file/18a75d60cb3f91faf043d.jpg",
sourceUrl: "https://chat.whatsapp.com/CigZCYRcG2tCFP3ZvuQY1R",
mediaType: 1,
renderLargerThumbnail: true,
}}}, { quoted: m})
conn.sendFile(m.chat, './mp3/dann.mp3', '', null, m, true, { type: "audioMessage", ptt: true, fileLength: 88738 })
}
handler.help = ['menutools']
handler.tags = ['main']
handler.command = /^(menutools|toolsmenu)$/i
handler.register = true

module.exports = handler

// Function

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years️*\n',  mo, ' *Month*\n', d, ' *Days*\n', h, ' *Hours*\n', m, ' *Minute*\n', s, ' *Second*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Dini kak"
  if (time >= 4) {
    res = "Pagi kak"
  }
  if (time >= 10) {
    res = "Siang kak"
  }
  if (time >= 15) {
    res = "Sore kak"
  }
  if (time >= 18) {
    res = "Malam kak"
  }
  return res
}