/*
  EvalError: tạo một instance đại diện cho một lỗi xảy ra liên quan đến hàm toàn cục eval().
  InternalError: tạo một instance đại diện cho một lỗi xảy ra khi một lỗi bên trong Javascript Engine được ném.
              Ví dụ: "quá nhiều đệ quy".
  RangeError: tạo một instance đại diện cho một lỗi xảy ra khi một biến số hoặc tham số ngoài phạm vi hợp lệ của nó.
  ReferenceError: tạo một instance đại diện cho một lỗi xảy ra khi hủy tham chiếu của một tham chiếu không hợp lệ.
  SyntaxError: tạo một instance đại diện cho một lỗi xảy ra trong khi phân tích cú pháp mã trong eval().
  TypeError: tạo một instance đại diện cho một lỗi xảy ra khi một biến hoặc một tham số có kiểu không hợp lệ.
  URIError: tạo một instance đại diện cho một lỗi xảy ra khi encodeURI() hoặc decodeURI() truyền các tham số
            không hợp lệ.
*/

/*
  Constructor Function
    throw new Error('Lỗi')
    throw new SyntaxError('Lỗi')
    throw new ReferenceError('Lỗi')
    throw new TypeError('Lỗi')
*/

// Cách truyền một object vào một Error Object (tạo một class CustomError riêng và thừa kế Error)
class CustomError extends Error {
  constructor(message, student) {
    super(message) // gọi constructor của Error
    this.student = student
    this.name = 'CustomError'
  }
}
try {
  throw new CustomError('End game', { name: 'Thanos'})
} catch (error) {
  console.log(error)
  // Kiểm tra error có phải là instance của CustomError không, nếu đúng -> true
  console.log(error instanceof CustomError) // true
  console.log(error instanceof Error) // true
  console.log(error.student)
  console.log(error.message)
  console.log(error.stack)
}

// Lưu ý: có thể thay lớp cần kế thừa bằng các hàm Error khác như: EvalError/InternalError/TypeError/...