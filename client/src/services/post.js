import api from './api.js'

export default = {
    getPosts: () => axios.get('/api/post'),
    add: (post) => axios.post('/api/post', post)
}