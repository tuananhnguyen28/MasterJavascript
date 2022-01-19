/* 1. Iterator: là 1 object có thể lấy ra lần lượt các iterator result, implement method next()
  và bằng cách gọi method next() có thể trả về iterator result.
    Giá trị trả về cuối cùng là kích thước của dãy giá trị mà nó đã tạo, được ghi nhận trong 
    biến iterationCount.
      - value: giá trị kế tiếp của chuỗi giá trị
      - done: boolean, nếu là true là giá trị cuối cùng của chuỗi giá trị đã được sử dụng
    Việc duyệt qua iterator chỉ thực hiện một lần duy nhất và không quay ngược trở lại
*/
/*
// Example
function makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start
  let iterationCount = 0
  const rangeIterator = {
    next: function() {
      let result
      if(nextIndex <= end) {
        result = { value: nextIndex, done: false }
        nextIndex += step
        iterationCount++
        return result
      }
      return { value: iterationCount, done: true }
    }
  }
  return rangeIterator
}
let it = makeRangeIterator(1, 6, 2)
console.log(it.next())  // {value: 1, done: false}
console.log(it.next())  // {value: 3, done: false}
console.log(it.next())  // {value: 5, done: false}
console.log(it.next())  // {value: 3, done: true}
*/

/*
  2. Iterable: nghĩa là khả duyệt, tức là có thể lặp qua các phần từ bằng for...of, phải có phương thức iterator, phải được 
  cài đặt thông qua thuộc tính là Symbol.iterator (kiểu symbol)
    Để làm object trở thành một iterable object, chúng ta cần thêm 1 phương thức được đặt tên là Symbol.iterator
*/

// Example
let range = {
  from: 1,
  to: 5
}
// (1) for...of yêu cầu phương thức này
range[Symbol.iterator] = function () {
  // nó trả về 1 iterator object
  // (2) tiếp theo đó, for...of chỉ làm việc trên iterator này
  return {
    current: this.from,
    last: this.to,
    // (3) next() được gọi trên vòng lặp for...of
    next() {
      // (4) phải return về định dạng { done: ..., value: ... }
      if(this.current <= this.last) {
        return { done: false, value: this.current++}
      } else {
        return { done: true}
      }
    }
  }
}
// Execute
for(let num of range) { console.log(num) }  // 1 2 3 4 5

// Lưu ý: (4) String.Array có thể dùng for...of, vì nó có sẵn phương thức @@iterator mặc định trong prototype của nó.
// Trong khi một số kiểu khác thì không có, ví dụ như Object
// (5) iterator object không phải là một iterator object, vì không thể for...of iterator được