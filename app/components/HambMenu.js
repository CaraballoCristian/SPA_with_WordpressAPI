export function HambMenu(){
    const $hamb = document.createElement("button");
    $hamb.classList.add("hamb-menu-btn");
    
    $hamb.innerHTML = `
        <div class="hamb-menu-btn-top"></div>
        <div class="hamb-menu-btn-middle-top"></div>
        <div class="hamb-menu-btn-middle-bottom"></div>    
        <div class="hamb-menu-btn-bottom"></div>
    `
    return $hamb;
}