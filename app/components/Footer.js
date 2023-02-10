import { Form } from "./Form.js";

export function Footer(){
    const $footer = document.createElement("footer");
    $footer.classList.add("footer")

    $footer.innerHTML = `
        <div class="footer-top">    
        </div>
        <div class="footer-bottom">    
            ${Form()}
        </div>
    `
    return $footer;
}