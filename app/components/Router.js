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
    prev,
    homeData = [];

export async function Router(){

    const d = document,
        w = window,
        $main = d.getElementById("main"),
        $root = d.getElementById("root");
        
    let { hash } = w.location; 

    //SETTING BACKGROUND FOR EVERY SECTION BUT HOME
    if(hash !== "#/" && hash){
        document.getElementById("root").style.background = `radial-gradient(circle at -10% -10%,#ff32c8ab, 25%, transparent 50%),
                                                            radial-gradient( circle at 105% 35%, #ff32caab, 20%,#0a1756 60%)`;
        document.getElementById("root").style.backgroundAttachment = `fixed`;
    }

    //HOME SECTION
    if(!hash || hash === "#/"){
        //TO AVOID IMG BACKGROUND WHEN SWITCHING FROM ANY POST
        document.getElementById("root").style.background = "none";

        prev = "home"
        const $homeLink = document.querySelector(".menu a[href='#/']");
        $homeLink.classList.add("selected");

        //CREATING SPIN-LOADER
        let $homeLoader = d.createElement("div");
        $homeLoader.classList.add("home-loader");
        $homeLoader.innerHTML = `
            <img src="app/assets/img/spin-loader.svg">
        `
        $root.appendChild($homeLoader);
        
        //AVOIDING HOME TO LOAD EVERY TIME
        if(homeData.length === 0){
        
            await ajax({
                url: api.HOME,
                cbSuccess: (posts) => {
                    const $home = d.createElement("section");
                    $home.classList.add("home-section");
                    
                    //CRETING LAST POST CARD
                    const $homeCard = HomeCard(posts[0], "home-card-main");
                    
                    //CREATING ALL OTHER HOME CARDS CONTAINER AND ADDING THE CARDS TO IT
                    const $cards = d.createElement("div");
                    $cards.classList.add("home-cards-box");
    
                    for(let i = 1; i < posts.length; i++){
                        $cards.innerHTML += HomeCard(posts[i], `secondary-card-${i} home-card-secondary`);
                    }
    
                    //CREATING HOME SECTION WITH ALL THE CARDS CREATED BEFORE
                    $home.innerHTML = Home($homeCard, $cards);

                    //SAVING DATA TO AVOID LOAD AGAIN
                    homeData.push($homeCard, $cards);
                    
                    //APPENDIGN HOME SECTION TO MAIN, AND REMOVING LOADER AFTHER THAT
                    let aux = d.querySelector(".home-loader");
                    setTimeout(() => {
                        $main.appendChild($home);
                        $homeLoader.classList.add("fade-loader") ;
                        setTimeout(() => {
                            $root.removeChild(aux);
                        },500);
                    },3500);
                }
            });
        }else {
            let $home = d.createElement("section"),
                aux = d.querySelector(".home-loader");
            
            $home.classList.add("home-section");
            $home.innerHTML = Home(homeData[0], homeData[1]);
            
            $main.appendChild($home);
            $homeLoader.classList.add("fade-loader") ;
            $root.removeChild(aux);
        }

    }//ALL POSTS SECTION
    else if(hash === "#/posts"){
        //NO FOOTER IN POSTS SECTION
        d.querySelector(".footer").style.display = "none";
        
        prev = "posts"
        const $postsLink = document.querySelector(".menu a[href='#/posts']");
        $postsLink.classList.add("selected");

        //CREATING SKELETONS FOR EVERY CARD ONLY WHEN ITS THE FIRST SECTION LOAD
        let $containerLoader,
            aux;
        
        if(api.page === 1){
            $containerLoader = d.createElement("section");
            $containerLoader.classList.add("posts-section", "grid-fluid", "skeleton-section");
            for (let i = 0; i < api.PER_PAGE; i++) {
                $containerLoader.innerHTML += Loaders.postCardLoader();
            }
            $main.appendChild($containerLoader);
            aux = d.querySelector(".skeleton-section");
        }

        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                let $container = d.createElement("section");
                $container.classList.add("posts-section", "grid-fluid");

                posts.forEach((post) => $container.innerHTML += PostCard(post));
                
                setTimeout(() => {
                   $main.replaceChild($container,aux);
                }, 2000);
            }
        });

    }//SEARCH SECTION
    else if (hash.includes("#/search")){
        //NO FOOTER IN SEARCH SECTION 
        d.querySelector(".footer").style.display = "none";
        
        const $searchLink = document.querySelector(".menu a[href='#/search']");
        $searchLink.classList.add("selected");

        //----------------------------------------------------------------
        //EMPTY SEARCH
        if(hash === "#/search?search=") {
            let warn = d.createElement("h2");   
            warn.classList.add("warn");
            warn.innerHTML = `<h2 class="warn">Please, search something!<h2/>`
            $main.replaceChild(warn, aux);
            return;

        }//VALID SEARCH
        else if(hash.includes("#/search?search=")) {
            query = location.hash.replace("#/search?search=", "");
            prev = "search";

        }//JUST ENTERING SEARCH TAB OR RECOVERING LAST SEARCH DATA
        else {
            //JUST ENTERING SEARCH TAB
            if(!query) return;

            //RECOVERING LAST SEARCH DATA
            else if(query && prev !== "search") {
                prev = "search";
                location.hash = `#/search?search=${query}`   
            }
            return;
        }
        
        //REPLACING SYMBOLS THAT REPRESENT SPACES WITH ACTUAL SPACES
        d.querySelector(".search-form input").value = query.replaceAll("%20", " ");

        //CLEANING SEARCH BY CLICKING THE INPUT CROSS (CHROME/BRAVE)
        d.addEventListener("search", e => {
            if(!e.target.matches("input[type='search']")) return;
            if(!e.target.value) {
                window.location.hash = "#/search";
                query = ""
            }
        })

        //CREATING SKELETONS AND APPENDING THEM TO MAIN
        let $containerSearchLoader,
            aux;

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
                        $main.replaceChild($containerSearch, aux);
                    }, 1000);
                    
                }else {
                    $containerSearch.innerHTML = `<h2 class="warn">Sorry, we couldn't find matches for: <mark> ${query} </mark><h2/>`
                    $main.replaceChild($containerSearch, aux);
                }
            }
        })


    }//SINGLE POST SECTION
    else {
        prev = "post"

        //CREATING SKELETON FOR POST SECTION
        let $htmlLoader = d.createElement("section");
        $htmlLoader.innerHTML = Loaders.postLoader();
        $htmlLoader.classList.add("post-section", "skeleton-section");

        $main.appendChild($htmlLoader);

        let slugUrl = hash.slice(2);
        await ajax({
            url: `${api.POST}${slugUrl}`,
            cbSuccess: async post => {
                //OBTAINING RELATED CARDS
                let related = post[0]["jetpack-related-posts"],
                    htmlRelated = "",
                    author = {};

                    //SORTING THEM BY DATE (ID'S ARE INCREMENTAL, SO BIGGER ID MEANS NEAREST DATE)
                    related.sort((a,b) => {
                        if(a.id > b.id) return -1; 
                        else return 1;
                    })

                //ASKING API FOR EVERY RELATED CARD DATA AND APPENDING THEM TO A CONTAINER
                for(let i = 0; i < related.length; i++){
                    await ajax({
                        url: `${api.ID}/${related[i].id}`,
                        cbSuccess: (postRel) => {
                            htmlRelated += relatedCard(postRel);
                        }
                    }); 
                }

                //ONLY ASK FOR POST WITH AN AUTHOR (THOSE WHO DOESN'T HAVE ONE ARE GENERALLY MISSING POSTS AND THROW ERROR)
                let id = post[0].author;
                if(id) {
                    await ajax({
                        url: `${api.USER}/${id}`,
                        cbSuccess: (user) => author = user,
                    });
                }

                //CREATING AND APPENDING ALL POST DATA TO MAIN
                setTimeout(() => {
                   $main.innerHTML = Post(post[0], htmlRelated, author);
                }, 3000);
            }
       })
    } 
}