const d = document;

export function validateForm(){
    const $inputs = d.querySelectorAll(".form-input[required]"),
        $form = d.querySelector(".form"),
        $span = d.createElement("span");

    $span.classList.add("span-ok");

    const regexPatterns = {
        firstname: /^[a-z\s]{4,15}$/i,
        lastname: /^[a-z\s]{4,15}$/i,
        email: /^([a-z_\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
        subject: /^[a-z-]{6,15}$/i,
        comment: /^[\s\S]{1,255}$/i,
    }

    //FORM VALIDATIONS
    $inputs.forEach(input => {
        input.addEventListener("keyup", e => {
            const pattern = regexPatterns[e.target.getAttribute("name")];
            if(pattern.test(input.value)){
                e.target.classList.add("form-valid");
                e.target.classList.remove("form-invalid");

                $span.classList.remove("span-err");
                
            }else{
                e.target.classList.add("form-invalid");
                e.target.classList.remove("form-valid");

                if(!$span.classList.contains("span-err")){
                    $span.textContent = e.target.getAttribute("title");
                    $span.classList.add("span-err");
                    e.target.insertAdjacentElement("afterend", $span);
                }
            };
            
            if(e.target.value === ""){
                e.target.classList.remove("form-invalid");
                e.target.classList.remove("form-valid");
                
                $span.classList.remove("span-err");
            }
        });
    });

    //THIS AVOID SPAN TO REMAINS WHEN INPUT ISN'T FOCUSED
    d.addEventListener("click", (e) => {
        if((e.target.matches(".form") || e.target.matches(".form-input") 
        && (!e.target.classList.contains("span-err")))){
            $span.classList.remove("span-err");
        }
    }); 

    //SUBMIT TO EMAIL
    d.addEventListener("submit", e => {
        e.preventDefault(); 
        let form = document.querySelector("#form")
        
        if(e.target !== form) return;

        let ok = true;

        $inputs.forEach(input => {
            if(input.classList.contains("form-invalid")) ok = false;
        })

        if(ok){
            let $spanForm = d.createElement("span");
            $spanForm.classList.add("span-form");
            $spanForm.innerHTML = `<img src="app/assets/img/loader.svg">`;
            $form.appendChild($spanForm);

            setTimeout(() => {
                $spanForm.classList.add("span-form-visible");
            },500)

            fetch("https://formsubmit.co/ajax/cristiancaraballo07@gmail.com",{
                method: "POST",
                body: new FormData(e.target)
            })
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(() => {
                setTimeout(() => {
                    $spanForm.classList.add("span-form-success");
                    $spanForm.innerHTML = `
                        <div class="success-div">
                            <img src="app/assets/img/success.png">
                            <h3>¡Success!</h3>
                        </div>
                        `
                        setTimeout(() => {
                            $spanForm.classList.remove("span-form-success", "span-form-visible");
                        }, 5000);
                }, 3000);
            })
            .catch(err =>{
                setTimeout(() => {
                    $spanForm.classList.add("span-form-err");
                    $spanForm.innerHTML = `
                        <div class="error-div">
                            <img src="app/assets/img/error.png">
                            <h3>¡Oops!</h3>
                            <small>${err}</small>
                        </div>
                    `
                        setTimeout(() => {
                            $spanForm.classList.remove("span-form-err", "span-form-visible");
                        }, 5000);
                }, 3000);
            })
            
            d.querySelectorAll(".form-input").forEach(input => {
                input.value = "";
                input.classList.remove("form-valid");
            });
        }
    })
}
