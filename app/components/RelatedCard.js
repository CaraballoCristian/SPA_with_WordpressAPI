import { CalculateDate } from "../helpers/calculate_date.js";

export function relatedCard(props){
    let {date, title, slug, jetpack_featured_media_url, _embedded} = props,
        postImg = jetpack_featured_media_url || _embedded?.["wp:featuredmedia"]?.[0]?.source_url || "app/assets/img/dummy-cover.png",
        dateFormat = CalculateDate(new Date(date)),
        titleFormat;

        if(title.rendered.length > 30) titleFormat = title.rendered.slice(0,30) + " ...";
        else titleFormat = title.rendered;

return `
    <article class="related-card" data-slug="#/${slug}">
        <figure>
            <figcaption>
                <h4>${titleFormat}</h4>  
                <time datetime="${date}">${dateFormat}</time>   
            </figcaption>
            <img src="${postImg}" alt="related posts cover">
        </figure>
    </article>
`;
}