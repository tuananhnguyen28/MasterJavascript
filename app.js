// Prototypal inheritance (kế thừa nguyên mẫu)

// [[Prototype]]: thuộc tính ẩn, sử dụng bằng cách thông qua getter/setter là __proto__
// Exp:
let animal = {
  eats: false
}
let rabbit = {
  jumps: true
}
rabbit.__proto__ = animal // sets rabbit.[[Prototype]] = animal // kế thừa rabbit từ animal
console.log(rabbit)
console.log(rabbit.jumps) // true
console.log(rabbit.eats)  // false


/*
  Javascript Engine tìm thuộc tính eats trong rabbit_2 nhưng không có, vì thế nó vào tìm [[Prototype]] của rabbit_2,
  bây giờ [[Prototype]] của rabbit_2 là animal_2, vì thế nó lấy từ animal_2
*/
let animal_2 = {
  eats: false,
  walk() {
    console.log('Walking in animal_2')
  }
}
let rabbit_2 = {
  jumps: true,
  __proto__: animal_2
}
let longEar = {
  earLength: 10,
  __proto__: rabbit_2
}
// Test
console.log('---------------')
console.log(rabbit_2)
console.log(longEar)
longEar.walk()  // Animal walk
console.log(longEar.jumps)  // true (từ rabbit)


/* Lưu ý
    __proto__ không phải là thuộc tính [[Prototype]], nó chỉ là getter/setter của [[Prototype]]
    Từ ECMAScript 2015 trở về trước, nên dùng Object.getPrototypeOf/Object.setPrototypeOf
*/


// Giá trị của 'this'
let user = {
  name: 'John',
  surname: 'Smith',
  get fullName() {
    return `${this.name} ${this.surname}`
  },
  set fullName(value) {
    ;[this.name, this.surname] = value.split(' ')
  }
}
let admin = {
  __proto__: user,
  isAdmin: true
}
console.log('admin', admin)
admin.fullName = 'Alice Cooper'
console.log('admin.fullName:', admin.fullName)
console.log('user.fullName:', user.fullName)

/*
  Chú thích ở ví dụ trên
  - admin.fullName chạy vào getter fullName của admin, do ko có name/surname nên chạy vào prototype
  của admin là user
  - Không quan trọng phương thức ở đâu: trong object hay prototype của nó.
  Trong phương thức được gọi, this luôn đại diện cho object trước dấu chấm
*/


// for.. in loop: cũng lặp các thuộc tính kế thừa
let animal_3 = {
  eats: true
}
let rabbit_3 = {
  jumps: true,
  __proto__: animal
}
console.log('animal:', animal_3)
// Không lấy được các g/trị bên trong __proto bởi vì thuộc tính enumerable đã mặc định là false

// Object.keys chỉ return các key
console.log('Object.keys(rabbit_3):', Object.keys(rabbit_3))

// for..in luôn cả key và key kế thừa
for(const key in rabbit_3) { console.log('for..in', key) }


// Nếu muốn bỏ các thuộc tính kế thừa thì có thể dùng phương thức có sẵn là obj.hasOwnProperty(key)
// -> nó return true nếu key đó thuộc object (không phải từ kế thừa)
let animal_4 = {
  eats: true
}
let rabbit_4 = {
  jumps: true,
  __proto__: animal_4
}
console.log('obj.hasOwnProperty(key)')
for(const prop in rabbit_4) {
  let isOwn = rabbit_4.hasOwnProperty(prop)
  if(isOwn) {
    console.log(`Our: ${prop}`) // Our: jumps
  } else {
    console.log(`Inherited: ${prop}`) // Inherited: eats
  }
}


/* Lưu ý khác:
  - prototype chain như sau: rabbit kế thừa từ animal, animal kế thừa từ Object.prototype
  (bởi animal là một literal object {...}, vì thể nó là mặc định)
  Cuối cùng Object.prototype kế thừa từ null
  - hasOwnProperty không xuất hiện trong for...in như eats và jumps vì nó không được liệt kê
  Tất cả thuộc tính Object.prototype thì được set cờ là enumerable:false
  - Hầu hết các phương thức get/set value sẽ bỏ qua thuộc tính kế thừa, vd: Object.keys, Object.values
  Tham khảo: https://javascript.info/prototype-inheritance
*/