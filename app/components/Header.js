import { Menu } from "./Menu.js";
import { Title } from "./Title.js";
import { SearchForm } from "./SearchForm.js";

export function Header(){
    const $header = document.createElement("header");
    const $headerContainer = document.createElement("div");

    $header.classList.add("header");
    $headerContainer.classList.add("header__container");

    $headerContainer.appendChild(Title());
    $headerContainer.appendChild(Menu());
    $headerContainer.appendChild(SearchForm());
    
    $header.appendChild($headerContainer);

    return $header;
}
