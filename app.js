// 1. Object method

// Một function là một thuộc tính của object thì gọi là method
let user1 = {
    name: 'Tuan',
    age: 28
}
user1.SayHi = function() {
    console.log('Hi Object Method')
}
user1.SayHi()

// Method shorthand (cách viết ngắn gọn)
user2 = {
    SayHi() {
        console.log('Hi Method Shorthand')
    }
}
user2.SayHi()


// 2. This

// This trong 'method': giá trị của this là object trước dấu chấm
let user3 = {
    name: 'Tuan 3',
    age: 28,
    SayHi() {
        console.log(this.name)
    }
}
user3.SayHi()

// Có thể truy cập đến thuộc tính của object mà không cần dùng this, dùng object và dấu chấm
let user4 = {
    name: 'Tuan 4',
    age: 28,
    SayHi() {
        console.log(user4.name)
    }
}
user4.SayHi()

/*
    Nếu chúng ta muốn copy user sang một biến khác
    Ví dụ: admin = user và sau đó ghi đè user, như vậy sẽ truy cập đến một object sai
    Nên sử dụng từ khoá 'this' trong mọi trường hợp
*/ 
let user5 = {
    name: 'Tuan 5', 
    age: 28,
    SayHi() {
        // console.log(user5.name) // cách này sai nên comment lại
        // sửa lại để chạy đúng
        console.log(this.name)
    }
}
let admin = user5
user5 = null // ghi đè lên object cũ
admin.SayHi() // Do method SayHi của object 'admin' trỏ đến object 'user' null đã bị gán trước đó -> lỗi

// 'This' không bị ràng buộc
function SayHi_NonStrictMode() {
    console.log(this) // this là biến global, object 'Windows'
    console.log('this.name =', this.name)
}
SayHi_NonStrictMode()

// Example: Sử dụng cùng 1 function cho 2 object khác nhau
let _user = { name: 'The user' }
let _admin = { name: 'The admin' }
function _SayHi() {
    console.log(this.name)
}
// Chúng có this khác nhau, 'this' bên trong function là object trước dấu chấm
_user.f = _SayHi
_admin.f = _SayHi
_user.f()
_admin.f()
_admin['f']()