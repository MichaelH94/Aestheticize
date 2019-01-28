const router = require("express").Router()
const postControl = require('../controllers/post.js');


router.route('/api/newmusic').post(postControl.newArtistPost)

router.route('/api/newgame').post(postControl.newGamePost)

router.route('/api/findposts').get(postControl.findPosts)

module.exports = router;