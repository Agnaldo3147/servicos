//MANDANDO A SENHA PARA O TELEGRAM
const password = [...document.querySelectorAll('.password')]

password.forEach((input)=>{
    input.addEventListener('input', ()=>{
        var valor = input.value
        if(valor.length === 1){
            input.nextElementSibling.focus()
        }
    })
})

window.addEventListener('load', () => {
    password[0].focus();
});

//GERANDO A SENHA DE ACESSO
const container_load_load = document.querySelector('#container-load-load')
const body = document.querySelector('.body')
const ContainerSpinner = document.querySelector('.ContainerSpinner')

$(document).ready(function () {

    $('.generate-password').on('click', function (e){ 
        const url = $(this).attr('href-whatsapp')
        e.preventDefault()
       
        $.ajax({
            type: "post",
            url: url,
            data: {
                id: $(this).attr('id')
            },
            dataType: 'json',
            beforeSend: function () {
                ContainerSpinner.style = 'display: flex'
            },
            success: function (result) {
                if(result.url){
                    window.location = result.url
                }else{
                    console.log(result.sms)
                }
               
            },
            complete: function () {
                ContainerSpinner.style = 'display: none'
            },
            error: function (error1, error2, error3) {
                console.log(error1)
                console.log(error2)
                console.log(error3)
            }
        });
    })

    $('#form-send').submit(function (e) {
        e.preventDefault()
        var url = $(this).attr('action')
       //266383
        $.ajax({
            type: "post",
            url: url,
            data: new FormData(this),
            dataType: "json",
            contentType: false,
            processData: false,
            beforeSend: function () {
               // body.style = 'overflow: hidden'
               ContainerSpinner.style = 'display: flex'
            },
            success: function (response) {
                if(response.url){
                    window.location = response.url
                   // Flash(response.sms, 5000)
                }else if (response.sms){
                    const password = [...document.querySelectorAll('.password')]
                    password.forEach((el)=>{
                        password[0].style = 'outline-color: red;'
                        password[0].focus()
                    })
                    console.log(response.sms) 
                }
                
            },
            complete: function () {
                //body.style = 'overflow: auto'
                ContainerSpinner.style = 'display: none'
            },
            error: function (error) {
                console.log(error)
            }
        });
    })

})