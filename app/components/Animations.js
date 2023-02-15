import { AnimationMenu } from "./AnimationSearch.js";
import { AnimationMenu } from "./AnimationMenu.js";
import { HomeAnimation } from "./HomeAnimation.js";

export function Animations(){
    //menu hamburguer
    AnimationMenu();

    //Search scroll animations
    if(location.hash.includes("#/search")) animationSearch();

    //Transparent header on home's top
    if(location.hash === "#/" || !location.hash){
        const $header = document.querySelector(".header");
        
        if(window.scrollY === 0) {
            $header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
            $header.style.backdropFilter = "blur(0)"
        }
        window.addEventListener("scroll", e => {
            console.log($header.style)
            if(window.scrollY !== 0) {
                $header.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                $header.style.backdropFilter = "blur(5px)"
            }else {
                $header.style.backgroundColor = "transparent";
                $header.style.backdropFilter = "blur(0)"
            }
        })

    }
    
     //home page animations 
     if(location.hash === "#/" || !location.hash){
         let waiting  = setInterval(() => {                  //a veces falla.. idk why
            //last post arrow     
            if(document.querySelector(".arrow")){
                let tl = gsap.timeline({repeat: -1, repeatDelay: .4})
                .to(".arrow", {duration: .2, y: "30%", repeat: 2, yoyo: true, ease:"linear"})
                .to(".arrow", {duration: .2, y: "0%", ease:"linear"})
            }
            
            //home page text fade in + typewriter effect
            if(document.querySelector(".home-section-top-text") && document.querySelector(".home-section-top-animation")) {
                
                gsap.timeline()
                    .from(".home-section-top-text",{duration:1.5, opacity: 0, x: "-200%"})
                    .to("#home-h2", {opacity: 1,  filter:"blur(0px)", duration: 3},"<")
                    .to("#home-h2-middle", {text:"... and GSAP!", ease:"power1.in", duration:2}, "-=1")
                    .to("#home-h2-end", {text:"_", repeat: -1, yoyo: true, repeatDelay: .3, duration: .2}, "<")
                    .to("#home-h3",{duration:1,filter:"blur(0px)", opacity:1, y: "0%"}, "<");
                
                //hero page geometric animation
                HomeAnimation();

                clearInterval(waiting);

            } else console.log("not yet");

        },500)
    }

    //smooth fade in search header
    if(location.hash.includes("#/search")){
        if(location.hash.includes("#/search?search=")){
            gsap.set(".search-header", {duration: 0, y: "0%", opacity: 1})
            return;
        }
        setTimeout(() => {
            gsap.to(".search-header", {duration: .5, y: "0%", opacity: 1, ease:"linear"})
        },500)
    }

    //secondary home cards fade in
    const observer = new IntersectionObserver(entries => {
        for(let i = 0; i < entries.length; i++) {
            if(entries[i].isIntersecting) {
                let delay = 200*i + "ms";
                entries[i].target.style.transitionDelay = delay;
                entries[i].target.classList.add("visible")
            }
        }
    })
    setTimeout(() => {
        const $secondaryCards = document.querySelectorAll(".home-card-secondary")
        $secondaryCards.forEach(card => {
            observer.observe(card);
        })
    },5000)

    document.addEventListener("scroll", e=> {
       console.log(window.scrollY)
       
    })

  
};