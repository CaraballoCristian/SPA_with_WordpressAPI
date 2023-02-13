import api from "../helpers/wp_api.js"
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Home } from "./Home.js";
import { HomeCard } from "./HomeCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";
import { relatedCard } from "./RelatedCard.js";
import Loaders from "./Skeletons.js";

let query = "",
previo;

export async function Router(){

    document.getElementById("root").style.backgroundImage = `url("app/assets/img/fondo.jpg")`;

    const d = document,
        w = window,
        $main = d.getElementById("main");
        
    let { hash } = w.location; 

    if(!hash || hash === "#/"){
        
        previo = "home"
        const $homeLink = document.querySelector(".menu a[href='#/']");
        $homeLink.classList.add("selected");

        await ajax({
            url: api.HOME,
            cbSuccess: (posts) => {
                const $home = d.createElement("section");
                $home.classList.add("home-section");
                
                const $homeCard = HomeCard(posts[0], "home-card-main");

                const $cards = d.createElement("div");
                $cards.classList.add("home-cards-box");
                
                for(let i = 1; i < posts.length; i++){
                    $cards.innerHTML += HomeCard(posts[i], "home-card-secondary");
                }

                $home.innerHTML = Home($homeCard, $cards);
                
                $main.appendChild($home); 
            }
        });

    }else if(hash === "#/posts"){
        previo = "posts"
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

        const $postsLink = document.querySelector(".menu a[href='#/posts']");
        $postsLink.classList.add("selected");

        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                let $container = d.createElement("section");
                $container.classList.add("posts-section", "grid-fluid");

                posts.forEach((post) => $container.innerHTML += PostCard(post));
                
                setTimeout(() => {
                    $main.removeChild(aux)
                    $main.appendChild($container); 
                }, 2000);
            }
        });
    
    
    }else if (hash.includes("#/search")){
        d.querySelector(".footer").style.display = "none";
        
        const $searchLink = document.querySelector(".menu a[href='#/search']");
        $searchLink.classList.add("selected");

        //----------------------------------------------------------------
        //empty search
        if(hash === "#/search?search=") {
            let warn = d.createElement("h2");   
            warn.classList.add("warn");
            warn.innerHTML = `<h2 class="warn">Please, search something!<h2/>`
            $main.removeChild(aux);
            $main.appendChild(warn)
            return;
        }
        //normal search
        else if(hash.includes("#/search?search=")) {
            query = location.hash.replace("#/search?search=", "");
            previo = "search";
        }
        //just entering search tab or recovering last search data
        else {
            //just entering section
            if(!query) return;

            //recovering last search data 
            //IMPORTANTE!! luego de una busqueda, si se va hacia adelante, y luego 2 hacia atras, al ir hacia adelante again, se pierde el next de la busquda
            //QUERY to POST back QUERY back SEARCH to QUERY (aca deberia estar el post en next, pero nop)
            //IMPORTANTE 2!! Al ir desde HOME a SEARCH y QUERY.. y luego volver a SEARCH Y HOME.. Al darle hacia adelante, salta search y va a QUERY
            //de momento me conformo con esto e iré pensando como solucionarlo en el futuro
            else if(query && previo !== "search") {
                previo = "search";
                location.hash = `#/search?search=${query}`   
            }
            return;
        }
     
        d.querySelector(".search-form input").value = query;

        d.addEventListener("search", e => {
            if(!e.target.matches("input[type='search']")) return;
            if(!e.target.value) {
                window.location.hash = "#/search";
                query = ""
            }
        })

        let $containerSearchLoader,
            aux;
        
        //lazy loading
        if(api.page === 1 && query){
            $containerSearchLoader= d.createElement("section")
            $containerSearchLoader.classList.add("search-section", "skeleton-section");

            for(let i = 0; i < api.PER_PAGE; i++){
                $containerSearchLoader.innerHTML += Loaders.searchCardLoader();
            }

            $main.appendChild($containerSearchLoader);
            aux = d.querySelector(".skeleton-section");
        }

        
        //--------------------------------------------------------------
        await ajax({
            url: `${api.SEARCH}${query}`,
            cbSuccess: async (search) => {
                console.log("query is " + query)

                let $containerSearch = d.createElement("section");
                $containerSearch.classList.add("search-section");
                
                if(search.length !== 0) { 
                    
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
                    
                }else {
                    $containerSearch.innerHTML = `<h2 class="warn">Sorry, we couldn't find matches for: <mark> ${query} </mark><h2/>`
                    $main.removeChild(aux);
                    $main.appendChild($containerSearch)
                }
            }
        })


    }else {
        
        previo = "post"
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