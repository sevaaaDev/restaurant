export default function displayMenu() {
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