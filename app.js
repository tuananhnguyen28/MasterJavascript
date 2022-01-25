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