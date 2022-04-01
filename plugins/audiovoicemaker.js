let handler =  m => m.reply(`
🎶 *EFECTOS DE SONIDO* 🎶

A continuación tienes una lista de comandos con efectos de sonido diferentes,
ejecuta cualquiera de estos comandos respondiendo al audio que quieres cambiar
la voz.

/bass
/blown
/deep
/earrape
/fast
/fat
/nightcore
/revers
/robot
/slow
/smooth
/tupai
/audio


`.trim()) // Tambah sendiri kalo mau



handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^audiovoicemaker$/i

export default handler
