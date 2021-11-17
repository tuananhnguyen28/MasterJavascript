// Prototype

function Student(name, birthday) {
  this.name = name
  this.birthday = birthday
  this.id = new Date().toISOString()
}

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  const name = document.getElementById('name').value
  const birthday = document.getElementById('birthday').value
  const student = new Student(name, birthday)
  console.log(student)
})