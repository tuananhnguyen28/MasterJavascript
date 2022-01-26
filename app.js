/*
  - Một Symbol đại diện cho một đinh dang duy nhất
  - Giá trị có thể được tạo bằng cách sử dụng Symbol()  (1)
  - Có thể truyền một đoạn mô tả vào Symbol (gọi là tên Symbol) (2)
  - Các symbol được cam kết duy nhất  (3)
  - Symbol không tự động chuyển sang string (4)
  - Có thể lấy mô tả của symbol bằng cách sử dụng phương thức 'description' (5)
*/

// (1)
let name1 = Symbol()
console.log('name1:', name1)

// (2)
let name2 = Symbol('name2')
console.log('name2:', name2)

// (3)
let id1 = Symbol('id')
let id2 = Symbol('id2')
console.log(id1 === id2)  // false

// (4)
const id3 = Symbol()
// alert(id3)  
// fix
// alert(id3.toString())

const sayHello = Symbol('hello the symbol...')
console.log(sayHello.description) // hello the symbol...

/*
  Thuộc tính "ẩn": 
    - Symnol cho phép tạo những thuộc tính ẩn của object
    - Các thành phần khác không thuộc code chúng ta không thể truy cập hoặc ghi đè
*/
// Example
const initState = () => ({ id: 1 })
const state = initState()
state.id = 2
console.log('The id after changing:', state.id)

// // How to resolve:
// const character = {
//   [Symbol('heath')]: 100
// }
// console.log('Cannot access or override when using Symbol:', character[heath])

/*
  Symbol bị bỏ qua ở for...in: thuộc tính Symbol không tham gia vòng lặp for...in
*/
let user = {
  name: 'Tuan', 
  age: 29,
  [Symbol('id')]: 123
}
for(const key in user) { console.log(key) }
console.log(Object.keys(user))  // (2) ['name', 'age']
console.log(Object.values(user))  // (2) ['Tuan', 29]
console.log(Object.entries(user)) // (2) [Array(2), Array(2)]

// Khi dùng Object.assign -> không bỏ qua Symbol
const cloneUser = Object.assign(user)
console.log('Using Object.assign:', cloneUser)

/*
  Global symbol -> Symbol.for(key): return 1 symbol bằng tên
  Trong trường hợp ta muốn những symbol cùng tên thì cùng giá trị, chúng ta
  có thể tạo symbol trước và truy cập sau (dùng global symbol registry)
*/
// đọc từ global registry
let id = Symbol.for('id')
// đọc lại lần nữa, có thể từ một nơi nào đó trong code
let idAgain = Symbol.for('id')
// cùng một symbol
console.log(id === idAgain)

/*
  - Symbol.keyFor: có một phương thức ngược lại là Symbol.keyFor(sym): return 
  một tên bởi global symbol (6)
  - Symbol.keyFor: chỉ hoạt động với global symbol registry, không hoạt động
  với symbol thông thường, nếu không nó sẽ không tìm thấy và return 'undefined' (7)
  - Bất cứ symbol nào cũng có thuộc tính description (8)
*/
// (6)
// get symbol bằng tên
let sym = Symbol.for('_id')
let sym2 = Symbol.for('__id')

// get tên bằng symbol
console.log(Symbol.keyFor(sym)) // _id
console.log(Symbol.keyFor(sym2))  // __id

// (7)
let normalId = Symbol('_id')
console.log(Symbol.keyFor(normalId))  // undefined

// (8)
console.log('Any symbol still have description:', sym2.description) // __id

/*
  Hệ thống Symbol và Tóm lại (xem thêm video 11-3-Symbols)
*/