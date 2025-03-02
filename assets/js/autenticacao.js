const alerta_flash = document.querySelector('.alerta')
const senha = document.querySelector('.senha')
var c = 1


for (let index = 0; index < alerta_flash.textContent.length; index++) {
    const child = document.createElement('div')
    child.classList.add('input-senha')
    child.append(alerta_flash.textContent.slice(index, c))

    senha.appendChild(child)

    c = c + 1
}