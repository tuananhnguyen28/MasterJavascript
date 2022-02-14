// 1. Create new item
const ItemController = (function() {
  function Item(name, amount) {
    this.name = name
    this.amount = amount
    this.id = new Date().toISOString()
  }
  function createItem(name, amount) {
    return new Item(name, amount)
  }
  return {
    createItem
  }
})()

// Create new HTML element on UI browser
const UIController = (function() {
  function add(item) {
    const card = document.createElement('div')
    card.className = 'card p-2 flex-row align-items-center justify-content-between mb-3'
    card.innerHTML = `
    <p>
      ${item.name}:
      <strong>${item.amount}</strong>
    </p>
    <button class="btn btn-small btn-info" data-id="${item.id}">
      Sửa
    </button>
    `
    document.querySelector('.list').appendChild(card)
  }
  function renderAll() {
    const list = LSController.getList()
    document.querySelector('.list').innerHTML = ''
    list.forEach(item => {
      add(item)
    })
  }
  return {
    add,
    renderAll
  }
})()

// Save the data into Local Storage on browser
const LSController = (function() {
  function add(item) {
    const list = getList()
    list.push(item)
    localStorage.setItem('list', JSON.stringify(list))
  }
  function getList() {
    return JSON.parse(localStorage.getItem('list')) || []
  }
  return {
    add,
    getList
  }
})()

const App = (function() {
  // Listen 'click' event
  function init() { 
    // Render All
    UIController.renderAll()

    document.querySelector('form').addEventListener('submit', 
    event => {
      event.preventDefault()
      const name = document.getElementById('name').value
      const amount = document.getElementById('amount').value
      const item = ItemController.createItem(name, amount)
      UIController.add(item)
      LSController.add(item)
    })
  }
  return {
    init
  }
})()

window.addEventListener('DOMContentLoaded', App.init)