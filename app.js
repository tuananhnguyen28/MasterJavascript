// object Date
let d = new Date()  // Date là kiểu 'object' nhưng hiển thị là 'string'
console.log(d)

// get current miliseconds tại website: https://currentmillis.com/

// Có 4 cách tạo một object Date
var d1 = new Date()
var d2 = new Date(1608734177983)
var d3 = new Date('1993-10-30T15:27:08') // dateString nên dùng kiểu phổ biến, các trình duyệt đều sử dụng
var d4 = new Date(1993, 6, 8, 7, 59, 59, 999)
console.log('new Date:', d1)
console.log('new Date(miliseconds):', d2)
console.log('new Date(dateString):', d3)
console.log('new Date(year, month, day, hours, minutes, seconds, miliseconds):', d4)

// Một số phương thức hay dùng của object Date
console.log('--------- Một số phương thức hay dùng của object Date ----------')
let value = new Date()
let getDate = value.getDate() // Return về một ngày trong tháng (1-31)
let getDay = value.getDay() // Return về một ngày trong tuần (0-6)
let getFullYear = value.getFullYear() // Return về năm
let getHours = value.getHours() // Return về giờ (0-23)
let getMiliseconds = value.getMilliseconds() // Return về mili giây (0-999)
let getMinutes = value.getMinutes() // Return về phút (0-59)
let getSeconds = value.getSeconds() // Return về giây (0-59)
let getMonth = value.getMonth() // Return về tháng (0-11)
let toISOString = value.toISOString() // Return về định dạng thời gian chuẩn ISO

console.log('The orginal of date value:', value)
console.log('getDate():', getDate)
console.log('getDay():', getDay)
console.log('getFullYear():', getFullYear)
console.log('getHours():', getHours)
console.log('getMiliseconds():', getMiliseconds)
console.log('getMinutes():', getMinutes)
console.log('getSeconds():', getSeconds)
console.log('getMonth():', getMonth)
console.log('toISOString:', toISOString)

// Chuyển ISO Date về Normal Date
let isoDate = new Date().toISOString()
let normalDate = new Date(isoDate)
console.log('--------- Chuyển ISO Date về Normal Date ----------')
console.log('isoDate:', isoDate)
console.log('normalDate:', normalDate)