const d = document;

export function validateForm(){
    const $inputs = d.querySelectorAll(".form__input"),
        $form = d.querySelector(".form"),
        $span = d.createElement("span");

    $span.classList.add("span__ok")
    
    const patrones = {
        nombre: /^[a-z]{6,15}$/i,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
        asunto: /^[a-z-]{6,15}$/i,
        comentario: /^.{1,255}$/i,
    }


    $inputs.forEach(input => {
        input.addEventListener("keyup", e => {
            const pattern = patrones[e.target.getAttribute("name")];

            if(pattern.test(input.value)){
                e.target.classList.add("form__valid");
                e.target.classList.remove("form__invalid");
                
                $span.classList.remove("span__err")
            }else{
                e.target.classList.add("form__invalid");
                e.target.classList.remove("form__valid");
                
                if(!e.target.classList.contains("span__err")){
                    $span.textContent = e.target.getAttribute("title");
                    e.target.insertAdjacentElement("afterend", $span);
                    $span.classList.add("span__err")
                }
            };
            
            if(e.target.value === ""){
                $span.classList.remove("span__err")
                e.target.classList.remove("form__invalid");
                e.target.classList.remove("form__valid");
            }
        });
    });

    d.addEventListener("click", (e) => {
        if(e.target.matches("#form__submit")){
            $inputs.forEach(input => {
                if(input.value === ""){
                    $span.classList.add("span__err")
                    input.classList.add("form__invalid");
                    input.classList.add("form__valid");
                }
            })
        }
    }); 
}