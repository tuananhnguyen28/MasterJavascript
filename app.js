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
    renderTotal()
    // Clear data input when creating item successfully
    document.getElementById('name').value = ''
    document.getElementById('amount').value = ''
  }
  function renderAll() {
    const list = LSController.getList()
    document.querySelector('.list').innerHTML = ''
    list.forEach(item => {
      add(item)
    })
    renderTotal()
  }
  // While data rendering, calculate the total cost
  function renderTotal() {
    document.getElementById('total').innerHTML = `Tổng chi phí: ${LSController.getTotal()}`
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
  function getTotal() {
    return getList().reduce((result, current) => {
      return result + Number(current.amount)
    }, 0)
  }
  return {
    add,
    getList,
    getTotal
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
      // The first, adding the data into Local Storage, then show data on UI
      LSController.add(item)
      UIController.add(item)
    })
  }
  return {
    init
  }
})()

window.addEventListener('DOMContentLoaded', App.init)