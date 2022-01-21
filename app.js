// Mini Tinder app
// Use https://randomuser.me/api?format=pretty to get the fake data
const data = [
  {
    name: 'Jenipher',
    age: 25,
    gender: 'female',
    location: 'Blenheim',
    avatar: 'https://randomuser.me/api/portraits/women/13.jpg'
  },
  {
    name: 'Otavalankatu',
    age: 22,
    gender: 'male',
    location: 'Tavastia Proper',
    avatar: 'https://randomuser.me/api/portraits/men/59.jpg'
  },
  {
    name: 'Rachel',
    age: 23,
    gender: 'male',
    location: 'Saint-Étienne',
    avatar: 'https://randomuser.me/api/portraits/women/75.jpg'
  },
  {
    name: 'Cassandra',
    age: 20,
    gender: 'female',
    location: 'Albany',
    avatar: 'https://randomuser.me/api/portraits/women/31.jpg'
  }
]

// // Dùng iterator
// const profileIterator = data => {
//   let index = 0
//   return {
//     next() {
//       return index < data.length
//         ? { value: data[index++], done: false }
//         : { done: true }
//     }
//   }
// }

// Dùng generator function
function* profileGenerator(data) {
  let index = 0
  while(index < data.length) {
    yield data[index++]
  }
}

// Execute
// const profile = profileIterator(data)
const profile = profileGenerator(data)
// console.log(profile.next())
// console.log(profile.next())
// console.log(profile.next())
// console.log(profile.next())
// console.log(profile.next())

// Define the function to pass on others
const handleNext = () => {
  const info = profile.next().value
  if (info) {
    document.getElementById('profile-avatar').innerHTML = `
      <img src="${info.avatar}"/>
    `
    document.getElementById('profile-info').innerHTML = `
    <ul class="list-group mb-3">
      <li class="list-group-item">
        Name: ${info.name}
      </li>
      <li class="list-group-item">
        Age: ${info.age}
      </li>
      <li class="list-group-item">
        Gender: ${info.gender}
      </li>
      <li class="list-group-item">
        Location: ${info.location}
      </li>
    </ul>
    `
  } else {
    location.reload()
  }
}

// Dùng window để đảm bảo 100% hTML load xong mới thực thi câu lệnh javascript
window.addEventListener('DOMContentLoaded', () => {
  // gọi function này để load dữ liệu person đầu tiên
  handleNext()
  document.getElementById('next').addEventListener('click', handleNext)
})