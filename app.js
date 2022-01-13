new Api().getInfo('tuananhnguyen28').then(res => {
  console.log(res)
}).catch(error => {
  console.log(error)
})

// Bắt sự kiện khi nhấn vào button Search -> load dữ liệu từ Github
document.getElementById('form-search').addEventListener('submit', 
async event => {
  event.preventDefault()
  const ui = new Ui()
  const username = document.getElementById('username').value
  try {
    const {profile, repos} = await new Api().getInfo(username)
    ui.render(profile, repos)
    ui.alert(`Tìm thấy user: ${username}`, 'success')
  } catch (error) {
    ui.alert(error)
  }
})