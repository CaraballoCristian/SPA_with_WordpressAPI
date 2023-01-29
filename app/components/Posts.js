const d = document;

export function Posts(){
    const $posts = d.createElement("section");
    $posts.classList.add("grid-fluid");
    $posts.id = "posts";
    
    return $posts;
}