import { about } from "./about.js";

const routes = {
    "" : "home.html",
    "about" : "about.html",
    "projects" : "projects.html",
    "contact" : "contact.html"
}

navigate();

window.addEventListener('hashchange', () => {
    navigate();
})

function navigate() {
    let hash = window.location.hash.substring(2)
    let page = routes[hash]
    loadPage(page, document.querySelector('main'))
}

async function loadPage(url, domObj) {
    const response = await fetch(url)
    const html = await response.text()
    domObj.innerHTML = html
    if (url == 'about.html') about()
}