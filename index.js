const hbg = document.getElementById('hbg');

hbg.addEventListener("click",()=>{
    if(!document.getElementById("navbar").parentNode.classList.contains("active")){
        document.getElementById("navbar").parentNode.classList.add("active");
        document.getElementById("hbg").src = 'images/icon-close.svg';
      }else{
        document.getElementById("navbar").parentNode.classList.remove("active");
        document.getElementById("hbg").src = 'images/icon-hamburger.svg';
      }
})


// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}