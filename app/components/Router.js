import api from "../helpers/wp_api.js"
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Home } from "./Home.js";
import { HomeCard } from "./HomeCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { relatedCard } from "./RelatedCard.js";
import Loaders from "./Loaders.js";
import { validateForm } from "../helpers/validate_forms.js";

let query = "";

export async function Router(){
    document.getElementById("root").style.backgroundImage = `radial-gradient(circle, rgba(0,0,0,0.44) 0%, rgba(0,0,0,0.80) 100%)`;
    
    const d = document,
        w = window,
        $main = d.getElementById("main");      
        
    let { hash } = w.location; 


    /* 
    d.querySelector(".loader").style.display = "block";  */
    if(!hash || hash === "#/"){
        
        const $home = document.querySelector(".menu a[href='#/']");
        $home.classList.add("selected");

        console.log(api.HOME)

        await ajax({
            url: api.HOME,
            cbSuccess: (post) => {
                const $home = d.createElement("section");
                $home.classList.add("home-section");
                
                const $homeCard = HomeCard(post[0]);

                $home.innerHTML = Home($homeCard);
                
                setTimeout(() => {
                    $main.appendChild($home); 
                }, 1000);
            }
        });

    }else if(hash === "#/posts"){

        d.querySelector(".footer").style.display = "none";

        let $containerLoader;
        let aux;
        
        if(api.page === 1){
            $containerLoader = d.createElement("section");
            $containerLoader.classList.add("posts-section", "grid-fluid", "skeleton-section");
            for (let i = 0; i < api.PER_PAGE; i++) {
                $containerLoader.innerHTML += Loaders.postCardLoader();
            }
            $main.appendChild($containerLoader);
            aux = d.querySelector(".skeleton-section");
        }

        const $posts = document.querySelector(".menu a[href='#/posts']");
        $posts.classList.add("selected");

        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                let $container = d.createElement("section");
                $container.classList.add("posts-section", "grid-fluid");
                posts.forEach((post) => $container.innerHTML += PostCard(post));
                
                setTimeout(() => {
                    $main.removeChild(aux)
                    $main.appendChild($container); 
                }, 1000);
            }
        });

    

    
    }else if (hash.includes("#/search")){
        d.querySelector(".footer").style.display = "none";
        
        let $containerSearchLoader;
        let aux;
        
        if(api.page === 1 && hash.includes("#/search?search=")){
            $containerSearchLoader= d.createElement("section")
            $containerSearchLoader.classList.add("search-section", "skeleton-section");
            for(let i = 0; i < api.PER_PAGE; i++){
                $containerSearchLoader.innerHTML += Loaders.searchCardLoader();
            }
            $main.appendChild($containerSearchLoader);
            aux = d.querySelector(".skeleton-section");
        }

        /* if(1 === 1){
            console.log("lel")
            const $busqueda = document.querySelector(".menu a[href='#/search']");
            $busqueda.classList.add("selected");

            let $containerSearch = document.createElement("div");
            $containerSearch.innerHTML = Loaders.postLoader();
            $main.appendChild($containerSearch);
            return;
        } */

        const $busqueda = document.querySelector(".menu a[href='#/search']");
        $busqueda.classList.add("selected");
        
        if(!hash.includes("#/search?search=")) {
            if(query) {
                location.hash = `#/search?search=${query}`
                return;
            }
        } 
        else {
            query = location.hash.replace("#/search?search=", "");
        }
     
        d.querySelector(".search-form input").value = query ? query : "";

        if(!query) d.querySelector(".loader").style.display = "none";

        d.addEventListener("search", e => {
            if(!e.target.matches("input[type='search']")) return;
            if(!e.target.value) {
                window.location.hash = "#/";
                query = ""
            }
        })

        if(!query) return;
        
        //-----------------------------------------------------------------
        await ajax({
            url: `${api.SEARCH}${query}`,
            cbSuccess: async (search) => {
                
                if(search.length !== 0) { 
                    let $containerSearch = d.createElement("section");
                    $containerSearch.classList.add("search-section");
                    

                    for(let i = 0; i<search.length; i++){
                         let id = search[i]._embedded.self[0].author;
                        if(id) {
                            await ajax({
                                url: `${api.USER}/${id}`,
                                cbSuccess: (user) => $containerSearch.innerHTML +=  SearchCard(search[i], user)
                            });
                        }
                    }

                    setTimeout(() => {
                        $main.removeChild(aux);
                        $main.appendChild($containerSearch);
                    }, 1000);
                    
                }else $main.innerHTML = ` <h2>No se encontraron resultados para: <mark>${query}</mark><h2/>`
            }
        })

        d.querySelector(".search-form input").value = query ? query : "";

    }else {
        let $htmlLoader = d.createElement("section");
        $htmlLoader.innerHTML = Loaders.postLoader();
        $htmlLoader.classList.add("post-section", "skeleton-section");

        $main.appendChild($htmlLoader);

        let slugUrl = hash.slice(2);

        await ajax({
            url: `${api.POST}${slugUrl}`,
            cbSuccess: async post => {
                let related = post[0]["jetpack-related-posts"],
                    htmlRelated = "",
                    author = {};

                    related.sort((a,b) => {
                        if(a.id > b.id) return -1; 
                        else return 1;
                    })

                for(let i = 0; i < related.length; i++){
                    await ajax({
                        url: `${api.ID}/${related[i].id}`,
                        cbSuccess: (postRel) => {
                            htmlRelated += relatedCard(postRel);
                        }
                    }); 
                }

                let id = post[0].author;
                if(id) {
                    await ajax({
                        url: `${api.USER}/${id}`,
                        cbSuccess: (user) => author = user,
                    });
                }

                setTimeout(() => {
                    $main.innerHTML = Post(post[0], htmlRelated, author);
                }, 3000);
            }
       })
    } 
}