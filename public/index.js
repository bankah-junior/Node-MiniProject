const openMenu = document.querySelector('#openMenu');
const closeMenu = document.querySelector('#closeMenu');
const menu = document.querySelector('#menu');

openMenu.addEventListener('click', () => {
    openMenu.classList.add('hidden');
    closeMenu.classList.remove('hidden');
    menu.classList.remove('hidden');
    menu.classList.add('flex');
});

closeMenu.addEventListener('click', () => {
    openMenu.classList.remove('hidden');
    closeMenu.classList.add('hidden');
    menu.classList.add('hidden');
    menu.classList.remove('flex');
});