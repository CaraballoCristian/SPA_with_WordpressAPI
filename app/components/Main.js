export function Main(){
    const $main = document.createElement("main");

    if(!location.hash.includes("#/search")){
        $main.classList.add("grid-fluid");
    }
    $main.id = "main";
    
    return $main;
}