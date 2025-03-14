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

const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const card = document.querySelector(".card");
const cardSection = document.querySelectorAll(".card section");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌑")) {
        main.style.background = "#000";
        main.style.color = "#fff";

        card.style.background = "#333";
        cardSection.forEach(section => {
            section.style.background = "#444";
            section.style.color = "#fff";
        });

        modeButton.textContent = "☀️";
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";

        card.style.background = "#fff";
        cardSection.forEach(section => {
            section.style.background = "#eee";
            section.style.color = "#000";
        });

        modeButton.textContent = "🌑";
    }
});
