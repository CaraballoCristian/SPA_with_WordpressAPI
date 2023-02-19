import { AnimationSearch } from "./AnimationSearch.js";
import { AnimationMenu } from "./AnimationMenu.js";
import { AnimationHome } from "./AnimationHome.js";

export function Animations(){
    //HAMBURGUER MENU
    AnimationMenu();

    //HOME SECTION ANIMATIONS     
    if(location.hash === "#/" || !location.hash){
    
        //TRANSPARENT HEADER ON HOME'S TOP
        const $headerSpan = document.querySelector(".header span");

        if(window.scrollY === 0) $headerSpan.style.opacity = 0;

        window.addEventListener("scroll", e => {
            if(window.scrollY !== 0) $headerSpan.style.opacity = 1;
            else $headerSpan.style.opacity = 0;
        })
        
        //OBSERVER FOR SECONDARY CARDS ANIMATION
        const observer = new IntersectionObserver(entries => {
            for(let i = 0; i < entries.length; i++) {
                if(entries[i].isIntersecting) {
                    let delay = 200*i + "ms";
                    entries[i].target.style.transitionDelay = delay;
                    entries[i].target.classList.add("visible")

                } else if(window.innerHeight < entries[i].boundingClientRect.top) {
                    entries[i].target.classList.remove("visible")
                }
            }
        })
        
        //INTERVAL UNTIL EVERYTHING IS LOADED
        let loop  = setInterval(() => {
            //HOME PAGE TEXT FADE-IN AND TYPEWRITER EFFECT
            if(document.querySelector(".home-section-top-text")             //HOME TEXT IS LOADED
                && document.querySelector(".home-section-top-animation")    //HOME GEOMETRIC ANIMATION IS LOADED
                && document.querySelector(".arrow")                         //LAST POST ARROW IS LOADED
                && document.querySelectorAll(".home-card-secondary")) {     //SECONDARY HOME CARDS ARE LOADED

                //LAST POST ARROW ANIMATION
                gsap.timeline({repeat: -1, repeatDelay: .4})
                    .to(".arrow", {duration: .2, y: "30%", repeat: 2, yoyo: true, ease:"linear"})
                    .to(".arrow", {duration: .2, y: "0%", ease:"linear"})
                
                //HOME TEXT ANIMATION
                gsap.timeline()
                    .from(".home-section-top-text",{duration:1.5, opacity: 0, x: "-200%"})
                    .to("#home-h2", {opacity: 1,  filter:"blur(0px)", duration: 3},"<")
                    .to("#home-h2-middle", {text:"...and GSAP!", ease:"power1.in", duration:2}, "-=1")
                    .to("#home-h2-end", {text:"_", repeat: -1, yoyo: true, repeatDelay: .3, duration: .2}, "<")
                    .to("#home-h3",{duration:1,filter:"blur(0px)", opacity:1, y: "0%"}, "<");

                //HOME GEOMETRIC ANIMATION
                AnimationHome();

                //SECONDARY CARDS ANIMATION
                const $secondaryCards = document.querySelectorAll(".home-card-secondary")
                $secondaryCards.forEach(card => observer.observe(card))

                clearInterval(loop);
            }
        },500)
    }
    
    //SEARCH SECTION ANIMATIONS
    if(location.hash.includes("#/search")){
        //FADE-IN SEARCH HEADER
        if(location.hash.includes("#/search?search=")) {
            gsap.set(".search-header", {y: "0%", opacity: 1})
        }else {
            gsap.to(".search-header", {duration: .5, y: "0%", opacity: 1, ease:"linear"})
        }
        
        //WHEN ASKING FOR A QUERY, START LOOPING
        if(location.hash.includes("#/search?search=")){
            let loop = setInterval(() => {
                //IF ELEMENTS ARE NOT LOADED, RETURN
                if(!document.querySelectorAll(".search-card")[1]) return;
                
                //ANIMATION WHEN SCROLLING SEARCH CARDS
                AnimationSearch();
                clearInterval(loop);    
            },200) 
        } 
    }
    
};