// 1. Destructuring

// Example: lấy các thuộc tính trong object bằng cách sử dụng destructuring (ngắn gọn hơn)
const user1 = {
  lastName: 'Tuan',
  age: 29,
  nation: 'Vietnam',
  gender: 'male'
}
// Lưu ý: nếu không khai báo giá trị gender ở object thì sẽ lấy giá trị undefined, ngược lại sẽ lấy giá trị gốc
const { lastName, age, nation, gender = 'female' } = user1
console.log(`lastName: ${lastName}, age: ${age}, nation: ${nation}, gender: ${gender}.`)

// Destructuring sử dụng ở function
const handle = ({ a, b = 0, c }) => {
  return a + b + c
}
console.log(`a + b + c = ${handle({ a: 1, c: 3 })}`)

// Spread syntax
const user2 = {
  name: 'Tuan',
  age: 29,
  ability: ['coding']
}
// Shallow copy (copy nông, chỉ clone ở level 1, level 2 ko clone được nên báo tham chiếu trong level 2)
const cloneUser2 = {...user2}
cloneUser2.name = 'Hung'
console.log('user2 ban đầu')
console.log(cloneUser2 === user2)  // false
console.log(user2) // không thay đổi giá trị gốc

// thuộc tính level 2 của object gốc thay đổi
const user3 = {
  color: 'red',
  score: ['good']
}
const cloneUser3 = {...user3}
cloneUser3.score[0] = 'medium'
console.log('user3 ban đầu')
console.log(user3)  // score: ['medium]

// Cách làm không thay đổi giá trị thuộc tính ở level 2
const user4 = {
  color: 'blue',
  score: ['excellent']
}
const cloneUser4 = {...user4}
cloneUser4.score = {...user4.score}
cloneUser4.score[0] = 'bad'
console.log('user4 ban đầu')
console.log(user4)  // lúc này thuộc tính score sẽ không thay đổi giá trị gốc

// Thêm thuộc tính: nếu object gốc đã có tên thuộc tính -> sẽ override
const employee = {
  role: 'HR',
  position: 'Member'
}
const employeeClone = {...employee, position: 'Leader'}
console.log('eployee ban đầu')
console.log(employee) // tất cả các thuộc tính cũ không thay đổi giá trị
console.log('employee sau khi clone')
console.log(employeeClone)  // thuộc tính mới sẽ ghi đè thuộc tính object cũ

// Đối với Array
const list1 = [1, 2, 3, 4]
const list2 = [5, 6, 7, 8]
const list3 = [...list1, ...list2]
const list3_Swap = [...list2, ...list1]
console.log(`list3: ${list3}`)
console.log(`list3_Swap: ${list3_Swap}`)

// Dùng Shallow copy đối với array
cloneList1 = [...list1]
console.log(list1 === cloneList1) // false

// Thêm một phần tử đối với array
const list4 = [...list1, 10]
console.log(`list4 sau khi thêm số 10 và clone từ list1: ${list4}`)


// 2. Rest Parameter

// Kết hợp destructuring và rest parameter để lấy các giá trị còn lại của một phần tử
const handle2 = ({ a, b, ...c }) => {
  console.log('Các giá trị còn lại của c (đối với object):')
  console.log(c)
}
handle2({ a: 1, b: 2, c: 3, d: 4, e:5 })  // {c: 3, d: 4, e: 5}

// Vẫn áp dụng với array
const handle_array = ([a, b, c, ...d]) => {
  console.log('Các giá trị còn lại của d (đối với mảng):')
  console.log(d)
}
handle_array([1, 2, 3, 4, 5, 6, 7, 8])  // [4, 5, 6, 7, 8]

// Ví dụ khác (dùng Rest Parameter để split ra các thuộc tính muốn store trong 1 object)
const cake = {
  name: 'Birthday Cake',
  price: 59,
  quantity: 1
}
const { name, ...other } = cake
console.log('Object chứa các thuộc tính sau khi dùng Rest Parameter để split:')
console.log(other)