const btnInicio = document.getElementById('btn-inicio')
const btnNosotros = document.getElementById('btn-nosotros')
const btnContacto = document.getElementById('btn-contacto')
const btnMarkem = document.getElementById('btn-markem')
const btnDomino = document.getElementById('btn-domino')
const btnVideojet = document.getElementById('btn-videojet')
const btnZanasi = document.getElementById('btn-zanasi')
const btnConsumibles = document.getElementById('btn-consumibles')
const btnRepuestos = document.getElementById('btn-repuestos')

const a0 = document.getElementById('a0')
const a1 = document.getElementById('a1')
const a2 = document.getElementById('a2')
const a3 = document.getElementById('a3')
const a4 = document.getElementById('a4')
const a5 = document.getElementById('a5')
const a6 = document.getElementById('a6')
const a7 = document.getElementById('a7')
const a8 = document.getElementById('a8')

const form = document.getElementById('form') 

btnInicio.addEventListener('click', () => showMainArticle())
btnNosotros.addEventListener('click', () => showNosotros())
btnContacto.addEventListener('click', () => showContacto())
btnMarkem.addEventListener('click', () => showMarkem())
btnDomino.addEventListener('click', () => showDomino())
btnVideojet.addEventListener('click', () => showVideojet())
btnZanasi.addEventListener('click', () => showZanasi())
btnConsumibles.addEventListener('click', () => showConsumibles())
btnRepuestos.addEventListener('click', () => showRepuestos())

a0.addEventListener('click', () => showMainArticle())
a1.addEventListener('click', () => showContacto())
a2.addEventListener('click', () => showContacto())
a3.addEventListener('click', () => showContacto())
a4.addEventListener('click', () => showContacto())
a5.addEventListener('click', () => showContacto())
a6.addEventListener('click', () => showContacto())
a7.addEventListener('click', () => showContacto())
a8.addEventListener('click', () => showContacto())



form.addEventListener('submit', (e) => {
    e.preventDefault() 
    clearText()
    showMsgOk()
})

form.addEventListener('click', () => hideMsgOk() )









