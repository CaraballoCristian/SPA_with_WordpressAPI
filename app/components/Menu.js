const d = document;

export function Menu() {
    const $menu = d.createElement("nav");
    $menu.classList.add("menu");
    
    $menu.innerHTML = `
        <a href="#/">Home</a>
        <span></span>
        <a href="#/search">Búsqueda</a>
        <span></span>
        <a href="#/contacto">Contacto</a>
        <span></span>
    `;
    return $menu;
}