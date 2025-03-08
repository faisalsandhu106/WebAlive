
function swiper (){
  
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

function gsap_scroll(){
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

/*
function (){
let Dropdownresponsive= document.querySelector(".dropdown-responsive li i")
let openDropdownresponsive = document.querySelector(".dropdown-responsive ul")
let Check = 


if (Check == 0) {
  Dropdownresponsive.addEventListener('click',function (){
    openDropdownresponsive.style.display = "block"
    checked = 1
    
  })
  
} else if (Check =! 0){
  Dropdownresponsive.addEventListener('click',function (){
    openDropdownresponsive.style.display = "none"
    checked = 1
  })
  
}

}
*/

/*
function Scroll_Marque(){
  window.addEventListener("wheel",function(dets){
      if (dets.deltaY>0) {
        let tl_3 = gsap.timeline({
          scrollTrigger:{
              trigger:"nav",
              scroller:"body",
              start:"top 30%",
              markers:true
          }
      })
      tl_3.to("nav",{
         display:"none"
      })


      } else if (dets.deltaY<0){
        let tl_4 = gsap.timeline({
          scrollTrigger:{
              trigger:"nav",
              scroller:"body",
              start:"top 100%",
          }
      })

       tl_4.to("nav",{
        display:"block",
        duration0:0.1,
        backgroundColor:"black"
        
           
       })
      }
  })
}
*/


swiper ();
gsap_scroll();
sideBar();

