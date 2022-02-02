/* Map: tập hợp các giá trị được định danh bằng key như Object
  Map cho key thuộc bất cứ dữ liệu nào
*/

// 1. Tạo mới Map
const map1 = new Map()
map1.set('1', 'str')
map1.set(1, 'num')
map1.set(true, 'bool')
console.log('map1')
console.log(map1)

const map2 = new Map()
map2.set('2', 'str').set(2, 'num').set(true, 'bool')
console.log('map2')
console.log(map2)

console.log('size of map1:', map1.size)
console.log('check the key is existed or no:', map1.has('2'))  // false: not existed
console.log('value of key true in map1:', map1.get(true))
console.log('map1 after deleting key is 1:', map1.delete(1))  // true nghĩa là đã delete thành công


// 2. Lặp qua 1 Map: dùng for of
const map4 = new Map()
map4.set('4', 'str').set(4, 'num').set(true, 'bool')

console.log('Lấy tất cả các tên key')
for (const item of map4.keys()) { console.log(item) }
console.log('Lấy tất cả các giá trị')
for (const item of map4.values()) { console.log(item) }
console.log('Lấy tất cả các cặp key-value')
for (const item of map4.entries()) { console.log(item) }  // hoặc dùng: for (const item of map4)

// Phương thức forEach được xây dựng sẵn: mặc định hiển thị value-key
console.log('Using forEach to loop')
const mapForEach = new Map()
mapForEach.set('5', 'str')
mapForEach.set(5, 'num')
mapForEach.set(false, 'bool')
mapForEach.forEach((value, key, map) => {
  console.log(value, key)
})