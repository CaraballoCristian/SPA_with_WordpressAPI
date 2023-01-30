export function Post(props){
    let {content, title, date} = props,
    dateFormat = new Date(date).toLocaleString();
    console.log(dateFormat)
    return `
    <section class="post-page">
    <aside>
        <h2>${title.rendered}</h2>
        <time datetime="${dateFormat}">${dateFormat}</time>
    </aside>
    <hr>
    <article>${content.rendered}</article>
    </section>  
    `
}