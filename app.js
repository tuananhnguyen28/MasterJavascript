/*
  ES6 Module:
    - lưu trữ từng file, mỗi file là một module
    - mọi thứ trong module, mặc định là private
    - biến và các class được "xuất" ra ngoài bằng từ khoá export
    - những thứ export ra bên ngoài là public, còn giữ lại là private
    - code bên trong module luôn luôn chạy ở chế độ strict mode
*/

// import 1 module
import { greeting, handleSum, mul as handleMul } from './utils.js'

console.log(greeting)
console.log(handleMul(1, 2))
console.log(handleSum(1, 6))
console.log('divide property in utils file can not execute:')
console.log(divide(4, 2))