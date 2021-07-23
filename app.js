// Mảng - Array
const cars = ['BMW', 'Honda', 'Toyota']
const flex1 = ['Tuan', { age: 28 }, [1, 2, 3]]
const flex2 = ['Tuan', { age: 28 }, [1, 2, 3]] // copy từ mảng flex1
console.log(cars)
console.log(flex1)
flex2[1] = 'Nguyen'
console.log('flex2[1]:', flex2[1])
// Đối với object là một tham chiếu, chỉ là giá trị tương đối, có thể bị thay đổi sau đó


// Kiểm tra 1 biến có phải là 1 mảng hay không
const fruits = ['Banana', 'Orange', 'Lemon']
let x = Array.isArray(fruits)
let y = fruits instanceof Array
console.log('fruits có phải là một mảng hay ko, dùng Array.isArray :', x)
console.log('fruits có phải là một mảng hay ko, dùng instanceof', y)

// toString() hoặc join() để chuyển mảng sang chuỗi
const arr1 = ['A', 'B', 'C']
let arr1ToString = arr1.toString()
let arr1Join = arr1.join('|')  // nếu join() ko truyền ký tự thì sẽ lấy mặc định dấu cách là dấu , của mảng
console.log('Chuyển từ mảng sang chuỗi, dùng toString()', arr1ToString)
console.log('Chuyển từ mảng sang chuỗi, dùng join()', arr1Join)

// Thêm phần tử vào cuối mảng, return lại chiều dài mảng mới
const arr2 = ['A', 'B', 'C', 'D']
let arr2_result = arr2.push('E')
console.log('Mảng arr2 ban đầu:', arr2)
console.log('Thêm phần tử vào cuối mảng, return lại chiều dài mảng mới:', arr2_result)

// Thêm phần tử vào đầu mảng, return lại chiều dài mảng mới
const arr3 = ['A', 'B', 'C', 'D']
let arr3_result = arr3.unshift('A-')
console.log('Mảng arr3 ban đầu:', arr3)
console.log('Thêm phần tử vào đầu mảng, return lại chiều dài mảng mới:', arr3_result)

// Xóa phần tử cuối cùng của mảng, return lại phần tử vừa xóa
const arr4 = ['A', 'B', 'C']
let arr4_result = arr4.pop()
console.log('Mảng arr4 ban đầu:', arr4)
console.log('Xóa phần tử cuối cùng của mảng, return lại phần tử vừa xóa:', arr4_result)

// Xóa phần tử đầu tiên của mảng, return lại phần tử vừa xóa
const arr5 = ['A', 'B', 'C']
let arr5_result = arr5.shift()
console.log('Mảng arr4 ban đầu:', arr5)
console.log('Xóa phần tử đầu tiên của mảng, return lại phần tử vừa xóa:', arr5_result)

