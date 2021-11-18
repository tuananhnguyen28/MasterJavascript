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