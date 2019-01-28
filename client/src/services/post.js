import API from './api.js'

const Post = {
    newMusicPost: (postdata) => API.post('/newmusic', postdata),
    newGamePost: (postdata) => API.post('/newgame', postdata),
    findPosts: (data) => API.get('/findposts', data)
}

export default Post;