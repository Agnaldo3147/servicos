// Função para verificar se é um dispositivo móvel
function isMobileDevice() {
    // Verifica se a largura da janela é menor que 768 pixels (critério comum para dispositivos móveis)
    var isMobile = window.innerWidth < 768;

    // Verifica se o dispositivo tem "touch" como uma das capacidades
    var hasTouchScreen = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

    // Combina os critérios: largura menor que 768 pixels e capacidade de touch
    return isMobile && hasTouchScreen;
}

// Exemplo de uso:
if (isMobileDevice()) {
    console.log('Está sendo visualizado em um telefone (smartphone).');
} else {
    console.log('Está sendo visualizado em um computador (desktop).');
}


//CONFIGURANDO O MEU MAPA


//CANCELANDO O MEU PEDIDO

const btn_cancelar = [...document.querySelectorAll('#btn_cancelar')]

btn_cancelar.forEach(element => {
    element.addEventListener('click', (evt) => {

        const event = evt.target
        const XMLhtt = new XMLHttpRequest()

        XMLhtt.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                event.parentElement.innerHTML = ''
                event.parentElement.parentElement.children[0].innerHTML = ''
                console.log(event.parentElement)
            }
        }

        XMLhtt.open('GET', event.getAttribute('url-cancelar'), true)
        XMLhtt.send()

    })

});

//MOSTRANDO A NOTIFICAÇÃO DO CANCELAMENTO DO PEDIDO

const NotificationReject = document.querySelector('.NotificationReject')

if (document.contains(NotificationReject)) {
    Notice(NotificationReject.textContent, 'red')
}


const ContainerSpinner = document.querySelector('.ContainerSpinner')
const closeMap = document.querySelector('#close')
const article02 = document.querySelector('.article02')
var LarguraTela = window.innerWidth

