// var
var name = 'Tuan'
console.log(name)
name = 'Tuan Update'
console.log(name)

var age = 18
console.log(age)
age = 28
console.log(age)

var _car = 'BMW' // valid
var $tream = true

// Hoisting with var
console.log(message)
var message = ' Tuan'

// Use strick
message = 'Thông báo'   
console.log(message)

// let tương tự với var nhưng không bị hoisting
// không thể truy cập đến biến message/message1 trước khi khởi tạo
// console.log(message1)
// let message1 = 'không bị hoisting'

// const cũng không bị hoisting
// const car = 'Mercedes'
// car= 'BMW'

// // Để ý vs object
//     // Object
//     const profile = {name: 'Tuan'}
//     profile.name = 'Nguyen Tuan'
//     const array = [1, 2, 3, 4]
//     array.push(5)
//     console.log(array)

// var company = 'Xdevclass'
// console.log('log 1', company)
// function myFunction() {
//     console.log('log 2', company)
// }
// myFunction();

function myFunction() {
    var carName = 'Volvo'
    console.log('log 1', carName)
}
myFunction() {
    console.log('log 2', carName)
}

if(true) {
    const x = 2
    console.log('log 1', x)
}
console.log('log 2', x)