
const router = require("express").Router()
const userControl = require('../controllers/user.js')
const passport = require('../passport')


router.route('/create').post(userControl.create)

router.post('/login', (req, res)=> {
        console.log('logged in', req.user);
        passport.authenticate('local')
        var userInfo = {
            username: req.user.username
        };
        res.send(userInfo);
    }
)



module.exports = router;