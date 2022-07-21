// ==============SLIDER===============

new Swiper('.section-three', {
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next'
    },

    slidesPerView: 1,

    spaceBetween: 30,

    loop: true, 
});

// ==========BURGER====MENU===========

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}