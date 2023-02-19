const d = document;

export function Menu() {
    const $menu = d.createElement("nav");
    $menu.classList.add("menu");

    $menu.innerHTML = `
        <div class="menu-container">
            <a class="menu-item" id="home-link" href="#/">HOME</a>
            <a class="menu-item" id="posts-link" href="#/posts">POSTS</a>
            <a class="menu-item" id="search-link" href="#/search">SEARCH</a>
            <input class="menu-item" id="theme" type="checkbox">
            <label class="menu-item" id="dark-mode" for="theme"></label>
        </div>
        `;
        
    return $menu;
}