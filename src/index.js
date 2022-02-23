import http from './http'
import 'bootstrap/scss/bootstrap.scss'

// Get
const renderAll = () => {
  // Thêm 'return' để trả về 1 promise, để tiện xử lý sau này (để biết khi nào render thành công)
  return http.getPosts().then(res => {
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
          <button class="btn btn-info btn-start-edit" id="" data-id="${current.id}">Edit</button>
          <button class="btn btn-danger btn-remove" id=""  data-id="${current.id}">Remove</button>
        </div>
      </div>
      `
      return result
    }, '')
    listNode.innerHTML = html
  })
}

// Create
const create = (title, description) => {
  http.createPost({title, description}).then(res => {
    document.getElementById('title').value = ''
    document.getElementById('description').value = ''
    return renderAll()
  }).then(() => {
    alert('Create successfully!')
  })
}

// Update
const startUpdate = id => {
  http.readPost(id).then(res => {
    document.getElementById('title').value = res.title
    document.getElementById('description').value = res.description
    document.getElementById('btn-group').className = 'd-flex justify-content-between'
    document.getElementById('btn-add').classList.add('d-none')
    document.getElementById('btn-edit').dataset.id = id
  })
}

// Back
const clearForm = () => {
  document.getElementById('title').value = ''
  document.getElementById('description').value = ''
  document.getElementById('btn-group').className = 'd-none justify-content-between'
  document.getElementById('btn-add').classList.remove('d-none')
  document.getElementById('btn-edit').dataset.id = ''
}

// Update and save to Local Storage
const update = (title, description) => {
  const id = document.getElementById('btn-edit').dataset.id
  http.updatePost(id, {title, description}).then(res => {
    clearForm()
    return renderAll()
  }).then(() => {
    alert('Update successfully!')
  })
}

// Delete
const _delete = id => {
  http.deletePost(id).then(res => {
    return renderAll()
  }).then(() => {
    alert('Delete successfully!', 'danger')
  })
}

// Alert message once create/update/delete successfully
const alert = (message, type = 'success') => {
  const alertNode = document.createElement('div')
  alertNode.className = `alert alert-${type}`
  alertNode.textContent = message
  document.getElementById('notification').appendChild(alertNode)
  setTimeout(() => {
    alertNode._delete()
  }, 2000)
}

const init = () => {

  // Render All
  renderAll()

  // Create
  document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    create(title, description)
  })

  // Start Update
  document.getElementById('list').addEventListener('click',
  (event) => {
    if(event.target.classList.contains('btn-start-edit')) {
      const id = event.target.dataset.id
      startUpdate(id)
    }
  })

  // Back
  document.getElementById('btn-back').addEventListener('click', event => {
    event.preventDefault()
    clearForm()
  })

  // Update and save to Local Storage
  document.getElementById('btn-edit').addEventListener('click', event => {
    event.preventDefault()
    const title = document.getElementById('title').value
    const description = document.getElementById('description').value
    update(title, description)
  })

  // Delete
  document.getElementById('list').addEventListener('click', event => {
    if(event.target.classList.contains('btn-remove')) {
      const id = event.target.dataset.id
      const name = event.target.parentElement.previousElementSibling.firstElementChild.firstElementChild.textContent
      const isConfirmed = confirm(`Do you want to delete '${name}'`)
      if(isConfirmed) {
        _delete(id)
      }
    }
  })

}

window.addEventListener('DOMContentLoaded', init) 