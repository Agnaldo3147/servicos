
/*CADASTRANDO PESSOAS */
const form = document.querySelector('#form')
const alert_sms = document.querySelector('#alert_sms')

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
            if(response.url) {
                //console.log(response.url)
                window.location.href = response.url
            } else if(response.sms) {
                alert_sms.innerText = response.sms
            } 
        },
        complete: function () { 
            ContainerSpinner.style = 'display: none'
         },
        error: function(error1, error2, error3) {
            console.log(error1)
            console.log(error2)
            console.log(error3)
        }
    });
})



const input_label =[...document.querySelectorAll('.input_label')]
const main = document.querySelector('.main')


input_label.map((ele)=>{
    ele.addEventListener('focus', (e)=>{
        let element = e.target
        console.log()
        element.parentElement.children[1].classList.add('Campo_label')
        element.parentElement.children[0].style = 'background-color: #FFFFFF !important;'
    })
})
input_label.map((ele)=>{
    ele.addEventListener('blur', (e)=>{
        let element = e.target
        console.log()
         element.parentElement.children[0].style = 'background-color: #d3d3d360 !important;'
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