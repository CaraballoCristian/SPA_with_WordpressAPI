import { Form } from "./Form.js";

export function Footer(){
    const $footer = document.createElement("footer");
    $footer.classList.add("footer")

    $footer.innerHTML = `
        <div class="footer-top">    
            ${Form()}
        </div>
        <div class="footer-bottom"> 
            <p>Cristian Caraballo - 2023</p>   
            <div class="footer-bottom-media">
                <div id="btn-github" class="footer-bottom-media-github"><img src="/app/assets/img/gh-logo.png"></div>
                <div id="btn-linkedin" class="footer-bottom-media-linkedin"><img src="/app/assets/img/linked.png"></div>
            </div>
        </div>
    `
    return $footer;
}