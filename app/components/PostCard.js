import { CalculateDate } from "../helpers/calculate_date.js";


export function PostCard(props){
    let {title, date, slug, _embedded} = props,
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
            <div class="post-card__top">
                <img class="post-card__top-img"src="${urlCover}"" alt="">
            </div>      

            <div class="post-card__bottom">
                <div class="post-card__bottom-text">
                    <h2 class="post-card__title">${title.rendered}</h2>
                    <a class="post-card__link" href="#/${slug}">Ver Publicacion</a>
                </div>
                <figure class="post-card__author">
                    <img class="post-card__author--img" src="${authorImg}" alt="">
                    <figcaption class="post-card__figcaption">
                        <h3 class="post-card__figcaption--h3">${authorName}</h3>
                        <time class="post-card__figcaption--date" datetime="${dateFormat}">${postDate}</time>
                    </figcaption>
                </figure>
            </div > 
        </article>
    `;
}