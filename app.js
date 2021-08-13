// Xóa element bằng cách DOM
const card = document.querySelector('.card')
// card.remove()  // xóa element


// Thay thế oldHeading thành newHeading (đối với class)
const container = document.querySelector('.container')
const _alert = document.createElement('div')
// _alert.className = 'alert alert-success'
_alert.classList.add('alert', 'alert-warning')
_alert.textContent = 'Thành công'
container.replaceChild(_alert, card)


// Đối với id
_alert.id = 'my-id'
// hoặc dùng cách khác
_alert.setAttribute('id', 'my-id-2')  // set id
_alert.setAttribute('data-id', '10')
_alert.removeAttribute('data-id')
_alert.getAttribute('id') // return về "my-id-2"
_alert.getAttribute('class') // "alert alert-warning" // đồng nghĩ với _alert.className
