document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("lastModified").textContent = document.lastModified;
});

const hamburger = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    burger.classList.toggle('open');
    header.classList.toggle('open');
});

function showBanner() {
    const today = new Date();
    const day = today.getDay();
    return day === 1 || day === 2 || day === 3;
}

if (showBanner()) {
    const banner = document.getElementById("banner");
    banner.style.display = "block";
}

const close = document.getElementById("close");
if (close) {
    close.addEventListener("click", function () {
        const banner = document.getElementById("banner");
        banner.style.display = "none";
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadSpotlightMembers();
});

async function loadSpotlightMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();

        const spotlightMembers = data.members.filter(member =>
            member.membership_level.includes('Level Silver') || member.membership_level.includes('Level Gold')
        );

        const selectedMembers = getRandomMembers(spotlightMembers, 2, 3);

        const spotlightContainer = document.getElementById('spotlight-ads');
        selectedMembers.forEach(member => {
            const spotlightCard = createSpotlightCard(member);
            spotlightContainer.appendChild(spotlightCard);
        });

    } catch (error) {
        console.error('Error fetching spotlight members:', error);
    }
}

function getRandomMembers(members, min, max) {
    const numberOfMembers = Math.floor(Math.random() * (max - min + 1)) + min;
    const randomMembers = [];
    const membersCopy = [...members];
    for (let i = 0; i < numberOfMembers; i++) {
        const randomIndex = Math.floor(Math.random() * membersCopy.length);
        randomMembers.push(membersCopy.splice(randomIndex, 1)[0]);
    }
    return randomMembers;
}

function createSpotlightCard(member) {
    const card = document.createElement('div');
    card.classList.add('spotlight-card');
    card.innerHTML = `
        <h3>${member.company_name}</h3>
        <img src="${member.icon}" alt="${member.company_name} logo" />
        <p><strong>Address:</strong> ${member.address}</p>
        <p><strong>Phone:</strong> ${member.phone_number}</p>
        <p><strong>Website:</strong> ${member.url}</p>
        <a href="${member.url}" target="_blank">Visit Website</a>
    `;
    return card;
}

localStorage.setItem('lastVisit', Date.now());