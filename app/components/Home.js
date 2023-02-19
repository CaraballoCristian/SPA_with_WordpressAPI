import { getCard } from "../helpers/getCard.js";

export function Home(homeCard,cards){

    //HOME CARDS ROUTING
    document.addEventListener("click", e => {
        if(e.target.matches(".home-card-main") || e.target.matches(".home-card-main *")){
            location.hash = getCard(e.target,"home-card-main").getAttribute("data-slug");
        }
        if(e.target.matches(".home-card-secondary") || e.target.matches(".home-card-secondary *")){
            location.hash = getCard(e.target,"home-card-secondary").getAttribute("data-slug");
        }
    })

    return `
    <div class="home-section-top">
        <div class="home-section-top-text">
            <h2  id="home-h2" class="home-section-top-text-about same">
                SPA that consumes data from CSS-TRICKS using WordPress API. Created with HTML, SASS, JavaScript
            </h2><h2 id="home-h2-middle" class="same"></h2><h2 id="home-h2-end" class="same"></h2>
            <h3 id="home-h3" >For more information please check <a href="https://github.com/CaraballoCristian/SPA_with_WordpressAPI" id="home-gh-link" target="_blank" rel="noopener">the repo</a> on GitHub!</h3>
        </div>
        <div class="home-section-top-animation">
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
            <div class="shape"></div>
        </div>
    </div>
    <div class="home-section-bottom">
        <h2 class="home-section-bottom-title">LAST POST</h2>
        <span class="arrow"></span>
        <div class="home-section-bottom-cardbox">
            ${homeCard}
        </div>    
        <div class="home-section-bottom-postsbox">
            <div class="home-section-bottom-postsbox-cards grid-fluid-home">
                ${cards.innerHTML}
            </div>
            <div class="home-section-bottom-postsbox-linkbox">
                <a class="home-section-bottom-postsbox-linkbox-link btn" href="#/posts">Keep Browsing!<span>
                <img src="app/assets/img/nextWhite.png">
            </span></a>
            </div>
        </div>
    </div>

    `
}
