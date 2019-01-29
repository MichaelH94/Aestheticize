import API from './api.js'

const Post = {
    newMusicPost: (postdata) => API.post('/newmusic', postdata),
    newGamePost: (postdata) => API.post('/newgame', postdata),
    findPosts: (data) => API.post('/findposts', data),
    newUserPost: (data) => API.post('/newuserpost', data)
}

export default Post;