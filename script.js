let menu = document.querySelector('menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
    menu.classList.toggle('bx-b');
    navlist.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-b')
    navlist.classList.remove('open')
}