import { Animations } from "./components/Animations.js";
import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Loader } from "./components/Loader.js"
import { Main } from "./components/Main.js";
import { SocialNetwork } from "./components/SocialNetwork.js";
import { Router } from "./components/Router.js";
import { infiniteScroll } from "./helpers/infinite_scroll.js";
import { validateForm } from "./helpers/validate_forms.js";
import { preventScroll } from "./helpers/prevent_scroll.js";
import { DarkMode } from "./components/DarkMode.js";

export function App(){
    const $root = document.getElementById("root");
    
    $root.innerHTML = null;
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());
    $root.appendChild(Footer());

    Router();
    Animations();
    infiniteScroll();
    validateForm();
    SocialNetwork();
    preventScroll();
    DarkMode();
} 