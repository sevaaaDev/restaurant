import displayNav from "./nav";
import displayHome from "./home";
import displayMenu from "./menu";

displayNav();
displayHome();

const start = () => {
  // displayHome();
  const homeBtn = document.querySelector(".home");
  const menuBtn = document.querySelector('.menu')
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
}

start()