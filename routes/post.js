const router = require("express").Router()
const postControl = require('../controllers/post.js');


router.route('/api/newmusic').post(postControl.newArtistPost)

router.route('/api/newgame').post(postControl.newGamePost)

router.route('/api/findposts').post(postControl.findPosts)

router.route('/api/newuserpost').post(postControl.newUserPost)

module.exports = router;