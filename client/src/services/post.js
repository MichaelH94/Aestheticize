import api from './api.js'

module.export = {
    getPosts: () => axios.get('/api/post'),
    add: (post) => axios.post('/api/post', post),
    update: (post) => api.put(`/post/${post.id}`, post)
}