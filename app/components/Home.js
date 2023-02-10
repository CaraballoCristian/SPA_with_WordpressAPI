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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Odit est architecto laudantium quod illo dignissimos 
                mollitia aliquam quasi.
            </h2>
            <a class="home-section-top-text-link">GitHub</a>
        </div>
        <div class="home-section-top-animation">

        </div>
    </div>
    <div class="home-section-bottom">
        <h2 class="home-section-bottom-title">LAST POST</h2>
        <div class="home-section-bottom-cardbox">
            ${homeCard}
        </div>    
    </div>

    `
}
