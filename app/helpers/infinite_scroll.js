import api from "./wp_api.js"
import { ajax } from "./ajax.js";
import { PostCard } from "../components/PostCard.js";
import { SearchCard } from "../components/SearchCard.js";

export async function infiniteScroll() {
    const d = document,
        w = window;
    
        let apiURL,
        Component,
        section;

    w.addEventListener("scroll", async e => {
        let {scrollTop, clientHeight, scrollHeight} = d.documentElement,
            {hash} = w.location;

        if((scrollTop + clientHeight >= scrollHeight) && (location.hash !== "#/search")){
            api.page++;

            if(!hash || hash === "#/posts"){
                section = ".posts-section";
                apiURL = `${api. POSTS}&page=${api.page}`;
                Component = PostCard;
            }else if (hash.includes("#/search")) {/* 
                let query = location.hash.replace("#/search?search=", ""); */
                section = ".search-section";
                apiURL = `${api.SEARCH}&page=${api.page}`;
                Component = SearchCard;
            }else return;
            
            d.querySelector(".loader").style.display = "block";
            
            await ajax({
                url: apiURL,
                cbSuccess: async (posts) => {
                    let html = "";
                    //console.log(posts.length)

                    for(let i = 0; i<posts.length; i++){
                        if(!hash.includes("#/search")) html += Component(posts[i])
                        
                        else{
                            let id = posts[i]._embedded.self[0].author;
                            //valido que solamente traiga post cuyos autores existan
                            if(id) {
                                await ajax({
                                    url: `${api.USER}/${id}`,
                                    cbSuccess: (user) => {
                                        html += SearchCard(posts[i], user);
                                    },
                                });
                            }
                        }
                    }

                    d.querySelector(section).insertAdjacentHTML("beforeend", html);
                    
                    d.querySelector(".loader").style.display = "none";
                }
            })
        } 
    })
}