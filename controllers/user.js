const db = require('../models/user.js')

const userControl = {
    create: (req, res) => {
        console.log(req.body)
        db
        .create(req.body)
        .then(data => res.json(data))
        .catch(err => console.log(err));
    },
    login: (req, res) => {
        db
        .find({
            username: req.body.username,
            password: req.body.password})
        .then(data => 
            res.json(data)
        )
        .catch(err => console.log(err))
    }
}

module.exports = userControl