
const User = require("../models/employees");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var validator = require("email-validator");
module.exports = {
    login: async function (req, res, next) {
        try {
            if (validator.validate(req.body.empUserName)) {
                const user = await User.findOne({ where: { empUserName: req.body.empUserName } }).catch()
                if (!user) {
                    return res.status(400).send("Cannot find User")
                }
                if (await bcrypt.compare(req.body.empPassword, user.empPassword)) {
                    const accessToken = jwt.sign(user.dataValues, process.env.ACCESS_TOKEN_SECRET)

                    return res.json({
                        user: user,
                        token: accessToken
                    });

                } else {
                    return res.send('failed')
                }

            } else {
                res.json({error:'not valid email address'})
            }


        } catch (error) {
            console.log(error)
            res.status(500).send()
        }

    },
    authenticateToken: function (req, res, next) {
        const authToken = req.headers['authorization']
        const token = authToken && authToken.split(' ')[1]
        if (token == null) return res.sendStatus(401)

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) return res.sendStatus(403)
            req.user = user
            next()
        })


    }
}