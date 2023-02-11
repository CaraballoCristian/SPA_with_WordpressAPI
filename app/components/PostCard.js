import { CalculateDate } from "../helpers/calculate_date.js";

export function PostCard(props){
    let {title, date, slug, _embedded, excerpt} = props,
        dateFormat = new Date(date).toLocaleString(),
        authorImg = _embedded.author[0].avatar_urls["48"]
            ? _embedded.author[0].avatar_urls["48"]
            : "app/assets/img/no-author.png",
        authorName = _embedded.author[0].name
        ? _embedded.author[0].name
        : "John Doe",
        urlCover = _embedded["wp:featuredmedia"] 
            ? _embedded["wp:featuredmedia"][0].source_url 
            : "app/assets/img/dummy-cover.png";

    let postDate = CalculateDate(new Date(date));
    return `
        <article  class="post-card">
            
            <div class="post-card-front">
                <div class="post-card-front-top">
                    <img class="post-card-front-top-img"src="${urlCover}"" alt="">
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
            <div class="post-card-back"> 
                <div class="post-card-back-text">
                    ${excerpt.rendered}
                </div>
                <a class="post-card-back-link btn" href="#/${slug}">Read More!<span>
                    <img src="app/assets/img/next.png">
                </span></a>
            </div> 

        </article>
    `;
}