//MOSTRANDO AS NOTIFICACÕES
    
if(document.contains(document.querySelector('#div-p-info'))) {
    const info_notification1 = document.querySelector('.p1')
    const info_notification2 = document.querySelector('.p2')
    const info_notification3 = document.querySelector('.p3')
    const info_notification4 = document.querySelector('.p4')
    const info_notification5 = document.querySelector('.p5')
    const info_notification6 = document.querySelector('.p6')

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
        var p1 = document.createElement('p')
        p1.classList.add('p-info')
        p1.innerText = `Atenção ao Cadastro:`
        
        var p2 = document.createElement('p')
        p2.classList.add('p-info')
        p2.innerText = `Prezado(a) usuário(a),`

        var p3 = document.createElement('p')
        p3.classList.add('p-info')
        p3.innerText = `Gostaríamos de informar que, após o cadastro, as informações de "nome completo, número do Bilhete de Identidade e telefone" não poderão ser alteradas, exceto mediante o pagamento de uma taxa específica para alteração, disponível na nossa plataforma.`

        var p4 = document.createElement('p')
        p4.classList.add('p-info')
        p4.innerText = `Portanto, solicitamos que tenha o máximo de atenção e cuidado ao inserir esses dados durante o processo de cadastro, para evitar erros que possam ser difíceis de corrigir posteriormente.`

        var p5 = document.createElement('p')
        p5.classList.add('p-info')
        p5.innerText = `Agradecemos pela compreensão e colaboração.`

        var p6 = document.createElement('p')
        p6.classList.add('p-info')
        p6.innerText = `Atenciosamente, Help.`



        var a1 = []
        var a2 = []
        var a3 = []
        var a4 = []
        var a5 = []
        var a6 = []
        var b1 = 1
        var b2 = 1
        var b3 = 1
        var b4 = 1
        var b5 = 1
        var b6 = 1
        var i = 0
        var j = 0
        var k = 0
        var r = 0
        var c = 0
        var y = 0
        
        for (let index = 0; index < p1.innerText.length; index++) {
            a1[index] = p1.innerText.slice(index, b1)
            b1++
        }
        for (let index = 0; index < p2.innerText.length; index++) {
            a2[index] = p2.innerText.slice(index, b2)
            b2++
        }
        for (let index = 0; index < p3.innerText.length; index++) {
            a3[index] = p3.innerText.slice(index, b3)
            b3++
        }
        for (let index = 0; index < p4.innerText.length; index++) {
            a4[index] = p4.innerText.slice(index, b4)
            b4++
        }
        for (let index = 0; index < p5.innerText.length; index++) {
            a5[index] = p5.innerText.slice(index, b5)
            b5++
        }
        for (let index = 0; index < p6.innerText.length; index++) {
            a6[index] = p6.innerText.slice(index, b6)
            b6++
        }

        function TextSMS() {
            if (a1[i] != undefined) {
               info_notification1.append(a1[i])
            } else if(a2[j] != undefined && a1[i] == undefined) {
                info_notification2.append(a2[j])
                j++
            }else if(a3[k] != undefined && a2[j] == undefined) {
                info_notification3.append(a3[k])
                k++
            } else if(a4[r] != undefined && a3[k] == undefined) {
                info_notification4.append(a4[r])
                r++
            } else if(a5[c] != undefined && a4[k] == undefined) {
                info_notification5.append(a5[c])
                c++
            } else if(a6[y] != undefined && a5[c] == undefined) {
                info_notification6.append(a6[y])
                y++
            }
            i = i + 1
            
        } 
        setInterval(TextSMS, 50)
    })

    //BAIXANDO A INFORNAÇÃO DE ALERTA
    const div_icon = document.querySelector('.div-icon')
    const div_opacity = document.querySelector('.div-opacity')
    const ceta_down = document.querySelector('.rot')
    const container_info = document.querySelector('.container-info')

    div_icon.addEventListener('click', ()=>{
        if(container_info.classList.contains('download-information')) {
            container_info.classList.remove('download-information')
            div_icon.style = 'background-color: #FFFFFF !important;'
            div_opacity.style = 'display: flex !important;'
            ceta_down.classList.add('rotate')
        }else{
            container_info.classList.add('download-information')
            div_icon.style = 'background-color: rgba(0, 0, 255, 0.534) !important;'
            div_opacity.style = 'display: none !important;'
            ceta_down.classList.remove('rotate')
            
        }
    })
    
}




/*CADASTRANDO PESSOAS */
const form = document.querySelector('#form')
const alert_sms = document.querySelector('#alert_sms')
const ContainerSpinner = document.querySelector('.ContainerSpinner')

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
                window.location.href = response.url
                //console.log(response.url)
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