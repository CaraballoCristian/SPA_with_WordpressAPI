import { CalculateDate } from "../helpers/calculate_date.js";

export function SearchCard(postProps, userProps){
    let {title, _embedded} = postProps,
        { name, avatar_urls } = userProps,
        authorImg = avatar_urls["48"],
        authorName = name,
        dateFormat = new Date(_embedded.self[0].date).toLocaleString(),
        slug = _embedded.self[0].slug;
    
    let postDate = CalculateDate(new Date(_embedded.self[0].date));

return `
    <article class="search-card">
        <div>
            <figure class="author-sm">
                <img src="${authorImg}" alt="">
                <figcaption>
                    <h3>${authorName}</h3>
                    <time datetime="${dateFormat}">${postDate}</time>
                </figcaption>
            </figure>
            <div>
                <h2>${title}</h2>
                <a href="#/${slug}"">Ver Publicacion</a>
            </div>
        </div>
    </article>
`;
}