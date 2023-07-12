const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
let container = document.querySelector('.container');
let navWrapper = document.querySelector('.nav_wrapper');

burger.addEventListener('click', () => {
  nav.classList.toggle('show');
});

// Overlay section
function on() {
  document.getElementById("overlay").style.display = "flex";
  // container.style.backgroundColor= "rgba(78, 78, 78, 0.53)";
  container.style.backgroundColor= "rgba(0,0,0,0.5)";
  navWrapper.style.backgroundColor= "rgba(0,0,0,0.5)";
  container.style.opacity= "0.5";
  container.style.zIndex= "99999"
  console.log("clicked")
}

// function off() {
//   if (container) {
//     document.getElementById("overlay").style.display = "none";
//   }
  
// }

