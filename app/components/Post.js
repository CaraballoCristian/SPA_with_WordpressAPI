import { getCard } from "../helpers/getCard.js";

export function Post(props, related, author){
    let {content, title, date} = props,
        dateFormat = new Date(date).toLocaleString(), 
        authorImg = author.avatar_urls[96] 
            ? author.avatar_urls[96]
            : "app/assets/img/no-author.png";

    document.getElementById("root")
        .style.backgroundImage = `radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.80) 100%), url("${props.featured_media_src_url}")`;

    document.addEventListener("click", e => {
        if(e.target.matches(".related-card figure") || e.target.matches(".related-card figure *")){
            location.hash = getCard(e.target,"related-card").getAttribute("data-slug");
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