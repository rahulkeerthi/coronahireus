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

const clouds = document.querySelectorAll('.cloud')
let leftPosition = 0;  
const moveCloud = () => {
    leftPosition = leftPosition + 1;
    clouds.forEach((cloud) => {
        // console.log(cloud);
        cloud.style.left = leftPosition + "vw";
    })
}

setInterval(moveCloud, 200);


// $(document).ready(function(){
//     var bgPosition = 0;
//     function drift(){
//       bgPosition = bgPosition - 1;
//       $("#cloud1").css("background-position", bgPosition + "px");
//    $("#cloud2").css("background-position", bgPosition + "px")
//     };
//   });