const router = require("express").Router()
const userControl = require('../controllers/user.js')


router.route('/api/create').post(userControl.create)

router.route('/api/login').post(userControl.login)



module.exports = router;