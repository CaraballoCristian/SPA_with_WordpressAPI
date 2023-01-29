export function PostCard(props){
    let {title, date} = props
    let fecha = date.toLocaleString()
    return `
        <article class="post-card">
            <img src="https://picsum.photos/200" alt="">
            <h2>${title.rendered}</h2>
            <p>
                <time datetime="${fecha}">${fecha}</time>
                <a href="#">Ver Publicacion</a>
            </p>
        </article>
    `;
}