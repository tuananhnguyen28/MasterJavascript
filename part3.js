/*
  Phần 3: Thao tác với number, string, array, object và class trong Javascript

    1. Bài tập
    Áp dụng callback, viết một function giải quyết 3 bài toán nhỏ dưới đây.

    Hãy tìm các số tự nhiên bé hơn 10 và là số lẻ.
    Hãy tìm các số tự nhiên bé hơn 20 và là số chẵn.
    Hãy tìm các số tự nhiên bé hơn 30 và là số nếu chia 3 thì dư 2.

    2. Tương tự bài 1 nhưng áp dụng kỹ thuật currying

    3. Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực

    4. Viết hàm kiểm tra trong mảng các số nguyên có tồn tại giá trị chẵn nhỏ hơn 2004 hay không

    5. Viết hàm sắp xếp mảng 1 chiều các số thực tăng dần

    6. Viết hàm tính tổng các phần tử trong mảng

    7. Viết hàm nhận vào 2 mảng a, b. Return về 1 mảng mới chứa các giá trị chỉ xuất hiện 1 trong 2 mảng.

    8. Viết hàm nhận vào 1 string và trả về một Capitalize string. Ví dụ: 'du thanh duoc' -> 'Du Thanh Duoc'

    9. Viết hàm nhận vào 1 string và trả về một reverse string. Ví dụ: 'duoc' -> 'coud'

    10. Viết hàm kiểm tra nhận vào 2 chuỗi và kiểm tra có phải là reverse string của nhau hay không

    11. Viết hàm tìm chữ lặp lại nhiều nhất trong đoạn string.

    12. Viết hàm thay thế những chữ không muốn trong 1 đoạn. Ví dụ replace('du thanh duoc', ['duoc', 'thanh'], 'hello') thì return về du hello hello

    13. Viết hàm xử lý
      // input
      const input = [
        { name: 'A', age: 1 },
        { name: 'B', age: 2 },
        { name: 'C', age: 3 }
      ]
      // output
      const output = { name: ['A', 'B', 'C'], age: [1, 2, 3] }

    14. Viết hàm tính tổng tiền lương, nếu object rổng thì tổng là 0
      const input = {
        An: 100,
        My: 200,
        Nga: 300,
        Huy: 150
      }
      const output = 750

    15. Viết hàm trả về 1 mảng sắp xếp danh sách tăng dần theo chỉ số như name, price. Ví dụ handle(input, 'name')
      const input = [
        {
          name: 'Tivi',
          price: 500
        },
        {
          name: 'Dien thoai',
          price: 100
        },
        {
          name: 'Quan ao',
          price: 80
        }
      ]

    16. Viết lại bài trên mà không mutate input

    17. Viết hàm trả về 1 mảng mới chứa những bất động sản có giá trên 100
      const input = [
        {
          name: 'Khu 1',
          price: 500
        },
        {
          name: 'Khu 2',
          price: 100
        },
        {
          name: 'Khu 3',
          price: 80
        }
      ]
*/

/*
  Solve exercises
*/

// 1.
const CallBack = (num, func) => {
  let result = []
  for(let i = 0; i < num; i++) {
    if(func(i)) {
      result.push(i)
    }
  }
  return result
}
// Can test each call function
CallBack(10, (number) => number % 2 !== 0)
// CallBack(20, (number) => number % 2 === 0)
// CallBack(30, (number) => number % 3 === 2)


// 2. Áp dụng kỹ thuật currying
const Currying = (num) => (func) => {
  let result = []
  for(let i = 0; i < num; i++) {
    if(func(i)) {
      result.push(i)
    }
  }
  return result
}
Currying(10)((number) => number % 2 !== 0)
// Currying(20)((number) => number % 2 === 0)
// Currying(30)((number) => number % 3 === 2)


// 3.
const TimGiaTriLonNhatTrongMang = (array) => {
  let max = array[0]
  for(let i = 0; i < array.length; i++) {
    if(array[i] > max)
      max = array[i]
  }
  return max
}
TimGiaTriLonNhatTrongMang([1, 10, 5, 20, 14, 2, 6])


// 4. 
const CacSoNguyenChanNhoHon2004 = (array) => {
  for(let i = 0; i < array.length; i++) {
    if(array[i] % 2 === 0 && array[i] < 2004)
      return true
  }
  return false
}
if(CacSoNguyenChanNhoHon2004([5, 2005, 1003, 5, 5 , 1, 1, 16]))
  console.log('Có số chẵn nhỏ hơn 2004 trong mảng!')
else
  console.log('Không có số chẵn nhỏ hơn 2004 trong mảng!')
  

// 5.
const MangMotChieuTangDan = (array) => {
  return array.sort((a, b) => a - b) // if descreasing: b - a
}
MangMotChieuTangDan([1, 5, 4, 3, 10, 8])


// 6.
const TinhTongCacPhanTu = (array) => {
  let sum = 0
  array.forEach((item) => {
    sum += item
  })
  return sum
}
console.log('Tổng các phần tử trong mảng [1, 5, 10, 2, 3] =', TinhTongCacPhanTu([1, 5, 10, 2, 3]))


