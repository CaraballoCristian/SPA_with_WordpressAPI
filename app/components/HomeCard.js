import { CalculateDate } from "../helpers/calculate_date.js";

export function HomeCard(props){
    //console.log(props)
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
        <article class="home-card" data-slug="#/${slug}">
            <div class="home-card-imgbox">
                <img class="home-card-imgbox-img" src="${urlCover}" alt="">
            </div>
            <div class="home-card-container">
                <div class="home-card-container-text">
                    <h2 class="home-card-container-text-title">${title.rendered}</h2>
                    <div class="home-card-container-text-par">${excerpt.rendered}</div>
                </div>
                <figure class="home-card-container-author">
                    <img class="home-card-container-author-img" src="${authorImg}" alt="">
                    <figcaption class="home-card-container-author-figcaption">
                        <h3 class="home-card-container-author-figcaption-name">${authorName}</h3>
                        <time class="home-card-container-author-figcaption-date" datetime="${dateFormat}">${postDate}</time>
                    </figcaption>
                </figure>
            </div>
        </article>
    `;
}