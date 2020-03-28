const removeInvisible = () => {
    const cards = document.querySelectorAll('.card-profile')
    const y = window.scrollY;
    console.log(window.scrollY);
    if (y >= 300) {
            cards.forEach((card) => {
                card.classList.remove('invisible');
            })
        };
};

window.addEventListener('scroll', removeInvisible);