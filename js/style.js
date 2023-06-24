var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  effect: "cube",
  grabCursor: true,
  loop: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.onscroll = function () {
  var top = window.pageXOffset
    ? window.pageXOffset
    : document.documentElement.scrollTop
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
  var header = document.querySelector(".header");
  if (top > 50) {
    header.style.position = "fixed";
    header.style.height = "90px";
    header.style.backgroundColor = "#222222";
    header.style.border = "none";
  } else {
    header.style.position = "relative";
    header.style.height = "90px";
    header.style.backgroundColor = "transparent";
    header.style.borderBottom = "1px solid rgba(255,255,255,0.20)";
  }
};

// Get the button
window.addEventListener('scroll', function(){
  var scroll = this.document.querySelector('.scroll-top');
  scroll.classList.toggle("active", window.scrollY > 500)
})
function scrollToTop(){
  window.scrollTo({
    top: 0
  })
}

//slider
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:4
        },
        600:{
            items:6
        },
        1000:{
            items:8
        }
    }
  })
});


// menu
let icon = document.querySelector(".icon-menu");
let menu = document.querySelector(".header-menu")
let closeIcon = document.querySelector(".icon-button i")
let header = document.querySelector(".header")
let height = menu.scrollHeight
console.log(closeIcon)
menu.style.height = 0
icon.addEventListener('click', function() {
  if (menu.style.height === `${height}px`) {
    menu.style.height = 0;
    closeIcon.classList.add("fa-bars")
    closeIcon.classList.remove("fa-times")
  } else {
    menu.style.height = `${height}px`;
    header.style.borderBottom = ' solid rgba(255, 255, 255, 0)'
    closeIcon.classList.add("fa-times")
    closeIcon.classList.remove("fa-bars")
  }
});