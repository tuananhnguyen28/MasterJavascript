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