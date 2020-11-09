const Car = require("../models/cars");
const CarResource = require("../resources/car_resource");

module.exports = {
    store:async function (req, res, next) {
        console.log(req.body)
        const car = await Car.create({
            carNumber:req.body.carNumber
        }).catch()
        if (!car) {
            return res.json(false)
        }
        return res.json(car);

    },
    update: function (req, res, next) {

    },
    delete: function (req, res, next) {

    },
    show: function (req, res, next) {
        

    },
    index:async function (req, res, next) {
        try {
            const cars = await Car.findAll()

            if (!cars) {

            } else {
                return CarResource(res, cars);
            }
        } catch (error) {
            console.log(`err ${error}`)
        }   
    },
}