export function AnimationMenu(){
    const $hamb = document.querySelector(".hamb-menu-btn")
    const $menu = document.querySelector(".menu")

    let toCross = gsap.timeline({paused: true})
        .to(".hamb-menu-btn-top",{duration: .5, opacity:0, y:"-100%"}, 0)
        .to(".hamb-menu-btn-middle-top",{duration: .5, transformOrigin: "center", rotation: "45", width: "130%", x: "-10%"}, 0)
        .to(".hamb-menu-btn-middle-bottom",{duration: .5 , transformOrigin: "center", rotation: "-45", width: "130%", x: "-10%"}, 0)
        .to(".hamb-menu-btn-bottom",{duration: .5, opacity:0, y: "100%"}, 0);
    
        /* let toOpen = gsap.timeline({paused:true})
        .to(".menu",{ opacity: 1, height:"100vh", duration :.2})
        .from("#home-link",{ opacity: 0, y:"-100%", duration :.2, delay: 0})
        .from("#posts-link",{ opacity: 0, y:"-100%", duration :.2, delay: .1})
        .from("#search-link",{ opacity: 0, y:"-100%", duration :.2, delay: .2}) */

    document.addEventListener("click", e => {
        if(e.target.matches(".hamb-menu-btn") || e.target.matches(".hamb-menu-btn *")){

            if(!$hamb.classList.contains("isOpen")){
                toCross.play();
                //toOpen.play();
                
            }else{
                toCross.reverse();
                //toOpen.reverse();
            }

            $hamb.classList.toggle("isOpen")
            $menu.classList.toggle("openned")
        }
    });
    
}