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
    let arrow;
    setTimeout(() => {
        arrow = document.querySelector(".arrow");
        console.log(arrow)
        let tl = gsap.timeline({repeat: -1, repeatDelay: .4})
            .to(".arrow", {duration: .2, y: "30%", repeat: 2, yoyo: true, ease:"linear"})
            .to(".arrow", {duration: .2, y: "0%", ease:"linear"})
    },500)
};