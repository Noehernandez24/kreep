let handler = async (m, { conn, command, usedPrefix }) => {
    let donate1 =`
    *¡Hola soy KreepBot!*\n\n¡Me alegra saber que quieres donar! 🙌🏻\n\nKreepBot es un proyecto nuevo que necesita apoyo, tu donación ayudara a comprar sevidores de hosting, para que el bot funcione las 24 horas del dia PayPal: https://www.paypal.me/KreepDonaciones De antemano, ¡muchas gracias! 💙
    `.trim()
    let donate2 =`
    Por cierto... Los donadores tienen beneficios dentro del bot... 😎 Si deseas y puedes apoyar este proyecto, envíame una captura de pantalla de tu donación a mi numero: https://wa.me/+50360474702\n\nCuando me escribas, dime cuál es tu número de teléfono con el que utilizas el bot y te diré los pasos que debes seguir para añadir el bot a tu grupo 🤭
    `.trim()
    
    await conn.sendHydrated(m.chat, donate1, null, null, '', '', null, null, m)
    conn.sendHydrated(m.chat, donate2, null, null, '', '', null, null, m)}



handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
