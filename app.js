/*
  Mouse Event: 
    - button: mặc định type là submit nên sẽ refresh trang khi click vào button
    - khắc phục: chuyển type = "button"
*/

// Dùng click sự kiện với button kiểu 'button'
document.getElementById('add1').addEventListener('click', event => {
  console.log(event.clientX, event.clientY)  // event là một object
  // client X, client Y: tọa độ X, Y và hệ quy chiếu là cửa sổ window
  // offsetX, offsetY  : tọa độ X, Y và hệ quy chiếu chính là element sau khi click
  // target: chính là element sau khi click
  event.target.className = "btn btn-success"

  // Lấy giá trị từ ô input
  const value = document.getElementById('name').value // giá trị luôn là string
  console.log('Giá trị của ô input: ', value)

  // Ứng dụng thêm từng phần tử vào List 
  const rowResult = document.createElement('div')
  rowResult.className = 'card mb-3 p-2'
  rowResult.textContent = value
  document.querySelector('.list').appendChild(rowResult)
})


// Dùng click sự kiện với button là kiểu 'submit' -> không refresh lại trang và chỉ hoạt động trên form
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  const value2 = document.getElementById('name').value
  const rowResult2 = document.createElement('div')
  rowResult2.className = 'card mb-3 p-2'
  rowResult2.textContent = value2
  document.querySelector('.list').appendChild(rowResult2)
})


// Dùng double click sự kiện
document.getElementById('add2').addEventListener('dblclick', event => {
  const value3 = document.getElementById('name').value
  const rowResult3 = document.createElement('div')
  rowResult3.className = 'card mb-3 p-2'
  rowResult3.textContent = value3
  document.querySelector('.list').appendChild(rowResult3)
})


// Áp dụng Mouse Event bằng cách gọi function javascript trong thẻ element
function handleMouseOver() {
  document.getElementById('add4').className = "btn btn-danger"
}
function handleMouseOut() {
  document.getElementById('add4').className = "btn btn-primary"
}