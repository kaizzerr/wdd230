const baseURL = "https://kaizzerr.github.io/wdd230/";
const linksURL = "https://kaizzerr.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const linksContainer = document.getElementById("links-container");
    linksContainer.innerHTML = "";

    weeks.forEach((week) => {
        const weekElement = document.createElement("section");
        const weekInfo = document.createElement("div");

        const links = week.links.map(link => {
            const linkElement = document.createElement("a");
            linkElement.href = link.url;
            linkElement.textContent = link.title;
            linkElement.target = "_blank";
            return linkElement.outerHTML;
        }).join(" | ");

        weekInfo.innerHTML = `${week.week}: ${links}`;
        weekElement.appendChild(weekInfo);

        linksContainer.appendChild(weekElement);
    });
}

getLinks();