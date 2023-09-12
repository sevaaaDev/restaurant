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





const start = () => {
  (0,_nav__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_home__WEBPACK_IMPORTED_MODULE_1__["default"])();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNyQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBQ0U7QUFDQTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFVO0FBQ1osRUFBRSxpREFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdEQUFVO0FBQ2QsSUFBSSxpREFBVztBQUNmO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUksZ0RBQVU7QUFDZCxJQUFJLGlEQUFXO0FBQ2Y7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLE8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5SG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICBwLmlubmVyVGV4dCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWksIHN1bnQhIFxyXG4gIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aSwgc3VudCFgXHJcbiAgaDEuaW5uZXJUZXh0ID0gYEtlZGFpXHJcbiAgS29mZmVlZWBcclxuICBjb250YWluZXIuYXBwZW5kKGgxLCBwKVxyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnaG9tZScpXHJcbiAgbWFpbi5hcHBlbmQoY29udGFpbmVyKVxyXG4gIGNvbnRlbnQuYXBwZW5kKG1haW4pXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcclxuICBjb25zdCBwcm9kdWN0TmFtZSA9IFt7XHJcbiAgICBzcmM6ICdpbWcvY2FwcHVjY2luby5qcGcnLFxyXG4gICAgbmFtZTogJ0NhcHB1Y2Npbm8nLFxyXG4gIH0sIHtcclxuICAgIHNyYzogJ2ltZy9sYXR0ZS5qcGcnLFxyXG4gICAgbmFtZTogJ0xhdHRlJyxcclxuICB9LCB7XHJcbiAgICBzcmM6ICdpbWcvZXNwcmVzc28uanBnJyxcclxuICAgIG5hbWU6ICdFc3ByZXNzbycsXHJcbiAgfSwge1xyXG4gICAgc3JjOiAnaW1nL2FtZXJpY2Fuby5qcGcnLFxyXG4gICAgbmFtZTogJ0FtZXJpY2FubycsXHJcbiAgfSxdXHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpXHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICBmb3IgKGxldCBjb2ZmZWUgb2YgcHJvZHVjdE5hbWUpIHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGNvZmZlZS5zcmMpXHJcbiAgICBjb25zdCBpbmZvUHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBuYW1lUHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBwcmljZVByb2R1Y3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbmFtZVByb2R1Y3QuaW5uZXJUZXh0ID0gY29mZmVlLm5hbWVcclxuICAgIHByaWNlUHJvZHVjdC5pbm5lclRleHQgPSAnJDMuMDAnXHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaW1nLXByb2R1Y3QnKVxyXG4gICAgcHJvZHVjdC5jbGFzc0xpc3QuYWRkKCdwcm9kdWN0JylcclxuICAgIGluZm9Qcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ2luZm8tcHJvZHVjdCcpXHJcbiAgICBuYW1lUHJvZHVjdC5jbGFzc0xpc3QuYWRkKCduYW1lLXByb2R1Y3QnKVxyXG4gICAgcHJpY2VQcm9kdWN0LmNsYXNzTGlzdC5hZGQoJ3ByaWNlLXByb2R1Y3QnKVxyXG4gICAgaW5mb1Byb2R1Y3QuYXBwZW5kKG5hbWVQcm9kdWN0LCBwcmljZVByb2R1Y3QpXHJcbiAgICBwcm9kdWN0LmFwcGVuZChpbWcsIGluZm9Qcm9kdWN0KVxyXG4gICAgY29udGFpbmVyLmFwcGVuZChwcm9kdWN0KVxyXG4gIH1cclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCggJ21lbnUnKVxyXG4gIG1haW4uYXBwZW5kKGNvbnRhaW5lcilcclxuICBjb250ZW50LmFwcGVuZChtYWluKVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU5hdigpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGxpMS5pbm5lclRleHQgPSAnSG9tZSdcclxuICBsaTIuaW5uZXJUZXh0ID0gJ01lbnUnXHJcbiAgbGkzLmlubmVyVGV4dCA9ICdDb250YWN0J1xyXG4gIGxpMS5jbGFzc0xpc3QuYWRkKCdob21lJylcclxuICBsaTIuY2xhc3NMaXN0LmFkZCgnbWVudScpXHJcbiAgbGkzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKVxyXG4gIHVsLmFwcGVuZChsaTEsIGxpMiwgbGkzKVxyXG4gIG5hdi5hcHBlbmQodWwpXHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICduYXYnKVxyXG4gIGNvbnRhaW5lci5hcHBlbmQobmF2KVxyXG4gIGhlYWRlci5hcHBlbmQoY29udGFpbmVyKVxyXG4gIGNvbnRlbnQuYXBwZW5kKGhlYWRlcilcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBkaXNwbGF5TmF2IGZyb20gXCIuL25hdlwiO1xyXG5pbXBvcnQgZGlzcGxheUhvbWUgZnJvbSBcIi4vaG9tZVwiO1xyXG5pbXBvcnQgZGlzcGxheU1lbnUgZnJvbSBcIi4vbWVudVwiO1xyXG5cclxuXHJcbmNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xyXG4gIGRpc3BsYXlOYXYoKTtcclxuICBkaXNwbGF5SG9tZSgpO1xyXG4gIC8vIGRpc3BsYXlIb21lKCk7XHJcbiAgY29uc3QgaG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaG9tZVwiKTtcclxuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKVxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XHJcbiAgXHJcbiAgY29uc3QgcmVzZXREaXNwbGF5ID0gKCkgPT4ge1xyXG4gICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIH07XHJcbiAgXHJcbiAgaG9tZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgcmVzZXREaXNwbGF5KCk7XHJcbiAgICBkaXNwbGF5TmF2KCk7XHJcbiAgICBkaXNwbGF5SG9tZSgpO1xyXG4gICAgc3RhcnQoKTtcclxuICB9KTtcclxuICBcclxuICBtZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVzZXREaXNwbGF5KCk7XHJcbiAgICBkaXNwbGF5TmF2KCk7XHJcbiAgICBkaXNwbGF5TWVudSgpO1xyXG4gICAgc3RhcnQoKTtcclxuICB9KVxyXG59XHJcblxyXG5zdGFydCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9