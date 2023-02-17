import { getCard } from "../helpers/getCard.js";
import { getDefaultFontSize } from "../helpers/getDefaultFontSize.js";

export function Post(props, related, author){
    let {content, title, date} = props,
        dateFormat = new Date(date).toLocaleString(), 
        authorImg = author.avatar_urls[96] 
            ? author.avatar_urls[96]
            : "app/assets/img/no-author.png";
 
    //USING POST COVER IMG AS BACKGROUND
    document.getElementById("root").style.backgroundImage =`radial-gradient(circle at -10% -10%,#ff32c8ab, 25%, transparent 50%),
                                                            radial-gradient( circle at 105% 35%, #ff32caab, 20%,#0a1756 60%), url("${props.featured_media_src_url}")`;
    document.getElementById("root").style.backgroundSize = "cover";  

    document.addEventListener("click", e => {
        //RELATED CARD ROUTING
        if(e.target.matches(".related-card figure") || e.target.matches(".related-card figure *")){
            location.hash = getCard(e.target,"related-card").getAttribute("data-slug");
        }

        //AVOIDING HASH NAVIGATION INSIDE THE POST AND USING JS INSTEAD  
        if(e.target.matches(".post-section-content *") && e.target.getAttribute("href").includes("#")){
            e.preventDefault();

            const hash = e.target.getAttribute("href").slice(1),
                target = document.querySelector(`.post-section-content-main *[id='${hash}']`).offsetTop;
            let marginTop = 6 * getDefaultFontSize(); //6rem

            window.scrollTo({
                top: target - marginTop,
                left: 0,
                behavior: "smooth"
            })
        }
    })

    return `
    <section class="post-section">
        <div class="post-section-header">
            <div class="post-section-header-left">
                <h2>${title.rendered}</h2>
                <figure class="post-section-header-left-author">
                    <img src="${authorImg}" alt="author">
                    <div>
                        <h3>${author.name}</h3>
                        <time datetime="${dateFormat}">${dateFormat}</time>
                    </div>    
                </figure>            
            </div>
            <div class="post-section-header-right"></div>
        </div>
        <div class="post-section-content">
            <article class="post-section-content-main">
                ${content.rendered}
            </article>
            <aside class="post-section-content-aside">
                <div class="post-section-content-aside-slider">
                    <h3 class="post-section-content-aside-slider-title">Related Posts</h3>
                    <div class="post-section-content-aside-slider-container">
                        <div class="post-section-content-aside-slider-container-cards">
                            ${related}
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    </section>  
    `
}