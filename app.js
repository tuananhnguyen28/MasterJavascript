// 1. Ngoặc vuông [] - Set các ký tự

// Phải là m hoặc n
const regex1 = /ma[mn]/i
const string1_1 = 'man is a person'
const string1_2 = 'mao is a person'
console.log(regex1.test(string1_1)) // true
console.log(regex1.test(string1_2)) // false
console.log('-------------------------')

// Khớp tất cả trừ m và n
const regex2 = /ma[^mn]/i
const string2_1 = 'ma'
const string2_2 = 'ma '
const string2_3 = 'may'
console.log(regex2.test(string2_1)) // true
console.log(regex2.test(string2_2)) // true
console.log(regex2.test(string2_3)) // false
console.log('-------------------------')

// Khớp tất cả chữ cái thường
const regex3 = /ma[a-z]/
const string3_1 = 'ma'
const string3_2 = 'mab'
const string3_3 = 'ma*'
console.log(regex3.test(string3_1)) // false
console.log(regex3.test(string3_2)) // true
console.log(regex3.test(string3_3)) // false
console.log('-------------------------')

// Khớp tất cả chữ cái in hoa
const regex4 = /ma[A-Z]/
const string4_1 = 'may'
const string4_2 = 'maW'
console.log(regex4.test(string4_1)) // false
console.log(regex4.test(string4_2)) // true
console.log('-------------------------')

// Khớp tất cả chữ cái
const regex5 = /ma[a-zA-Z]/
const string5_1 = 'mawv'
const string5_2 = 'maWV'
console.log(regex5.test(string5_1)) // true
console.log(regex5.test(string5_2)) // true
console.log('-------------------------')

// Khớp số
const regex6 = /ma[0-9][0-9]/
const string6 = 'ma18'
console.log(regex6.test(string6)) // true
console.log('-------------------------')


// 2. Ngoặc nhọn {} - Giới hạn số lượng ký tự

// Bắt buộc 2 ký tự
const _regex1 = /gy{2}m/i
const _string1_1 = 'gym'
const _string1_2 = 'gyym'
const _string1_3 = 'gyyym'
console.log(_regex1.test(_string1_1)) // false
console.log(_regex1.test(_string1_2)) // true
console.log(_regex1.test(_string1_3)) // false
console.log('-------------------------')

// Giới hạn từ 2-5 ký tự
const _regex2 = /gy{2,5}m/i
const _string2_1 = 'gym' 
const _string2_2 = 'gyym'
const _string2_3 = 'gyyyyym'  
console.log(_regex2.test(_string2_1)) // false
console.log(_regex2.test(_string2_2)) // true
console.log(_regex2.test(_string2_3)) // true
console.log('-------------------------')

// Giới hạn từ 2 ký tự trở lên
const _regex3 = /gy{2,}m/
const _string3 = 'gyyyyyym'
console.log(_regex3.test(_string3)) // true (6 ký tự)
console.log('-------------------------')


// 3. Ngoặc tròn () - Nhóm

// Gôm nhóm 2 ký tự
const __regex1 = /(gy){2,}m/
const __string1_1 = 'gym'
const __string1_2 = 'gygym'
const __string1_3 = 'gygygym'
console.log(__regex1.test(__string1_1)) // false
console.log(__regex1.test(__string1_2)) // true
console.log(__regex1.test(__string1_3)) // true
console.log('-------------------------')

// Bắt đầu ^ và kết thúc $
const __regex2 = /^(gy){2,}m$/
const __string2_1 = 'gygym'
const __string2_2 = 'gygym hello'
console.log(__regex1.test(__string2_1)) // true
console.log(__regex2.test(__string2_2)) // false
console.log('-------------------------')