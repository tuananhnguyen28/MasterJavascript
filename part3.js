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