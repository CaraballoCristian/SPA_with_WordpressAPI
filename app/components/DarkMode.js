const d = document,
    ls = localStorage,
    $html = d.documentElement;

export function DarkMode(){
    let active;
    
    //LIGHT COLORS
    const clrLightText = getComputedStyle($html).getPropertyValue("--theme-light-text");
    const clrLightBackground = getComputedStyle($html).getPropertyValue("--theme-light-background");
    const clrLightSkeletonBackground = getComputedStyle($html).getPropertyValue("--theme-skeleton-light-background");
    const clrLightSkeletonElement = getComputedStyle($html).getPropertyValue("--theme-skeleton-light-element");
    const clrLightSkeletonText = getComputedStyle($html).getPropertyValue("--theme-skeleton-light-text");
    
    //DARK COLORS
    const clrDarkText = getComputedStyle($html).getPropertyValue("--theme-dark-text");
    const clrDarkBackground = getComputedStyle($html).getPropertyValue("--theme-dark-background");
    const clrDarkSkeletonBackground = getComputedStyle($html).getPropertyValue("--theme-skeleton-dark-background");
    const clrDarkSkeletonElement = getComputedStyle($html).getPropertyValue("--theme-skeleton-dark-element");
    const clrDarkSkeletonText = getComputedStyle($html).getPropertyValue("--theme-skeleton-dark-text");

    function dark(){
        $html.style.setProperty("--theme-background", clrDarkBackground);
        $html.style.setProperty("--theme-text", clrDarkText);
        $html.style.setProperty("--theme-skeleton-background", clrDarkSkeletonBackground);
        $html.style.setProperty("--theme-skeleton-element", clrDarkSkeletonElement);
        $html.style.setProperty("--theme-skeleton-text", clrDarkSkeletonText);
    };
    function light(){
        $html.style.setProperty("--theme-background", clrLightBackground);
        $html.style.setProperty("--theme-text", clrLightText);
        $html.style.setProperty("--theme-skeleton-background", clrLightSkeletonBackground);
        $html.style.setProperty("--theme-skeleton-element", clrLightSkeletonElement);
        $html.style.setProperty("--theme-skeleton-text", clrLightSkeletonText);
    };
    
    let loop = setInterval(() => {
        if(ls.getItem("status")){
            let $theme = d.getElementById("theme");

            active = ls.getItem('status');
            
            if(active === "true"){
                $html.style.setProperty("--delay", "0s");
                $theme.checked = true;
                dark();
                active = true;
            }else {
                active = false;
            }
            $html.style.setProperty("--delay", ".3s");

            clearInterval(loop);
        }
    },);

    d.addEventListener("click", e => {
        if(e.target.matches("#dark-mode") || e.target.matches("#dark-mode *") ){
            if(active) light();
            else dark();

            active = !active;
            ls.setItem("status", active);
        }
    })
}