import { Menu } from "./Menu.js";
import { Title } from "./Title.js";
import { DarkMode } from "./DarkMode.js";
import { HambMenu } from "./HambMenu.js";

export function Header(){
    const $header = document.createElement("header");
    const $headerContainer = document.createElement("div");

    $header.classList.add("header");
    $headerContainer.classList.add("header-container");

    $headerContainer.appendChild(Title());
    //$headerContainer.appendChild(DarkMode());
    $headerContainer.appendChild(Menu());
    $headerContainer.appendChild(HambMenu());
    
    $header.appendChild($headerContainer);

    return $header;
}