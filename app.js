// Tìm một element bằng id
const element = document.getElementById('name')
console.log(element)  // typeof: object
element.style.color = "blue"
console.log(element.getAttribute('type')) // lấy giá trị của thuộc tính
// element.remove() // xóa element textbox


// Tìm một element bằng selector
const label = document.querySelector('form label') // chỉ lấy phần tử đầu tiên (nếu có 2 label)
label.textContent = 'Tuổi'  // hoặc bằng với 'innerText'