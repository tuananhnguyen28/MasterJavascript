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

/*
  Non-enumerable - không thể liệt kê
*/
const user2 = {
  name: 'John',
  toString() {
    return this.name
  }
}
Object.defineProperty(user2, 'toString', {
  enumerable: false
})
console.log(user2)
// Khi không muốn một thuộc tính nào xuất hiện trong vòng lặp, ta set enumerable = false 
for(const key in user2) {
  console.log(key)  // name, no toString
}
// Ngoài ra, ta có thể dùng 'Object.keys(obj)' để lấy các tên key (dưới dạng 1 mảng)
console.log(Object.keys(user2))

/*
  Non-configurable - không thể cấu hình
  Ý tưởng: ngăn chặn thay đổi cờ thuộc tính và xoá thuộc tính
*/
let descriptor_non_configurable = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor_non_configurable)
// configurable: false -> vẫn có thể thay đổi giá trị của thuộc tính
const user_non_configurable_1 = {
  name: 'Maris'
}
Object.defineProperty(user_non_configurable_1, 'name', {
  configurable: false
})
user_non_configurable_1.name = 'Maris2'
console.log('user_non_configurable_1: ', user_non_configurable_1)
// configurable: false và enumerable: false -> niêm phong thuộc tính và không thay đổi giá trị
const user_non_configurable_2 = {
  name: 'Louisdz'
}
Object.defineProperty(user_non_configurable_2, 'name', {
  writable: false,
  configurable: false
})
user_non_configurable_2.name = 'Louisdz2'
console.log('user_non_configurable_2: ', user_non_configurable_2) // vẫn giá trị là Louisdz