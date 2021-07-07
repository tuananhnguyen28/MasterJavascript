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


// 2. Kiểu object

// Plain Object
var person = { name: 'Tuan', age: 28 }

// Array
var products = ['Iphone', 'Samsung', 'Xiaomi']

// Regular Expression (được coi là objecy)
var regex = /ab+c/

// function (cũng được coi là một object)
function sum(a, b) {
  return a + b
}

// Nhưng kiểu của function là function, không phải object
console.log(typeof sum === 'function')

// null không được coi là object mặc dù kiểu của nó là object
console.log(typeof null === 'object')

// Có thể tạo một object cho boolean, number, string bằng các wrapper object như String, Number, Boolean
var str = new String('Tuan')
console.log(typeof str)
console.log(str)
console.log(str.valueOf())
console.log(str === 'Tuan') // false: bởi vì str là một object kiểu String
var num = new Number(1993)
var b = new Boolean(true)

/*
  Các constructor String, Number, Boolean có thể đóng vai trò như một function
  để chuyển đổi về giá trị nguyên thuỷ (hay còn gọi là ép kiểu)
*/
let valString, valNumber, valBoolean
valString = String(1993) // ép về kiểu string
console.log(valString)
valNumber = Number(1993)
console.log(valNumber)
valBoolean = Boolean(0)
console.log(valBoolean)
// Boolean(0) -> false, Boolean(-1) -> true, Boolean([]) -> true, Boolean({}) -> true


// 3. Tham trị và tham chiếu

// 3.1 Tham trị đối với primitive data type
let _a1 = 1
let _b1 = _a1
_b1 = 2
console.log('_a1 =', _a1)
console.log('_b1 =', _b1)

let _name = 'Tuan'
const change = (value) => {
  value = 'Txt'
}
change(_name)
console.log('_name:', _name) // Tuan

// 3.2 Tham chiếu đối với object (xem kết hợp với video clip)
let cars1 = ['BMW', 'Mercedes']
let cars2 = cars1
cars2 = ['Toyota', 'Hyunday']
console.log(cars1) // ['BMW', 'Mercedes']
console.log(cars2) // ['Toyota', 'Hyunday']

let objectPerson1 = { name: 'Tuan', age: 28 }
let objectPerson2 = objectPerson1
objectPerson2.age = 25
console.log(objectPerson1) // { name: 'Tuan', age: 25 }
console.log(objectPerson2) // { name: 'Tuan', age: 25 }

// 4. Truthy và Falsy

// Truthy
let truthyVal
truthyVal = '1'
console.log(Boolean(truthyVal))
// '1' -> true, '0' -> true, '123' -> true, 1 -> true, {} -> true, [] -> true, {name:'Tuan'} -> true

// Falsy
let falsyVal
falsyVal = ''
console.log(Boolean(falsyVal))
// '' -> false, 0 -> false, null -> false, undefined -> false, NaN -> false