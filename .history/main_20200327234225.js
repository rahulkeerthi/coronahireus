const cards = document.querySelectorAll('.card-profile')
cards.forEach((card) => {
    const y = window.scrollY;
    card.addEventListener('scrollY', (event) => {
        console.log(event.target);
    }) 
});