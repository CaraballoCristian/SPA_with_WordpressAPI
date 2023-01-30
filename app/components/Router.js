import api from "../helpers/wp_api.js"
import { ajax } from "../helpers/ajax.js";
import { PostCard } from "./PostCard.js";
import { Post } from "./Post.js";
import { SearchCard } from "./SearchCard.js";




let current;
let query = "";

export async function Router(){
    
    const d = document,
        w = window,
        $main = d.getElementById("main");      

    let { hash } = w.location; 

    $main.innerHTML = null;

    if(!hash || hash === "#/"){
        const $home = document.querySelector(".menu a[href='#/']");
        $home.classList.add("selected");

        await ajax({
            url: api.POSTS,
            cbSuccess: (posts) => {
                let html = "";

                posts.forEach((post) => html += PostCard(post)); 
                
                //aca deberia poner el timeout para el lazy load
                $main.innerHTML = html; 
            }
        });

    
    }else if (hash.includes("#/search")){
        const $busqueda = document.querySelector(".menu a[href='#/search']");
        $busqueda.classList.add("selected");
        
        if(!hash.includes("#/search?search=")) {
            console.log("NO es una busqueda ingresada")

            if(query) {
                location.hash = `#/search?search=${query}`
                return;
            }
        } 
        else {
            query = location.hash.replace("#/search?search=", "");
            current = query;
        }
     
        d.querySelector(".search-form input").value = query ? query : "";

        if(!query) d.querySelector(".loader").style.display = "none";

        d.addEventListener("search", e => {
            if(!e.target.matches("input[type='search']")) return;
            if(!e.target.value) {
                window.location.hash = "#/search";
                current = ""
                query = ""
            }
        })

        if(!query) return;

    //-----------------------------------------------------------------
        await ajax({
            url: `${api.SEARCH}${query}`,
            cbSuccess: (search) => {
                if(search.length !== 0) { 
                    let html = "";
                    search.forEach((el) => html += SearchCard(el))
                
                    //aca deberia poner el timeout para el lazy load
                    $main.innerHTML = html; 
                }
                else $main.innerHTML = ` <h2>No se encontraron resultados para: <mark>${query}</mark><h2/>`
            }
        })
        
    }else if(hash === "#/contacto"){
        const $contacto = document.querySelector(".menu a[href='#/contacto']");
        $contacto.classList.add("selected");
        $main.innerHTML = "<h2>Seccion del Contacto</h2>"
    
    }else {
        let slugUrl = hash.slice(2);
       await ajax({
        url: `${api.POST}${slugUrl}`,
        cbSuccess: post => $main.innerHTML = Post(post[0])
       })
    } 
        
    d.querySelector(".loader").style.display = "none";              //esto afuera del if
    /* if (location.hash.includes("#/search")) */
}