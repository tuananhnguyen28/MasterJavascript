/* 1. Thuộc tính và phương thức static
    - Với từ khoá static, ta có thể tạo các phương thức và các thuộc tính gọi trực tiếp 
    bằng class mà không cần thông qua việc khởi tạo Object bằng new (1)
    - Điều này tương tự với việc gán trực tiếp như thế này (2)
    - Thường dùng static trên các phương thức thuộc về class, chứ không phải thuộc về
    bất cứ object nào (3)
*/

// (1)
class User1 {
  static staticMethod() {
    console.log(this === User1)
  }
}
console.log('User1.staticMethod():')
User1.staticMethod() // true

// (2)
class User2 {}
User2.staticMethod = function() {
  console.log(this === User2)
}
console.log('User2.staticMethod():')
User2.staticMethod() // true

// (3)
class Article {
  constructor(title, date) {
    this.title = title
    this.date = date
  }
  static compare(articleA, articleB) {
    return articleA.date - articleB.date
  }
}
// usage
let articles = [
  new Article('HTML', new Date(2021, 1, 1)),
  new Article('CSS', new Date(2021, 0, 1)),
  new Article('Javascript', new Date(2021, 11, 1))
]
articles.sort(Article.compare)
console.log('articles.sort(...) and articles[0].title:')
console.log(articles[0].title)  // CSS

// Lưu ý: tại đây Article.compare() thực hiện so sánh các object. Nó không phải là
// phương thức của một article, mà là của cả class


/* 1. Thuộc tính static
    - Tính năng được thêm gần đây trong Javascript (1)
    - Gán trực tiếp (2)
*/

// (1)
class Square1{
  static publisher = 'Type Kantor 1'
}
console.log('-----Static Property-----')
console.log(Square1.publisher) // Type Kantor 1'

// (2)
class Square2 {}
Square2.publisher = 'Type Kantor 2'
console.log(Square2.publisher)  // Type Kantor 2