/*
  Các trang web để tham khảo thêm về Regex
  - https://regexr.com
  - https://developer.mozilla.org/vi/docs/Web/Javascript/Guide/Regular_Expressions
*/

/*
  Khái niệm: Regex là các mẫu (pattern), là công cụ cực mạnh cho xử lí chuỗi trong Javascript, Php...
  Viết tắt của Regular Expression, tên thuần Việt là biểu thức chính quy
  Ứng dụng của Regex là so khớp chuỗi dựa trên một mẫu (pattern)
*/

// 1. Regex căn bản: Regex được coi là một object

// Kiểm tra một chuỗi có chứa string 'Name'
const regex = /Tuan/
console.log(regex)
console.log(typeof regex)
const check = regex.test('My name is Tuan')
console.log(check)  // true

// Trong trường hợp nếu string của bạn không có name mà thay vào đó là 'Name' hoặc 'NAME' nhưng vẫn muốn so khớp, thì thêm i phía sau
const _regex2 = /Tuan/i
const checkRegex2 = _regex2.test('My name is TUAN')
console.log(checkRegex2)  // true


// 2. Một số phương thức áp dụng với Regex

// Regex.exec(): return về một array hoặc null
const _regex3 = /name/
const checkRegex3_1 = _regex3.exec('My name is ABC')
const checkRegex3_2 = _regex2.exec('Hello everyone')
console.log(checkRegex3_1)  // return array (if match)
console.log(checkRegex3_2)  // return null (if no match)

// String.match(): return về một array hoặc null
const _regex4 = /name/
const string1 = 'what is your name'
console.log(string1.match(_regex4))  // return array

// String.search(): return về index của chuỗi khớp đầu tiên, nếu không có thì return -1
const _regex5 = /name/
const string2 = 'what is your name'
console.log(string2.search(_regex5))  // 13

// String.replace(): thay thế 1 hoặc nhiều ký tự trong chuỗi, return về chuỗi mới đã được thay thế
const _regex6 = /name/i
const oldString = 'my name is Name'
const newString = oldString.replace(_regex6, 'car')
console.log(newString)

// Trường hợp muốn thay thế toàn bộ ký tự khớp thì thêm g vào cuối regex
const _regex7 = /name/gi
const _oldString2 = 'my name is Name'
const _newString2 = _oldString2.replace(_regex7, 'car')
console.log(_newString2)