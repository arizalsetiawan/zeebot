let scrap = require("../lib/scraper_pinterest")
let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (command == 'akira') {
scrap.pinterest("Akira","Anime Akira", "akira", "Akira Anime").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'akiyama') {
scrap.pinterest("Akiyama","Anime Akiyama", "akiyama", "Akiyama Anime").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'anna') {
scrap.pinterest("Anna","Anime Anna", "anna", "Anna Anime","anime anna").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'asuna') {
scrap.pinterest("Asuna","Anime Asuna", "asuna", "Asuna Anime","anime asuna","Random Anime Asuna").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'ayuzawa') {
scrap.pinterest("Ayuzawa","Anime Ayuzawa", "ayuzawa", "Ayuzawa Anime","anime ayuzawa","Random Anime Ayuzawa").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'boruto') {
scrap.pinterest("Boruto","Anime Boruto", "boruto", "Boruto Anime","anime boruto","Random Boruto").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'chitanda') {
scrap.pinterest("Chitanda","Anime Chitanda", "chitanda", "chitanda Anime","anime chitanda","Random Chitanda").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'chitoge') {
scrap.pinterest("Chitoge","Anime Chitoge", "chitoge", "Chitoge Anime","anime chitoge","Random Anime Chitoge").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'deidara') {
scrap.pinterest("Deidara","Anime Deidara", "deidara", "Deidara Anime","anime deidara","Random Deidara").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'doraemon') {
scrap.pinterest("Doraemon","Anime Doraemon", "doraemon", "Doraemon Anime","anime doraemon","Random Doraemon").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'elaina') {
scrap.pinterest("Elaina","Anime Elaina", "elaina", "Elaina Anime","anime elaina","Random Elaina").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'emilia') {
scrap.pinterest("Emelia","Anime Emelia", "emelia", "Emelia Anime","anime Emelia","Random Re:zero emelia").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'asuna') {
scrap.pinterest("Asuna","Anime Asuna", "asuna", "Asuna Anime","anime asuna","Random SAO Asuna").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'erza') {
scrap.pinterest("erza","Anime Erza", "erza", "Erza Anime","anime Erza","Random Anime Erza").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'gremory') {
scrap.pinterest("Geremory","Anime Gremory", "gremory", "Gremory Anime","anime gremory").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'hestia') {
scrap.pinterest("Hestia","Anime Hestia", "hestia", "Hestia Anime","anime Hestia").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'hinata') {
scrap.pinterest("Hinata","Anime Hinata", "hinata", "Hinata Anime","anime hinata","Random Hinata").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'inori') {
scrap.pinterest("Inori","Anime Inori", "inori", "Inori Anime","anime Inori","Random Inori").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'isuzu') {
scrap.pinterest("Isuzu","Anime Isuzu", "isuzu", "Isuzu Anime","anime isuzu","Random Isuzu").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'itachi') {
scrap.pinterest("Itachi","Anime Itachi", "itachi", "Itachi Anime","anime itachi","Random Itachi").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'itori') {
scrap.pinterest("Itori","Anime Itori", "itori", "Itori Anime","anime itori","Random Itori").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'kaga') {
scrap.pinterest("Kaga","Anime Kaga", "kaga", "Kaga Anime","anime kaga","Random Anime Kaga").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'kagura') {
scrap.pinterest("Kagura","Kagura ML", "kagura", "Ml Kagura","Random Kagura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'kakasih') {
scrap.pinterest("Kakashi","Anime Kakashi", "kakashi", "Kakashi Anime","anime kakashi","Random Kakashi").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'kaori') {
scrap.pinterest("kaori","Anime Kaori", "kaori", "Kaori Anime","Random Kaori").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'kosaki') {
scrap.pinterest("Kosaki","Anime Kosaki", "kosaki", "Kosaki Anime","random Kosaki").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'kotori') {
scrap.pinterest("Kotori","Anime Kotori", "kotori", "Kotori Anime","Random Kotori").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'kuriyama') {
scrap.pinterest("Kuriyama","Anime Kuriyama", "kuriyama", "Kuriyama Anime","Random Kuriyama").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'kuroha') {
scrap.pinterest("Kuroha","Anime Kuroha", "kuroha", "Kuroha Anime","Random Kuroha").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'kurumi') {
scrap.pinterest("Kurumi","Anime Kurumi", "kurumi", "Kurumi Anime","Random Kurumi").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'loli') {
scrap.pinterest("loli","Anime Loli", "loli", "Loli Anime","Random Loli").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'madara') {
scrap.pinterest("Madara","Anime Madara", "madara", "Madara Anime","Random Madara").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'mikasa') {
scrap.pinterest("Mikasa","Anime Mikasa", "mikasa", "Mikasa Anime","Random Mikasa").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'miku') {
scrap.pinterest("Nakano Miku","Anime Nakano Miku", "nakano miku", "Nakano Miku Anime","Random Nakano miku").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'minato') {
scrap.pinterest("Minato","Anime Minato", "minato", "Minato Anime","Random Minato").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'naruto') {
scrap.pinterest("Naruto","Anime Naruto", "naruto", "Naruto Anime","Random Naruto").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'natsukawa') {
scrap.pinterest("Natsukawa","Anime Natsukawa", "natsukawa", "Natsukawa Anime","Random Natsukawa").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'neko2') {
scrap.pinterest("Anime Neko", "Neko Anime","Random Anime Neko").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'nekohime') {
scrap.pinterest("Nekohime","Anime Nekohime", "nekohime", "Nekohime Anime","Random Nekohime").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'nezuko') {
scrap.pinterest("Nezuko","Anime Nezuko", "nezuko", "Nezuko Anime","Random Nezuko KNY").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'nishimiya') {
scrap.pinterest("Nishimiya","Anime Nishimiya", "nishimiya", "Nishimiya Anime","Random Nishimiya").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'onepiece') {
scrap.pinterest("One Piece","Anime One Piece", "One Piece", "One Piece Anime","Random One Piece").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'pokemon') {
scrap.pinterest("Pokemon","Anime Pokemon", "pokemon", "Pokemon Anime","Random pokemon").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'rem') {
scrap.pinterest("Rem","Anime Rem", "rem", "Rem Anime","Random Rem").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'rize') {
scrap.pinterest("Rize","Anime Rize", "rize", "Rize Anime","Random Rize").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'sagiri') {
scrap.pinterest("Sagiri","Anime Sagiri", "sagiri", "Sagiri Anime","Random Anime Sagiri").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'sakura') {
scrap.pinterest("Sakura","Anime Sakura", "sakura", "Sakura Anime","Random Anime Sakura").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'sasuke') {
scrap.pinterest("Sasuke","Anime Sasuke", "sasuke", "Sasuke Anime","Random Anime Sasuke").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'shina') {
scrap.pinterest("Shina","Anime Shina", "shina", "Shina Anime","Random Anime Shina").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'shinka') {
scrap.pinterest("Shinka","Anime Shinka", "shinka", "Shinka Anime","Random Anime Shinka").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'shizuka') {
scrap.pinterest("Shizuka","Anime Shizuka", "shizuka", "Shizuka Anime","anime shizuka").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'shota') {
scrap.pinterest("Anime Shota","Random anime Shota").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'tomori') {
scrap.pinterest("Tomodi","Anime Tomodi", "tomori", "Tomori Anime","Random Anime Tomori").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'toukachan') {
scrap.pinterest("toukachan","Anime Toukachan", "Toukachan", "Random Anime Toukachan").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'tsunade') {
scrap.pinterest("Tsunade","Anime Tsunade", "tsunade", "Tsunade Anime","Random anime Tsunade").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'yatogami') {
scrap.pinterest("Yatogami","Anime Yatogami", "yatogami", "Yatogami Anime","Random Anime Yatogami").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
if (command == 'yuki') {
scrap.pinterest("Yuki","Anime Yuki", "yuki", "Yuki Anime","Random Anime Yuki").then(a => a[Math.floor(Math.random() * a.length)]).then(b => conn.sendFile(m.chat,b,b,"Done",m))
}
}
handler.command = handler.help = [
'akira', 
'akiyama', 
'anna', 
'asuna', 
'ayuzawa', 
'boruto', 
'chitanda', 
'chitoge', 
'deidara', 
'doraemon', 
'elaina', 
'emilia', 
'asuna', 
'erza', 
'gremory', 
'hestia', 
'hinata', 
'inori', 
'itachi', 
'isuzu', 
'itori', 
'kaga', 
'kagura', 
'kakasih', 
'kaori', 
'kaneki', 
'kosaki', 
'kotori', 
'kuriyama', 
'kuroha', 
'kurumi', 
'madara', 
'mikasa', 
'miku', 
'minato', 
'naruto', 
'natsukawa', 
'neko2', 
'nekohime', 
'nezuko', 
'nishimiya', 
'onepiece', 
'pokemon',
'rem', 
'rize',
'sagiri',
'sakura', 
'sasuke',
'shina',
'shinka',
'shizuka',
'shota',
'tomori',
'toukachan',
'tsunade',
'yatogami',
'yuki'
]
handler.tags = ['maker']

module.exports = handler