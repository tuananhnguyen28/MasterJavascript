/* 1. Iterator: là 1 object có thể lấy ra lần lượt các iterator result, implement method next()
  và bằng cách gọi method next() có thể trả về iterator result.
    Giá trị trả về cuối cùng là kích thước của dãy giá trị mà nó đã tạo, được ghi nhận trong 
    biến iterationCount.
      - value: giá trị kế tiếp của chuỗi giá trị
      - done: boolean, nếu là true là giá trị cuối cùng của chuỗi giá trị đã được sử dụng
    Việc duyệt qua iterator chỉ thực hiện một lần duy nhất và không quay ngược trở lại
*/
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