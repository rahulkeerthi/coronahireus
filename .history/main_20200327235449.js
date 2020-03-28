const cards = document.querySelectorAll('.card-profile')
const y = window.scrollY;
window.addEventListener('scroll', (event) => {
    console.log(window.scrollY);
    if (y > 300) {
        card.classList.remove('invisible');
    };
})
cards.forEach((card) => {
});