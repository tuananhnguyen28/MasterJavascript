// Prototype methods, objects without proto

/* Các phương thức hiện đại để setup một prototype (__proto_bị loại bỏ ở các new browsers)
    - Object.create(proto, [descriptors]): tạo một object rỗng với việc cung cấp 
    proto như [[Prototype]] (1) và tuỳ chọn là các bộ mô tả thuộc tính (property descriptors) (2)
    - Object.getPrototypeOf(obj): return về [[Prototype]] của obj (3)
    - Object.setPrototypeOf(obj, pro): set [[Prototype]] của obj thành proto (4)
    => Chúng nên được sử dụng thay vì __proto__
*/

// (1)
let animal = {
  eats: true
}
// Tạo một object mới với animal như 1 prootype
let rabbit = Object.create(animal)
console.log('----------Object.create----------')
console.log(rabbit)
console.log(rabbit.eats)  // true
// (3)
console.log(Object.getPrototypeOf(rabbit) === animal) // true
// // (4)
// Object.setPrototypeOf(rabbit, {}) // thay đổi prototype của rabbit thành {}
// console.log(rabbit) // {}


// (2)
let car = {
  runs: true
}
let childCar = Object.create(car, {
  fly: {
    value: false,
    writable: false,
    enumerable: true,
    configurable: true
  }
})
console.log('-----Object.create(proto, [descriptors])-----')
console.log(childCar)


/*
  - Các bộ mô tả thì có cùng cấu trúc, có thể sử dụng Object.create để tạo một object clone 
  thay vì dùng for...in:
  - Điều này có thể copy chính xác một obj, bao gồm tất cả các thuộc tính: có thể liệt kê và 
  không liệt kê, thuộc tính dữ liệu và setter/getter - mọi thứ, và với chính xác [[Prototype]]
*/
let originalObj = {
  color: 'black',
  weight: 100,
  height: 90
}
let clone = Object.create(
  Object.getPrototypeOf(originalObj),
  Object.getOwnPropertyDescriptors(originalObj)
)
console.log('----------Clone new object by using Object.create----------')
console.log('Clone originalObj object:', clone)


/*
  Tóm tắt lịch sử: tham khảo trong clip
*/


/*
  Nguyên nhân:
    __proto__: là thuộc tính đặc biệt, chỉ nên là 1 object hoặc null, không thể là 1 string
    Không nên gán value cho object, vì prototype có thể bị thay đổi
*/
// let obj = {}
// let key = prompt("Nhập key", '__proto__')
// obj[key] = 'Giá trị nào đó'
// console.log(obj[key])
// console.log(obj)


// Cách khắc phục vấn đề trên: dùng Very plain object/Base object hoặc dùng thông qua Map object
// Do object này không tồn tại __proto__ -> có thể set value cho __proto__
let obj2 = Object.create(null)
console.log('obj2:', obj2)
let obj3 = Object.create(null)
let key = prompt('Nhập key', '__proto__')
obj3[key] = 'Giá trị obj3 nào đó'
console.log(obj3[key]);


// Nhược điểm của các object như trên là thiếu các phương thức có sẵn, ví dụ toString
// Để ý rằng, hầu hết các phương thức object liên quan kiểu Object.Something(...) như Object.keys(obj)
// chúng thuộc về Object lớn hơn, nên vẫn hoạt động bình thường