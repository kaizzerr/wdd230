document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const hamburger = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');
hamburger.addEventListener('click', () => {
    header.classList.toggle('open');
    hamburger.classList.toggle('open');
    burger.classList.toggle('open');
});

const ratingvalue = document.getElementById("ratingvalue");
const rating = document.getElementById("r");

rating.addEventListener('change', displayRatingValue);
rating.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    ratingvalue.innerHTML = rating.value;
}