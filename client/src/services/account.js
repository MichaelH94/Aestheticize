import API from './api.js'

const Account = {
    create: (userdata) => API.post('/create', userdata),
    login: (data) => API.post('/login', data),
}

export default Account;