const artInicio = document.getElementById('main-article')
const artNosotros = document.getElementById('nosotros')
const artContacto = document.getElementById('form-container')
const artMarkem = document.getElementById('markem')
const artDomino = document.getElementById('domino')
const artVideojet = document.getElementById('videojet')
const artZanasi = document.getElementById('zanasi')
const artConsumibles = document.getElementById('consumibles')
const artRepuestos = document.getElementById('repuestos')

const articulos = [artInicio, artNosotros, artContacto, artMarkem, artDomino, artVideojet, artZanasi, artConsumibles, artRepuestos]

const formName = document.getElementById('name')
const formCompany = document.getElementById('company')
const formPhone = document.getElementById('phone')
const formEmail = document.getElementById('email')
const formMessage = document.getElementById('message')
const msgOk = document.getElementById('msgok')

const inputs = [formName, formCompany, formPhone, formEmail, formMessage]


const showMainArticle = () =>{
    
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')
            
            if(artInicio.classList.contains('disappear')){
                artInicio.classList.replace('disappear', 'show')
            }
            setTimeout(()=>{
                articulo.classList.remove('relative')
                artInicio.classList.add('relative')
            },1000) 
        }
    }
}

const showNosotros = () =>{
    
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')
            
            if(artNosotros.classList.contains('disappear')){
                artNosotros.classList.replace('disappear', 'show')
            }
            setTimeout(()=>{
                articulo.classList.remove('relative')
                artNosotros.classList.add('relative')
            },500) 
        }
    }
}

const showContacto = () =>{
    
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')
            
            if(artContacto.classList.contains('disappear')){
                artContacto.classList.replace('disappear', 'show')
            }
            setTimeout(()=>{
                articulo.classList.remove('relative')
                artContacto.classList.add('relative')
            },500) 
        }
    }
}

const showMarkem = () =>{
    
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')
            
            if(artMarkem.classList.contains('disappear')){
                artMarkem.classList.replace('disappear', 'show')
            }
            setTimeout(()=>{
                articulo.classList.remove('relative')
                artMarkem.classList.add('relative')
            },500) 
        }
    }
}

const showDomino = () =>{
    
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')
            
            if(artDomino.classList.contains('disappear')){
                artDomino.classList.replace('disappear', 'show')
            }
            setTimeout(()=>{
                articulo.classList.remove('relative')
                artDomino.classList.add('relative')
            },500) 
        }
    }
}

const showVideojet = () =>{
    
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')
            
            if(artVideojet.classList.contains('disappear')){
                artVideojet.classList.replace('disappear', 'show')
            }
            setTimeout(()=>{
                articulo.classList.remove('relative')
                artVideojet.classList.add('relative')
            },500) 
        }
    }
}

const showZanasi = () =>{
    
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')
            
            if(artZanasi.classList.contains('disappear')){
                artZanasi.classList.replace('disappear', 'show')
            }
            setTimeout(()=>{
                articulo.classList.remove('relative')
                artZanasi.classList.add('relative')
            },500) 
        }
    }
}

const showConsumibles = () =>{
    
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')
            
            if(artConsumibles.classList.contains('disappear')){
                artConsumibles.classList.replace('disappear', 'show')
            }
            setTimeout(()=>{
                articulo.classList.remove('relative')
                artConsumibles.classList.add('relative')
            },500) 
        }
    }
}

const showRepuestos = () =>{
    
    for(const articulo of articulos){
        if(articulo.classList.contains('show')){
            articulo.classList.replace('show', 'disappear')
            
            if(artRepuestos.classList.contains('disappear')){
                artRepuestos.classList.replace('disappear', 'show')
            }
            setTimeout(()=>{
                articulo.classList.remove('relative')
                artRepuestos.classList.add('relative')
            },500) 
        }
    }
}

const clearText = () =>{
    for(const input of inputs){
        input.value = ''
    }
}

const showMsgOk = () =>{
    msgOk.classList.remove('msg-ok')
}

const hideMsgOk = () =>{
    msgOk.classList.add('msg-ok')
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









