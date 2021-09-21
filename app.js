// 1. Tạo Regex cho Email
const REGEX_EMAIL = /^[a-zA-Z\d\.\-\_]+(\+\d+)?@[a-zA-Z\d\.\-]{1,63}\.[a-zA-Z]{1,5}$/
const needToCheckString = 'nguyenanhtuan+01@gmail-vn.com'

// 2. Tạo Regex cho Name (required, là tên người - tiếng Anh hoặc tiếng Việt không chứa số, max 50 ký tự)
const REGEX_NAME = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+((\s[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]+)?)+$/
const theNameNeedToCheck_1 = 'Nguyễn Anh Tuấn'
const theNameNeedToCheck_2 = 'ab  Tuấn'
const theNameNeedToCheck_3 = '1goodfornewsHW'
console.log(REGEX_NAME.test(theNameNeedToCheck_1)) // true
console.log(REGEX_NAME.test(theNameNeedToCheck_2)) // false
console.log(REGEX_NAME.test(theNameNeedToCheck_3)) // false

// 3. Định nghĩa một số hàm check
const isRequired = value => value.trim() !== '' ? '' : 'Trường này thì bắt buộc'
const isEmail = value => REGEX_EMAIL.test(value) ? '' : 'Email không đúng định dạng'
const isHomanName = value => REGEX_NAME.test(value) ? '' : 'Tên không đúng định dạng'
// Currying (High Order Function)
const min = num => value => value >= num ? '' : `Độ dài tối thiểu là ${num}`
const max = num => value => value <= num ? '' : `Độ dài tối đa là ${num}`
const isValid = (value, funcs) => {
  for(const func of funcs) {
    const message = func(value)
    if(message) { return message }
  }
  return ''
}

// 4. Lắng nghe sự kiện submit form
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  const emailNode = document.getElementById('email')
  const nameNode = document.getElementById('name')
  const genderNode = document.getElementById('gender')
  const nationNode = document.querySelector('input[name="nation"]:checked')
  const passwordNode = document.getElementById('password')
  const confirmedPasswordNode = document.getElementById('confirmedPassword')
  const agreeNode = document.querySelector('input#agree:checked')

  const errorForm = [
    isValid(emailNode.value, [isRequired, isEmail]),
    isValid(nameNode.value, [isRequired, isHomanName]),
    isValid(genderNode.value, [isRequired]),
    isValid(nationNode ? nationNode.value : '', [isRequired]),
    isValid(passwordNode.value, [isRequired, min(8), max(20)]),
    isValid(confirmedPasswordNode.value, [isRequired, min(8), max(20)]),
    isValid(agreeNode ? agreeNode.value : '', [isRequired]),
  ]
  console.log(errorForm)
})