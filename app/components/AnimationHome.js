export function AnimationHome(){    
    const box = document.querySelector(".home-section-top-animation");

    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const validCombos = [
        { position: 1, roundness: 1 },
        { position: 1, roundness: 2 },
        { position: 1, roundness: 4 },
        { position: 2, roundness: 1 },
        { position: 2, roundness: 3 },
        { position: 3, roundness: 3 },
    ]

    let prev = 0;

    setInterval(() => {
        let index = random(0, validCombos.length - 1);

        while(prev === validCombos[index].position){
            index = random(0, validCombos.length - 1);
        }

        let combo = validCombos[index];

        box.dataset.position = combo.position;
        box.dataset.roundness = combo.roundness;
        
        box.style.opacity = 1;

        prev = validCombos[index].position;
    },3000)
};