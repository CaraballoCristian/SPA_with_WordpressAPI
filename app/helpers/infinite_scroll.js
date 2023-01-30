import api from "./wp_api.js"
import { ajax } from "./ajax.js";
import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";

export async function infiniteScroll() {
    const d = document,
        w = window;
    
        let apiURL,
        Component;

    w.addEventListener("scroll", async e => {
        let {scrollTop, clientHeight, scrollHeight} = d.documentElement,
            {hash} = w.location;

        console.log(scrollTop, clientHeight, scrollHeight, hash)
        console.log(scrollHeight - clientHeight)
        if(scrollTop + clientHeight >= scrollHeight){
            api.page++;

            if(!hash || hash === "#/"){
                apiURL = `${api. POSTS}&page=${api.page}`;
                Component = PostCard;
            }else if (hash.includes("#/search")) {
                let query = location.hash.replace("#/search?search=", "");
                apiURL = `${api.SEARCH}&page=${api.page}`;
                Component = SearchCard;
            }else return;
            
            d.querySelector(".loader").style.display = "block";
            
            await ajax({
                url: apiURL,
                cbSuccess: (posts) => {
                    let html = "";
                    
                    posts.forEach(post => html += Component(post));

                    d.getElementById("main").insertAdjacentHTML("beforeend", html);
                    
                    d.querySelector(".loader").style.display = "none";
                }
            })


        } 
    })
}