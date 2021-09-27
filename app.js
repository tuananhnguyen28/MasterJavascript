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


/*
  Object.defineProperties: cho phép định nghĩa nhiều thuộc tính cùng một lúc
  Template: Object.defineProperties(obj, {
        prop1: descriptor1,
        prop2: descriptor2
      })
*/

/*
  Object.getOwnPropertyDescriptors: để lấy tất cả các property descriptor cùng một lần
  Kết hợp với Object.defineProperties có thể được sử dụng như một cách để clone 1 project
  Template: let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj))
*/
let user_defineProperties = {
  name: 'Toimer'
}
Object.defineProperty(user_defineProperties, 'name', {
  writable: false
})
const user_defineProperties2 = {...user_defineProperties}
console.log(Object.getOwnPropertyDescriptors(user_defineProperties2, 'name')) // writable: true
// writable vẫn mang giá trị true ở ví dụ trên, vì nó không thể clone flag trước đó
// Cách fix để clone được flag trước đó
const user_defineProperties_Fixed = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user_defineProperties))
console.log('Clone the previous flag - Object.getOwnPropertyDescriptors:', user_defineProperties_Fixed)
console.log(Object.getOwnPropertyDescriptor(user_defineProperties_Fixed, 'name')) // writable: false


/*
  Sealing an object globally - Niêm phong toàn bộ một object
*/

// Object.preventExtensions(obj) - Ngăn không cho thêm mới thuộc tính vào object
let user_sealing1 = {
  name: 'Hojeis'
}
Object.preventExtensions(user_sealing1)
user.age = 10
console.log('user_sealing1:', user_sealing1)

// Object.isExtensible(obj) - dùng để check lại thuộc tính có bị ngăn thêm vào hay không
console.log('isExtensible:', Object.isExtensible(user_sealing1)) // return false vì thêm thuộc tính bị cấm
// Object.seal(obj) - Ngăn chặn thêm/xóa các thuộc tính nhưng vẫn có thể thay đổi thuộc tính
let user_sealing2 = {
  age: 12,
  gender: 'female'
}
Object.seal(user_sealing2)
user_sealing2.age = 15
delete user_sealing2.age
console.log('user_sealing2:', user_sealing2)

// Object.isSealed(obj) - Kiểm tra xem các thuộc tính có bị cấm thêm/xóa hay không
console.log('isSealed:', Object.isSealed(user_sealing2))  // return true vì thêm/xóa thuộc tính bị cấm

// Object.freeze(obj) - thêm/xóa/sửa thuộc tính bị cấm
let user_sealing3 = {
  class: 'ABC'
}
Object.freeze(user_sealing3)
user_sealing3.class = 'ABCUpdated'
console.log('user_sealing3:', user_sealing3)

// Object.isFrozen(obj) - Kiểm tra thêm/xóa/sửa thuộc tính có bị cấm hay không
console.log('isFrozen:', Object.isFrozen(user_sealing3))  // eturn true vì thêm/xóa/sửa thuộc tính bị cấm
