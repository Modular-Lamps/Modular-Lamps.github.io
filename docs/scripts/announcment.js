var announcmentEl = document.getElementById("announcment")
var announcmentBg = document.getElementById("announcment-bg")
var width = window.matchMedia("(max-width: 700px)")

function checkWidth() {
  if(announcmentEl.style.opacity == '1') {
    if(!width.matches) {
      announcmentBg.style.paddingRight = "400px"
      announcmentBg.style.paddingBottom = "36px"
    }
    else {
      announcmentBg.style.paddingRight = "240px"
      announcmentBg.style.paddingBottom = "34px"
    }
  }
}
checkWidth() // Call listener function at run time
width.addListener(checkWidth) // Attach listener function on state changes

function announcment() {
  if(announcmentEl.style.opacity == '0' || !announcmentEl.style.opacity) {
    announcmentBg.style.padding = "0px"
    !width.matches ? announcmentBg.style.paddingRight = "400px" :   announcmentBg.style.paddingRight = "240px"
    !width.matches ? announcmentBg.style.paddingBottom = "36px" :   announcmentBg.style.paddingBottom = "34px"
    announcmentBg.style.backgroundColor = 'rgb(255, 255, 0)'
    setTimeout(() => {
      announcmentEl.style.opacity = "1"
    }, 500);
  }
  else {
    announcmentEl.style.opacity = "0"
    setTimeout(() => {
      announcmentBg.style.padding = "10px"
      announcmentBg.style.backgroundColor = 'rgb(255, 0, 0)'
    }, 500);
  }
}