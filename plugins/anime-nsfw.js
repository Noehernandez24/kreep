let handler = async (m, {command, conn}) => {
if (command == 'nsfwloli') {
let haha = await conn.getFile(`https://api-faza.herokuapp.com/api/wallpaper/nsfwloli?apikey=FZDEVELOPER`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)
} else {
let haha = await conn.getFile(`https://api-faza.herokuapp.com/api/nsfw/${command.replace('nsfw', '')}?apikey=FZDEVELOPER`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['π ππΈπΆππΈπ΄π½ππ΄ π', `/${command}`]], m)
}}
handler.help = ['nsfwloli', 'nsfwahegao', 'nsfwass', 'nsfwbdsm', 'nsfwblowjob', 'nsfwcuckold', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwgangbanh', 'nsfwglasses', 'nsfwhentai', 'nsfwjahy', 'nsfwmanga', 'nsfwmstb', 'nsfwneko', 'nsfworgy', 'nsfwpanties', 'nsfwpussy', 'nsfwneko2', 'nsfwtentacles', 'nsfwthings', 'nsfwyuri', 'nsfwzettai']
handler.command = ['nsfwloli', 'nsfwahegao', 'nsfwass', 'nsfwbdsm', 'nsfwblowjob', 'nsfwcuckold', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwgangbanh', 'nsfwglasses', 'nsfwhentai', 'nsfwjahy', 'nsfwmanga', 'nsfwmstb', 'nsfwneko', 'nsfworgy', 'nsfwpanties', 'nsfwpussy', 'nsfwneko2', 'nsfwtentacles', 'nsfwthings', 'nsfwyuri', 'nsfwzettai']
handler.tags = ['nsfw']
export default  handler
