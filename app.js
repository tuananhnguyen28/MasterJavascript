/* Native Prototype
    [[Prototype]]: là một thuộc tính ẩn trong object(function) đại diện cho prototype thực tế
    __proto__: là getter/setter truy cập đến [[Prototype]]
*/

// 1. Object Prototype
// Khi tạo object bằng cú pháp {} giống như new 1 object
// Object có prototype, trong đó có phương thức là toString()
let obj1 = {}
let obj2 = new Object()
console.log('--------Object Prototype--------')
console.log('Object.prototype:', Object.prototype)
console.log('obj1:', obj1)
console.log('obj2:', obj2)
console.log('obj1.__proto__ === Object.prototype:', obj1.__proto__ === Object.prototype)    // true
console.log('obj1.__proto__.__proto__:', obj1.__proto__.__proto__)   // null
console.log('obj2.toString === Object.prototype.toString:', obj2.toString === Object.prototype.toString)    // true