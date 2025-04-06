document.getElementById("lastModified").textContent = document.lastModified;

const hamburger = document.querySelector('.hamburger');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    burger.classList.toggle('open');
    header.classList.toggle('open');
});

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

fetch('data/members.json')
    .then(response => response.json())
    .then(data => {
        renderMembers(data.members);
    })
    .catch(error => console.error('Error loading JSON:', error));

function renderMembers(members) {
    members.forEach(member => {
        const memberCard = document.createElement('section');
        memberCard.classList.add('card');

        memberCard.innerHTML = `
            <img src="${member.icon}" alt="${member.company_name} logo" />
            <h3>${member.company_name}</h3>
            <p><strong>Membership Level:</strong> ${member.membership_level}</p>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone_number}</p>
            <p><strong>Website:</strong> <a href="${member.url}" target="_blank">${member.url}</a></p>
        `;

        display.appendChild(memberCard);
    });
}