const express = require('express')
const router = express.Router()
const User = require('../models/user.js')
const passport = require('../passport')


router.post('/create', (req, res) => {
    const newUser = new User({
        username: req.username,
        password: req.password,
        age: req.age,
        avatar: req.avatar,
        music: req.music,
        game: req.game
    })
    console.log("/create")
})

// router.post('/login', (req, res)=> {
//         console.log('logged in', req.user);
//         passport.authenticate('local')
//         var userInfo = {
//             username: req.user.username
//         };
//         res.send(userInfo);
//     }
// )



module.exports = router;