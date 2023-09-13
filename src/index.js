import displayNav from "./nav";
import displayHome from "./home";
import displayMenu from "./menu";
import displayContact from "./contact";

displayNav();
displayHome();

const start = () => {
  // displayHome();
  const homeBtn = document.querySelector(".home");
  const menuBtn = document.querySelector('.menu')
  const contactBtn = document.querySelector('.contact')
  const content = document.getElementById("content");
  
  const resetDisplay = () => {
    content.innerHTML = "";
  };
  
  homeBtn.addEventListener("click", () => {
    resetDisplay();
    displayNav();
    displayHome();
    start();
  });
  
  menuBtn.addEventListener('click', () => {
    resetDisplay();
    displayNav();
    displayMenu();
    start();
  })

  contactBtn.addEventListener('click', () => {
    resetDisplay();
    displayNav();
    displayContact();
    start();
  })
}

start()