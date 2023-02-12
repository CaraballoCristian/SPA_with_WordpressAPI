import { getCard } from "../helpers/getCard.js";

export function Home(homeCard){

    document.addEventListener("click", e => {
        if(e.target.matches(".home-card") || e.target.matches(".home-card *")){
            location.hash = getCard(e.target,"home-card").getAttribute("data-slug");
        }
    })

    return `
    <div class="home-section-top">
        <div class="home-section-top-text">
            <h2 class="home-section-top-text-about">
                Simple SPA that consumes data from CSS-TRICKS using WordPress API. Created with HTML, CSS, JavaScript, SASS and GSAP.
            </h2>
            <h3>For more information please check <a href="https://github.com/CaraballoCristian/SPA_with_WordpressAPI" class="home-section-top-text-link" target="_blank" rel="noopener">the repo</a> on GitHub!</h3>
        </div>
        <div class="home-section-top-animation">

        </div>
    </div>
    <div class="home-section-bottom">
        <h2 class="home-section-bottom-title">LAST POST</h2>
        <span class="arrow"></span>
        <div class="home-section-bottom-cardbox">
            ${homeCard}
        </div>    
    </div>

    `
    
}
