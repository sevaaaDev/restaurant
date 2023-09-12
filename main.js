/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayHome)
/* harmony export */ });
function displayHome() {
  const content = document.getElementById('content')
  const main = document.createElement('main')
  const container = document.createElement('div')
  const h1 = document.createElement('h1')
  const p = document.createElement('p')
  p.innerText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt! 
  consectetur adipisicing elit. Qui, sunt!`
  h1.innerText = `Kedai
  Koffeee`
  container.append(h1, p)
  container.classList.add('container', 'home')
  main.append(container)
  content.append(main)
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMenu)
/* harmony export */ });
function displayMenu() {
  const productName = [{
    src: 'img/cappuccino.jpg',
    name: 'Cappuccino',
  }, {
    src: 'img/latte.jpg',
    name: 'Latte',
  }, {
    src: 'img/espresso.jpg',
    name: 'Espresso',
  }, {
    src: 'img/americano.jpg',
    name: 'Americano',
  },]
  const content = document.getElementById('content')
  const main = document.createElement('main')
  const container = document.createElement('div')
  for (let coffee of productName) {
    const product = document.createElement('div')
    const img = document.createElement('img')
    img.setAttribute('src', coffee.src)
    const infoProduct = document.createElement('div')
    const nameProduct = document.createElement('div')
    const priceProduct = document.createElement('div')
    nameProduct.innerText = coffee.name
    priceProduct.innerText = '$3.00'
    img.classList.add('img-product')
    product.classList.add('product')
    infoProduct.classList.add('info-product')
    nameProduct.classList.add('name-product')
    priceProduct.classList.add('price-product')
    infoProduct.append(nameProduct, priceProduct)
    product.append(img, infoProduct)
    container.append(product)
  }
  container.classList.add( 'menu')
  main.append(container)
  content.append(main)
}

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayNav)
/* harmony export */ });
function displayNav() {
  const content = document.getElementById('content')
  const header = document.createElement("header");
  const container = document.createElement("div");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  li1.innerText = 'Home'
  li2.innerText = 'Menu'
  li3.innerText = 'Contact'
  li1.classList.add('home')
  li2.classList.add('menu')
  li3.classList.add('contact')
  ul.append(li1, li2, li3)
  nav.append(ul)
  container.classList.add('container', 'nav')
  container.append(nav)
  header.append(container)
  content.append(header)
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");




(0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
(0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();

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
    (0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
    start();
  });
  
  menuBtn.addEventListener('click', () => {
    resetDisplay();
    (0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])();
    start();
  })
}

start()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ0U7QUFDQTtBQUNqQztBQUNBLGdEQUFVO0FBQ1YsaURBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVU7QUFDZCxJQUFJLGlEQUFXO0FBQ2Y7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnREFBVTtBQUNkLElBQUksaURBQVc7QUFDZjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlIb21lKCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gIHAuaW5uZXJUZXh0ID0gYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aSwgc3VudCEgXHJcbiAgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUXVpLCBzdW50IWBcclxuICBoMS5pbm5lclRleHQgPSBgS2VkYWlcclxuICBLb2ZmZWVlYFxyXG4gIGNvbnRhaW5lci5hcHBlbmQoaDEsIHApXHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICdob21lJylcclxuICBtYWluLmFwcGVuZChjb250YWluZXIpXHJcbiAgY29udGVudC5hcHBlbmQobWFpbilcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlNZW51KCkge1xyXG4gIGNvbnN0IHByb2R1Y3ROYW1lID0gW3tcclxuICAgIHNyYzogJ2ltZy9jYXBwdWNjaW5vLmpwZycsXHJcbiAgICBuYW1lOiAnQ2FwcHVjY2lubycsXHJcbiAgfSwge1xyXG4gICAgc3JjOiAnaW1nL2xhdHRlLmpwZycsXHJcbiAgICBuYW1lOiAnTGF0dGUnLFxyXG4gIH0sIHtcclxuICAgIHNyYzogJ2ltZy9lc3ByZXNzby5qcGcnLFxyXG4gICAgbmFtZTogJ0VzcHJlc3NvJyxcclxuICB9LCB7XHJcbiAgICBzcmM6ICdpbWcvYW1lcmljYW5vLmpwZycsXHJcbiAgICBuYW1lOiAnQW1lcmljYW5vJyxcclxuICB9LF1cclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGZvciAobGV0IGNvZmZlZSBvZiBwcm9kdWN0TmFtZSkge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgY29mZmVlLnNyYylcclxuICAgIGNvbnN0IGluZm9Qcm9kdWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IG5hbWVQcm9kdWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGNvbnN0IHByaWNlUHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBuYW1lUHJvZHVjdC5pbm5lclRleHQgPSBjb2ZmZWUubmFtZVxyXG4gICAgcHJpY2VQcm9kdWN0LmlubmVyVGV4dCA9ICckMy4wMCdcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdpbWctcHJvZHVjdCcpXHJcbiAgICBwcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2R1Y3QnKVxyXG4gICAgaW5mb1Byb2R1Y3QuY2xhc3NMaXN0LmFkZCgnaW5mby1wcm9kdWN0JylcclxuICAgIG5hbWVQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ25hbWUtcHJvZHVjdCcpXHJcbiAgICBwcmljZVByb2R1Y3QuY2xhc3NMaXN0LmFkZCgncHJpY2UtcHJvZHVjdCcpXHJcbiAgICBpbmZvUHJvZHVjdC5hcHBlbmQobmFtZVByb2R1Y3QsIHByaWNlUHJvZHVjdClcclxuICAgIHByb2R1Y3QuYXBwZW5kKGltZywgaW5mb1Byb2R1Y3QpXHJcbiAgICBjb250YWluZXIuYXBwZW5kKHByb2R1Y3QpXHJcbiAgfVxyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCAnbWVudScpXHJcbiAgbWFpbi5hcHBlbmQoY29udGFpbmVyKVxyXG4gIGNvbnRlbnQuYXBwZW5kKG1haW4pXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TmF2KCkge1xyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgY29uc3QgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcbiAgY29uc3QgbGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgbGkxLmlubmVyVGV4dCA9ICdIb21lJ1xyXG4gIGxpMi5pbm5lclRleHQgPSAnTWVudSdcclxuICBsaTMuaW5uZXJUZXh0ID0gJ0NvbnRhY3QnXHJcbiAgbGkxLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxyXG4gIGxpMi5jbGFzc0xpc3QuYWRkKCdtZW51JylcclxuICBsaTMuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpXHJcbiAgdWwuYXBwZW5kKGxpMSwgbGkyLCBsaTMpXHJcbiAgbmF2LmFwcGVuZCh1bClcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ25hdicpXHJcbiAgY29udGFpbmVyLmFwcGVuZChuYXYpXHJcbiAgaGVhZGVyLmFwcGVuZChjb250YWluZXIpXHJcbiAgY29udGVudC5hcHBlbmQoaGVhZGVyKVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRpc3BsYXlOYXYgZnJvbSBcIi4vbmF2XCI7XHJcbmltcG9ydCBkaXNwbGF5SG9tZSBmcm9tIFwiLi9ob21lXCI7XHJcbmltcG9ydCBkaXNwbGF5TWVudSBmcm9tIFwiLi9tZW51XCI7XHJcblxyXG5kaXNwbGF5TmF2KCk7XHJcbmRpc3BsYXlIb21lKCk7XHJcblxyXG5jb25zdCBzdGFydCA9ICgpID0+IHtcclxuICAvLyBkaXNwbGF5SG9tZSgpO1xyXG4gIGNvbnN0IGhvbWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbWVcIik7XHJcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51JylcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIFxyXG4gIGNvbnN0IHJlc2V0RGlzcGxheSA9ICgpID0+IHtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICB9O1xyXG4gIFxyXG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHJlc2V0RGlzcGxheSgpO1xyXG4gICAgZGlzcGxheU5hdigpO1xyXG4gICAgZGlzcGxheUhvbWUoKTtcclxuICAgIHN0YXJ0KCk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlc2V0RGlzcGxheSgpO1xyXG4gICAgZGlzcGxheU5hdigpO1xyXG4gICAgZGlzcGxheU1lbnUoKTtcclxuICAgIHN0YXJ0KCk7XHJcbiAgfSlcclxufVxyXG5cclxuc3RhcnQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==