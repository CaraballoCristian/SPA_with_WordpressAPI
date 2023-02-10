import { animationSearch } from "./AnimationSearch.JS";

export function Animations(){
    //Search scroll animations
    if(location.hash.includes("#/search")) animationSearch();

    //Floating form
    gsap.to(".form",{duration: 2, y: "-3%",repeat:-1, yoyo:true, ease:"linear"})

    //Transparent header on home's top
    if(location.hash === "#/"){
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
}