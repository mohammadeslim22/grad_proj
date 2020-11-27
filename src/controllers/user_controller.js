
const User = require("../models/employees");
const UserResource = require("../resources/user_resource");
const bcrypt = require('bcrypt')
// const Verifier = require("email-verifier");
var validator = require("email-validator");
const e = require("express");

module.exports = {
    store: async function (req, res, next) {
        if (validator.validate(req.body.empUserName)) {
            const hashedPassword = await bcrypt.hash(req.body.empPassword, 10);

            console.log(req.body)
            const user = await User.create({
                empUserName: req.body.empUserName,
                empPassword: hashedPassword,
                empName: req.body.empName,
                empAddress: req.body.empAddress,
                role: req.body.role

            }).catch()
            if (!user) {
                return res.json(false)
            }
            return res.json(user);
        } else {
            res.send('not valid email address')
        }


    },
    update: async function (req, res, next) {
        const user = await User.findOne({ id: req.body.id })
        const data = {}
        for (key in req.body) {
            data[key] = req.body[key]
        }
        user.update(data)
        if (!user) {
            res.json(notfound)
        } else {
            res.json(updated)
        }

    },
    delete: function (req, res, next) {

    },
    show: function (req, res, next) {

    },
    index: async function (req, res, next) {
        try {
            const users = await User.findAll()

            if (!users) {

            } else {
                return UserResource(res, users);
            }
        } catch (error) {
            console.log(`err ${error}`)
        }


    },
}