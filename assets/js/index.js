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
    //console.log('Está sendo visualizado em um telefone (smartphone).');
} else {
    //console.log('Está sendo visualizado em um computador (desktop).');
}

const SectionServicos = document.querySelector('.SectionServicos')
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


//TERMINAR SESSÃO

/*
$('#sair').on('click',(e)=>{
    e.preventDefault()

    $.ajax({
        type: "get",
        url: $(this).attr('herf'),
        success: function (response) {
            if(response) {
               // const result = JSON.parse(response)
                //window.location.href = result.url
            }
            console.log(response)
        }, 
        error: function (erro1, erro2, erro3) { 
            console.log(erro1)
            console.log(erro2)
            console.log(erro3)
        }
    });
})
*/



//BUSCANDO OS RESULTADOS DA PESQUISA DOS MEUS SERVIÇOS
const servico = document.querySelector('#servico')
const local = document.querySelector('#local')
const ResPesquisa = document.querySelector('#ResPesquisa')
const ResPesquisaLocal = document.querySelector('#ResPesquisaLocal')
const ContainerSpinner = document.querySelector('.ContainerSpinner')

const nome_update = document.querySelector('input#nome_update')
const sobre_voce_id = document.querySelector('input#sobre_voce_id')

function GetLocal() {
    if ((local.value.toLowerCase()).trim() == 'cidade (centro)') {
        return true
    } else if ((local.value.toLowerCase()).trim() == 'maxinde') {
        return true
    } else if ((local.value.toLowerCase()).trim() == 'canânbua') {
        return true
    } else if ((local.value.toLowerCase()).trim() == 'controlo Nª01') {
        return true
    }
    else if ((local.value.toLowerCase()).trim() == 'rua da encosta') {
        return true
    }
    else if ((local.value.toLowerCase()).trim() == 'ritondo') {
        return true
    }
    else if ((local.value.toLowerCase()).trim() == 'catepa (zona 5/6)') {
        return true
    }

    return false
}

function GetService() {
    if ((servico.value.toLowerCase()).trim() == 'barbearia') {
        return true
    } else if ((servico.value.toLowerCase()).trim() == 'cabelereiro') {
        return true
    } else if ((servico.value.toLowerCase()).trim() == 'manicure/pedicure') {
        return true
    } else if ((servico.value.toLowerCase()).trim() == 'limpeza') {
        return true
    }

    return false
}



$(document).ready(function () {

    $("#servico").keyup(function () {

        var busca = $(this).val();
        var url = $("#servico").parent().parent().attr('action')

        if (busca.length !== "") {
            $('#ResPesquisa').css('display', 'flex')

            $.ajax({
                url: url,
                method: 'POST',
                data: {
                    busca: busca
                },
                success: function (resultado) {
                    if (resultado) {
                        var result = $('#ResPesquisa').html(resultado);

                        $.each(result, function (indexInArray, valueOfElement) {
                            valueOfElement.addEventListener('click', (evt) => {
                                const servico = document.querySelector('#servico')
                                var element = evt.target
                                if(element.textContent.trim() != 'Nenhum resultado encontrado.'){
                                    servico.value = element.textContent
                                }
                            })
                        })
                    }
                },
                error: function (params) {
                    console.log(params)
                }
            });
        } else {
            $('#ResPesquisa').css('display', 'none')
        }


    })
})


//PESQUISA DAS MINHAS LOCALIDADES

const id_location = document.querySelector('#id_location')


function Notice(mensagem = '', color = 'yellow', largura = 200,textsize = '.8em',tempo = 3000, empilhamento = false, sowAnimete = 'slide:top', hiddenAnimate = 'flip', posx = 50, posy= 50) {
    const notice = new jBox('Notice', {
        content: $('#alerta').text(mensagem).css('font-size',textsize),
        color: color,
        autoClose: tempo,
        stack: empilhamento,
        position: {
            x: 'center',
            y: 'top'
        },
        animation: {open: sowAnimete, close: hiddenAnimate},
        onOpenComplete: () => {
            // Toca o som quando a notificação é aberta
            //playNotificationSound();
        }
    })
    notice.setWidth(largura, true);
}

//MOSTRANDO A NOTIFICAÇÃO DO CANCELAMENTO DO PEDIDO

    const NotificationReject = document.querySelector('.NotificationReject')

    if(document.contains(NotificationReject)) {
        Notice(NotificationReject.textContent, 'red')
    }

//MANDANDO MINHA LOCALIZAÇÃO ATRAVÉS DO MEU FORMULÁRIO

local.addEventListener('input', () => {
    if (GetService()) {
        console.log(local.value.replace(' ', ''))
        
    } else if (GetService() != servico.value && servico.value.length != 0) {

        local.value = ''
        Notice('Selecione um serviço que exista!Antes de mandar sua localização.','yellow', 320)
       
    }
})

$(document).ready(function (){ 

    $("#local").keyup(function () {
        var local = $(this).val();
        var url = $("#local").parent().parent().attr('action')
    
        if (local.length !== "") {
            $('#ResPesquisaLocal').css('display', 'flex')
    
            $.ajax({
                url: url,
                method: 'POST',
                data: {
                    local: local
                },
                success: function (resultado) {
                    var result = $('#ResPesquisaLocal').html(resultado);
                
                    //ResPesquisaLocal.innerHTML = resultado
                    $.each(result, function (indexInArray, valueOfElement) {
                        valueOfElement.addEventListener('click', (evt) => {
                            const local = document.querySelector('#local')
                            var element = evt.target
                            
                            if(element.textContent.trim() != 'Não estamos desponíveis neste local.') {
                                local.value = element.textContent
                            }
                        })
                    })
                },
                error: function (params) {
                    console.log(params)
                }
            });
        } else {
            $('#ResPesquisaLocal').css('display', 'none')
        }
    })
})



