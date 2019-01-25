const router = require("express").Router()
const userControl = require('../controllers/user.js')
const passport = require('../passport')

router.route('/api/create').post(userControl.create)

router.route('/login').post(userControl.login)


router.get('/', (req, res, next) => {
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})


module.exports = router;