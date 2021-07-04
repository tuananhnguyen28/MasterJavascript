// 1. Khởi tạo/Khai báo - Gán biến //

// Khởi tạo và gán biến cùng lúc
var name = 'Tuan'
console.log(name)
name = 'Tuan updated'
console.log(name)

// Khởi tạo, gán biến sau
var age
console.log(age)
age = 28
console.log(age)

// 2. Quy tắc đặt tên

// Hợp lệ
var _car = 'BMW'
console.log(_car)
var $tream = true
console.log($tream)

// // Không hợp lệ
// var 1car
// var +car

// Một số qui ước đặt tên
var firstName = 'Tuan' // Camel case (kiểu lạc đà)
var first_name = 'Tuan' // Underscore
var FirstName = 'Tuan' // Pascal case

// 3. Vấn đề hosting với var

// console log trước khi gán khi khai báo biến
console.log(message1)
var message1 = 'Bị hoisting'

// sẽ tương đương với
var message2
console.log(message2)
message2 = 'Bị hoisting'

// ở chế độ bình thương (no use strict) cho phép khởi tạo biến mà ko cần dùng var
message3 = 'Thông báo 3'
console.log(message3)

// // cách fix hoisting với use strict
// 'use strict'
// console.log(message4)
// message4 = 'Thông báo 4'

// // let tương tự var nhưng không bị hoisting (sẽ bị lỗi do biến chưa được khởi tạo trước khi gọi)
// console.log(let_color)
// let let_color = 'let ko bị hoisting'

// // const cũng tương tự var nhưng không bị hoisting và không thể gán giá trị cho hằng số const
// console.log(const_color)
// let const_color = 'const ko bị hoisting'

/* 
    nếu const là 1 object thì có thể thay đổi thuộc tính trong object đó,
    nhưng không thể thay đổi toàn bộ object, tương tự với array
*/
const profile = {name: 'Tuan', age: 28}
profile.name = 'Tuan for profile updated'
console.log(profile)
const arrayFruits = ['Apple', 'Orange', 'Lemon']
arrayFruits.push('Banana')
console.log(arrayFruits)

// 4. Scope

// Global scope: sử dụng được tất cả mọi nơi trong 1 văn bản
var company = 'Company'
function getCompany() {
    console.log(company)
}
getCompany();

// // Function scope: chỉ có thể sử dụng được biến ở bên trong function (hàm)
// function getScore() {
//     var score = 9.5
//     console.log('score 1:', score)
// }
// getScore();
// console.log('score 2:', score) // score is not defined

// Block scope (1): ES2015 (trước ES6, không có Block scope)
{ 
    var block_scope_es2015 = 1
}
console.log('Block scope ES2015 =', block_scope_es2015)

/*
    Block scope (2): Từ ES6, biến được khai báo bằng let và const.
    Vì thế bên ngoài scope ko thể truy cập vào bên trong scope
*/
if(true) {
    let block_scope_es6_let = 2
    const block_scope_es6_const = 3
    console.log('Block scope ES6 let =', block_scope_es6_let)
    console.log('Block scope ES6 const =', block_scope_es6_const)
}
// console.log('Block scope ES6 let =', block_scope_es6_let) // block_scope_es6_let is not defined
// console.log('Block scope ES6 const =', block_scope_es6_const)