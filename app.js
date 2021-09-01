// Add sự kiện submit form
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  const name = document.getElementById('name').value
  const item = {
    id: new Date().toISOString(),
    name
  }
  addItem(item)
  document.getElementById('name').value = ''
})

// Add new item
const addItem = (item) => {
  const card = document.createElement('div')
  card.className = 'card p-2 flex-row justify-content-between align-items-center mb-3'
  card.innerHTML = `
    <span>${item.name}</span>
    <button class="btn btn-sm btn-danger" data-id=${item.id}>Remove</button>
  `
  document.querySelector('.list').appendChild(card)
}