import { SearchForm } from "./SearchForm.js";

export function Main(){
    const $main = document.createElement("main");

    $main.id = "main";

    if(location.hash.includes("#/search")) {
        const $searchHeader = document.createElement("header");
        $searchHeader.classList.add("search-header");
        $searchHeader.appendChild(SearchForm());
        $main.appendChild($searchHeader);   
    }
    
    return $main;
}