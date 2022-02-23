const buttonMenu = document.querySelector(".menu");
const menu = document.querySelector('.nav');
const buttonClose = document.querySelector('.close');
const glass = document.querySelector('.glass');
const left = document.querySelector('.button__left');
const right = document.querySelector('.button__right');
const mainImage = document.querySelector('.main-image')

buttonMenu.addEventListener('click', () => {
    menu.classList.toggle('nav--active')
})

buttonClose.addEventListener('click', () => {
    menu.classList.toggle('nav--active')
})

glass.addEventListener('click', () => {
    menu.classList.toggle('nav--active')
})

let counter = 1

right.addEventListener("click", () => {
    if (counter < 3 && counter > 0) {
        counter++;
        let path = `./images/desktop-image-hero-${counter}.jpg`;
        mainImage.src = path;
    } else {
        counter = 3;
    }

})

left.addEventListener("click", () => {
    if (counter > 1 && counter < 4) {
        counter--;
        let path = `./images/desktop-image-hero-${counter}.jpg`;
        mainImage.src = path;
    } else {
        counter = 1;
    }

})

