export default function displayNav() {
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
  ul.append(li1, li2, li3)
  nav.append(ul)
  container.classList.add('container', 'nav')
  container.append(nav)
  header.append(container)
  content.append(header)
}
