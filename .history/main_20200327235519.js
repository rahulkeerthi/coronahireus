const cards = document.querySelectorAll('.card-profile')
const y = window.scrollY;
window.addEventListener('scroll', (event) => {
    console.log(window.scrollY);
    if (y > 300) {
        cards.forEach((card) => {
            card.classList.remove('invisible');
        })
    };
});