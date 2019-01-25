const db = require('../models/user.js')

module.exports =  {
    create: function (req, res)  {
        db.user
        .create(req.body)
        .then(dbModel => res.json(dbModel))
    }
}