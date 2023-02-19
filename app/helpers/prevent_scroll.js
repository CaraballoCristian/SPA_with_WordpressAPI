export function preventScroll(){
    //PREVENT WHEEL SCROLL
    document.addEventListener("wheel", e =>{
        //WHEN MOBILE MENU IS OPEN
        if(document.querySelector(".hamb-menu-btn").classList.contains("isOpen")){
            e.preventDefault();
            e.stopPropagation();
        }
        //WHEN LAZY LOADING SEARCH CARDS
        if(location.hash.includes("#/search?search=") && document.querySelector(".search-section").classList.contains("skeleton-section")){
            e.preventDefault();
            e.stopPropagation();
        }
        //WHEN LAZY LOADING POSTS CARDS
        if(location.hash === "#/posts" && document.querySelector(".posts-section").classList.contains("skeleton-section")){
            e.preventDefault();
            e.stopPropagation();
        }
        //WHEN LAZY LOADING A POST
        if(document.querySelector(".post-section") && document.querySelector(".post-section").classList.contains("skeleton-section")){
            e.preventDefault();
            e.stopPropagation();
        }
    },{passive:false})

    //PREVENT KEYBOARD SCROLL
    document.addEventListener('keydown', e => {
        //DEFINING FUNCTION TO KEEP IT DRY
        const preventKeyScroll = () => {
            let keys = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Home", "PageUp", "PageDown", "End", "Space"];
            keys.forEach(key => { 
                if(e.code === key) e.preventDefault() 
            })
        }
        //WHEN MOBILE MENU IS OPEN
        if(document.querySelector(".hamb-menu-btn").classList.contains("isOpen")) {
            preventKeyScroll();
        }
        //WHEN LAZY LOADING SEARCH CARDS
        if(location.hash.includes("#/search?search=") && document.querySelector(".search-section").classList.contains("skeleton-section")){
            preventKeyScroll();
        }
        //WHEN LAZY LOADING POSTS CARDS
        if(location.hash === "#/posts" && document.querySelector(".posts-section").classList.contains("skeleton-section")){
            preventKeyScroll();
        }
        //WHEN LAZY LOADING POSTS CARDS
        if(document.querySelector(".post-section") && document.querySelector(".post-section").classList.contains("skeleton-section")){
            preventKeyScroll();
        }

    }, false);

    //PREVENT MOBILE SCROLL
    document.addEventListener('touchmove', e => {
        //WHEN MOBILE MENU IS OPEN
        if(document.querySelector(".hamb-menu-btn").classList.contains("isOpen")){
            e.preventDefault();
            e.stopPropagation();
        }
        //WHEN LAZY LOADING SEARCH CARDS
        if(location.hash.includes("#/search?search=") && document.querySelector(".search-section").classList.contains("skeleton-section")){
            e.preventDefault();
            e.stopPropagation();
        }
        //WHEN LAZY LOADING POSTS CARDS
        if(location.hash === "#/posts" && document.querySelector(".posts-section").classList.contains("skeleton-section")){
            e.preventDefault();
            e.stopPropagation(); 
        }
        //WHEN LAZY LOADING A POST
        if(document.querySelector(".post-section") && document.querySelector(".post-section").classList.contains("skeleton-section")){
            e.preventDefault();
            e.stopPropagation();
        }
    },{passive:false});
}