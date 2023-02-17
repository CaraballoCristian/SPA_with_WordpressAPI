export function Loader(){
    const $loader = document.createElement("img");

    $loader.src = "app/assets/img/loader.svg";
    $loader.alt = "Loading";
    $loader.classList.add("loader");
    $loader.style.display = "none";

    return $loader;
}