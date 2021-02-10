const artInicio = document.getElementById('main-article')
const artNosotros = document.getElementById('nosotros')
const artContacto = document.getElementById('form-container')
const artMarkem = document.getElementById('markem')
const artDomino = document.getElementById('domino')
const artVideojet = document.getElementById('videojet')
const artZanasi = document.getElementById('zanasi')
const artConsumibles = document.getElementById('consumibles')
const artRepuestos = document.getElementById('repuestos')
const video = document.getElementById('video')

const articulos = [artInicio, artNosotros, artContacto, artMarkem, artDomino, artVideojet, artZanasi, artConsumibles, artRepuestos]

const form = document.getElementById('form') 
const formName = document.getElementById('name')
const formCompany = document.getElementById('company')
const formPhone = document.getElementById('phone')
const formEmail = document.getElementById('email')
const formMessage = document.getElementById('message')
const msgOk = document.getElementById('ok')


const inputs = [formName, formCompany, formPhone, formEmail, formMessage]


const showMainArticle = () =>{
    video.classList.add('disappearvideo') 
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')   
        }
        setTimeout(()=>{
            articulo.classList.remove('relative')
            artInicio.classList.add('relative')
        },500) 
    }
    if(artInicio.classList.contains('disappear')){
         artInicio.classList.replace('disappear', 'show')
    }
    setTimeout(()=>{
        video.classList.remove('showvideo') 
    },500)
}

const showNosotros = () =>{
    video.classList.add('disappearvideo') 
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')   
        }
        setTimeout(()=>{
            articulo.classList.remove('relative')
            artNosotros.classList.add('relative')
        },500) 
    }
    if(artNosotros.classList.contains('disappear')){
         artNosotros.classList.replace('disappear', 'show')
    }
    setTimeout(()=>{
        video.classList.remove('showvideo') 
    },500)
}

const showContacto = () =>{
    video.classList.add('disappearvideo') 
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')   
        }
        setTimeout(()=>{
            articulo.classList.remove('relative')
            artContacto.classList.add('relative')
        },500) 
    }
    if(artContacto.classList.contains('disappear')){
         artContacto.classList.replace('disappear', 'show')
    }
    setTimeout(()=>{
        video.classList.remove('showvideo') 
    },500)
}

const showMarkem = () =>{
    video.classList.add('disappearvideo') 
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')   
        }
        setTimeout(()=>{
            articulo.classList.remove('relative')
            artMarkem.classList.add('relative')
        },500) 
    }
    if(artMarkem.classList.contains('disappear')){
         artMarkem.classList.replace('disappear', 'show')
    }
    setTimeout(()=>{
        video.classList.remove('showvideo') 
    },500)
}

const showDomino = () =>{
    video.classList.add('disappearvideo') 
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')   
        }
        setTimeout(()=>{
            articulo.classList.remove('relative')
            artDomino.classList.add('relative')
        },500) 
    }
    if(artDomino.classList.contains('disappear')){
         artDomino.classList.replace('disappear', 'show')
    }
    setTimeout(()=>{
        video.classList.remove('showvideo') 
    },500)
}

const showVideojet = () =>{
    video.classList.add('disappearvideo') 
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')   
        }
        setTimeout(()=>{
            articulo.classList.remove('relative')
            artVideojet.classList.add('relative')
        },500) 
    }
    if(artVideojet.classList.contains('disappear')){
         artVideojet.classList.replace('disappear', 'show')
    }
    setTimeout(()=>{
        video.classList.remove('showvideo') 
    },500)
}

const showZanasi = () =>{
    video.classList.add('disappearvideo') 
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')   
        }
        setTimeout(()=>{
            articulo.classList.remove('relative')
            artZanasi.classList.add('relative')
        },500) 
    }
    if(artZanasi.classList.contains('disappear')){
         artZanasi.classList.replace('disappear', 'show')
    }
    setTimeout(()=>{
        video.classList.remove('showvideo') 
    },500) 
}

const showConsumibles = () =>{
    video.classList.add('disappearvideo') 
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')   
        }
        setTimeout(()=>{
            articulo.classList.remove('relative')
            artConsumibles.classList.add('relative')
        },500) 
    }
    if(artConsumibles.classList.contains('disappear')){
         artConsumibles.classList.replace('disappear', 'show')
    }
    setTimeout(()=>{
        video.classList.remove('showvideo') 
    },500) 
}

const showRepuestos = () =>{ 
    video.classList.add('disappearvideo') 
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')   
        }
        setTimeout(()=>{
            articulo.classList.remove('relative')
            artRepuestos.classList.add('relative')
        },500) 
    }
    if(artRepuestos.classList.contains('disappear')){
         artRepuestos.classList.replace('disappear', 'show')
    }
    setTimeout(()=>{
        video.classList.remove('showvideo') 
    },500) 
}

const showVideo = () =>{
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')
    
            setTimeout(()=>{
                articulo.classList.remove('relative')
                video.classList.add('showvideo') 
            },500) 
        }
    }
    video.classList.remove('disappearvideo')
}

const clearText = () =>{
    for(const input of inputs){
        input.value = ''
    }
}

const okMessage = () =>{
    msgOk.classList.add('msgok')
    form.classList.add('hideform')
}

const hideOkMessage = () =>{
    msgOk.classList.remove('msgok')
    form.classList.remove('hideform')
}

const sendMessage = (data) =>{
    
    const formData = new FormData(data)
    const path = 'sendMessaje.php'
    
    fetch(path, {
        method: 'POST',
        body: formData
    })
        .then(response => (response.ok) ? Promise.resolve(response) : Promise.reject(new Error('error')))
        .then(response => {
            
            if(response.text()=='OK'){
                
                console.log('hasta ahora todo está bien')
                
            }
        })
        .catch((error) => console.log(error.message))
    
    
}







