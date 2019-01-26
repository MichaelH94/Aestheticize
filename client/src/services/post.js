import API from './api.js'

const Post = {
    newMusicPost: (postdata) => API.post('/newmusic', postdata),
    newGamePost: (postdata) => API.post('/newgame', postdata)
}

export default Post;