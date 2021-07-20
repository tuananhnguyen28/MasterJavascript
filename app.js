// Chuỗi
const name1 = 'Tuan'    // single quotes
const name2 = "Tuan"    // double quotes

// Một số phương thức hay dùng
const txt = 'School'
console.log('Chiều dài chuỗi =', txt.length)
console.log('Vị trí bắt đầu của ký tự trong chuỗi:', txt.indexOf('h'))

// Tách chuỗi
var str = 'Apple, Banana, Kiwi'
let res = str.slice(7, 13) // Tách chuỗi từ trái sang phải (bắt đầu từ 0) -> Tham số thứ 2 + thêm 1
console.log('Chuỗi đã được tách từ vị trí 7->13:', res)  // Banana
let res2 = str.slice(-12, -6) // Tách chuỗi từ phải sang trái (cũng bắt đầu từ 0) -> Tham số thứ 1 + thêm 1
console.log('Chuỗi đã được tách từ vị trí -12->-6:', res2)  // Banana
console.log('Chuỗi đã được tách từ vị trí -19->-6:', str.slice(-19, -6)) // Apple Banana
// Nếu không có tham số sẽ đếm từ vị trí tham số 1 cho đến hết chuỗi
console.log('Chuỗi đã được tách từ vị trí 7:', str.slice(7)) // Banana, Kiwi
console.log('Chuỗi đã được tách từ vị trí -19:', str.slice(-19)) // Apple, Banana, Kiwi


// substring(start, end): tương tự như slice nhưng ko nhận giá trị âm
let substring1 = str.substring(7, 13)
console.log('Chuỗi substring từ vị trí 7->13:', substring1) // Banana
let substring2 = str.substring(-12, -6)
console.log('Chuỗi substring từ vị trí -12->-6:', substring2) // (giá trị rỗng)

// substr: tương tự slice nhưng tham số thứ 2 là độ dài chuỗi
let substr1 = str.substr(7, 5)
console.log('Chuỗi substr từ vị trí 7 và lấy 5 ký tự:', substr1) // Banan
let substr2 = str.substr(-12, 3)
console.log('Chuỗi substr từ vị trí -12 và lấy 3 ký tự:', substr2) // -> Ban
// Đối với số âm: substr sẽ + 1 đối với tham số thứ 1 và nguyên tắc lấy từ trái sang phải

