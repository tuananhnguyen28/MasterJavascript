// ẩn nội dung của các tab không được click

// lấy các phần tử button
const navtabBtns = document.querySelectorAll('.navtab-btn')

// lấy các phần tử chứa content
const tabContentItems = document.querySelectorAll('.tab-content-item')

navtabBtns.forEach(btn => {
  btn.addEventListener('click', event => {
    // Active Button
    navtabBtns.forEach(_btn => _btn.classList.remove('active'))
    event.target.classList.add('active')

    // Active Tab Content Item
    tabContentItems.forEach(_btn => _btn.classList.remove('active'))
    document.querySelector(`.tab-content-item[data-tab='${event.target.id}']`).classList.add('active')
  })
})