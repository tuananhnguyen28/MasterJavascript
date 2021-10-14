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