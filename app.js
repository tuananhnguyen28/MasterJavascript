// Tạo element bằng javascript
const card = document.createElement('div')
// card.className = 'card p-2 mb-3'
// nếu không dùng className thì dùng method classList
card.classList.add('card', 'p-2', 'mb-3')
card.setAttribute('id', 'tuan') // set id cho thẻ div
card.innerHTML = '<strong>Tôi tên là Tuấn!</strong>'



// Để tạo được element mới, thêm element vào cây DOM (ở đây là container)
const container = document.querySelector('.container')
container.appendChild(card) // thêm div element sau div element đầu tiên