import { getDefaultFontSize } from "../helpers/getDefaultFontSize.js";

let pos = 0,
    oldPos = 0

export function AnimationSearch(){    

    const $searchHeader = document.querySelector(".search-header");

    document.addEventListener("scroll", e=>{

        if(location.hash.includes("#/search?search=")){
            let cards = document.querySelectorAll(".search-card");

            // TO DETERMINE IF SCROLLING UP OR DOWN
            oldPos = pos;
            pos = cards[1].getBoundingClientRect();

            cards.forEach(card => {
                let data = card.getBoundingClientRect();

                // SETTING ALL NEW LOADED CARDS AS FADED
                if(data.top >= window.innerHeight && !card.classList.contains("faded")) {
                    gsap.to(card, {opacity: 0, y: "100%", duration: .1})
                    card.classList.add("faded")
                }

                // SCROLL UP
                if(pos.y > oldPos.y) {
                    //SHOW INPUT SEARCH
                    if($searchHeader.classList.contains("faded")){
                        gsap.to($searchHeader, {y: "0", opacity: 1, duration: .1});
                        $searchHeader.classList.remove("faded");
                    }
                    //FADE-IN TOP CARD
                    if(data.top >= 0 - data.height*2/3 && card.classList.contains("faded")) {
                        gsap.to(card, { opacity: 1, y: "0%",duration: .1});
                        card.classList.remove("faded");
                    }
                    //FADE-OUT BOTTOM CARD
                    if(data.top >= (window.innerHeight - (data.height*2/3)) && !card.classList.contains("faded")) {
                        gsap.to(card, {opacity: 0, y: "100%", duration: .1});
                        card.classList.add("faded");
                    }

                }// SCROLL DOWN
                else {
                    //HIDE INPUT SEARCH
                    if(!$searchHeader.classList.contains("faded")){
                        gsap.to($searchHeader, {y: "-100%", opacity: 0, duration: .1});
                        $searchHeader.classList.add("faded");
                    }
                    //FADE-OUT TOP CARD
                    if(data.top <= 5*getDefaultFontSize() && !card.classList.contains("faded")){
                        gsap.to(card, {opacity: 0, y: "-100%", duration: .1});
                        card.classList.add("faded");
                    }
                    //FADE-IN BOTTOM CARD
                    if(data.top <= (window.innerHeight - (data.height/3)) && (data.top + data.height) > (window.innerHeight) && card.classList.contains("faded")) {
                        gsap.to(card, {opacity: 1, y: "0%", duration: .1});
                        card.classList.remove("faded");
                    }
                } 
            })
        }
    })
}