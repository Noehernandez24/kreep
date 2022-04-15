import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let vn = './media/bot.mp3'

if (/^bot|hey bot|el bot|un bot|hola|ola|kreep|kreepbot|kreep bot|quien eres$/i.test(m.text)) {
    
conn.sendButton(m.chat, 'Hola, 👾¡Soy KreepBot!👾\n\nUn bot de Whatsapp con funcionalidades utiles e increibles, puedo crear stickers en segundos, descargar videos, musica, entre muchas cosas más!\n\nHaz click en el boton de abajo para ver la lista de comandos disponibles👇🏻', wm, [['𝙼𝙴𝙽𝚄 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂', `#comandos`]])
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, { 
    type: 'audioMessage',
     ptt: true
    })   
}
return !0
}
export default handler
