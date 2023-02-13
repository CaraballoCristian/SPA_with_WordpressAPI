import { AnimationMenu } from "./AnimationMenu.js";
import { animationSearch } from "./AnimationSearch.JS";

export function Animations(){
    //menu hamburguer
    AnimationMenu();

    //Search scroll animations
    if(location.hash.includes("#/search")) animationSearch();

    //Floating form
    gsap.to(".form",{duration: 2, y: "-3%",repeat:-1, yoyo:true, ease:"linear"})

    //Transparent header on home's top ES AL PEDO CON FONDO OSCURO
    if(location.hash === "#/" || !location.hash){
        const $header = document.querySelector(".header");
        
        if(window.scrollY === 0) {
            $header.style.backgroundColor = "transparent";
            $header.style.backdropFilter = "blur(0)"
        }
        window.addEventListener("scroll", e => {
            if(window.scrollY !== 0) {
                $header.style.backgroundColor = "rgba(0 0 0 /.7)";
                $header.style.backdropFilter = "blur(5px)"
            }else {
                $header.style.backgroundColor = "transparent";
                $header.style.backdropFilter = "blur(0)"
            }
        })
    }
    
    //last post arrow
    if(location.hash === "#/" || !location.hash){
        let arrow;
        setTimeout(() => {
            arrow = document.querySelector(".arrow");
            
            let tl = gsap.timeline({repeat: -1, repeatDelay: .4})
                .to(".arrow", {duration: .2, y: "30%", repeat: 2, yoyo: true, ease:"linear"})
                .to(".arrow", {duration: .2, y: "0%", ease:"linear"})
        },500)
    }

    //home page text fade in
    setTimeout(() => {
        const tl = gsap.timeline()
            .to("#home-h2",{duration:1.5, opacity:1, x: "0%"})
            .to("#home-h3",{duration:1, opacity:1, y: "0%"});
    },500)

    //smooth fade in search header
    if(location.hash.includes("#/search") || !location.hash){
        if(location.hash.includes("#/search?search=")){
            gsap.set(".search-header", {duration: 0, y: "0%", opacity: 1})
            return;
        }
        setTimeout(() => {
            gsap.to(".search-header", {duration: .5, y: "0%", opacity: 1, ease:"linear"})
        },500)
    }

    //----------------------------------------------------------------
    //secondary home cards fade in
    const observer = new IntersectionObserver(entries => {

        for(let i = 0; i<entries.length; i++){
            if(entries[i].isIntersecting) {
                setTimeout(()=>{
                    console.log(entries[i])

                },200)
                gsap.from(entries[i].target, {y: "100%", duration: .5, delay: .2});
            }
        }
    })

    setTimeout(() => {
        const $secondaryCards = document.querySelectorAll(".home-card-secondary")
        $secondaryCards.forEach(card => {
            observer.observe(card);
        })
    },500)

};