

const SectionServicos = document.querySelector('.services')
const header = document.querySelector('.header')
const LinkMenu = document.querySelector('#LinkMenu')

class ControlHeader {
    constructor() {
        this.controle = setInterval(this.control, 0.00000000000000000001)
    }

    control() {
        if(SectionServicos.getBoundingClientRect().top < 50) {
            header.style = 'background-color: #FFFFFF; box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.299);'
            LinkMenu.style = 'color: #000000 !important;'
            
        } else {
            header.style = 'background-color: transparent'
            LinkMenu.style = 'color: #FFFFFF !important;'
        }
    }
}

new ControlHeader()

//Aumentando a escala dos meus serviços ao passar o mouse


//ESTILIZANDO O MEU MENU

const Menu = document.querySelector('.Menu')
const Aside = document.querySelector('#aside')
const span = document.querySelector('#span')
const body = document.querySelector('#body')
const OfuscarTela = document.querySelector('.OfuscarTela')

OfuscarTela.addEventListener('click',()=>{
    if(Aside.classList.contains('EnterMenu700')) {
        Aside.classList.remove('EnterMenu700')
        OfuscarTela.classList.remove('display-block')
        body.classList.remove('overflow-y')
        Menu.classList.remove('display-none')
    }
})

Menu.addEventListener('click', ()=>{
    var largura = window.innerWidth
    Aside.classList.add('EnterMenu')
    body.classList.add('overflow-y')
    
    
    if(largura > 700) {
        Aside.classList.remove('EnterMenu')
        Aside.classList.add('EnterMenu700')
        OfuscarTela.classList.add('display-block')
    }
    Menu.classList.add('display-none')
})
span.addEventListener('click', ()=>{
    var largura = window.innerWidth
    if(Aside.classList.toggle('EnterMenu')) {
        Aside.classList.remove('EnterMenu')
    }
    if(largura > 700) {
        Aside.classList.remove('EnterMenu')
        Aside.classList.remove('EnterMenu700')
        OfuscarTela.classList.remove('display-block')
    }
    body.classList.remove('overflow-y')
    Menu.classList.remove('display-none')
})

window.addEventListener('resize', ()=>{
    var largura = window.innerWidth
    
    if(Aside.classList.contains('EnterMenu') && largura > 700) {
        Aside.classList.remove('EnterMenu')
        Aside.classList.add('EnterMenu700')
        OfuscarTela.classList.add('display-block')
        Menu.classList.add('display-none')
    } else if(Aside.classList.contains('EnterMenu700') && largura < 700){
        Aside.classList.add('EnterMenu')
        Aside.classList.remove('EnterMenu700')   
        OfuscarTela.classList.remove('display-block')
        Menu.classList.remove('display-none')
    }

})

var map

function sucesso(pos) { 

    const cord = {
        latitude: pos.coords.latitude,
        longitude : pos.coords.longitude
    }

    if (map === undefined) {
        map = L.map('map_service').setView([cord.latitude, cord.longitude], 23);

    } else {
        map.remove()
        map = L.map('map_service').setView([cord.latitude, cord.longitude], 23);
    }


    //RENDERIZA AS RUAS, PRÉDIUS, ETC. DO MAPA

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
    }).addTo(map);

    L.marker([cord.latitude, cord.longitude]).addTo(map);
    console.log('latitude: '+latitude)
    console.log('longitude: '+longitude)

}

function erro(error) {
    alert('Erro ao obter sua localização!')
    console.log(error)
}

/*
//Obtendo a tua localização
var whatID = navigator.geolocation.getCurrentPosition(sucesso, erro, {
    timeout: 5000,
    enableHighAccuracy: true
}) 
*/


//MOSTRANDO A NOTIFICAÇÃO DO CANCELAMENTO DO PEDIDO

    const NotificationReject = document.querySelector('.NotificationReject')

    if(document.contains(NotificationReject)) {
        Notice(NotificationReject.textContent, 'red')
    }


//url para o meu mapa

const ContainerSpinner = document.querySelector('.ContainerSpinner')

$(document).ready(function () { 

    $('#pedidoMobile').on('click',function (e) { 

        e.preventDefault()
        $.ajax({
            type: "get",
            url: $(this).attr('url-busca'),
            beforeSend: function () { 
                ContainerSpinner.style = 'display: flex'
            },
            success: function (response) {
                result = JSON.parse(response)
                window.location.href = result.location
            },
            complete: function () { 
                ContainerSpinner.style = 'display: none'
            },
            error: function (erro1, erro2, erro3) {
                console.log(erro1)
                console.log(erro2)
                console.log(erro3)
            }
        });
    })

    $('#HeaderVerPedido').on('click',function () { 

        $.ajax({
            type: "get",
            url: $(this).attr('url-busca'),
            beforeSend: function () { 
                ContainerSpinner.style = 'display: flex'
            },
            success: function (response) {
                result = JSON.parse(response)
                window.location.href = result.location
            },
            complete: function () { 
                ContainerSpinner.style = 'display: none'
            },
            error: function (erro1, erro2, erro3) {
                console.log(erro1)
                console.log(erro2)
                console.log(erro3)
            }
        });
    })

})


