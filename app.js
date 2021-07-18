// Số - Number

// Số nguyên trong javascript có độ chính xác 15 chữ số
var x = 999999999999999    // x sẽ là 999999999999999
var y = 9999999999999999   // y sẽ là 1000000000000000
console.log(x === 999999999999999)  // true
console.log(y === 1000000000000000) // false (vì đã làm tròn lên 16 số)

// Giới hạn của số thập phân là 17 chữ số
var z = 0.1 + 0.2 // 0.30000000000000004

// Để khắc phục số thập phân lẻ

// C1: Nhân nó thành số nguyên rồi thực hiện
var z_fixed1 = (0.1 * 10 + 0.2 * 10) / 10 // x sẽ bằng 0.3
console.log('C1: = ' + z_fixed1)

// C2: Làm tròn đến hàng thập phân cho phép
let a = 0.1 + 0.2
console.log('C2: = ' + Number(a.toFixed(1)))

// Ví dụ chung:
function RutTien(lan1, lan2) {
    let soDu = 0.3
    if(Number((lan1 + lan2).toFixed(1)) > soDu)
        console.log('Số tiền vượt quá số dư!')
    else {
        console.log('Có thể rút tiền!')
    }
}
RutTien(0.2, 0.1)

// Nếu cộng chuỗi với một số -> kết quả sẽ là string
var x1 = '10'
var y1 = 20
console.log('x1 + y1 =', x1 + y1) // 1020 (string)

// NaN - Not a Number
console.log(x2 = 100 / 'Apple') // x sẽ là NaN
console.log(typeof NaN) // return 'number'
// Có thể dùng function isNaN() để kiểm tra giá trị có phải là NaN hay không
console.log(isNaN(x2))

// Infinity Number
console.log(2/0)  // Infinity
console.log(-2/0) // -Infinity

// Hexadecimal - Hệ thập lục phân
var x3 = 0xff
console.log('x =', x3)

// toString(): ép kiểu số về chuỗi
var x4 = 123
console.log('x3 is number:', x4)
console.log('x3 is string:', x4.toString())

// toFixed():
var x5 = 9.656
const y5 = Number(x5.toFixed())
console.log('y5 =', y5)
x5.toFixed(0) // return 10
x5.toFixed(1) // return 9.66


/*
    Ép kiểu về số:
    - Number(): chuyển đổi giá trị về kiểu số
    - parseInt(): chuyển đối giá trị về kiểu số nguyên
    - parseFloat(): chuyển đổi giá trị về kiểu số thực
*/
console.log(Number(true)) // return 1
console.log(parseInt('10.33')) // return 10
console.log(parseFloat('10.33')) // return 10.33