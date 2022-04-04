import fs from "fs"
let handler = m => m

handler.all = async function (m) {
let vn = './media/a.mp3'



if (/^(a|ª)$/i.test(m.text)) {
    
    conn.sendFile(m.chat, vn, 'a.mp3', null, m, true, {
        type: 'audioMessage', // paksa tanpa convert di ffmpeg
        ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
        })
}
return !0
}
export default handler

