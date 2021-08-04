/*
  Đọc câu hỏi cũng như bài tập, sau đó kiểm tra lại bằng Console tab trên trình duyệt để hiểu các khái niệm
    - https://github.com/dtdgroup/Javascript/blob/master/0.%20Bai%20tap/Can%20ban/2.md
or  - https://github.com/dtdgroup/Javascript/blob/master/0.%20Bai%20tap/Can%20ban/2.pdf
*/

/*
  Bài tập luyện tập (về thuật toán):
    1. Viết hàm nhận vào số nguyên dương n và return lại một mảng các ước số của nó
    2. Viết hàm nhận vào số nguyên dương n và return lại tổng tất cả ước số nguyên dương của nó
    3. Viết hàm kiểm tra số nguyên dương n có phải số nguyên tố hay không
    4. Viết hàm tính tổng các chữ số của số nguyên dương n
    5. Viết chương trình nhập tháng, năm. Hãy cho biết tháng đó có bao nhiêu ngày. Biết rằng năm nhuận là năm chia hết cho 400 hoặc chia hết cho 4 nhưng không chia hết cho 100.
    6. Viết hàm in bảng cửu chương ra màn hình
    7. Tìm số fibonacci thứ n. Cụ thể, các số đầu tiên của dãy Fibonacci là 1, 1, 2, 3, 5, 8, 13...
    8. Tính tổng n số fibonacci đầu tiên
*/

// 1.
// Dùng for
const UocSo_For = (n) => {
  const arrResult = []
  for(let i = 1; i <= n; i ++) {
    if(n % i === 0) {
      arrResult.push(i)
    }
  }
  return arrResult
}
UocSo_For(15)
//Dùng while
const UocSo_While = (n) => {
  const arrResult = []
  let i = 1
  while(i <= n) {
    if(n % i === 0) {
      arrResult.push(i)
    }
    i++
  }
  return arrResult
}
UocSo_While(18)

// 2.
const TongUocSo = (n) => {
  sum = 0
  for(let i = 1; i <= n; i++) {
    if(n % i === 0) {
      sum += i
    }
  }
  return sum
}
TongUocSo(6)

// 3.
var n = prompt('Nhập số nguyên dương', 0)
const KiemTraSoNguyenTo = (n) => {
  // Gắn cờ
  let flag = true
  if(n < 2)
    flag = false
  else {
    for(let i = 2; i <= n / 2; i++) {
      if(n % i === 0) {
        flag = false
        break
      }
    }
  }
  if(flag) {
    console.log(`${n} là số nguyên tố.`);
  }
  else {
    console.log(`${n} không là số nguyên tố.`);
  }
}
KiemTraSoNguyenTo(n)

// 4.
// Dùng for-of và ép kiểu về số để cộng
const TinhTongCacChuSo_ForOf = (n) => {
  let sum = 0
  const string = String(n)
  for(let char of string) {
    sum += Number(char)
  }
  return sum
}
console.log('Kết quả cộng các chữ số nguyên dương =', TinhTongCacChuSo_ForOf(123))

// 5.
// Dùng công thức và switch-case
const soNgayTrongThang = (thang, nam) => {
  const tinhNamNhuan = (nam) => {
    if(nam % 400 === 0) {
      return true
    }
    if(nam % 4 === 0 && nam % 100 !== 0) {
      return true
    }
    return false
  }
  switch(thang)
  {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12: {
      return 31
      break
    }
    case 4: case 6: case 9: case 11: {
      return 30
      break
    }
    case 2: {
      if(tinhNamNhuan(nam)) {
        return 29
        break
      }
      else {
        return 28
        break
      }
    }
  }
}
soNgayTrongThang(2, 401)
// Dùng công thức và hàm javascript 'includes'
const demNgay = (thang, nam) => {
  const namNhuan = (nam) => {
    if(nam % 400 === 0) { return true }
    if(nam % 4 === 0 && nam % 100 !== 0) { return true }
    return false
  }
  if([1, 3, 5, 7, 8, 10, 12].includes(thang)) { return 31 }
  else if([4, 6, 9, 11].includes(thang)) { return 30 }
  else {
    if(namNhuan(nam)) { return 29 }
    else { return 28 }
  }
}
demNgay(12, 2001)

// 6.
const InBangCuuChuong = () => {
  document.write("<table border=1 width = 100%>")
  for(i = 1; i <= 9; i++) {
    document.write("<tr>")
    for(j = 2; j <= 10; j++) 
      document.write("<td>" + j + "x " + i +"=" + (j * i))
      document.write("</td>")
      document.write("</tr>")
  }
  document.write("</tr></table>")
}
InBangCuuChuong()

// 7.
const TimSoFibonacciThuN = (n) => {
  if(n === 1 || n === 2) {
    return 1
  }
  return TimSoFibonacciThuN(n - 1) + TimSoFibonacciThuN(n - 2)
}
TimSoFibonacciThuN(10)

// 8.