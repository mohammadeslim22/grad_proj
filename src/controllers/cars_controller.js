const Car = require("../models/cars");
const CarTransaction = require("../models/cars_transactions");
const CarResource = require("../resources/car_resource");
const CarResourceLastEntry = require("../resources/car_resourc_last_entry");
const Invoice = require("../models/invoice");

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
            const count = await Car.count()
            if (parseInt(exist) == 0) {
                console.log(itemsPerPage)
                limit = 0;
                offset = 0;
                if (parseInt(itemsPerPage) > 0) {
                    limit = parseInt(itemsPerPage);
                    offset = (parseInt(page) - 1) * parseInt(itemsPerPage);
                }
                //let rowCars = await sequelize.query("select * from cars join cars_transactions on cars.id = cars_transactions.car_id where cars_transactions.transaction_time > CURDATE() AND cars_transactions.transaction_type=0 limit " + `${offset}` + " ," + `${limit}`)
                let rowCars = await sequelize.query("select * from cars join cars_transactions t on cars.id = t.car_id where t.id in ( select Max(id) from cars_transactions  GROUP by car_id) AND t.transaction_type=0 limit " + `${offset}` + " ," + `${limit}`)
                // const cars = await Car.findAll()
                console.log(rowCars[1])

                rowCars[1].count = count
                if (!rowCars) {

                } else {
                    return CarResource(res, rowCars[0]);
                }


            } else {
                console.log(itemsPerPage)
                limit = 0;
                offset = 0
                if (parseInt(itemsPerPage) > 0) {
                    //     filter = {
                    // separated:true,
                    limit = parseInt(itemsPerPage);
                    offset = (parseInt(page) - 1) * parseInt(itemsPerPage);
                    // };
                }
                let cars = await CarTransaction.findAll({
                    limit: limit,
                    offset: offset,
                    group: ["carId"],
                    attributes: [[sequelize.fn('MAX', sequelize.col('transaction_time')), "time"], "carId"],
                    include: [{
                        model: Car,
                        group: ["id"],
                        include:
                        {
                            model: Invoice,
                            group: ["carId"],
                            separate: true,
                            attributes: [[sequelize.fn('SUM', sequelize.col('invoice_amount')), "sumInvoiceAmount"]],
                        }
                    }],
                })
                // const count = await Car.count()
                cars.count = count
                console.log(cars)
                if (!cars) {

                } else {
                    //  return res.json(cars)
                    return CarResourceLastEntry(res, cars);
                }


            }
        } catch (error) {
            console.log(`err ${error}`)
        }
    },
}