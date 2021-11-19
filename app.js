// Prototype

function Student(name, birthday) {
  this.name = name
  this.birthday = birthday
  this.id = new Date().toISOString()
}

// Hàm constructor function (chuyên cho việc tạo UI)
function UI() {}

UI.prototype.add = function (student) {
  const store = new Store()
  const students = store.getStudents()
  const tr =  document.createElement('tr')
  tr.innerHTML = `
    <td>${students.length + 1}</td>
    <td>${student.name}</td>
    <td>${student.birthday}</td>
    <td> 
      <button class="btn btn-sm btn-danger btn-remove" data-id="${student.id}">Xóa</button>
    </td>
  `
  document.querySelector('table tbody').appendChild(tr)

  // Clear form data after adding succeed
  document.getElementById('name').value = ''
  document.getElementById('birthday').value = ''
}

// Render all data (after loading completely all HTML coding)
UI.prototype.renderAll = function() {
  const store = new Store()
  const students = store.getStudents()
  let html = students.reduce((result, current, currentIndex) => {
    return result = `
      <tr>
        <td>${currentIndex + 1}</td>
        <td>${current.name}</td>
        <td>${current.birthday}</td>
        <td>
          <button class="btn btn-sm btn-danger btn-remove" data-id="${current.id}">Xóa</button>
        </td>
      </tr>
    `
  }, '')
  document.querySelector('table tbody').innerHTML = html
}

UI.prototype.clear = function() {
  document.querySelector('table tbody').innerHTML = ''
}

// Hàm trả về danh sách các students
function Store() {}
// Lấy sinh viên
Store.prototype.getStudents = function() {
  return JSON.parse(localStorage.getItem('students')) || []
}
// Tạo mới sinh viên
Store.prototype.add = function (student) {
  const students = this.getStudents()
  students.push(student)
  localStorage.setItem('students', JSON.stringify(students))
}

document.querySelector('form').addEventListener('submit', event => {
  const store = new Store()
  const ui = new UI()
  event.preventDefault()
  const name = document.getElementById('name').value
  const birthday = document.getElementById('birthday').value
  const student = new Student(name, birthday)
  ui.add(student)
  store.add(student)
})

// Sau khi load hết HTML, sẽ chạy hàm này để add từng phần tử vào UI, không mất khi reload page
window.addEventListener('DOMContentLoaded', () => {
  const ui = new UI()
  ui.renderAll()
})