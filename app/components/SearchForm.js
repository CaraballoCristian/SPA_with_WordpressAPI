const d = document;

export function SearchForm() {
    const $form = d.createElement("form");
        $form.classList.add("search-form");

    const $input = d.createElement("input");
        $input.name = "search";
        $input.type = "search";
        $input.placeholder = "Search...";
        $input.autocomplete = "off";
        
        $form.appendChild($input);

        d.addEventListener("submit", e =>{
            if(!e.target.matches(".search-form")) return;
            
            e.preventDefault();
            let search = e.target[0].value.toLowerCase();
            window.location.hash = "#/search?search=" + search;
        })

    return $form;
}