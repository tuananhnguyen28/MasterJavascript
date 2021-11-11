/*
  Prototype và kế thừa
*/

/*
  1. Dự đoán giá trị được in ra

  let person = {
  name: ""
  }
  let student = {
    __proto__: person,
    name: "Alan"
  }
  console.log(student.name) // ?
  delete student.name
  console.log(student.name) // ?
  delete person.name
  console.log(student.name) // ?

*/

// Alan
// ""
// undefined


/*

  2. 
  let head = {
    glasses: 1
  }

  let table = {
    pen: 3
  }

  let bed = {
    sheet: 1,
    pillow: 2
  }

  let pockets = {
    money: 2000
  }

  2.1 Sử dụng __proto__ để kế thừa các object theo đường dẫn pockets -> bed -> table -> head. 
  Ví dụ pockets.pen = 3, bed.glasses = 1

  2.2 Truy cập đến glasses bằng pockets.glasses và head.glasses, cách nào nhanh hơn

*/

// Answer
let head = {
  glasses: 1
}

let table = {
  pen: 3,
  __proto__: head
}

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
}

let pockets = {
  money: 2000,
  __proto__: bed
}
console.log(pockets.pen)  // 3
console.log(bed.glasses)  // 1
console.log(table.money)  // undefined


/*

  3. 
  Thuộc tính thuộc về đâu? 
  Chúng ta có rabbit kế thừa từ animal. 
  Nếu gọi rabbit.eat(), object nào sẽ nhận thuộc tính full: animal hay rabbit?

  let animal = {
    eat() {
      this.full = true
    }
  }

  let rabbit = {
    __proto__: animal
  }

  rabbit.eat()

*/

// Answer: Câu trả lời là: rabbit Bởi vì this chính là object trước dấu chấm. 
// Hãy nhớ khai báo và thực thi code là 2 việc khác nhau, nếu thoạt nhìn ban đầu chỉ khai báo
// thì this đại diện cho animal nhưng khi thực thi rabbit.eat() thì this đại diện cho rabbit


/*

  4. Tại sao cả 2 hamster đều có thức ăn?
  Chúng ta có 2 loại hamster: speedy và lazy kế thừa từ object hamster Khi chúng ta cho 1 loại hamster ăn, 
  tại sao loại kia cũng có thức ăn. Hãy tìm cách sửa nó!

  let hamster = {
    stomach: [],
    eat(food) {
      this.stomach.push(food)
    }
  }
  let speedy = {
    __proto__: hamster
  }
  let lazy = {
    __proto__: hamster
  }
  // Cho feedy ăn
  speedy.eat("apple")
  console.log(speedy.stomach) // apple
  // lazy vẫn có thức ăn, tại sao? Hãy sửa nó
  console.log(lazy.stomach) // apple

*/

// Answer
/*
  Cùng nhìn lại cẩn thận chuyện gì đang xảy ra trong speedy.eat("apple").

  Phương thức speedy.eat được tìm thấy trong prototype, khi thực thi thì this=speedy (object trước dấu chấm).
  Khi this.stomach.push() cần tìm thuộc tính stomach và gọi push. Nó tìm stomach trong this(=speedy), nhưng không tìm thấy.
  Sau đó nó tìm trong prototype và tìm thấy stomach trong hamster.
  Sau đó nó gọi push vào đó, thêm thức ăn vào stomach trong prototype.
  Vì thế tất cả hamster đều được share stomach.

  Hãy lưu ý là những trường hợp như thế này sẽ không xảy ra khi chúng ta gán this.stomach=:
*/

let hamster_1 = {
  stomach: [],

  eat(food) {
    // assign to this.stomach instead of this.stomach.push
    this.stomach = [food]
  }
}

let speedy_1 = {
  __proto__: hamster_1
}

let lazy_1 = {
  __proto__: hamster_1
}

console.log('----- Multiple child classes inherit from base/parent class -----')

// Speedy one found the food
speedy_1.eat("apple")
console.log(speedy_1.stomach) // apple

// Lazy one's stomach is empty
console.log(lazy_1.stomach) // <nothing>

/*
  Bây giờ mọi thứ đều hoạt động ổn bởi vì this.stomach= không tìm stomach nữa mà nó sẽ viết trực tiếp vào object this

  Chúng ta cũng có thể tránh vấn đề này bằng cách khai báo mỗi hamster thuộc tính stomatch của chính nó.
*/
let hamster_2 = {
  stomach: [],

  eat(food) {
    this.stomach.push(food)
  }
}

let speedy_2 = {
  __proto__: hamster_2,
  stomach: []
}

let lazy_2 = {
  __proto__: hamster_2,
  stomach: []
}

// Speedy one found the food
speedy_2.eat("samsung")
console.log(speedy_2.stomach) // samsung

// Lazy one's stomach is empty
console.log(lazy_2.stomach) // <nothing>