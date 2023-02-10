let pos,
oldPos,
toggle = "200%";

export function animationSearch(){    
const $searchHeader = document.querySelector(".search-header")

    document.addEventListener("scroll", e=>{
        let cards = document.querySelectorAll(".search-card");

        //para darle tiempo a la carga
        setTimeout(()=> {
            oldPos = pos;
            pos = cards[1].getBoundingClientRect();
        })

        cards.forEach(card => {
            let data = card.getBoundingClientRect();

            //para que la animacion de aparicion desde abajo tambien afecte a los nuevos elementos
            /* if(data.top >= (window.innerHeight - data.height) && data.top < window.innerHeight && !card.classList.contains("faded")) {
                card.classList.add("faded")
                gsap.to(card, {opacity: 0, y: "100%", duration: .2})
            } */

            //SCROLL UP
            if(pos.y > oldPos.y) {
                console.log("Scroll Up")
                //muestro el input de busqueda
                if($searchHeader.classList.contains("faded")){
                    gsap.to($searchHeader, {y: "0", opacity: 1, duration: .2});
                    $searchHeader.classList.remove("faded");
                }

/*                 //aparicion de la carta superior
                if(data.top >= 0 && card.classList.contains("faded")) {
                    card.classList.remove("faded")
                    gsap.to(card, { opacity: 1, y: "0%",duration: .1})
                }
                //desaparicion de la carta inferior
                if(data.top >= (window.innerHeight - (data.height/3)) && data.top < window.innerHeight && !card.classList.contains("faded")) {
                    card.classList.add("faded")
                    gsap.to(card, {opacity: 0, y: "100%", duration: .2})
                } */

            //SCROLL DOWN
            }else {
                console.log("Scroll Down")
                //oculto el input de busqueda
                if(!$searchHeader.classList.contains("faded")){
                    gsap.to($searchHeader, {y: "-100%", opacity: 0, duration: .2});
                    $searchHeader.classList.add("faded");
                }

                /* //desaparicion de la carta superior
                if(data.top <= 5*16 && !card.classList.contains("faded")){
                    //toggle se dispara con el evento scroll, por lo que va a ser algo asi como un random mas que uno y uno
                    if(toggle === "200%") toggle = "-200%";
                    else toggle = "200%";
                    
                    card.classList.add("faded");

                    gsap.timeline()
                        .to(card, {opacity: 0, y: "-100%", duration: .2})
                }
                //aparicion de la carta inferior
                if(data.top <= (window.innerHeight - (data.height/3)) && (data.top + data.height) > (window.innerHeight)) {
                        card.classList.remove("faded")
                        
                        gsap.timeline()
                            gsap.fromTo(card, {opacity: 0},{opacity: 1, y: "0%", duration: .2})
                    }
             */
            } 

        })
        
    })

}