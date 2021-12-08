/*
  Định nghĩa: JSON (Javascript Object Notation) là một chuỗi text được viết dưới dạng Javascript Object dùng
  để lưu trữ và trao đổi dữ liệu.
*/

// 1. Chuyển Object thành JSON
const object1 = {
  name: 'Tuan',
  age: 28,
  cars: ['Mercedes', 'Lamborghini', 'BMW']
}
const jsonResult = JSON.stringify(object1)
console.log('Chuyển Object -> JSON:', jsonResult)

// 2. Chuyển JSON sang Object
const json1 = `{"name":"Tuan","age":28,"cars":["Mercedes","Lamborghini","BMW"]}`
const objectResult = JSON.parse(json1)
console.log('Chuyển JSON -> Object:', objectResult)

// 3. Array và JSON
const originArray = ['A', 'B', 'C']
const jsonOfArray = '["A","B","C"]' // hoặc `["A","B","C"]`
console.log('----- Array và JSON -----')
console.log(jsonOfArray === JSON.stringify(originArray)) // true

// 4. Number và JSON
const jsonOfNumber = JSON.stringify(1)
console.log('----- Number và JSON -----')
console.log(jsonOfNumber === '1') // true

// 5. String và JSON
const jsonOfString = JSON.stringify('tuan')
console.log('----- String và JSON -----')
console.log(jsonOfString === '"tuan"')  // true

// 6. Boolean và JSON
const jsonOfBoolean = JSON.stringify(true)
console.log('----- Boolean và JSON -----')
console.log(jsonOfBoolean === 'true') // true

// 7. Ngoài các giá trị trên thì các giá trị như Function, undefined, NaN, Infinity ... sẽ không chuyển sang được JSON
const jsonContainsFunction = {
  name: 'Tuan',
  age: 28,
  eat: function() { console.log(`The ${name} is eating!`)}
}
const jsonContainsFunction_Result = JSON.stringify(jsonContainsFunction)
console.log('JSON chứa function không thể chuyển sang JSON:', jsonContainsFunction_Result)


// 2.1 AJAX (Xem thêm video clip về phần này)

// 2.2 XMLHttpRequest
// // Ví dụ về cách dùng XHR để GET
// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = function() {
//   console.log(this.readyState)
// }
// console.log('----------------------')
// console.log('XMLHttpRequest - GET')
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true)
// xhr.send()

// Ví dụ về cách dùng XHR để POST
const xhr_post = new XMLHttpRequest()
xhr_post.onreadystatechange = function() {
  console.log(this.readyState)
}
console.log('----------------------')
console.log('XMLHttpRequest - POST')
xhr_post.open('POST', 'https://jsonplaceholder.typicode.com/todos', true)
xhr_post.setRequestHeader('Content-Type', 'application/json')
const body = { completed: true, title: 'This is test from Tuan', userId: 201}
xhr_post.send(JSON.stringify(body))