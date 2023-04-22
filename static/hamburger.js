const hamburgerMenu = document.querySelector(".hamburger-menu");
const navUl = document.querySelector("nav ul");

document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navUl = document.querySelector('nav ul');

    hamburgerMenu.addEventListener('click', function () {
        hamburgerMenu.classList.toggle('open');
        navUl.classList.toggle('open');
    });
});