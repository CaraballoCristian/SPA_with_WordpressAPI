export function preventScroll(){
    //prevent wheel scroll
    document.addEventListener("wheel", e =>{
        if(document.querySelector(".hamb-menu-btn").classList.contains("isOpen")){
            e.preventDefault();
            e.stopPropagation();
        }
    },{passive:false})

    //prevent keyboard scroll
    document.addEventListener('keydown', e => {
        if(document.querySelector(".hamb-menu-btn").classList.contains("isOpen")){
            let keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "PageUp", "PageDown", "End"];
            keys.forEach(key => { 
                if(e.code === key) e.preventDefault() 
            })
        }

    }, false);
}