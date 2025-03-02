
/**ENVIANDO FORMULÁRIO*/

const BtnSend = document.querySelector('.BtnSend')
const form = document.querySelector('#form')
const alert_sms = document.querySelector('.alert_sms')
const alert_senha = document.querySelector('.alert_senha')
const sms_input = [...document.querySelectorAll('.sms_input')]
const ContainerSpinner = document.querySelector('.ContainerSpinner')

function Focus() {
    sms_input.map((ele)=>{
        if(ele.focus()) {
            //console.log(ele)
        }
        ele.style = 'outline-color: #FF0000;'
        //ele.nextElementSibling.style = 'color: #FF0000;'
    })
}

$('#form').submit(function (e) { 
    e.preventDefault();
    let url = form.getAttribute('action')
    $.ajax({
        type: "post",
        url: url,
        data: new FormData(this),
        dataType: "json",
        contentType: false,
        processData: false,
        beforeSend: function(){
            ContainerSpinner.style = 'display: flex'
        },
        success: function (response) {
            alert_sms.innerText = ''
            alert_senha.innerText = ''
            if(response.url) {
                window.location.href = response.url
            } else if(response.sms__) {

            } else if((response.sms).trim() == 'A senha de entrada está incorrecta. Por favor verifique seus dados.') {
                Focus()
                alert_senha.innerText = response.sms
                console.log(sms_input)
            } else if((response.sms).trim() == 'Este usuario não existe, por favor verifique seus dados!') {
                alert_sms.innerText = response.sms
            } else {
                alert_sms.innerText = 'Preencha todos os campos'
            }
            //console.log(response)
        },
        complete: function () { 
            ContainerSpinner.style = 'display: none'
         },
        error: function(params) {
            console.log(params)
        }
    });
})

/*
BtnSend.addEventListener('click', (evt)=>{
    evt.preventDefault()

    let pedido = new XMLHttpRequest()

    pedido.onreadystatechange = function () { 
        if(this.status == 200 && this.readyState == 4) {
            //window.location.href = 'http://localhost/help'
            console.log(pedido)
        } else {
            console.error(pedido)
        }
    }

    pedido.open('post', form.getAttribute('action'), true)
    pedido.send()
})
*/






const input_label =[...document.querySelectorAll('.input_label')]
const main = document.querySelector('.main')


input_label.map((ele)=>{
    ele.addEventListener('focus', (e)=>{
        let element = e.target
        console.log()
        element.parentElement.children[1].classList.add('Campo_label')
    })
})
input_label.map((ele)=>{
    ele.addEventListener('blur', (e)=>{
        let element = e.target
        console.log()
        if(element.parentElement.children[0].value == '') {
            element.parentElement.children[1].classList.remove('Campo_label')
        }
    })
})


/* MOSTRANDO AS INFORMAÇÕES DO FOOTER */


const footer = document.querySelector('.footer')
const DivInfo = document.querySelector('.DivInfo')
const FromHelp = document.querySelector('.FromHelp')
const linkfooter = [...document.querySelectorAll('.linkfooter')]

var larguraTela = window.innerWidth

document.addEventListener('click', ()=>{
    if(footer.classList.toggle('InputFooter')) {
        footer.classList.remove('InputFooter')
        linkfooter.forEach((ele)=>{
            ele.classList.remove('Text-Color-Branco')
        })
    } 
})

function LarguraTela() {
    if(larguraTela > '1070') {
        footer.classList.add('InputFooter')
        FromHelp.classList.add('opacity100')
        linkfooter.forEach((ele)=>{
            ele.classList.add('Text-Color-Branco')
        })
    } else {
        footer.classList.remove('InputFooter')
        FromHelp.classList.remove('opacity100')
        linkfooter.forEach((ele)=>{
            ele.classList.remove('Text-Color-Branco')
        })
        
    }
}

window.addEventListener('resize', ()=>{
    LarguraTela()
})

DivInfo.addEventListener('click', (e)=>{
    e.stopPropagation()
    if(footer.classList.toggle('InputFooter')) {
        footer.classList.add('InputFooter')
        FromHelp.classList.add('opacity100')
        linkfooter.forEach((ele)=>{
            ele.classList.add('Text-Color-Branco')
        })
    } else {
        footer.classList.remove('InputFooter')
        FromHelp.classList.remove('opacity100')
        linkfooter.forEach((ele)=>{
            ele.classList.remove('Text-Color-Branco')
        })
    }
})