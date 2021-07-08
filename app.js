// 1. Toán tử toán hạng
let a1 = 3
let b1 = 2
console.log(a1 ** b1) // a^b = 2^3 = 9

let a2 = 1
let b2 = 1
console.log('a2++ ', a2++) // return về kết quả trước khi +
console.log('++b2 ', ++b2) // return về kết quả sau khi +

// Lưu ý:
// let a = 3++ // sai vì 3++ tương đương 3 = 3 + 1, không thể gán giá trị cho một số

// 2. Toán tử gán
let a3 = 1
a3 += 2 // a3 = 1 + 2 = 3
console.log(a3)
let b3 = 2
b3 *= 2 // b3 = 2 * 2 = 4
console.log(b3)
let c3 = 2
c3 **= 3 // c3 = 2 ^ 3 = 8
console.log(c3)

// 3. Toán tử so sánh
console.log(1 == '1') // true: bằng nhau về giá trị
console.log(1 === '1') // false: bằng nhau về kiểu
console.log(1 != '1') // false: không bằng giá trị (thực chất nó bằng nhau về giá trị)
console.log(1 !== '1') // true: khác nhau về kiểu

// Toán tử ba ngôi
let check = 4
let a4 = check > 4 ? 'Đúng' : 'Sai'
console.log(a4)

// 4. Toán tử logic

// Toán tử AND
console.log(true && true) // chỉ 'true' khi cả 2 đều đúng, còn lại đều 'false'

// Toán tử OR
console.log(false || false) // chỉ 'false' khi cả 2 đều sai, còn lại đều 'true'

// Ví dụ nâng cao
console.log(true || false || (false && true)) // true || false -> true

// Kết hợp với Truthy và Falsy
console.log(0 && 2) // AND chỉ quan tâm thằng 'false', khi gặp false thì dừng lại
console.log(0 || 2 || 1) // OR chỉ quan tâm thằng 'true', khi gặp true thì sẽ dừng lại
console.log(!0) // true
console.log(!'') // phủ định của một chuỗi rỗng -> true
console.log(!'' && 3) // AND: do tìm false, 3 không phải false và là cuối cùng, nên dừng lại và lấy giá trị này
console.log(!0 && 0 && 1) // AND: do 0 là false, nên sẽ lấy giá trị này

// Lưu ý: có thể tham khảo thêm về toán tử ở website bên dưới
// https://en.wikipedia.org/wiki/Truth_table