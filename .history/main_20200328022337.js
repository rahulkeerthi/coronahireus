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

const cloud1 = document.querySelectorAll('.cloud1')
let leftPosition1 = -25;  
const moveCloud1 = () => {
    leftPosition1 = leftPosition1 + 0.01;
    cloud1.forEach((cloud) => {
        // console.log(cloud);
        cloud.style.left = leftPosition1 + "vw";
    })
}
const cloud2 = document.querySelectorAll('.cloud2')
if leftPosition2 > 80 {
    leftPosition2
}
let leftPosition2 = 0;  
const moveCloud2 = () => {
    leftPosition2 = leftPosition2 + 0.02;
    cloud2.forEach((cloud) => {
        // console.log(cloud);
        cloud.style.left = leftPosition2 + "vw";
    })
}

setInterval(moveCloud1, 20);
setInterval(moveCloud2, 20);


// $(document).ready(function(){
//     var bgPosition = 0;
//     function drift(){
//       bgPosition = bgPosition - 1;
//       $("#cloud1").css("background-position", bgPosition + "px");
//    $("#cloud2").css("background-position", bgPosition + "px")
//     };
//   });