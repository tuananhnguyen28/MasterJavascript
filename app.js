// Vòng lặp while: kiểm tra điều kiện trước khi thực hiện code bên trong
let a = 1
let sum1 = 0
while(a <= 10) {
    sum1 += 1
    a++
    console.log('a =', a)
    console.log('sum =', sum1)
    console.log('----------')
}
console.log('a finally =', a)
console.log('sum finally =', sum1)

// Vòng lặp do-while: thực hiện code bên trong ít nhất một lần rồi mới kiểm tra điều kiện
let b = 11
let sum2 = 0
do {
    sum2 += 1
    b++
    console.log('b =', b)
    console.log('_sum =', sum2)
    console.log('----------')
} while(b <= 10)
console.log('b finally =', b)
console.log('_sum finally =', sum2)

// Vòng lặp for: 
let sum3 = 0
for(let i = 1; i <= 10; i++) {
    console.log(i)
    sum3 += i
}
console.log('Sum =', sum3)

// Vòng lặp for-in: dùng lặp các key của object
let person = { fname: 'Tuan', lname: 'Nguyen', age: 28}
let text1 = ''
for(let x in person) {
    console.log(x) // x là key
    console.log(person[x]) // person[x] là value
    text1 += person[x] + ' '
}
console.log(text1)

// Vòng lặp for-of: dùng lặp các value của interable object (có thể lặp) điển hình như array hay string
let people = ['Nick', 'Alan', 'Ben']
let text2 = ''
for(let value of people) {
    console.log(value)
    text2 += value + ' '
}
console.log(text2)