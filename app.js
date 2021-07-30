// Object
// entry của object là một cặp key-value
const user = {
  name: 'Tuấn',
  age: 28,
  greet() {
    console.log('Hello, tên của tôi là:', this.name)
  }
}
user.greet()


// Đọc/thêm/sửa/xóa
// Lưu ý: object chỉ có giá trị tương đối ngay lúc gọi ra thôi và có thể thay đổi ngay sau đó
const person = {
  name: 'Tuấn',
  age: 28
}
// đọc thuộc tính
console.log('Person và name:',person.name)
// thêm thuộc tính
person.age = 18
console.log('Person sau khi thêm age:', person)
// sửa thuộc tính
person.name = 'Nguyễn'
console.log('Person sau khi sửa name:', person)
// xóa thuộc tính
delete person.age
console.log('Person sau khi xóa age:', person.age)


// Object.assign(): dùng để merge object
const person2 = {
  name: 'Tuấn', 
  ability: ['Programming', 'Coding', 'Learning']
}
// Lưu ý: nếu thuộc tính giống nhau thì sẽ ghi đè thuộc tính sau cùng
const person3 = Object.assign(person2, { ability: ['Dance', 'Sing'], age: 18 })
console.log('person2 sau khi dùng Object.assign(merge):', person3)
// Compare person2 và person3 xem có bằng nhau không
console.log(person2 === person3) // true


// spread operator: dùng dể shallow copy hoặc merge object
const peopleNormalCopy = {
  name: 'Tuấn',
  ability: ['Programming']
}
const peopleShallowCopy= {
  name: 'Tuấn',
  ability: ['Programming']
}
// normal copy: cả 2 object cùng tham chiếu đến một địa chỉ ô nhớ
const people1 = peopleNormalCopy
people1.age = 18
console.log('people - normal copy:', people1)
// shallow copy: copy nông, copy chỉ một cấp, không làm thay đổi object gốc
const people2 = {...peopleShallowCopy}
people2.age = 28
console.log(people2 === peopleShallowCopy); // false
console.log('peopleShallowCopy:', peopleShallowCopy)
console.log('people - shallow copy', people2)
// Lưu ý: kể từ cấp thứ 2 có thể thay đổi giá trị của thuộc tính
const secondLevelObject = {
  name: 'Tuấn',
  ability: ['Programming']
}
const shallowCopyForSecondLevelObject = {...secondLevelObject}
shallowCopyForSecondLevelObject.ability[0] = 'Programming-Changed'
console.log('After: secondLevelObject:',secondLevelObject) // đã thay đổi thuộc tính


// Bổ sung cho merge object
const fruits = {
  name: 'Orange',
  color: ['Yellow']
}
const _fruits = {
  name: 'Apple',
  color: ['Green']
}
/*
  cách merge 1: 
    - chỉ gôm tất cả các thuộc tính của 2 objects (ngoại trừ thuộc tính cấp thứ 2 của object 1)
    - gán cho object thứ 2
    - không làm thay đổi giá trị của object thứ 1
*/
let fruits2 = { ...fruits, color: ['Yellow 2'], height: '50 grams' }
console.log('fruits === fruits2 ->',fruits === fruits2)
console.log('fruits:', fruits)
console.log('fruits2:', fruits2)
/*
  cách merge 2:
    - gôm tất cả thuộc tính của 2 objects (ngoại trừ thuộc tính cấp thứ 2 của object 1)
    - gán giá trị đã gôm cho cả 2 object
*/
let _fruits2 = Object.assign(_fruits, { color: 'Green 2', height: '100 grams' })
console.log('_fruits === _fruits2 ->',_fruits === _fruits2)
console.log('_fruits:', _fruits)
console.log('_fruits2:', _fruits2)