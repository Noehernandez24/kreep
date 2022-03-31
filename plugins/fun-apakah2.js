let handler = async (m, { command, text }) => m.reply(`
*Pregunta:* ${text}
*Respuesta:* ${['SI', 'NO', 'Probablemente si', 'No creo', 'Probablemente no', 'Joder, claro que si'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.command = /^pregunta$/i

export default handler
