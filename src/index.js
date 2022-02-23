import http from './http'
import 'bootstrap/scss/bootstrap.scss'

const renderAll = () => [
  http.getPosts().then(res => {
    const listNode = document.getElementById('list')
    listNode.innerHTML = ''
    const html = res.reduce((result, current) => {
      result += `
        <div class="card flex-row align-items-center justify-content-between p-2 mb-3">
        <div>
          <p><strong>${current.title}</strong></p>
          <p>${current.description}</p>
        </div>  
        <div>
          <button class="btn btn-info" id="btn-start-edit" data-id="${current.id}">Edit</button>
          <button class="btn btn-danger" id="btn-remove"  data-id="${current.id}">Remove</button>
        </div>
      </div>
      `
      return result
    }, '')
    listNode.innerHTML = html
  })
]

const init = () => {

  // Render All
  renderAll()

}

window.addEventListener('DOMContentLoaded', init) 