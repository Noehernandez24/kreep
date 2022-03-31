let handler = async (m) => m.reply(`
*Pregunta:* ${m.text}
*Respuesta:* ${['Ya', 'Mungkin iya', 'Mungkin', 'Mungkin tidak', 'Tidak', 'Tidak mungkin'].getRandom()}
  `.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['apakah <teks>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^(apakah|pregunta)$/i

export default handler
