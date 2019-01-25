import API from './api.js'

const Account = {
    getUser: (data) => API.get(`/user/${data.username}`, data),
    create: (userdata) => API.post('/create', userdata),
    update: (post) => API.put(`/post/${post.id}`, post)
}

export default Account;