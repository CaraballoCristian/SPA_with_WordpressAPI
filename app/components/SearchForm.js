const d = document;

export function SearchForm() {
    const $form = d.createElement("form");
        $form.classList.add("search-form");

    const $input = d.createElement("input");
        $input.name = "search";
        $input.type = "search";
        $input.placeholder = "Search...";
        $input.autocomplete = "off";
        
    const $btn = d.createElement("button");
        $btn.innerHTML = `
            <img src="app/assets/img/search.png">
        `;
        $btn.classList.add("search-btn")

        $form.appendChild($input);
        $form.appendChild($btn);

        d.addEventListener("submit", e =>{
            if(!e.target.matches(".search-form")) return;
            
            e.preventDefault();
            let search = e.target[0].value.toLowerCase();
            window.location.hash = "#/search?search=" + search;
        })

    return $form;
}