const removeInvisible = () => {
    const y = window.scrollY;
    const cards = document.querySelectorAll('.card-profile')
    // console.log(window.scrollY);
    if (y >= 150) {
        cards.forEach((card) => {
            card.classList.remove('invisible');
        })
    };
};

window.addEventListener('scroll', removeInvisible);

const moveCloud = () => {
    const clouds = document.querySelectorAll('.cloud')
    // clouds
}

// $(document).ready(function(){
//     var bgPosition = 0;
    
setInterval(drift, 20);
    
//     function drift(){
//       bgPosition = bgPosition - 1;
//       $("#cloud1").css("background-position", bgPosition + "px");
//    $("#cloud2").css("background-position", bgPosition + "px")
//     };
//   });