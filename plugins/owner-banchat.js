let handler = async (m, { participants }) => {
    // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('Done!')
    // } else m.reply('Ada nomor host disini...')
}
handler.help = ['banchat']
handler.tags = ['owner', 'group']
handler.command = /^banchat$/i

handler.admin = true

export default handler