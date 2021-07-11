// 1. Hàm (function)

// 1.1 Khai báo hàm: function được Hoisting
hoisted()
function hoisted() {
    console.log('This is function has been hoisted')
}

// 1.2 Biểu thức hàm: sẽ không được Hoisting
/*
expression1()
var expression1 = function() {
    console.log('Will this work 1?')
}
*/

// Cách này tương đương
/*
var expression2 // 
expression2() // do khai báo tên hàm ở trên nhưng chưa gán giá trị nên bị undefined, không thể gọi hàm bên dưới
expression2 = function() {
    console.log('Will this work 2?')
}
*/

// 2. IIFE (Immediately Invokable Function Expression)
// Khởi tạo một function và thực thi ngay lập tức
;(function() {
    let a = 1
    let b = 2
    console.log('a + b =', a + b)
})()

// 3. Hàm ẩn danh
setTimeout(function() {
    console.log('Sau 1s thì sẽ xuất hiện dòng này')
}, 1000) // miliseconds, 1s = 1000 miliseconds

// 4. Hàm rút gọn
/*
    Lưu ý với Arrow function
    - Không có this
    - Không được gọi với new
    - Cũng không có super
*/

// Example về this cho Arrow function

/*
    a. this trong function bình thường
    Phụ thuộc lúc ta gọi, đại diện cho object, array, etc..
*/
// const obj1 = {
//     name: 'Tuan',
//     print: function() {
//         console.log(this.name)
//     }
// }
// obj1.print()

/*
    b. this trong arrow function
    This đại diện cho 1 thằng cha (1 global), không đại diện cho object
    Ví dụ ở dưới vì global không có thuộc tính lastname
*/
const obj2 = {
    lastname: 'Nguyen',
    print: () => {
        console.log(this.lastname)
    }
}
obj2.print() // undefined

// 5. Phân biệt parameter (tham số) và argument (đối số)
function sum(a, b) {
    return a + b
}
sum(1, 2)
// a, b là tham số, gọi là tham số khi khai báo tên biến trong hàm
// 1, 2 là đối số, gọi là đối số khi truyền vào giá trị khi muốn gọi hàm

// 5.1 Tham số mặc định
function gx(x, y = x) {
    console.log(x, y)
}
gx(3) // 3 3
gx(4, 6) // 4 6

// 5.2 Rest parameter (tham số còn lại)
function sum_(a, b, ... theArgs) {
    let result = 0
    for(const item of theArgs) {
        result += item
    }
    return result
}
console.log('Result =', sum_(1, 2, 3, 4, 5, 6))
/*
    Lưu ý:
        Truyền tham số cho hàm là một mảng và đối số cũng là một mảng các giá trị
        Tham số còn lại chỉ lấy những giá trị còn lại bên trong mảng các đối số
        , ngoại trừ các tham số được khai báo mà khác mảng truyền vào
        Như ví dụ trên chỉ sum 3, 4, 5, 6 và bỏ 1, 2 vì tương ứng với tham số a, b (# mảng)
*/