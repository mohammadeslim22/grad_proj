const Settings = require("../models/setting");

module.exports = {
    store: async function (req, res, next) {

    },
    update: async function (req, res, next) {
        console.log(req.body)
        for (let i = 0; i < 4; i++) {
            Settings.update({ value: req.body[i].value }, {
                where: {
                    id: req.body[i].id
                }
            }
            )
        }
        return res.json(true)

    },
    delete: async function (req, res, next) {

    },
    show: async function (req, res, next) {

    },
    index: async function (req, res, next) {
        const settings = await Settings.findAll()
        return res.json(settings)

    },
}