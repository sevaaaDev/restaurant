export default function displayHome() {
  const content = document.getElementById('content')
  const main = document.createElement('main')
  const container = document.createElement('div')
  const h1 = document.createElement('h1')
  const br = document.createElement('br')
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