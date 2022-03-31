let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `“${chiste.getRandom()}”`, author, ['Siguiente', `${usedPrefix}chiste`], m)

handler.help = ['chiste']
handler.tags = ['quotes']
handler.command = /^(chiste)$/i

export default handler


// https://jalantikus.com/tips/kata-kata-bucin/
const chiste = [
    "¿Qué haces con gorra, camiseta de los Lakers y collares de oro? ¡Es el velatorio de tu madre ¿No había que venir de negro?",
    "¿Cuál es el colmo del sadismo? Darle a un ciego una navaja de afeitar y decirle que es una armónica.",
    "Doctor, doctor, ¿me puedo bañar con diarrea?\nHombre, si tiene bastante",
    "¿Qué hacen dos epilépticos en una cabina de fotos?\nLa fiesta de la espuma",
    "Mamá, mamá, dame una galleta\nCógela tú mismo.\nPero mamá, ¿es que no sabes que no tengo brazos?\n¡Ah! Pues si no hay brazos no hay galleta",
    "¿Qué diferencia hay entre el amor y el sida?.\nPues que el sida es para toda la vida",
    "¿Porque no pueden meter a la carcel a todos los violadores del mundo?.\nPorque entonces no habria nadie que diera la misa",
    "Va un hombre y le dice a un leproso:\nSe te ha caído la oreja.\n¿Qué?",
    "¿Cual es la diferencia entre Jesús y un cuadro?\nEn que para colgar al cuadro hace falta sólo un clavo",
    "Doctor: ¿Cuál es su signo?\nPaciente: Cáncer.\nDoctor: Qué casualidad",
    "-¿Cómo se sacan las fotos los negros?\n-En negativo",
    "-Mamá, mamá, ¿me queda bien el vestido?\n-Se te ve la silla de ruedas",
    "-¿Cuál es la parte más dura de un vegetal?\n-La silla de ruedas",
    "-Mamá, mamá, ¿por qué vienen los Reyes Magos en agosto?\n-Calla hija que con el cáncer que tienes no llegas a diciembre",
    "-¡Mamá, mamá, papá está tirando las cosas por la ventanaaaaaaaaaaaaaaaaaaaaaaaaaaaa!",
    


]