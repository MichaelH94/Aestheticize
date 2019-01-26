const router = require("express").Router()
const userControl = require('../controllers/user.js')


router.route('/api/create').post(userControl.create)

router.route('/api/login').post(userControl.login)


router.get('/', (req, res, next) => {
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})


module.exports = router;