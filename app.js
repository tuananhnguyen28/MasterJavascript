// Những ký tự hay dùng trong Regex

// 1. Bắt đầu với
const regex1 = /^Tuan/i
const string1 = 'TUAN is the developer'
const result1 = regex1.test(string1)
console.log('result1: ', result1) / true

// 2. Kết thúc với
const regex2 = /Tuan$/i
const string2 = 'My name is tuan'
const result2 = regex2.test(string2)
console.log('result2: ', result2) // true

// 3. Bắt đầu và kết thúc với
const regex3 = /Tuan$/i
const string3 = 'Tuan is the developer, my name is Tuan'
const result3 = regex3.test(string3)
console.log('result3: ', result3) // true

// 4. Khớp với một ký tự bất kỳ
const regex4 = /m.y/i // dấu . chỉ đại diện cho đúng 1 ký tự ở giữa m và y
const string4_1 = 'may vi tinh'
const string4_2 = 'm]y vi tinh'
console.log('result4_1: ', regex4.test(string4_1))  // true
console.log('result4_2: ', regex4.test(string4_2))  // true

// 5. Cho phép ký tự trước đó lặp lại 0 hoặc nhiều lần
const regex5 = /m*y/i
const string5_1 = 'y vi tinh' // 0 ký tự
const string5_2 = 'may vi tinh' // 1 ký tự
const string5_3 = 'mmmey vi tinh' // nhiều ký tự
console.log('result5_1: ', regex5.test(string5_1))  // true
console.log('result5_2: ', regex5.test(string5_2))  // true
console.log('result5_3: ', regex5.test(string5_3))  // true

// 6. Khớp ký tự tùy chọn (đối với ký tự ở trước dấu ? có hay không có đều được)
const regex6 = /ma?y?n/i
const string6_1 = 'mn'
const string6_2 = 'man' 
const string6_3 = 'myn' 
const string6_4 = 'may'
console.log('result6_1: ', regex6.test(string6_1))  // true
console.log('result6_2: ', regex6.test(string6_2))  // true
console.log('result6_3: ', regex6.test(string6_3))  // true
console.log('result6_4: ', regex6.test(string6_4))  // false

// 7. Escape Character: nếu muốn so khớp các ký tự đặc biệt như *,?,!,[... thì chỉ cần thêm dấu \ vào trước ký tự đặc biệt
const regex7 = /tuan?\?\*\!/
// phải có đủ chữ và ký tự đặc biệt trong t/hợp này (ký tự tuỳ chọn trước dấu chấm ? không hiệu lực)
const string7 = 'tuan?*!'  
console.log('result7: ', regex7.test(string7))
