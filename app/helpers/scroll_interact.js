const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
        }
    })
})

const hiddenCards = document.querySelectorAll(".hidden")
hiddenElements.forEach(el => observer.observe(el));