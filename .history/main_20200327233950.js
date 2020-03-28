const cards = document.querySelectorAll('.card-profile')
cards.forEach((card) => {
    card.addEventListener('scrollY', console.log(event))
})