document.getElementById("lastModified").textContent = document.lastModified;

const hamburger = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open'); 
    burger.classList.toggle('open');
    header.classList.toggle('open');
});