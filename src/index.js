import displayNav from "./nav";
import displayHome from "./home";
import displayMenu from "./menu";
import displayContact from "./contact";
import setUnderline from "./navTab";

displayNav();
displayHome();

const start = (currentTab) => {
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
    start('home');
  });
  
  menuBtn.addEventListener('click', () => {
    resetDisplay();
    displayNav();
    displayMenu();
    start('menu');
  })

  contactBtn.addEventListener('click', () => {
    resetDisplay();
    displayNav();
    displayContact();
    start('contact');
  })

  if (currentTab === 'home') {
    setUnderline(homeBtn, homeBtn, menuBtn, contactBtn)
  }
  if (currentTab === 'menu') {
    setUnderline(menuBtn, homeBtn, menuBtn, contactBtn)
  }
  if (currentTab === 'contact') {
    setUnderline(contactBtn, homeBtn, menuBtn, contactBtn)
  }
}

start('home')