let handler =  m => m.reply(`
*👾 ¡Hola soy KreepBot! 👾 *
\n
Para desbloquear el modo premium y sus comandos, tienes que realizar una donación minima de $3 USD, al realizar el pago mandame una captura a mi numero: https://wa.me/+50360474702\n\nCuando me escribas, dime cuál es tu número de teléfono con el que utilizas el bot y te diré los pasos que debes seguir para desbloquear los comandos premium.
\n
Ademas de desbloquear los comandos premium del bot, podras agregar el bot a cualquier grupo de Whatsapp que quieras.
PayPal: https://www.paypal.me/KreepDonaciones De antemano, ¡muchas gracias por apoyar este proyecto! 💙
\n
〘 COMANDOS PREMIUM 〙

➥ /spamchat (texto) - Spamea 30 mensajes en el grupo de Whatsapp que sea ejecutado.
➥ /spamwa - Spamea hasta 50 mensajes a la vez al numero de Whatsapp que quieras.
➥/enable - Activa o desactiva funciones muy interesantes a tu grupo, como por ejemplo el antidelete, que muestra los mensajes eliminados.
➥/groupinfo - Muestra la información del grupo
➥/grouplink - Envia el link del grupo.
➥/announce - Ejecuta este comando para dar un anuncio al grupo.
➥/group - Escriba /group open si quiere abrir el chat de su grupo, o close si quiere cerrarlo.
➥/tagall (texto) - Etiqueta a todos los miembros del grupo 
➥/kick (@usuario) - Etiqueta al usuario que quieres sacar del grupo.
\n
Más comandos premium proximamente... 
` .trim()) // Tambah sendiri kalo mau





handler.help = ['premium']
handler.tags = ['info']
handler.command = /^premium$/i

export default handler