const hamburger = document.querySelector('.hamburger');
const mobilemenu = document.querySelector('.mobilemenu');

hamburger.addEventListener('click', () => {
    mobilemenu.classList.toggle('showMobileMenu')
})