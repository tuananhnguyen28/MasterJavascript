/* Cú pháp class căn bản */

// Cú pháp class
class User {
  constructor(name) {
    this.name = name
  }
  sayHi() {
    alert(this.name)
  }
}

// Tạo mới 1 object
const user = new User('Tuan')
console.log('----------Class Syntax----------')
console.log(user)

/* 
  Lưu ý: Khi new User('Tuan') được gọi:
    - 1 object mới được tạo
    - constructor chạy với tham số được đưa vào và gán this.name vào nó
    - Không có dấu phẩy giữa các phương thức
    Sau đó chúng ta có thể gọi tất cả các ph/thức như là user.sayHi()
*/

// Class là một function
console.log(typeof User)

// Là phương thức constructor
console.log(User === User.prototype.constructor)  // true

// Các ph/thức nằm bên trong các prototype
console.log(User.prototype.sayHi) // console.log(this.name)

// Có chính xác 2 methods trong prototype
console.log(Object.getOwnPropertyNames(User.prototype)) // constructor, sayHi


/*
  Không chỉ là một syntactic sugar (dễ đọc hơn)
*/
function Employee(name) {
  this.name = name
}
Employee.prototype.sayHi = function() {
  console.log('Employee say hi:', this.name)
}
const employee = new Employee('Tuan employee')
employee.sayHi()
console.log(employee)


// Với một function, ta ko cần dùng từ khóa new để gọi nó <-> còn class thì ko được làm như vậy
function House(color) {
  this.color = color
}
console.log('Gọi function không dùng từ khóa new')
House() // no error

class House_Error {
  constructor(color) {
    this.color = color
  }
  sayHi() {
    console.log(`This is ${this.color} of house.`)
  }
}
// House_Error() // Error


// Class Expression
let ClassExpression = class {
  sayHi() {
    console.log('Hello and say hi for class expression.')
  }
}
new ClassExpression().sayHi()

// Nếu một class expression có một tên, nó chỉ hiện bên trong class, không thể sử dụng bên ngoài class
let ClassExpression2 = class MyClassExpression2 {
  sayHi() {
    console.log(MyClassExpression2) 
  }
}
// Nhưng có thể sử dụng bằng cách dùng new
new ClassExpression2().sayHi()

// Cách tạo một class khác thông qua 1 function và return về 1 class
function Motobike_Function() {
  return class {
    sayHi() {
      console.log('This is a class from a function')
    }
  }
}
let Motobike_Class = Motobike_Function() // Cũng là Class Expression
new Motobike_Class().sayHi()
console.log(Motobike_Class)


// Getter/Setter
class Bird {
  constructor(name) {
    // when creating new object of class and then will run constructor and invoke the setter
    this.name = name
  }
  get name() {
    return this._name
  }
  set name(value) {
    if(value.length < 4) {
      console.log('The name is too short!')
      return
    }
    this._name = value
  }
}
let bird1 = new Bird('Tuan')
console.log('-----Getter/Setter-----')
console.log(bird1.name)  // Tuan
let bird2 = new Bird('')
console.log(bird2.name)


/* Class fields - các trường trong class
    Trước đó thì các class chỉ có các phương thức, class fields cho phép thêm bất kỳ thuộc tính
    Đối tượng có class field giống như tạo trong constructor function
*/
class Computer {
  nameComputer = 'Lenovo'
  constructor() {
    this.brand = 'Thinkpad'
    this.color = 'black'
  }
  startSystem() { // được xét trong Prototype/Computer.Prototype
    console.log(`The computer ${this.nameComputer} is starting Windows 11.`)
  }
}
const computer = new Computer()
console.log('-----Class fields-----')
console.log(computer)
computer.startSystem()

// // Các class field chỉ được set trên cá nhân của object, không phải User.prototype
// console.log(computer.prototype.nameComputer)  // undefined