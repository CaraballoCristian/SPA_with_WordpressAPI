import { Menu } from "./Menu.js";
import { Title } from "./Title.js";
import { HambMenu } from "./HambMenu.js";

export function Header(){
    const $header = document.createElement("header");
    const $headerContainer = document.createElement("div");
    const $headerSpan = document.createElement("span");

    $header.classList.add("header");
    $headerContainer.classList.add("header-container");

    $headerContainer.appendChild(Title());
    $headerContainer.appendChild(Menu());
    $headerContainer.appendChild(HambMenu());
    
    $header.appendChild($headerSpan);
    $header.appendChild($headerContainer);

    return $header;
}