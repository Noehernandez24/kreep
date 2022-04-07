let handler = async (m, { conn, text }) => {
    if (text) {
      conn.welcome = text
      m.reply('Bienvenida configurada correctamente\n Use @user para mencionar al usuario')
    } else throw 'Teksnya mana?'
  }
  handler.help = ['donasi']
  handler.tags = ['info']
  handler.rowner = true
  
  handler.command = /^setwelcome$/i
  export default handler