// Property flags and descriptors

/* 1. Property flags - các cờ thuộc tính
    - Một thuộc tính có đầy đủ 3 cờ và value.
    - 4 cờ đó là bộ mô tả thuộc tính (property descriptors).
    - Phương thức Object.getOwnPropertyDescriptors cho phép chúng ta lấy đầy đủ
    thông tin về thuộc tính.
*/

const profile = {
  name: 'Tuan', 
  age: 28
}

// Cách lấy
let descriptor = Object.getOwnPropertyDescriptor(profile, 'name')
console.log('Original descriptor')
console.log(descriptor)

/* 
  Để thay đổi cờ, chúng ta có thể sử dụng: Object.defineProperty(obj, propertyName, descriptor).
  descriptor: Một object miêu tả các thuộc tính, nếu không cung cấp thì mặc định là false.
*/
Object.defineProperty(profile, 'name', {
  writable: false
})
console.log('Next descriptor')
console.log(Object.getOwnPropertyDescriptor(profile, 'name'))

/*
  Non-writable: không thể thay đổi cờ 'writable'
*/
let user = {
  name: 'Johnez'
}
Object.defineProperty(user, 'name', {
  writable: false,
  enumerable: true,
  configurable: true
})
user.name = 'Peter' // Không thể assign giá trị cho name
console.log(user.name)