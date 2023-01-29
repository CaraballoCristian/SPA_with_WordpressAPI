import api from "../helpers/wp_api.js"

const d = document;

export function Title(){
    const $h1 = d.createElement("h1");
    $h1.innerHTML = `
    <a href="${api.DOMAIN}" target="_blank" rel="noopener">
        ${api.NAME.toUpperCase()}
    </a>
    `
    $h1.classList.add("title")
    
    return $h1;
}
