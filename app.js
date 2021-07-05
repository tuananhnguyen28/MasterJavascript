// 1. Kiểu dữ liệu (Data type)

// Kiểu nguyên thủy (Primitive)
// Number, String, Boolean, Null, Undefined, Symbol (ES6)
// null: rỗng về object, undefined: không tồn tại giá trị, kiểu hư vô

// Sự khác nhau giữa null và undefined
// null và undefined bằng nhau về mặt giá trị nhưng khác nhau về kiểu
typeof undefined // undefined
typeof null // object, dù là object nhưng vẫn xếp vào kiểu nguyên thủy
null === undefined // false
null == undefined // true

// undefined xuất hiện ở
// Biến chưa khởi tạo giá trị
let a
console.log(a)
// Thuộc tính không tồn tại trong object
let people = {name: 'Tuan'}
console.log(people.age)
// Thiếu param
function sum(a, b) {
  console.log(b)
}
sum(1) // ở đây truyền a nhưng không truyền b

// function không return hoặc return undefined
function handle() {
  alert('Tuan')
  //return undefined
}
console.log(handle())

// null nghĩa là rỗng, giá trị của nó là rỗng, thường được dùng cho object mà không có giá trị mong đợi
let aa1 = ''
aa2 = null
console.log(typeof aa1) // string
console.log(typeof aa2) // object
console.log(aa1 === aa2) // false (không cùng kiểu)
console.log(aa1 == aa2) // false (không cùng giá trị)

// Không thể truy cập được thuộc tính của null và undefined
function getName(value) {
  return value.name
}
//getName(null)
//getName(undefined)

// Symbol (ES6)
let sym = Symbol() // 1 constructor có sẵn trong javascript
console.log(sym)