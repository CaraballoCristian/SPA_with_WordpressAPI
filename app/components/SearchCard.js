import { CalculateDate } from "../helpers/calculate_date.js";

export function SearchCard(props){
    let {title, date, slug, _embedded} = props,
        author = _embedded?.author?.[0] || {},
        authorName = author.name || "Unknown Author",
        authorImg = author.avatar_urls?.[48] || "app/assets/img/no-author.png",
        dateFormat = new Date(date).toLocaleString();

    let postDate = CalculateDate(new Date(date));

return `
    <article class="search-card">
        <div>
            <figure>
                <img src="${authorImg}" alt="author image">
                <figcaption>
                    <h3>${authorName}</h3>
                    <time datetime="${dateFormat}">${postDate}</time>
                </figcaption>
            </figure>
            <div>
                <h2>${title.rendered}</h2>
                <a href="#/${slug}"">Read More!</a>
            </div>
        </div>
    </article>
`;
}