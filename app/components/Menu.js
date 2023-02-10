const d = document;

export function Menu() {
    const $menu = d.createElement("nav");
    $menu.classList.add("menu");
    
    $menu.innerHTML = `
        <div id="marker"></div>
        <a href="#/">HOME</a>
        <a href="#/posts">POSTS</a>
        <a href="#/search">SEARCH</a>
    `;
    return $menu;
}