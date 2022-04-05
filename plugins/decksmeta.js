let handler = async (m, { conn, text }) => {
    let yh = global.loli
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, '¡Aqui esta tu mazo!', 'TOP MAZOS: Meta', url, [['🔁 SIGUIENTE 🔁', `#decksmeta`]], m)
  }
  handler.command = /^(decksmeta)$/i
  handler.tags = ['anime']
  handler.help = ['loli']
  export default handler
  
  global.loli = [
    "https://i.imgur.com/qDq4rpz.jpg",
    "https://i.imgur.com/thgy1S4.jpg",
    "https://i.imgur.com/wIz71Up.jpg",
    "https://i.imgur.com/ccRGxbr.jpg",
    "https://i.imgur.com/60repoV.jpg",
    "https://i.imgur.com/oV8Ve4i.jpg",
    "https://i.imgur.com/8xIyh9i.jpg",
    "https://i.imgur.com/ON8XwKt.jpg",
    "https://i.imgur.com/nvJqogg.jpg",
    "https://i.imgur.com/vQHIyTJ.jpg",
    "https://i.imgur.com/wBvSt2s.jpg",
    "https://i.imgur.com/DzAWDGf.jpg",
    "https://i.imgur.com/dAk86rd.jpg",
    "https://i.imgur.com/KpeNNTb.jpg",
    "https://i.imgur.com/sdJE8HU.jpg",
    "https://i.imgur.com/3eCkRQ5.jpg",
    "https://i.imgur.com/c3EAB5v.jpg",
    "https://i.imgur.com/LLv3NN1.jpg",
    "https://i.imgur.com/WZfgDBd.jpg",
    "https://i.imgur.com/fSYGWfO.jpg",
    "https://i.imgur.com/bRff7xl.jpg",
    "https://i.imgur.com/zj6S5gN.jpg",
    "https://i.imgur.com/9e36Asb.jpg",
    "https://i.imgur.com/PVnltLa.jpg",
    "https://i.imgur.com/A44RkS5.jpg",
    "https://i.imgur.com/xirEcG9.jpg",
    "https://i.imgur.com/Q2T9scB.jpg",
    "https://i.imgur.com/eF5rehw.jpg",
    "https://i.imgur.com/eOltehr.jpg"
  ]