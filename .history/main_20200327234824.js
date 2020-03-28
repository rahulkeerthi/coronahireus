const cards = document.querySelectorAll('.card-profile')
cards.forEach((card) => {
    const y = window.scrollY;
    window.addEventListener('scroll', (event) => {
        console.log(window.scrollY);
        if (y > 300) {
            card.classList.remove('invisible')
        } elsif (y <= 300) {
            card.classList.add('invisible')
        }
        }
    }) 
});