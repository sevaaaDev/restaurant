export default function displayMenu() {
  const coffee = [
    {
      src: "img/cappuccino.jpg",
      name: "Cappuccino",
    },
    {
      src: "img/americano.jpg",
      name: "Americano",
    },
    {
      src: "img/espresso.jpg",
      name: "Espresso",
    },
    {
      src: "img/latte.jpg",
      name: "Latte",
    },
  ];
  const dessert = ["Donut", "Es Buah", "Pisang Coklat", "Cendol"]
  const content = document.getElementById('content')
  const main = document.createElement('main')
  const container = document.createElement('div')
  const h1 = document.createElement('h1')
  const h2 = document.createElement('h2')
  const menuList = document.createElement('div')
  for (let kopi of coffee ) {
    const product = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('p')
    const price = document.createElement('p')
    price.innerText = '$3.00'
    name.innerText = kopi.name
    img.setAttribute('src', kopi.src)
    product.classList.add('product')
    img.classList.add('img-product')
    name.classList.add('name-product')
    price.classList.add('price-product')
    product.append(img,name,price)
    menuList.append(product)
  }
  h1.innerText = 'Menu'
  menuList.classList.add('menu-list')
  container.classList.add('container', 'menu')
  container.append(h1, menuList)
  main.classList.add('menu-section')
  main.append(container)
  content.append(main)
}
