const y = window.scrollY;
const cards = document.querySelectorAll('.card-profile')
console.log(window.scrollY);
if (y >= 300) {
        cards.forEach((card) => {
            card.classList.remove('invisible');
        })
    };
});

window.addEventListener('scroll', removeInvisible