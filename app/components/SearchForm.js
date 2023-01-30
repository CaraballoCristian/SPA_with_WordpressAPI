const d = document;

export function SearchForm() {
    const $form = d.createElement("form"),
        $input = d.createElement("input");
        $form.classList.add("search-form")
        $input.name = "search";
        $input.type = "search";
        $input.placeholder = "Buscar...";
        $input.autocomplete = "off";
        
        $form.appendChild($input);

        

        d.addEventListener("submit", e =>{
            if(!e.target.matches(".search-form")) return;

            e.preventDefault();
            let search = e.target[0].value.toLowerCase();
            window.location.hash = "#/search?search=" + search;

            //console.log("hash  " + window.location.hash.slice(8))
        })

    return $form;
}