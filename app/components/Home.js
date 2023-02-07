export function Home(homeCard){
    return `
    <div class="home-section-top">
        <div class="home-section-top-text">
            <h2 class="home-section-top-text-about">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Odit est architecto laudantium quod illo dignissimos 
                mollitia aliquam quasi.
            </h2>
            <a class="home-section-top-text-link"></a>
        </div>
        <div class="home-section-top-animation">

        </div>
    </div>
    <div class="home-section-bottom">
        <div class="home-section-bottom-cardbox">
            ${homeCard}
        </div>    
    
        <div class="home-section-bottom-btnbox">
            <button class="home-section-bottom-btnbox-btn">Go to Posts..</button>
        </div>
    </div>

    `



}
