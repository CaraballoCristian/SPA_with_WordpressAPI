import { CalculateDate } from "../helpers/calculate_date.js";

export function PostCard(props){
    let {title, date, slug, _embedded, excerpt} = props,
        dateFormat = new Date(date).toLocaleString(),
        excerptFormat,
        postAuthor = _embedded?.author?.[0],
        authorImg = postAuthor?.avatar_urls?.["48"] || "app/assets/img/no-author.png",
        authorName = postAuthor?.name || "TechCrunch",
        urlCover = _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "app/assets/img/dummy-cover.png";

    let postDate = CalculateDate(new Date(date));

    if(excerpt.rendered.length > 300) excerptFormat = excerpt.rendered.slice(0,300) + " ...";
    else excerptFormat = excerpt.rendered.slice(0,-5) + " ...";

    return `
        <article  class="post-card">
            
            <div class="post-card-front post-card-face">
                <div class="post-card-front-top">
                    <img class="post-card-front-top-img" src="${urlCover}" alt="">
                </div>      

                <div class="post-card-front-bottom">
                    <div class="post-card-front-bottom-text">
                        <h2 class="post-card-front-title">${title.rendered}</h2>
                    </div>
                    <figure class="post-card-front-author">
                        <img class="post-card-front-author-img" src="${authorImg}" alt="">
                        <figcaption class="post-card-front-figcaption">
                            <h3 class="post-card-front-figcaption-h3">${authorName}</h3>
                            <time class="post-card-front-figcaption-date" datetime="${dateFormat}">${postDate}</time>
                        </figcaption>
                    </figure>
                </div> 
            </div> 
            <div class="post-card-back post-card-face"> 
                <div class="post-card-back-text">
                    ${excerptFormat}
                </div>
                <a class="post-card-back-link" href="#/${slug}">Read More!</a>
            </div> 

        </article>
    `;
}