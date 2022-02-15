const buttonMenu = document.querySelector(".menu");
const menu = document.querySelector('.nav')
const buttonClose = document.querySelector('.close')

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('nav--active')
})

buttonClose.addEventListener('click', () => {
    menu.classList.toggle('nav--active')
})
