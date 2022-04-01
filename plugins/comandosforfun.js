let handler = async (m, { conn, command, usedPrefix }) => {
    let picture = './Menu2.jpg'
    let comandos =`
*👾Comandos del bot👾*
\n
〘 COMANDOS FOR FUN 〙

➥/audiovoicemaker - Agregar Multiples efectos de sonido a audios.
➥/pregunta (tu pregunta aqui) - Responde la pregunta que le hagas de SI o NO.
➥/howgay (@usuario) - Solo funciona en grupos
➥/parejas - Forma parejas al azar de los miembros del grupo
➥/simi - Una inteligencia artificial parecida al mitico SimSimi
➥/tictactoe (nombre de la sala) - Juega con un compañero al juego de Equis, Cero.
➥/stupid - Solo ejecuta el comando y ya.
➥/hornycard - Licencia para andar Horny.
➥/pixel - Pixelea tu foto de perfil.
➥/simpcard - Licencia para simpear.
➥/ytcomment (texto) - Envia una imagen como si hubieses comentado en YT
➥/chiste - Cuenta un chiste de humor negro.
➥/style (texto) - Envia diferente tipos de texto.
\n
Por favor, ten en cuenta que es un proyecto que
 aún está en desarrollo y puede contener fallas 🚧
 
 Unete al grupo de soporte del bot, donde podras solventar tus dudas:
 https://chat.whatsapp.com/I2Ykt6TerwD4yfarO2joOG
 `.trim()

 conn.sendHydrated(m.chat, comandos, wm, picture, '', '', null, null,[
    ['COMANDOS PRINCIPALES', '/comandos'],
    ['GROUP COMMANDS', '/cg']

 ], m)}


 handler.command = /^forfun$/i
 export default handler
 

