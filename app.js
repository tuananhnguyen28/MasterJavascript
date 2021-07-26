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


// Từ khóa delete
// Sau khi xóa phần tử khỏi mảng, sẽ để lại khoảng trống, sau khi truy cập đến phần tử này, sẽ có giá trị là undefined
const arr6 = ['Banana', 'Orange', 'Lemon', 'Kiwi']
delete arr6[1]
console.log('Mảng arr6:', arr6)
console.log('Giá trị phần tử arr6[1]:', arr6[1])

// splice(vị trí thêm, số lượng cần xoá, ... phần tử thêm) -> return mảng các phần tử đã xóa
const arr7 = ['Banana', 'Orange', 'Lemon', 'Kiwi']
let arr7_result = arr7.splice(0, 1, 'Apple', 'Loeo')  // nếu số lượng cần xóa = 0 -> []
console.log('Các phần tử đã xóa (splice):', arr7_result)
console.log('Mảng arr7 sau khi thêm các elements bắt đầu tại vị trí đã xóa:', arr7)

// slice(vị trí bắt đầu, vị trí kết thúc) không thay đổi mảng gốc, tách ra một mảng mới từ mãng cũ
const arr8 = ['Banana', 'Orange', 'Lemon', 'Kiwi']
let arr8_result = arr8.slice(2)
console.log('Mảng mới sau khi tách từ vị trí đầu tiên đến vị trí cuối (slice):', arr8_result)
console.log('Mảng gốc:', arr8)

const arr9 = ['Banana', 'Orange', 'Lemon', 'Kiwi']
let arr9_result = arr9.slice(1, 3) // tách từ vị trí 1 đến vị trí 2 (vị trí cuối + thêm 1)
console.log('Mảng sau khi tách từ vị trí 1 đến vị trí 2:', arr9_result)

// concat(): tạo mảng mới bằng cách nối các mảng cũ
const myGirls = ['Celcile', 'Moowr']
const myBoys = ['Joinle', 'Heaw', 'Boid']
const myGirlsAndBoys = myGirls.concat(myBoys)
// có thể truyền vào chuỗi hoặc item
const myGirlsAndBoys_2 = myGirls.concat('New Item 1', 'New Item 2')
console.log('Mảng sau khi dùng concat():', myGirlsAndBoys)
console.log('Mảng sau khi dùng concat(), thêm vào item:', myGirlsAndBoys_2)

// spread operator: cú pháp 3 dấu chấm
// Dùng để nối mảng hoặc tạo thành một mảng mới
const cars1 = [1, 2, 3]
const cars2 = [4, 5, 6]
const newCars1Cars2 = [...cars1, ...cars2]
console.log('Mảng mới, dùng dấu 3 chấm để nối mảng:', newCars1Cars2)

// Khi so sánh tham chiếu, hai mảng sẽ không bằng giá trị, chỉ giống về kiểu
const cars3 = [4, 5, 6]
console.log(cars2 === cars3) // false
cars4 = cars2
console.log(cars4 === cars2) // true, do gán mảng cars2 cho cars4, cả 2 mảng đều trỏ cùng 1 địa chỉ nên bằng nhau về giá trị

// forEach
const numbers = [1, 2, 3, 4, 5]
let newNumbers1 = [], newNumbers2 = []
for(let i = 0; i < numbers.length; i++) {
  newNumbers1.push(numbers[i])
}
console.log('newNumbers1:', newNumbers1)
// dùng forEach
numbers.forEach((value, index) => {
  newNumbers2.push(value)
})
console.log('newNumbers2:', newNumbers2)
/*
  // Lưu ý: vòng lặp for có thể dừng lại được theo điều kiện trong vòng lặp, còn forEach thì không
  // Example:
let _numbers = [4, 3, 6, 2, 10]
let _newNumbers1 = [], _newNumbers2
for(let i = 0; i < _numbers.length; i++) {
  if(i === 2) {
    break
  }
  _newNumbers1.push(_numbers[i])
}
console.log('for dùng điều kiện:', _newNumbers1)
_numbers.forEach((value, index) => {
  if(value === 2) {
    break
  }
  _newNumbers2.push(_numbers)
})
console.log('forEach dùng điều kiện:', _newNumbers2) // Uncaught SyntaxError: Illegal break statement
*/

// map(): tạo một mảng mới bằng cách thực hiện tính toán trên từng phần tử. map() không thay đổi mảng cũ
const oldArray1 = [1, 2, 3, 4, 5]
const newArray1 = oldArray1.map((value, index, array) => {
  console.log(value, index, array)
  return value * 2
})
console.log('---------------------------------')
console.log('Mảng mới sau khi dùng map():', newArray1)

// filter(): tạo một mảng mới với những phần tử thỏa điều kiện
const oldArray2 = [1, 2, 3, 4, 5]
const newArray2 = oldArray2.filter((value, index) => {
  if(value >= 3)
    return true
  else
    return false
})
console.log('---------------------------------')
console.log('Mảng mới sau khi dùng filter():', newArray2)

// find(): trả về phần tử thỏa điều kiện đầu tiên, nếu không có sẽ return 'undefined'
const oldArray3 = ['Apple', 'Orange', 'Banana', 'Kiwi']
const newArray3 = oldArray3.find((value, index) => value === 'Orange')
console.log('---------------------------------')
console.log('Phần tử Orange đầu tiên:', newArray3)

// findIndex(): trả về vị trí của phần tử đầu tiên thỏa điều kiện. Nếu không có return -1
const oldArray4 = ['BMW', 'Honda', 'Hyundai', 'Toyota']
const newArray4 = oldArray4.findIndex((value, index) => value === 'Hyundai')
console.log('---------------------------------')
console.log(`Vị trí của phần tử 'Hyundai' đầu tiên:`, newArray4)

// indexOf(): trả về vị trí của phần tử trong mảng. Nếu không có return -1
const oldArray5 = [1, 2, 3, 4, 5, 6]
const newArray5 = oldArray5.indexOf(5)
console.log('---------------------------------')
console.log(`Vị trí của phần tử số 5 trong mảng:`, newArray5)

// every(): nếu mọi phần tử thỏa điều kiện thì return true, ngược lại false
const oldArray6 = [1, 2, 3]
const newArray6_True = oldArray6.every((value, index) => value > 0)
const newArray6_False = oldArray6.every((value, index) => value > 2)
console.log('---------------------------------')
console.log('Array:', oldArray6)
console.log('Các phần tử thỏa điều kiện > 0 (dùng every):', newArray6_True)
console.log('Các phần tử không thỏa điều kiện > 2 (dùng every):', newArray6_False)