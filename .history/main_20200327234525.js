const cards = document.querySelectorAll('.card-profile')
cards.forEach((card) => {
    const y = window.scrollY;
    window.addEventListener('scroll', (event) => {
        console.log(event.scrollY);
        // console.log(y);
    }) 
});