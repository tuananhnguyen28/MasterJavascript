// Add sự kiện submit form
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  const name = document.getElementById('name').value
  const item = {
    id: new Date().toISOString(),
    name: name.trim()
  }
  addItemToLS(item)
  addItemToUI(item)
  document.getElementById('name').value = ''
})

// Add new item
const addItemToUI = (item) => {
  const card = document.createElement('div')
  card.className = 'card p-2 flex-row justify-content-between align-items-center mb-3'
  card.innerHTML = `
    <span>${item.name}</span>
    <button class="btn btn-sm btn-danger btn-remove" data-id=${item.id}>Remove</button>
  `
  document.querySelector('.list').appendChild(card)
}

const addItemToLS = (item) => {
  // Khi add thành công trên UI thì đồng thời thêm vào storage
  const list = getList()
  list.push(item)
  localStorage.setItem('list', JSON.stringify(list))
}

// Remove item from local storage
const removeItemFromLS = id => {
  const list = getList()
  const index = list.findIndex(item => item.id === id)
  list.splice(index, 1)
  // save into local storage
  localStorage.setItem('list', JSON.stringify(list))
}

// Lưu ý: thẻ html ảo không lắng nghe sự kiện vì xuất hiện sau khi script được chạy

// Listen remove
document.querySelector('.list').addEventListener('click', event => {
  if(event.target.classList.contains('btn-remove')) {
    const name = event.target.previousElementSibling.textContent
    const isConfirmed = confirm(`Bạn có muốn xóa item '${name}'?`)
    if(isConfirmed) {
      const card = event.target.parentElement
      const id = event.target.dataset.id
      // Remove from UI
      card.remove()
      // Remove from LS
      removeItemFromLS(id)
    }
  }
})

// Remove all
document.getElementById('btn-remove-all').addEventListener
('click', () => {
  const isConfirmed = confirm('Bạn có muốn xóa tất cả item?')
  if(isConfirmed) {
    // Xóa item trong list
    document.querySelector('.list').innerHTML = ''
    // Xóa item trong local storage
    localStorage.removeItem('list')
  }
})

// Get List from local storage
const getList = () => JSON.parse(localStorage.getItem('list')) || []

// Sự kiện render item (lưu item) hiện tại mỗi lần load lại trang
const init = () => {
  const list = getList()
  list.forEach(item => {
    addItemToUI(item)
  })
}

init()

// Filter
document.getElementById('filter').addEventListener('keyup', event => {
  const value = event.target.value.trim()
  const list = getList()
  const filteredList = list.filter(item => {
    return item.name.toLowerCase().includes(value.toLowerCase())
  })
  // Xóa tất cả item hiện tại trên UI
  document.querySelector('.list').innerHTML = ''
  filteredList.forEach(item => {
    // Chỉ hiển thị kết item được filter
    addItemToUI(item)
  })
})