$(document).ready(function () {

    $('#close').on('click', function () {

        $.ajax({
            type: "get",
            url: $(this).attr('busca-url-index'),
            beforeSend: function () {
                ContainerSpinner.style = 'display: flex'
            },
            success: function (response) {
                result = JSON.parse(response)
                window.location.href = result.index
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


const btn_aceitar = document.querySelector('#btn_aceitar')
const article02_aceitou = document.querySelector('.article02_aceitou')
const header = document.querySelector('.header')
const localion = document.querySelector('.localion')

const localion_aceitou = document.querySelector('.localion_aceitou')
const localion_pediu = document.querySelector('.localion_pediu')
const article02_pediu = document.querySelector('.article02_pediu')
const distanciaA_B = document.querySelector('.distanciaA_B')





//ACEITANDO OU REJEITANDO PEDIDOS DOS MEUS USUARIOS

const ContainerUserPedinte = [...document.querySelectorAll('.ContainerUserPedinte')]
const span_radio = document.querySelector('.span-radio')
const Classbtn_aceitar = document.querySelector('.btn_aceitar')

//SELECIONANDO PEDIDOS

ContainerUserPedinte.map((ele) => {
    ele.addEventListener('click', (evt) => {

        ContainerUserPedinte.forEach((e) => {
            e.classList.remove('selected-pedido')
            e.children[3].classList.remove('display-block')
            e.children[4].classList.remove('display-block')
        })

        ele.classList.add('selected-pedido')
        ele.children[4].classList.add('display-block')
        ele.children[3].classList.add('display-block')

    })
})

const form_aceitar = [...document.querySelectorAll('.form_aceitar')]


$(document).ready(function () {
    //FORMULÁRIO REAL QUANDO EU TENHO INTERNET

    $('.form_aceitar').each(function (index, element) {

        const attr_local = $(this).children('.UserRadio').children('.local').attr('attr-value')

        const attr_servico = $(this).children('.UserRadio').children('.servico').attr('attr-value')

        $(this).children('.UserRadio').children('.local').val(attr_local)
        $(this).children('.UserRadio').children('.servico').val(attr_servico)

        $(this).submit(function (e) {
            e.preventDefault()
            const url = $(this).attr('action')
            article02.classList.remove('display-none')

                $.ajax({
                    type: "post",
                    url: url,
                    data: new FormData(this),
                    dataType: "json",
                    processData: false,
                    contentType: false,
                    beforeSend: function () {

                    },
                    success: function (response) {
                        if (response) {
                            window.href = response.url
                        }
                        console.log(response)
                    },
                    complete: function () {

                    },
                    error: function (erro1, erro2, erro3) {
                        console.log(erro1)
                        console.log(erro2)
                        console.log(erro3)
                    }
                });


        })


    })


})

const UserPediuImg = [...document.querySelectorAll('.UserPediuImg')]
const ContainerPaiSendPedido = document.querySelector('.ContainerPaiSendPedido')
const ContainerPaiOpenPedido = document.querySelector('.ContainerPaiOpenPedido')
const ContainerPai = document.querySelector('.ContainerPai')



UserPediuImg.map((e) => {
    e.addEventListener('click', () => {
        if (document.contains(ContainerPaiSendPedido)) {
            ContainerPaiSendPedido.classList.add('display-flex')

        } else if (document.contains(ContainerPaiOpenPedido)) {
            ContainerPaiOpenPedido.classList.add('display-flex')
        }

    })
})

if (document.contains(ContainerPaiSendPedido)) {
    ContainerPaiSendPedido.addEventListener('click', () => {
        if (ContainerPaiSendPedido.classList.contains('display-flex')) {
            ContainerPaiSendPedido.classList.remove('display-flex')
        }
    })
}

if (document.contains.ContainerPaiOpenPedido) {
    ContainerPaiOpenPedido.addEventListener('click', () => {
        if (ContainerPaiOpenPedido.classList.contains('display-flex')) {
            ContainerPaiOpenPedido.classList.remove('display-flex')
        }
    })

    ContainerPai.addEventListener('click', () => {
        if (ContainerPai.classList.contains('display-flex')) {
            ContainerPai.classList.remove('display-flex')
        }
    })
}

//ESTILIZANDO O MEU MENU

const Menu = document.querySelector('.Menu')
const Aside = document.querySelector('#aside')
const span = document.querySelector('#span')
const body = document.querySelector('#body')
const OfuscarTela = document.querySelector('.OfuscarTela')

OfuscarTela.addEventListener('click', () => {
    if (Aside.classList.contains('EnterMenu700')) {
        Aside.classList.remove('EnterMenu700')
        OfuscarTela.classList.remove('display-block')
        body.classList.remove('overflow-y')
        Menu.classList.remove('display-none')
    }
})

Menu.addEventListener('click', () => {
    var largura = window.innerWidth
    Aside.classList.add('EnterMenu')
    body.classList.add('overflow-y')


    if (largura > 700) {
        Aside.classList.remove('EnterMenu')
        Aside.classList.add('EnterMenu700')
        OfuscarTela.classList.add('display-block')
    }
    Menu.classList.add('display-none')
})
span.addEventListener('click', () => {
    var largura = window.innerWidth
    if (Aside.classList.toggle('EnterMenu')) {
        Aside.classList.remove('EnterMenu')
    }
    if (largura > 700) {
        Aside.classList.remove('EnterMenu')
        Aside.classList.remove('EnterMenu700')
        OfuscarTela.classList.remove('display-block')
    }
    body.classList.remove('overflow-y')
    Menu.classList.remove('display-none')
})

window.addEventListener('resize', () => {
    var largura = window.innerWidth

    if (Aside.classList.contains('EnterMenu') && largura > 700) {
        Aside.classList.remove('EnterMenu')
        Aside.classList.add('EnterMenu700')
        OfuscarTela.classList.add('display-block')
        Menu.classList.add('display-none')
    } else if (Aside.classList.contains('EnterMenu700') && largura < 700) {
        Aside.classList.add('EnterMenu')
        Aside.classList.remove('EnterMenu700')
        OfuscarTela.classList.remove('display-block')
        Menu.classList.remove('display-none')
    }

})

//PERFIL DO MEU USUÁRIO

$(document).ready(() => {
    $('#link_perfil_menu').on('click', function (e) {
        e.preventDefault()
        $.ajax({
            type: "get",
            url: $(this).attr('href-busca'),
            beforeSend: function () {
                ContainerSpinner.style = 'display: flex'
            },
            success: function (response) {
                result = JSON.parse(response)
                window.location.href = result.perfil
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