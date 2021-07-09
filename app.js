// 1. If
let check = false
if(!check) {
  console.log('Checked')
}

// 2. Else if
let a = -1
if(a > 0) {
  console.log('a lớn hơn 0')
}
else {
  console.log('a nhỏ hơn 0')
}

// 3. If else if
let b = 1
if(b < 0) {
  console.log('b là số am')
}
else if(b === 0) {
  console.log('b là số 0')
}
else {
  console.log('b là số dương')
}

// 4. Switch case
let step = 4
switch(step) {
  case 0: 
    console.log('a = 0')
    break
  case 1:
    console.log('a = 1')
    break
  case 2:
  case 3:
    console.log('a = 2 || a = 3')
  default:
    break
}

// 5. Nâng cao

// 5.1 Dùng toán tử ba ngôi
let c = null // 1, true, etc.. -> có giá trị
c ? console.log('c có giá trị') : console.log('c không có giá trị')
let d = { name: 'Tuan' } // 0 -> chuỗi rỗng ''
let e = d ? 'Hello' : ''
console.log(e)

// 5.2 Toán tử logic
let f = 0
!f && console.log('f không có giá trị') // toán tử AND gặp false thì dừng lại