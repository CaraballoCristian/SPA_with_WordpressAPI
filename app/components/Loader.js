const d = document;

export function Loader(){
    const $loader = d.createElement("img");
    $loader.src = "app/assets/loader.svg";
    $loader.alt = "Loading";
    $loader.classList.add("loader");
    return $loader;
}