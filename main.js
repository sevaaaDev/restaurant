(()=>{"use strict";function e(){const e=document.getElementById("content"),t=document.createElement("header"),n=document.createElement("div"),c=document.createElement("nav"),a=document.createElement("ul"),m=document.createElement("li"),d=document.createElement("li"),o=document.createElement("li");m.innerText="Home",d.innerText="Menu",o.innerText="Contact",m.classList.add("home"),d.classList.add("menu"),o.classList.add("contact"),a.append(m,d,o),c.append(a),n.classList.add("container","nav"),n.append(c),t.append(n),e.append(t)}function t(){const e=document.getElementById("content"),t=document.createElement("main"),n=document.createElement("div"),c=document.createElement("h1"),a=document.createElement("p");a.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, sunt! \n  consectetur adipisicing elit. Qui, sunt!",c.innerText="Kedai\n  Koffeee",n.append(c,a),n.classList.add("container","home"),t.append(n),e.append(t)}function n(e,...t){(e=>{for(let t of e)t.classList.remove("underline")})(t),(e=>{e.classList.add("underline")})(e)}e(),t();const c=a=>{const m=document.querySelector(".home"),d=document.querySelector(".menu"),o=document.querySelector(".contact"),i=document.getElementById("content"),s=()=>{i.innerHTML=""};m.addEventListener("click",(()=>{s(),e(),t(),c("home")})),d.addEventListener("click",(()=>{s(),e(),function(){const e=[{src:"img/cappuccino.jpg",name:"Cappuccino"},{src:"img/americano.jpg",name:"Americano"},{src:"img/espresso.jpg",name:"Espresso"},{src:"img/latte.jpg",name:"Latte"}],t=document.getElementById("content"),n=document.createElement("main"),c=document.createElement("div"),a=document.createElement("h1"),m=(document.createElement("h2"),document.createElement("div"));for(let t of e){const e=document.createElement("div"),n=document.createElement("img"),c=document.createElement("p"),a=document.createElement("p");a.innerText="$3.00",c.innerText=t.name,n.setAttribute("src",t.src),e.classList.add("product"),n.classList.add("img-product"),c.classList.add("name-product"),a.classList.add("price-product"),e.append(n,c,a),m.append(e)}a.innerText="Menu",m.classList.add("menu-list"),c.classList.add("container","menu"),c.append(a,m),n.classList.add("menu-section"),n.append(c),t.append(n)}(),c("menu")})),o.addEventListener("click",(()=>{s(),e(),function(){const e=[{name:"name",label:"Name",input:"input",type:"text"},{name:"email",label:"Email",input:"input",type:"email"},{name:"message",label:"Message",input:"textarea",type:"text"}],t=document.getElementById("content"),n=document.createElement("main"),c=document.createElement("div"),a=document.createElement("h1"),m=document.createElement("address"),d=document.createElement("p"),o=document.createElement("p"),i=document.createElement("img"),s=document.createElement("button");d.innerText="🍽 Mars street 23, Los Nevada, Frace",o.innerText="📞123-123-321",i.setAttribute("src","img/restaurant-location.png"),m.append(i,d,o);const r=document.createElement("form");a.innerText="Contact Us",r.append(a);for(let t of e){const e=document.createElement("label"),n=document.createElement(t.input);e.setAttribute("for",t.name),e.innerText=t.label,n.setAttribute("type",t.type),n.setAttribute("name",t.name),n.setAttribute("id",t.name),r.append(e,n)}s.innerText="Submit",r.append(s),c.classList.add("container","contact"),n.classList.add("contact-section"),c.append(m,r),n.append(c),t.append(n);const u=document.querySelector("textarea");u.setAttribute("cols","30"),u.setAttribute("rows","10")}(),c("contact")})),"home"===a&&n(m,m,d,o),"menu"===a&&n(d,m,d,o),"contact"===a&&n(o,m,d,o)};c("home")})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLENBQ2pDLE1BQU1DLEVBQVE1QyxTQUFTRyxjQUFjLFNBQy9CMEMsRUFBUTdDLFNBQVNHLGNBQWNpRCxFQUFTUCxPQUM5Q0QsRUFBTUgsYUFBYSxNQUFPVyxFQUFTakIsTUFDbkNTLEVBQU1sQyxVQUFZMEMsRUFBU1IsTUFDM0JDLEVBQU1KLGFBQWEsT0FBUVcsRUFBU04sTUFDcENELEVBQU1KLGFBQWEsT0FBUVcsRUFBU2pCLE1BQ3BDVSxFQUFNSixhQUFhLEtBQU1XLEVBQVNqQixNQUNsQ2dCLEVBQUt0QyxPQUFPK0IsRUFBT0MsRUFDckIsQ0FDQUssRUFBT3hDLFVBQVksU0FDbkJ5QyxFQUFLdEMsT0FBT3FDLEdBQ1o5QyxFQUFVTyxVQUFVQyxJQUFJLFlBQWEsV0FDckNHLEVBQUtKLFVBQVVDLElBQUksbUJBQ25CUixFQUFVUyxPQUFPa0MsRUFBUUksR0FDekJwQyxFQUFLRixPQUFPVCxHQUNaTCxFQUFRYyxPQUFPRSxHQUNmLE1BQU1zQyxFQUFXckQsU0FBUzJCLGNBQWMsWUFDeEMwQixFQUFTWixhQUFhLE9BQVEsTUFDOUJZLEVBQVNaLGFBQWEsT0FBUSxLQUNoQyxDRmpCSWEsR0FDQTdCLEVBQU0sVUFBVSxJQUdDLFNBQWZOLEdBQ0ZELEVBQWFRLEVBQVNBLEVBQVNFLEVBQVNDLEdBRXZCLFNBQWZWLEdBQ0ZELEVBQWFVLEVBQVNGLEVBQVNFLEVBQVNDLEdBRXZCLFlBQWZWLEdBQ0ZELEVBQWFXLEVBQVlILEVBQVNFLEVBQVNDLEVBQzdDLEVBR0ZKLEVBQU0sTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdlRhYi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU5hdigpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xyXG4gIGNvbnN0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgY29uc3QgbGkzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gIGxpMS5pbm5lclRleHQgPSAnSG9tZSdcclxuICBsaTIuaW5uZXJUZXh0ID0gJ01lbnUnXHJcbiAgbGkzLmlubmVyVGV4dCA9ICdDb250YWN0J1xyXG4gIGxpMS5jbGFzc0xpc3QuYWRkKCdob21lJylcclxuICBsaTIuY2xhc3NMaXN0LmFkZCgnbWVudScpXHJcbiAgbGkzLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKVxyXG4gIHVsLmFwcGVuZChsaTEsIGxpMiwgbGkzKVxyXG4gIG5hdi5hcHBlbmQodWwpXHJcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicsICduYXYnKVxyXG4gIGNvbnRhaW5lci5hcHBlbmQobmF2KVxyXG4gIGhlYWRlci5hcHBlbmQoY29udGFpbmVyKVxyXG4gIGNvbnRlbnQuYXBwZW5kKGhlYWRlcilcclxufVxyXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5SG9tZSgpIHtcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJylcclxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICBwLmlubmVyVGV4dCA9IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWksIHN1bnQhIFxyXG4gIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFF1aSwgc3VudCFgXHJcbiAgaDEuaW5uZXJUZXh0ID0gYEtlZGFpXHJcbiAgS29mZmVlZWBcclxuICBjb250YWluZXIuYXBwZW5kKGgxLCBwKVxyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnaG9tZScpXHJcbiAgbWFpbi5hcHBlbmQoY29udGFpbmVyKVxyXG4gIGNvbnRlbnQuYXBwZW5kKG1haW4pXHJcbn0iLCJjb25zdCBhZGRVbmRlcmxpbmUgPSAoY3VycmVudFRhYikgPT4ge1xyXG4gIGN1cnJlbnRUYWIuY2xhc3NMaXN0LmFkZCgndW5kZXJsaW5lJylcclxufVxyXG5cclxuY29uc3QgcmVtb3ZlVW5kZXJsaW5lID0gKGFsbEJ0bikgPT4ge1xyXG4gIGZvciAobGV0IGJ0biBvZiBhbGxCdG4pIHtcclxuICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCd1bmRlcmxpbmUnKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0VW5kZXJsaW5lKGN1cnJlbnRUYWIsIC4uLmFsbEJ0bikge1xyXG4gIHJlbW92ZVVuZGVybGluZShhbGxCdG4pXHJcbiAgYWRkVW5kZXJsaW5lKGN1cnJlbnRUYWIpXHJcbn0iLCJpbXBvcnQgZGlzcGxheU5hdiBmcm9tIFwiLi9uYXZcIjtcclxuaW1wb3J0IGRpc3BsYXlIb21lIGZyb20gXCIuL2hvbWVcIjtcclxuaW1wb3J0IGRpc3BsYXlNZW51IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IGRpc3BsYXlDb250YWN0IGZyb20gXCIuL2NvbnRhY3RcIjtcclxuaW1wb3J0IHNldFVuZGVybGluZSBmcm9tIFwiLi9uYXZUYWJcIjtcclxuXHJcbmRpc3BsYXlOYXYoKTtcclxuZGlzcGxheUhvbWUoKTtcclxuXHJcbmNvbnN0IHN0YXJ0ID0gKGN1cnJlbnRUYWIpID0+IHtcclxuICBjb25zdCBob21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob21lXCIpO1xyXG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpXHJcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0JylcclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xyXG4gIFxyXG4gIGNvbnN0IHJlc2V0RGlzcGxheSA9ICgpID0+IHtcclxuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gXCJcIjtcclxuICB9O1xyXG4gIFxyXG4gIGhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIHJlc2V0RGlzcGxheSgpO1xyXG4gICAgZGlzcGxheU5hdigpO1xyXG4gICAgZGlzcGxheUhvbWUoKTtcclxuICAgIHN0YXJ0KCdob21lJyk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgbWVudUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlc2V0RGlzcGxheSgpO1xyXG4gICAgZGlzcGxheU5hdigpO1xyXG4gICAgZGlzcGxheU1lbnUoKTtcclxuICAgIHN0YXJ0KCdtZW51Jyk7XHJcbiAgfSlcclxuXHJcbiAgY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlc2V0RGlzcGxheSgpO1xyXG4gICAgZGlzcGxheU5hdigpO1xyXG4gICAgZGlzcGxheUNvbnRhY3QoKTtcclxuICAgIHN0YXJ0KCdjb250YWN0Jyk7XHJcbiAgfSlcclxuXHJcbiAgaWYgKGN1cnJlbnRUYWIgPT09ICdob21lJykge1xyXG4gICAgc2V0VW5kZXJsaW5lKGhvbWVCdG4sIGhvbWVCdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pXHJcbiAgfVxyXG4gIGlmIChjdXJyZW50VGFiID09PSAnbWVudScpIHtcclxuICAgIHNldFVuZGVybGluZShtZW51QnRuLCBob21lQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKVxyXG4gIH1cclxuICBpZiAoY3VycmVudFRhYiA9PT0gJ2NvbnRhY3QnKSB7XHJcbiAgICBzZXRVbmRlcmxpbmUoY29udGFjdEJ0biwgaG9tZUJ0biwgbWVudUJ0biwgY29udGFjdEJ0bilcclxuICB9XHJcbn1cclxuXHJcbnN0YXJ0KCdob21lJykiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWVudSgpIHtcclxuICBjb25zdCBjb2ZmZWUgPSBbXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJpbWcvY2FwcHVjY2luby5qcGdcIixcclxuICAgICAgbmFtZTogXCJDYXBwdWNjaW5vXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBzcmM6IFwiaW1nL2FtZXJpY2Fuby5qcGdcIixcclxuICAgICAgbmFtZTogXCJBbWVyaWNhbm9cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJpbWcvZXNwcmVzc28uanBnXCIsXHJcbiAgICAgIG5hbWU6IFwiRXNwcmVzc29cIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHNyYzogXCJpbWcvbGF0dGUuanBnXCIsXHJcbiAgICAgIG5hbWU6IFwiTGF0dGVcIixcclxuICAgIH0sXHJcbiAgXTtcclxuICBjb25zdCBkZXNzZXJ0ID0gW1wiRG9udXRcIiwgXCJFcyBCdWFoXCIsIFwiUGlzYW5nIENva2xhdFwiLCBcIkNlbmRvbFwiXVxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gIGZvciAobGV0IGtvcGkgb2YgY29mZmVlICkge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgY29uc3QgcHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHByaWNlLmlubmVyVGV4dCA9ICckMy4wMCdcclxuICAgIG5hbWUuaW5uZXJUZXh0ID0ga29waS5uYW1lXHJcbiAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBrb3BpLnNyYylcclxuICAgIHByb2R1Y3QuY2xhc3NMaXN0LmFkZCgncHJvZHVjdCcpXHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaW1nLXByb2R1Y3QnKVxyXG4gICAgbmFtZS5jbGFzc0xpc3QuYWRkKCduYW1lLXByb2R1Y3QnKVxyXG4gICAgcHJpY2UuY2xhc3NMaXN0LmFkZCgncHJpY2UtcHJvZHVjdCcpXHJcbiAgICBwcm9kdWN0LmFwcGVuZChpbWcsbmFtZSxwcmljZSlcclxuICAgIG1lbnVMaXN0LmFwcGVuZChwcm9kdWN0KVxyXG4gIH1cclxuICBoMS5pbm5lclRleHQgPSAnTWVudSdcclxuICBtZW51TGlzdC5jbGFzc0xpc3QuYWRkKCdtZW51LWxpc3QnKVxyXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInLCAnbWVudScpXHJcbiAgY29udGFpbmVyLmFwcGVuZChoMSwgbWVudUxpc3QpXHJcbiAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtZW51LXNlY3Rpb24nKVxyXG4gIG1haW4uYXBwZW5kKGNvbnRhaW5lcilcclxuICBjb250ZW50LmFwcGVuZChtYWluKVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlDb250YWN0KCkge1xyXG4gIGNvbnN0IGZvcm1NYXRlcmlhbCA9IFt7XHJcbiAgICBuYW1lOiAnbmFtZScsXHJcbiAgICBsYWJlbDogJ05hbWUnLFxyXG4gICAgaW5wdXQ6ICdpbnB1dCcsXHJcbiAgICB0eXBlOiAndGV4dCdcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnZW1haWwnLFxyXG4gICAgbGFiZWw6ICdFbWFpbCcsXHJcbiAgICBpbnB1dDogJ2lucHV0JyxcclxuICAgIHR5cGU6ICdlbWFpbCdcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnbWVzc2FnZScsXHJcbiAgICBsYWJlbDogJ01lc3NhZ2UnLFxyXG4gICAgaW5wdXQ6ICd0ZXh0YXJlYScsXHJcbiAgICB0eXBlOiAndGV4dCdcclxuICB9XVxyXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKVxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2FkZHJlc3MnKVxyXG4gIGNvbnN0IGFsYW1hdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gIGNvbnN0IHRlbGVwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICBhbGFtYXQuaW5uZXJUZXh0ID0gJ/Cfjb0gTWFycyBzdHJlZXQgMjMsIExvcyBOZXZhZGEsIEZyYWNlJ1xyXG4gIHRlbGVwaG9uZS5pbm5lclRleHQgPSAn8J+TnjEyMy0xMjMtMzIxJ1xyXG4gIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsICdpbWcvcmVzdGF1cmFudC1sb2NhdGlvbi5wbmcnKVxyXG4gIGFkZHJlc3MuYXBwZW5kKGltZyxhbGFtYXQsdGVsZXBob25lKVxyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICBoMS5pbm5lclRleHQgPSAnQ29udGFjdCBVcydcclxuICBmb3JtLmFwcGVuZChoMSlcclxuICBmb3IgKGxldCBtYXRlcmlhbCBvZiBmb3JtTWF0ZXJpYWwpIHtcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG1hdGVyaWFsLmlucHV0KVxyXG4gICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBtYXRlcmlhbC5uYW1lKVxyXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gbWF0ZXJpYWwubGFiZWxcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIG1hdGVyaWFsLnR5cGUpXHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBtYXRlcmlhbC5uYW1lKVxyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIG1hdGVyaWFsLm5hbWUpXHJcbiAgICBmb3JtLmFwcGVuZChsYWJlbCwgaW5wdXQpXHJcbiAgfVxyXG4gIGJ1dHRvbi5pbm5lclRleHQgPSAnU3VibWl0J1xyXG4gIGZvcm0uYXBwZW5kKGJ1dHRvbilcclxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJywgJ2NvbnRhY3QnKVxyXG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1zZWN0aW9uJylcclxuICBjb250YWluZXIuYXBwZW5kKGFkZHJlc3MsZm9ybSlcclxuICBtYWluLmFwcGVuZChjb250YWluZXIpXHJcbiAgY29udGVudC5hcHBlbmQobWFpbilcclxuICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJylcclxuICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAnMzAnKVxyXG4gIHRleHRhcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICcxMCcpXHJcbn0iXSwibmFtZXMiOlsiZGlzcGxheU5hdiIsImNvbnRlbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVhZGVyIiwiY3JlYXRlRWxlbWVudCIsImNvbnRhaW5lciIsIm5hdiIsInVsIiwibGkxIiwibGkyIiwibGkzIiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiZGlzcGxheUhvbWUiLCJtYWluIiwiaDEiLCJwIiwic2V0VW5kZXJsaW5lIiwiY3VycmVudFRhYiIsImFsbEJ0biIsImJ0biIsInJlbW92ZSIsInJlbW92ZVVuZGVybGluZSIsImFkZFVuZGVybGluZSIsInN0YXJ0IiwiaG9tZUJ0biIsInF1ZXJ5U2VsZWN0b3IiLCJtZW51QnRuIiwiY29udGFjdEJ0biIsInJlc2V0RGlzcGxheSIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb2ZmZWUiLCJzcmMiLCJuYW1lIiwibWVudUxpc3QiLCJrb3BpIiwicHJvZHVjdCIsImltZyIsInByaWNlIiwic2V0QXR0cmlidXRlIiwiZGlzcGxheU1lbnUiLCJmb3JtTWF0ZXJpYWwiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsImFkZHJlc3MiLCJhbGFtYXQiLCJ0ZWxlcGhvbmUiLCJidXR0b24iLCJmb3JtIiwibWF0ZXJpYWwiLCJ0ZXh0YXJlYSIsImRpc3BsYXlDb250YWN0Il0sInNvdXJjZVJvb3QiOiIifQ==