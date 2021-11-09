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