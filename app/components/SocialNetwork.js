export function SocialNetwork(){
    document.addEventListener("click", e => {
        if(e.target.matches("#btn-github") || e.target.matches("#btn-github *")) {
            window.open("https://github.com/CaraballoCristian");
        };
        if(e.target.matches("#btn-linkedin") || e.target.matches("#btn-linkedin *")) {
            window.open("https://www.linkedin.com/in/cristiancaraballo/");
        };
    }); 
}
