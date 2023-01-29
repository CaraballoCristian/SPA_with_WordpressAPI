import api from "./helpers/wp_api.js"
import { ajax } from "./helpers/ajax.js";
import { Loader } from "./components/Loader.js"
import { Header } from "./components/Header.js";
import { Posts } from "./components/Posts.js";
import { PostCard } from "./components/PostCard.js";


export function App(){
    const d = document,
        $root = d.getElementById("root");
        
    $root.appendChild(Header());
    $root.appendChild(Posts());
    $root.appendChild(Loader());

    ajax({
        url: api.POSTS,
        cbSuccess: (posts) => {
            let html = "";

            posts.forEach((post) => html += PostCard(post)); 

            d.querySelector(".loader").style.display = "none";
            
            //console.log(html)
            d.getElementById("posts").innerHTML = html;
        }
    });

} 