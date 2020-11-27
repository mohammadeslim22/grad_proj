const Car = require("../models/cars");
const CarTransaction = require("../models/cars_transactions");
const CarResource = require("../resources/car_resource");
const Sequelize = require('sequelize')
function WithoutTime() {
    var date = new Date(Date.now());
    date.setHours(0, 0, 0, 0);
    console.log(date)
    return date;
}

module.exports = {
    store: async function (req, res, next) {
        console.log(req.body)
        const car = await Car.create({
            carNumber: req.body.carNumber,
            status: req.body.status,

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

    index: async function (req, res, next) {
        try {
            const { sortBy, sortDesc, page, itemsPerPage, exist } = req.query

            if (parseInt(exist) == 0) {
                console.log(itemsPerPage)
                filter = {}
                if (parseInt(itemsPerPage) > 0) {
                    filter = {
                        limit: parseInt(itemsPerPage),
                        offset: (parseInt(page) - 1) * parseInt(itemsPerPage),
                    };
                }
                // const cars = await Car.findAndCountAll({
                //     include: [{
                //         model: CarTransaction,
                //         attributes: ["transaction_time", "createdAt"],
                //         separate: true,
                //         limit: 1,
                //         where: {
                //             transaction_type: 0,
                //             transaction_time: {
                //                 gte: WithoutTime()
                //             }
                //         }
                //         //  order: [[CarTransaction, 'transaction_time', 'DESC']]

                //         //  order: ['createdAt', 'DESC']
                //     }],
                //     //   order: [[CarTransaction, 'transaction_time', 'DESC']]
                // })
                let rowCars = await sequelize.query("select * from cars join cars_transactions on cars.id = cars_transactions.car_id where cars_transactions.transaction_time > CURDATE()")

                // const cars = await Car.findAll()
                console.log(rowCars[1])
                if (!rowCars) {

                } else {
                    return CarResource(res, rowCars[0]);
                }


            } else {
                console.log(itemsPerPage)
                filter = {}
                if (parseInt(itemsPerPage) > 0) {
                    filter = {
                        limit: parseInt(itemsPerPage),
                        offset: (parseInt(page) - 1) * parseInt(itemsPerPage),
                    };
                }
                const cars = await Car.findAndCountAll({
                    filter,
                    include: [{
                        model: CarTransaction,
                        attributes: ["transaction_time", "createdAt"],
                        separate: true,
                        limit: 1,

                        order: [[{ model: CarTransaction, as: 'CarTransaction' }, 'transaction_time', 'DESC']]

                        //  order: ['createdAt', 'DESC']
                    }],
                    //   order: [[CarTransaction, 'transaction_time', 'DESC']]
                })

                // const cars = await Car.findAll()
                // console.log(cars)
                if (!cars) {

                } else {
                    return CarResource(res, cars);
                }


            }
        } catch (error) {
            console.log(`err ${error}`)
        }
    },
}