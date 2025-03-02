
$('#form02').submit(function (e) { 
    e.preventDefault();
   
    $.ajax({
        type: "post",
        url: $(this).attr('action'),
        data: new FormData(this),
        dataType: "json",
        processData: false,
        contentType:false,
        success: function (response) {
            console.log(response)
            console.log(response.sms)
        },
        error: function (erro1, erro2, erro3) {
            console.log(erro1)
            console.log(erro2)
            console.log(erro3)
          }
    });
});

//CHAMANDO32

const body = document.querySelector('#body')
const aside = document.querySelector('#aside')
const OfuscarTela = document.querySelector('#OfuscarTela')
const Cancelar = document.querySelector('.Cancelar')
const BtnEdite = document.querySelector('#BtnEdite')

var LarguraTela = window.innerWidth

function ControlarTela(Largura = null) {
    
    if (Largura > 720) {
        
        BtnEdite.addEventListener('click', () => {
            aside.style = 'display: block;'
            OfuscarTela.style = 'display: block;'
        })
    
        Cancelar.addEventListener('click', () => {
            if (aside.classList.toggle('MostrarEditar')) {
                OfuscarTela.style = 'display: none;'
                aside.style = 'display: none;'
            }
            OfuscarTela.style = 'display: none;'
    
        })
        OfuscarTela.addEventListener('click', () => {
            if (aside.classList.toggle('MostrarEditar')) {
                OfuscarTela.style = 'display: none;'
                aside.style = 'display: none;'
            }
    
        })

    } else if(Largura <= 720){

        BtnEdite.addEventListener('click', () => {
            aside.classList.add('MostrarEditar')
            OfuscarTela.style = 'display: block;'
        })
    
        Cancelar.addEventListener('click', () => {
            if (aside.classList.toggle('MostrarEditar')) {
                OfuscarTela.style = 'display: none;'
                aside.classList.remove('MostrarEditar')
            }
            OfuscarTela.style = 'display: none;'
    
        })
        OfuscarTela.addEventListener('click', () => {
            if (aside.classList.toggle('MostrarEditar')) {
                OfuscarTela.style = 'display: none;'
                aside.classList.remove('MostrarEditar')
            }
            OfuscarTela.style = 'display: none;'
    
        })
    }
    
}


window.addEventListener('resize', ()=>{
   
    var LarguraTela = window.innerWidth
    ControlarTela(LarguraTela)
})



//EFEITO DO FOCO NO INPUT

const input_label = [...document.querySelectorAll('.input_label')]


input_label.map((ele) => {
    ele.addEventListener('focus', (e) => {
        let element = e.target
        console.log()
        element.parentElement.children[0].classList.add('Border')
        element.parentElement.children[1].classList.add('Campo_label')
    })
})
input_label.map((ele) => {
    ele.addEventListener('blur', (e) => {
        let element = e.target
        console.log()
        if (element.parentElement.children[0].value == '') {
            element.parentElement.children[0].classList.remove('Border')
            element.parentElement.children[1].classList.remove('Campo_label')
        }
    })
})


//AQUI NÓS VAMOS RECEBER O FICHEIRO QUE VEM LÁ DO INPUT FILE

const imagem = document.querySelector('#imagem')
const PreviewFoto = document.querySelector('#PreviewFoto')

imagem.addEventListener('change', (evt) => {
    const file = evt.target.files[0]
    PreviewFoto.innerHTML = ""
    if (file) {
        reader = new FileReader()
        
        reader.addEventListener('load', (e) => {
            
            const read = e.target
            const img = document.createElement('img')
            img.src = read.result
            img.style = " width: 65%; height: 75%; object-fit: contain;"

            PreviewFoto.innerHTML = ""
            PreviewFoto.appendChild(img)
           
        })

        reader.readAsDataURL(file)
    }
})


//MOSTRANDO A NOTIFICAÇÃO DO CANCELAMENTO DO PEDIDO

    const NotificationReject = document.querySelector('.NotificationReject')

    if(document.contains(NotificationReject)) {
        Notice(NotificationReject.textContent, 'red')
    }
