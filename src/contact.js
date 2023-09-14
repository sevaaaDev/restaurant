export default function displayContact() {
  const formMaterial = [{
    name: 'name',
    label: 'Name',
    input: 'input',
    type: 'text'
  }, {
    name: 'email',
    label: 'Email',
    input: 'input',
    type: 'email'
  }, {
    name: 'message',
    label: 'Message',
    input: 'textarea',
    type: 'text'
  }]
  const content = document.getElementById('content')
  const main = document.createElement('main')
  const container = document.createElement('div')
  const h1 = document.createElement('h1')
  const address = document.createElement('address')
  const alamat = document.createElement('p')
  const telephone = document.createElement('p')
  const img = document.createElement('img')
  const button = document.createElement('button')
  alamat.innerText = '🍽 Mars street 23, Los Nevada, France'
  telephone.innerText = '📞123-123-321'
  img.setAttribute('src', 'img/restaurant-location.png')
  address.append(img,alamat,telephone)
  const form = document.createElement('form')
  h1.innerText = 'Contact Us'
  form.append(h1)
  for (let material of formMaterial) {
    const label = document.createElement('label')
    const input = document.createElement(material.input)
    label.setAttribute('for', material.name)
    label.innerText = material.label
    input.setAttribute('type', material.type)
    input.setAttribute('name', material.name)
    input.setAttribute('id', material.name)
    form.append(label, input)
  }
  button.innerText = 'Submit'
  form.append(button)
  container.classList.add('container', 'contact')
  main.classList.add('contact-section')
  container.append(address,form)
  main.append(container)
  content.append(main)
  const textarea = document.querySelector('textarea')
  textarea.setAttribute('cols', '30')
  textarea.setAttribute('rows', '10')
}