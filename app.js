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
  Lưu ý: Khi new User('Tuan') được gọi:  và
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