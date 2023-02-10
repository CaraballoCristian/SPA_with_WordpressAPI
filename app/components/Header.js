import { Menu } from "./Menu.js";
import { Title } from "./Title.js";

export function Header(){
    const $header = document.createElement("header");
    const $headerContainer = document.createElement("div");

    $header.classList.add("header");
    $headerContainer.classList.add("header-container");

    $headerContainer.appendChild(Title());
    $headerContainer.appendChild(Menu());
    
    $header.appendChild($headerContainer);

    return $header;
}
