const breakpoint = 900;

export function AnimationMenu(){
    const $hamb = document.querySelector(".hamb-menu-btn")

    let toCross = gsap.timeline({paused: true})
        .to(".hamb-menu-btn-top",{duration: .5, opacity:0, y:"-100%"}, 0)
        .to(".hamb-menu-btn-middle-top",{duration: .5, transformOrigin: "center", rotation: "45", width: "130%", x: "-10%"}, 0)
        .to(".hamb-menu-btn-middle-bottom",{duration: .5 , transformOrigin: "center", rotation: "-45", width: "130%", x: "-10%"}, 0)
        .to(".hamb-menu-btn-bottom",{duration: .5, opacity:0, y: "100%"}, 0);
    
    let toOpen = gsap.timeline({paused:true})
        .to(".menu", { opacity: 1, height:"100vh", duration :.2})
        .from(".menu-container a",  { opacity: 0, y:"-100%", duration :.2, delay: .2, stagger: .2} )

    //reset, must be after timelines declarations
    if(window.innerWidth >= breakpoint) gsap.set(".menu-container a",{opacity: 1, y:"00%", duration: 0})

           
    document.addEventListener("click", e => {
        if(e.target.matches(".hamb-menu-btn") || e.target.matches(".hamb-menu-btn *")){
            if(!$hamb.classList.contains("isOpen")){      
                toCross.play();                          //for some reason, it doesn't work inside a master timeline :c
                toOpen.play();
            }else{
                toCross.reverse();
                toOpen.reverse();
            }
            $hamb.classList.toggle("isOpen")
        }
    })
    
    const reset = (op, posY, h) => {
        toCross.reverse();
        toOpen.reverse();
        toOpen.revert();

        gsap.set(".menu", { opacity: 1, height: h})
        gsap.set(".menu-container a",{ opacity: op, y: posY})
        
        document.querySelector(".hamb-menu-btn").classList.remove("isOpen");
    }

    window.addEventListener("resize", e => {
        if(window.innerWidth < breakpoint) reset(0, "-100%", "0");
        else reset(1, "0", "5rem");
    })   
    
    document.addEventListener("keydown", e => {
        if(e.code === "Escape" && $hamb.classList.contains("isOpen")) {
            toCross.reverse();
            toOpen.reverse();
            $hamb.classList.toggle("isOpen")
        }
    });
    
}