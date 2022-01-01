// // get
// axios({
//   method: 'get',
//   url: 'https://reqres.in/api/users?page=2'
// }).then((res) => {
//   console.log('Thanh cong!', res)
// }).catch((err) => {
//   console.log('That bai!', err)
// })


// // post
// axios({
//   method: 'post', 
//   url: 'https://reqres.in/api/users', 
//   data: {
//     name: 'Tuan Nguyen'
//   }
// }).then((res) => {
//   console.log('Thanh cong.', res)
// }).catch((err) => {
//   console.log('That bai.', err)
// })


// // Request method aliases
// axios.post('https://reqres.in/api/users', {
//   name: 'Tuan Nguyen 2'
// })
// .then((res) => {
//   console.log('Thanh cong.', res)
// })
// .catch((err) => {
//   console.log('That bai.', err)
// })


// // The Axios Instance (to re-use the config)
// const instance = axios.create({
//   baseURL: 'https://reqres.in/api/',
//   timeout: 10000,
//   headers: {
//     'Content-Type': 'application/txt',
//     token: '11889900'
//   }
// })

// instance
//   .post('users', {
//     name: 'Tuan Nguyen 3'
//   })
//   .then((res) => {
//     console.log('Thanh cong.', res)
//   })
//   .catch((err) => {
//     console.log('That bai.', err)
//   })


// // The Axios Instance (using class to re-use)
// class Http {
//   constructor() {
//     this.instance = axios.create({
//       baseURL: 'https://reqres.in/api/',
//       timeout: 10000,
//       headers: {
//         'Content-Type': 'application/txt',
//         token: '12909123'
//       } 
//     })
//   }
// }
// const http = new Http().instance
// http
//   .post('users', {
//       name: 'Tuan Nguyen 4'
//     })
//   .then((res) => {
//     console.log('Thanh cong.', res)
//   })
//   .catch((err) => {
//     console.log('That bai.', err)
//   })


// // Interceptors (server và client, khi gọi và server trả về đều đi qua interceptors)
// class Http2 {
//   constructor() {
//     this.instance = axios.create({
//       baseURL: 'https://reqres.in/api/',
//       timeout: 10000,
//       headers: {
//         'Content-Type': 'application/txt',
//         token: '123456789'
//       } 
//     })
//     this.instance.interceptors.response.use(
//       (response) => {
//         const result = {
//           data: response.data,
//           status: response.status
//         }
//         return result
//       },
//       ({ response }) => {
//         const result = {
//           data: response.data,
//           status: response.status
//         }
//         return Promise.reject(result)
//       }
//     )
//   }
// }

// const http2 = new Http2().instance
// http2
//   .post('users', {
//       name: 'Tuan Nguyen 5'
//     })
//   .then((res) => {
//     console.log('Thanh cong.', res)
//   })
//   .catch((err) => {
//     console.log('That bai.', err)
//   })


// Interceptors (get)
class Http3 {
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://reqres.in/api/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/txt',
        token: '123456789'
      } 
    })
    this.instance.interceptors.request.use(
      (config)  => {
        const accessToken = localStorage.getItem('accessToken')
        if(accessToken) { config.headers.authorization = accessToken }
        return config
      },
        (error) => Promise.reject(error.response)
      )
  }
}

const http3 = new Http3().instance
http3
  .post('users', {
      name: 'Tuan Nguyen 6'
    })
  .then((res) => {
    console.log('Thanh cong.', res)
  })
  .catch((err) => {
    console.log('That bai.', err)
  })