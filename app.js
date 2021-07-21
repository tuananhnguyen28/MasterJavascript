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


// replace(): thay thế chuỗi
var repStr = 'Please visit Microsoft and Microsoft'
let n1 = repStr.replace('Microsoft', 'Apple')
console.log('Chuỗi sau khi thay thế chỉ 1 lần:', n1)
let n2 = repStr.replace(/Microsoft/g, 'Apple')
console.log('Chuỗi sau khi thay thế tất cả các từ giống nhau, dùng regex:', n2)

// Chuyển đổi chữ thường sang chữ hoa hoặc chữ thường
var word = 'ClaSS'
console.log('Từ chữ thường -> hoa:', word.toUpperCase(word))
console.log('Từ chữ hoa -> thường:', word.toLowerCase(word))

// concat(): nối chuỗi
var _str1 = 'Hello', _str2 = 'World'
let concatString = _str1.concat(' ', _str2, ' - ')
console.log('Chuỗi sau khi nối:', concatString)

// trim(): xoá khoảng trắng (cách) hai bên chuỗi
var __str = '   Hello World!2    '
let trimString = __str.trim()
console.log('Chuỗi sau trước dùng trim():', __str)
console.log('Chuỗi sau khi dùng trim():', trimString)

// Ứng dụng khác của trim, so sánh 2 từ cho trước có giống nhau hay không
function compare(__str1, __str2) {
    return __str1.toLowerCase().trim() === __str2.toLowerCase().trim()
}
console.log(compare('    The school  ', 'ThE SchooL'))

// charAt() hoặc []: lấy ký tự từ một chuỗi
let orgString = 'Hello world.'
console.log('Ký tự sau khi lấy dùng charAt():', orgString.charAt(4))
console.log('Ký tự sau khi lấy dùng []:', orgString[4])
orgString[0] = 'A' // Không bị lỗi nhưng code này không hoạt động do ko thể gán ký tự trong chuỗi

// charCodeAt(): lấy UTF-16 code tại vị trí bất kì trong chuỗi
console.log('Mã UTF-16 cho ký tự ' + "\'" + orgString[1] + "\' là " + orgString.charCodeAt(1))

// split(): chuyển chuỗi sang mảng, tham số là chuỗi/ký tự ngăn cách
let _orgString = 'H,e,l,l,o'
let splitStr1 =_orgString.split(',')
console.log('Chuỗi sau khi cắt ký tự:', splitStr1)
// Trường hợp tham số rỗng -> return về mảng từng ký tự
let __orgString = 'Hello'
let splitStr2 = __orgString.split('')
console.log('Chuỗi sau khi cắt ký tự là tham số rỗng', splitStr2)