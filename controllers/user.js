const db = require('../models')

module.exports =  {
    create: function (req, res)  {
        db.user
        .create(req.body)
        .then(dbModel => res.json(dbModel))
    }
}