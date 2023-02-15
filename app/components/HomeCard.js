import { CalculateDate } from "../helpers/calculate_date.js";

export function HomeCard(props, className){
    let {title, date, slug, _embedded, excerpt} = props,
        dateFormat = new Date(date).toLocaleString(),
        authorImg = _embedded.author[0].avatar_urls["96"]
            ? _embedded.author[0].avatar_urls["96"]
            : "app/assets/img/no-author.png",
        authorName = _embedded.author[0].name
        ? _embedded.author[0].name
        : "John Doe",
        urlCover = _embedded["wp:featuredmedia"] 
            ? _embedded["wp:featuredmedia"][0].source_url 
            : "app/assets/img/dummy-cover.png";

    let postDate = CalculateDate(new Date(date));
    
    return `
        <article class="${className}" data-slug="#/${slug}">
            <div class="${className}-imgbox">
                <img class="${className}-imgbox-img" src="${urlCover}" alt="">
            </div>
            <div class="${className}-container">
                <div class="${className}-container-text">
                    <h2 class="${className}-container-text-title">${title.rendered}</h2>
                    <div class="${className}-container-text-par">${excerpt.rendered}</div>
                </div>
                <figure class="${className}-container-author">
                    <img class="${className}-container-author-img" src="${authorImg}" alt="">
                    <figcaption class="${className}-container-author-figcaption">
                        <h3 class="${className}-container-author-figcaption-name">${authorName}</h3>
                        <time class="${className}-container-author-figcaption-date" datetime="${dateFormat}">${postDate}</time>
                    </figcaption>
                </figure>
            </div>
        </article>
    `;
}