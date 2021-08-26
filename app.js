// Add hàm xử lý 'Kỳ trả nợ' tương ứng với mỗi tháng (dòng)
const handlePeriod = (period, dateString, month) => {
  if(month === 0) {
    const currentDate = new Date(dateString)
    period.push(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
  } else {
    const pre = new Date(dateString)
    let month = pre.getMonth() + 2,
      year = pre.getFullYear(),
      date = pre.getDate()
    if(month > 12) {
      month = 1
      year += 1
    }
    // Do một số tháng không có đủ ngày -> cộng thêm 1 ngày qua tháng sau
    const currentDate = new Date(`${year}-${month}-${date}`)
    period.push(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`)
  }
  return period[month]
}

// Bắt sự kiện submit của form
document.querySelector('form').addEventListener('submit', event => {

  event.preventDefault()

  // Mỗi lần click vào button 'Tính Toán Khoản Vay' thì clear table ở bên dưới để load ra dữ liệu mới
  document.querySelector('table tbody').innerHTML = ''

  // Tiền gốc vay
  const loan = Number(document.getElementById('loan').value)

  // Thời hạn vay
  const months = Number(document.getElementById('months').value)

  // Lãi suất
  const rate = Number(document.getElementById('rate').value)

  // Ngày Giải Ngân
  const disbursementDate = document.getElementById('disbursementDate').value

  // Tổng Số Tiền Lãi
  const interest = Math.round((loan * months * rate) / 1200)

  // Tổng Gốc Và Lãi Phải Trả
  const originalAndInterest = loan + interest

  // Fill kết quả vào 2 textbox readonly
  document.getElementById('interest').value = interest.toLocaleString()
  document.getElementById('originalAndInterest').value = originalAndInterest.toLocaleString()

  // Khai báo biến 'period' dạng array để load tất cả các tháng ở colum 'Kỳ trả nợ'
  const period = []

  // Dùng vòng lặp for để display tương ứng với số tháng
  for(let i = 0; i <= months; i++) {
    if(i === 0) {
      html = `
        <td>${i}</td>
        <td>${handlePeriod(period, disbursementDate, i)}</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      `
    } else if(i === months) { // tháng cuối cùng tương ứng với số tháng
      // Gốc hàng tháng
      const originalPerMonth = loan - Math.round(loan / months) * (months - 1)
      // Lãi hàng tháng
      const interestPerMonth = interest - Math.round((loan * rate) / 1200) * (months - 1)
      // Gốc và lãi hàng tháng
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
      html = `
        <td>${i}</td>
        <td>${handlePeriod(period, period[i - 1], i)}</td>
        <td>${originalPerMonth}</td>
        <td>${interestPerMonth}</td>
        <td>${originalAndInterestPerMonth}</td>
        <td>0</td>
      `
    } else {  // các tháng ở giữa
      const originalPerMonth = Math.round(loan / months)
      const interestPerMonth = Math.round(loan * rate) / 1200
      const originalAndInterestPerMonth = originalPerMonth + interestPerMonth
      // Gốc còn lại
      const remainingOriginal = loan - originalPerMonth * i
      html = `
        <td>${i}</td>
        <td>${handlePeriod(period, period[i - 1], i)}</td>
        <td>${originalPerMonth}</td>
        <td>${interestPerMonth}</td>
        <td>${originalAndInterestPerMonth}</td>
        <td>${remainingOriginal}</td>
      `
    }
    // Load dữ liệu vào bảng
    const tr = document.createElement('tr')
    tr.innerHTML = html
    document.querySelector('table tbody').appendChild(tr)
  }
})