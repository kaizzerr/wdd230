document.getElementById("lastModified").textContent = document.lastModified;

const hamburger = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open'); 
    burger.classList.toggle('open');
    header.classList.toggle('open');
});

const visitMessage = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');

if (lastVisit) {
    const now = Date.now();
    const timeDifference = now - lastVisit;
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));

    if (daysDifference === 0) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else if (daysDifference === 1) {
        visitMessage.textContent = "You last visited 1 day ago.";
    } else {
        visitMessage.textContent = `You last visited ${daysDifference} days ago.`;
    }
} else {
    visitMessage.textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem('lastVisit', Date.now());