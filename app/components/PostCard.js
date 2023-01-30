export function PostCard(props){
    let {title, date, slug, _embedded} = props,
        dateFormat = new Date(date).toLocaleString(),
        urlCover = _embedded["wp:featuredmedia"] 
            ? _embedded["wp:featuredmedia"][0].source_url 
            : "app/assets/dummy-cover.png";

    return `
        <article  class="post-card">
            <img src="${urlCover}"" alt="">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${dateFormat}">${dateFormat}</time>
                <a href="#/${slug}">Ver Publicacion</a>
            </p>
        </article>
    `;
}