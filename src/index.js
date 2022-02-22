import http from './http'
import 'bootstrap/scss/bootstrap.scss'

http.getPosts().then(res => {
  console.log(res)
})