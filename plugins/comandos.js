let handler = async (m, { conn, command, usedPrefix }) => {
    let picture = './Menu2.jpg'
    let comandos =`
*👾Comandos del bot👾*
\n
〘 HERAMIENTAS PRINCIPALES 〙

➥ /alive - Verifica si el bot
funciona correctamente.
➥ /comandos - Muestra la lista de comandos.
➥ /play (Nombre de la canción) -
Descarga cualquier canción.
➥ /sticker (Responde a la foto o video)
- Crea un sticker de la foto dada, si
envia un video el bot le dara
un sticker animado.
➥ /image - Busca alguna imagem desde
Google Pictures (Ej: /image Minecraft).
➥ /wiki - Busca algo en Wikipedia.
➥ /igstalk (nombre de usuario) - Stalkea
un perfil en instagram.
➥ /del (responde a un mensaje del bot) -
Elimina el mensaje del bot al que respondas
➥ /spotify (Nombre de la canción) - 
Envia información y vista previa
de la canción en spotify.
➥ /tomp3 - Convierte mp4 a mp3
➥ /google - Busca algo en Google
➥ /donate - Dona para que el bot funcione las 24 horas del día.
➥ /gitclone (url) - Clona el repositorio y lo envia en formato .zip
➥ /ig (url) - Descarga cualquier video de Instagram.
➥ /pinterest (texto) - Descarga cualquier imagen de pinterest
➥ /uptime - Muestra el tiempo activo del bot.
➥ /lyrics (nombre de la canción) - Envia la letra de una canción.
➥ /toimg2 - Convierte un sticker a imagen.
➥ /ttp (texto) - Crea un sticker con el texto que quieras.
➥ /qrcode (texto) - Crea un codigo qr del texto.
➥ /spoiler - Comando para ocultar un spoiler
➥ /tts (texto) - Convierte texto a voz.
➥ /tourl - Sube tu imagen a telegraph.
➥ /afk - Luego de ejecutar el comando, contara el tiempo que este afk (sin enviar mensajes)
➥ /spamwa - Spamea hasta 50 mensajes con el texto que pongas a cualquier número. 
➥ /spamchat - Spamea 30 mensajes en un grupo. 
Haz click en el boton "FOR FUN" para ver comandos divertidos, o haz click en el boton "GROUP COMMANDS" para ver los comandos utilizables en grupos.
\n
Por favor, ten en cuenta que es un proyecto que
 aún está en desarrollo y puede contener fallas 🚧
 
 Unete al grupo de soporte del bot, donde podras solventar tus dudas:
 https://chat.whatsapp.com/I2Ykt6TerwD4yfarO2joOG
 `.trim()

 conn.sendHydrated(m.chat, comandos, wm, picture, '', '', null, null,[
    ['FOR FUN', '/forfun'],
    ['GROUP COMMANDS', '/cg']

 ], m)}


 handler.command = /^comandos|commands$/i
 export default handler
 