servico.addEventListener('click', (evt) => {
    evt.preventDefault()
})
ResPesquisa.addEventListener('click', (evt) => {
    evt.preventDefault()
})


local.addEventListener('click', (evt) => {
    evt.preventDefault()
})
ResPesquisaLocal.addEventListener('click', (evt) => {
    evt.preventDefault()
})
window.addEventListener('click', () => {
    ResPesquisa.style = 'display: none;'
    ResPesquisaLocal.style = 'display: none;'
})

/*

new jBox('Notice', {
            content: 'Selecione um serviço que exista!Antes de mandar sua localização.',
            position: {
              x: 'right',
              y: 'top'
            },
            offset: {
              x: 20,
              y: 20
            },
            stack: false, // Isso garante que as notificações empilhem
            autoClose: 3000, // Tempo para a notificação desaparecer automaticamente  
            onOpenComplete: () => {
        // Certifique-se de que a notificação fecha automaticamente
        setTimeout(() => {
          this.close(); // Fecha a notificação após o tempo especificado
        }, 3000);

      }
        }).open();

ANIMAÇÕES

zoomIn, zoomOut,
pulse, move,
slide, flip
	
Animation when jBox opens or closes.
To use different animations for opening and closing, use an object: {open: 'tada', close: 'flip'}. You can also set the direction of the move and slide animations: {open: 'move:right', close: 'slide:top'}
*/

$(document).ready(function(){

    $("#form").submit(function (e) {
        e.preventDefault()
        if (GetLocal()) {
            var url = $(this).attr('action')
          
            $.ajax({
                type: "post",
                url: url,
                data: new FormData(this),
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function () {
                    ContainerSpinner.style = 'display: flex'
                },
                success: function (response) {
                    if (response) {
                        local.value = ''
                        servico.value = ''
    
                        if (response.url) {
                            window.location.href = response.url
                        }
                        //console.log(response.sms)
                    }
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
        } else if (!GetLocal() && !GetService()) {
            Notice('Não prestamos esse serviço e não estamos deponíveis neste local.','yellow',300)
        } else if (!GetLocal()) {
            Notice('Não estamos desponíveis neste local.')
        }
    
    })
    
    
})



//url para o meu mapa

$(document).ready(function () {
    $('#pedidoMobile').on('click', function () {
    
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

    //ESTA AQUI É PARA QUE FEZ OS PEDIDO
    if(document.contains(document.querySelector('.pedidoMobile'))) {
        const pedidoMobile = [...document.querySelectorAll('.pedidoMobile')]
        if(pedidoMobile.length > 0) {
            $('.pedidoMobile').each(function (index, value) { 
                $(value).on('click', function () {
                
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
        }
    }
    //ESTES SÃO OS LINKS DE REDIRECIONAMENTO COM EFEITOS
    /*
    $('#HeaderVerPedido').on('click', function () {
    
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
    
    $('#link_perfil').on('click', function (e) {
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
    
    $('#link_login').on('click', function (e) {
        e.preventDefault()
       
        $.ajax({
            type: "get",
            url: $(this).attr('href'),
            beforeSend: function () {
                ContainerSpinner.style = 'display: flex'
            },
            success: function (response) {
                result = $(this).attr('href')
                window.location.href = result
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

   */
    //MOSTRANO AS OTIFICÕES
    
    if(document.contains(document.querySelector('#info-notification'))) {
        const info_notification = document.querySelector('#info-notification')
        const container_info = document.querySelector('.container-info')
        const btn_info = document.querySelector('.btn-info')
    
        $('.btn-info').on('click', function (e) { 
        
            $.ajax({
                type: "get",
                url: $(this).attr('url-btn'),
                success: function (response) {
                    const result = JSON.parse(response)
                    if(result) {
                        container_info.style = 'display: none !important;'
                    }
                },
                error: function (error) { 
                    console.log(error)
                }
            });
        })
        
        window.addEventListener('load', ()=>{
            var string = new String('Caro cliente, você já possui três serviços cancelados, por favor não cancele, mais nenhum pedido.')
            var a = []
            var b = 1
            var c = 0
            var i = 0
            
            for (let index = 0; index < string.length; index++) {
                a[index] = string.slice(index, b)
                b++
            }
    
            function TextSMS() {
                if (a[i] != undefined) {
                    info_notification.append(a[i])
                } else if(a[i] == undefined) {
                    info_notification.style = ' margin-bottom: 40px;'
                    btn_info.style = 'display: flex !important;'
                }
                i = i + 1
                
            }
            function ContarTempo() {
                c = c + 1
                tempo.innerHTML = c
    
                if(c > 10) {
                    getContainer.style = 'opacity: .20;'
                }
                if(c > 15) {
                    info_notification.style = 'display: none;'
                }
            }
           
            
            setInterval(TextSMS, 100)
        })
    
        
    }
    
})



//INTERSECTIONOBSERVER


const myObserver = new IntersectionObserver((entreis) => {

    entreis.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})


const elements = document.querySelectorAll('.hidden')

elements.forEach((e) => {
    myObserver.observe(e)
})


