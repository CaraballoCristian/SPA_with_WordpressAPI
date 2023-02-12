const d = document;

export function Menu() {
    const $menu = d.createElement("nav");
    $menu.classList.add("menu");

    $menu.innerHTML = `
        <div class="menu-container">
            <a id="home-link" href="#/">HOME</a>
            <a id="posts-link" href="#/posts">POSTS</a>
            <a id="search-link" href="#/search">SEARCH</a>
        </div>
        `;
        
    return $menu;
}