let handler = async (m, { conn, text }) => {
    let yh = global.loli
    let url = yh[Math.floor(Math.random() * yh.length)]
    conn.sendButton(m.chat, '¡Aqui esta tu mazo!', 'TOP MAZOS: Gran desafio', url, [['🔁 SIGUIENTE 🔁', `#decksgd`]], m)
  }
  handler.command = /^(decksgd)$/i
  handler.tags = ['anime']
  handler.help = ['loli']
  export default handler
  
  global.loli = [
    "https://i.imgur.com/6QyrQCx.jpg",
    "https://i.imgur.com/3Es5X90.jpg",
    "https://i.imgur.com/jHBJXo6.jpg",
    "https://i.imgur.com/HRnt5HA.jpg",
    "https://i.imgur.com/v5TmuxG.jpg",
    "https://i.imgur.com/ajwjCwg.jpg",
    "https://i.imgur.com/YEY76V9.jpg",
    "https://i.imgur.com/eCMm7mm.jpg",
    "https://i.imgur.com/1Hr5ueg.jpg",
    "https://i.imgur.com/fce1xil.jpg",
    "https://i.imgur.com/WX50rlX.jpg",
    "https://i.imgur.com/0cHXdNa.jpg",
    "https://i.imgur.com/hLfFU0n.jpg",
    "https://i.imgur.com/OR2V5Zk.jpg",
    "https://i.imgur.com/7rodVBX.jpg",
    "https://i.imgur.com/OxEkmNS.jpg",
    "https://i.imgur.com/ZeAIWn5.jpg",
    "https://i.imgur.com/jaGNuFx.jpg",
    "https://i.imgur.com/R3J6xdy.jpg",
    "https://i.imgur.com/eCrywrO.jpg",
    "https://i.imgur.com/uOY9RS5.jpg",
    "https://i.imgur.com/iliErsK.jpg"
  ]