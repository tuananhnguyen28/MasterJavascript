// Set: là một tập hợp đặc biệt, chỉ có value, không có key, nơi chúng chỉ xuất hiện được một lần

// 1. Ví dụ về khởI tạo set
const setDemo = new Set()
let john = { 'name': 'John' }
let kary = { 'name': 'kary' }
let peter = { 'name': 'peter' }

setDemo.add(john).add(kary).add(peter)
console.log('Bộ set sau khi add các phần tử:')
console.log(setDemo)

// set không thể thêm trùng (chỉ xuất hiện được 1 lần)
const setDemo2 = new Set()
let john2 = { 'name': 'John' }
let kary2 = { 'name': 'kary' }
let peter2 = { 'name': 'peter' }

setDemo2.add(john2).add(kary2).add(peter2).add(kary2)
console.log('Kết quả set sau khi thêm trùng một phần tử:')
console.log(setDemo2)

// // xoá 1 phần tử trong set
// setDemo.delete(john)

// // kiểm tra 1 set có value nào hay không
// setDemo.has(john)

// // để xoá hết phần tử trong set
// setDemo.clear()

// // để biết được size của set
// setDemo.size


// 2. Ví dụ về remove các phần tử trùng lặp trong mảng
const arr = [1, 2, 3, 4, 5, 1, 2, 2]
const newArr1 = Array.from(new Set(arr))
// Dùng Speard operator
const newArr2 = [...new Set(arr)]
console.log('Mảng sau khi lượt bỏ các phần tử trùng lặp:')
console.log('newArr1', newArr1)
console.log('newArr2', newArr2) // sperator


// 3. LặP trong set
for (const item of setDemo2) { console.log(item) }
setDemo2.forEach((value, valueAgain, set) => {
  console.log('value', value)
  console.log('valueAgain', valueAgain)
});


// 4. Lấy các {value}, không lấy các {key}
console.log('Lấy các {value}, không lấy các {key}')
console.log(setDemo2.keys())  // only value
console.log(setDemo2.values())  // only value
console.log(setDemo2.entries()) // return iterable (value và key giống nhau)