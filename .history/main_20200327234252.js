const cards = document.querySelectorAll('.card-profile')
cards.forEach((card) => {
    const y = window.scrollY;
    card.addEventListener('scroll', (event) => {
        console.log(event);
    }) 
});