// Call, apply, bind: chỉ áp dụng cho function

// 1. Call: truyền vào đối số this (object/function) và các đối số
const user = {
  print(age, location) {
    console.log(this.name + ' ' + age + ' tuổi sống tại ' + location)
  }
}
user.print(28, 'Việt Nam')
const person = { name: 'Tuan' }
console.log('----- Call -----')
user.print.call(person, 28, 'Việt Nam')

// 2. Apply: truyền vào dối số this và các đối số thông qua mảng
console.log('----- Apply -----')
user.print.apply(person, [28, 'Việt Nam'])

// 3. Bind: trả về một function mới
console.log('----- Bind ----- ')
// C1
const newPrint1 = user.print.bind(person, 28, 'Việt Nam')
newPrint1()
// C2
const newPrint2 = user.print.bind(person)
newPrint2(28, 'Việt Nam')
// C3
const newPrint3 = user.print.bind(person, 28, 'Việt Nam')()

// Một ví dụ khác về bind: truy xuất đến một thuộc tính của object từ bên trong một function
// C1
const people1 = {
  lname: 'Nguyen 1',
  deplayPrint() { 
    setTimeout( // callback function nằm trong normal function
      function() {
        console.log(this.lname)
    }.bind(this), 1000)
  }
}
people1.deplayPrint()
// C2
const people2 = {
  lname: 'Nguyen 2',
  deplayPrint() {
    function handle() {
      console.log(this.lname)
    }
    setTimeout(handle.bind(this), 2000)
  }
}
people2.deplayPrint()

// Common example
let employee = {
  name: 'Tuan',
  age: 28
}
function say(text1, text2) {
  console.log(text1 + ' ' +  text2 + ' ' + this.name + ' ' + this.age + ' tuổi')
}
say.call(employee, 'Xin', 'chào')
say.apply(employee, ['Xin', 'chào'])
let newSay = say.bind(employee, 'Xin', 'chào')
newSay()