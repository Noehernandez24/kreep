let handler = async (m, { conn, command, usedPrefix }) => {
    let picture = './Menu2.jpg'
    let comandos =`
*👾Comandos del bot👾*
\n
〘 GROUP COMMANDS 〙

➥/enable - Activa o desactiva funciones muy interesantes a tu grupo, como por ejemplo el antidelete, que muestra los mensajes eliminados.
➥/groupinfo - Muestra la información del grupo
➥/grouplink - Envia el link del grupo.
➥/announce - Ejecuta este comando para dar un anuncio al grupo.
➥/group - Escriba /group open si quiere abrir el chat de su grupo, o close si quiere cerrarlo.
➥/tagall (texto) - Etiqueta a todos los miembros del grupo 
➥/kick (@usuario) - Etiqueta al usuario que quieres sacar del grupo.
\n
Por favor, ten en cuenta que es un proyecto que
 aún está en desarrollo y puede contener fallas 🚧
 
 Unete al grupo de soporte del bot, donde podras solventar tus dudas:
 https://chat.whatsapp.com/I2Ykt6TerwD4yfarO2joOG
 `.trim()

 conn.sendHydrated(m.chat, comandos, wm, picture, '', '', null, null,[
    ['COMANDOS PRINCIPALES', '/comandos'],
    ['FOR FUN', '/forfun']

 ], m)}


 handler.command = /^cg$/i
 export default handler
 