// 7. Viết hàm nhận vào 2 mảng a, b. Return về 1 mảng mới chứa các giá trị chỉ xuất hiện 1 trong 2 mảng.
const a7 = (array1, array2) => {
  let result = []
  array1.forEach((item) => {
    if(!array2.includes(item)) {
      result.push(item)
    }
  })
  array2.forEach((item) => {
    if(!array1.includes(item)) {
      result.push(item)
    }
  })
  return result
}
a7([1, 2, 3, 4, 5], [2, 4, 6, 7, 8])


// 8. Viết hàm nhận vào 1 string và trả về một Capitalize string. Ví dụ: 'du thanh duoc' -> 'Du Thanh Duoc'
const a8 = (str) => 
  str
    .split(' ')
    .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
    .join(' ')
a8('nguyen anh tuan')


// 9. Viết hàm nhận vào 1 string và trả về một reverse string. Ví dụ: 'duoc' -> 'coud'
// Cách 1.
const reverse1 = (str) => [...str].reverse().join('')
reverse1('nguyen anh tuan')
// Cách 2.
const reverse2 = (str) => {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    // lấy từng ký tự từ cuối mảng và push lần lượt vào mảng ban đầu
    result += str.charAt(str.length - i - 1)
  }
  return result
}
reverse2('nguyen anh tuan')


// 10. Viết hàm kiểm tra nhận vào 2 chuỗi và kiểm tra có phải là reverse string của nhau hay không
// Cách 1: dùng for loop
const compare1 = (str1, str2) => {
  lenght1 = str1.length
  lenght2 = str2.length
  if(lenght1 === lenght2) {
    for(let i = 0; i < lenght1; i++) {
      if(str1[i] !== str2[lenght2 - i -1]) {
        return false
      }
    }
    return true
  }
  return false
}
compare1('tuan', 'naut')
// Cách 2: dùng 'every' method
const compare2 = (str1, str2) => {
  if(str1.length === str2.length) {
    return [...str1].every((char, index) => char === str2.charAt(str2.length - index - 1))
  }
  return false
}
compare2('naut', 'tuan')


// 11. Không cần làm vì code tương đối khó hiểu -> ignore


// 12. 
// Cách 1: dùng 'includes' method
const replace1 = (string, array, target) => {
  const tempArray = array.map(item => item.toLowerCase()) // ["nguyen", "anh"]
  const stringToArray = string.split(' ') // ["nguyen", "anh", "tuan"]
  stringToArray.map((item, index) => {
    if (tempArray.includes(item.toLowerCase())) {
      stringToArray[index] = target // thay thể nội dung của 'target' vào vùng bị lặp theo index
    }
  })
  return stringToArray.join(' ')
}
replace1('nguyen anh tuan', ['nguyen', 'anh'], 'vip')
// Cách 2: dùng Regex
const replace2 = (string, array, target) => {
  return string.replace(new RegExp(array.join('|'), 'gi'), target)
}
replace2('nguyen anh tuan', ['nguyen', 'anh'], 'vip')


// 13. 
const ArrayToObject_13 = (array) => {
  let resultObj = { name: [], age: [] }
  array.forEach((item) => {
    resultObj.name.push(item.name)
    resultObj.age.push(item.age)
  })
  return resultObj
}
ArrayToObject_13([
  { name: 'A', age: 1 },
  { name: 'B', age: 2 },
  { name: 'C', age: 3 }
])


// 14. Viết hàm tính tổng tiền lương, nếu object rổng thì tổng là 0
const tienLuongInput = (object) => {
  let tienLuong = 0
  for(const key in object) {
    tienLuong += object[key]
  }
  return tienLuong
}
tienLuongInput({
  An: 100,
  My: 200,
  Nga: 300,
  Huy: 150
})


// 15. Viết hàm trả về 1 mảng sắp xếp danh sách tăng dần theo chỉ số như name hoặc price. Ví dụ handle(input, 'name')
const input_15_1 = [
  {
    name: 'Tivi',
    price: 500
  },
  {
    name: 'Dien thoai',
    price: 100
  },
  {
    name: 'Quan ao',
    price: 80
  }
]
// Sắp xếp giá tăng dần
input_15.sort(function(a, b) {
  return a.price - b.price
})
// Sắp xếp tên tăng dần
const input_15_2 = [
  {
    name: 'Tivi',
    price: 500
  },
  {
    name: 'Dien thoai',
    price: 100
  },
  {
    name: 'Quan ao',
    price: 80
  }
]
input_15_2.sort(function(a, b) {
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  if(x < y) { return -1 }
  if(x > y) { return 1 }
  return 0 // tên giống nhau
})


// 16. tương tự 15


// 17. Viết hàm trả về 1 mảng mới chứa những bất động sản có giá trên 100
const a17 = (array) => {
  return array.filter((item) => {
    return item.price > 100
  })
}
a17([
  {
    name: 'Khu 1',
    price: 500
  },
  {
    name: 'Khu 2',
    price: 100
  },
  {
    name: 'Khu 3',
    price: 80
  }
])