import API from './api.js'

const Account = {
    create: (userdata) => API.post('/create', userdata),
    login: (data) => API.get.post('/login', data)
}

export default Account;