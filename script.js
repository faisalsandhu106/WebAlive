

function swiper(){
  
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
}

function hero_animation(){
  gsap.from(".navbar ul",{
    opacity:0,
    x:28,
    delay:0.1,
    duration:0.7,
  })
  
  gsap.from(".page-1-center-content span h1",{
    opacity:0,
    y:19,
    delay:0.6,
    duration:0.65,
    stagger:0.2,
  })
}

function footer_animation(){
  gsap.from(".footer-center-parts",{
    opacity:0,
    y:50,
    stagger:0.13,
    scrollTrigger:{
       trigger:".footer-center-parts",
       scroller:"body",
       start:"top 70%",       
  }  
  })
}

function sideBar(){
  let openMenubar = document.querySelector(".ri-menu-3-line")
let crossMenubar = document.querySelector(".ri-close-large-line")

let tl = gsap.timeline()

tl.to(".navbar-center",{
    right:0,
    duration:0.4,
})

tl.pause()

openMenubar.addEventListener("click",function(){
  tl.play()
})
crossMenubar.addEventListener("click",function(){
  tl.reverse()
})
}

swiper();
hero_animation();
footer_animation();
sideBar();
