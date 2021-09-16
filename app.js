// 1. Tạo Regex cho Email
const emailRegex = /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-]{1,63}\.[a-zA-Z]{1,5}$/
const needToCheckString = 'nguyenanhtuan+01@gmail-vn.com'

// 2. Tạo Regex cho Name (required, là tên người - tiếng Anh hoặc tiếng Việt không chứa số, max 50 ký tự)
const nameRegex = /^[a-zA-Z\u00c0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)?)+$/
const theNameNeedToCheck_1 = 'Nguyễn Anh Tuấn'
const theNameNeedToCheck_2 = 'ab  Tuấn'
const theNameNeedToCheck_3 = '1goodfornewsHW'
console.log(nameRegex.test(theNameNeedToCheck_1)) // true
console.log(nameRegex.test(theNameNeedToCheck_2)) // false
console.log(nameRegex.test(theNameNeedToCheck_3)) // false