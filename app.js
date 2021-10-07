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


/*
    2. Các prototype được dựng sẵn khác: như Array, Date, Function
        - Khi chúng ta tạo một array [1, 2, 3] mặc định new Array sẽ được tạo
        - Vì thế array.prototype sẽ trở thành prototype của nó
        - Các prototype được xây dựng sẵn đều có Object.prototype 
        (mọi thứ đều kế thừa từ object)
*/
const arr = [1, 2, 3]
console.log('----------------Pre-built Prototyes----------------')
console.log('arr', arr)
// __proto__ giống với [[Prototype]]
console.log('arr.__proto__ === Array.prototype:', arr.__proto__ === Array.prototype)    // true
console.log('arr.__proto__.__proto__ === Object.prototype:', arr.__proto__.__proto__ === Object.prototype)   // true

// Một số phương thức trong prototype có thể bị trùng nhau
// Ví dụ: Array.prototype có toString(), nhưng Object.prototype cũng có toString
// Trong trường hợp này, nó sẽ chọn cái gần hơn
let arr_2 = [4, 5, 6]
let newArr_2 = new Array(4, 5, 6)
console.log(arr_2.toString()) // Kết quả của Array.prototype.toString()