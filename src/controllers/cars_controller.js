const Car = require("../models/cars");
const CarTransaction = require("../models/cars_transactions");
const CarResource = require("../resources/car_resource");
const CarResourceLastEntry = require("../resources/car_resourc_last_entry");
const Invoice = require("../models/invoice");

// @ts-ignore
const Sequelize = require('sequelize')
// @ts-ignore
function WithoutTime() {
    var date = new Date(Date.now());
    date.setHours(0, 0, 0, 0);
    console.log(date)
    return date;
}

module.exports = {
    // @ts-ignore
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
    // @ts-ignore
    update: function (req, res, next) {

    },
    // @ts-ignore
    delete: function (req, res, next) {

    },
    // @ts-ignore
    show: function (req, res, next) {


    },

    // @ts-ignore
    index: async function (req, res, next) {
        try {

            // @ts-ignore
            const { sortBy, sortDesc, page, itemsPerPage, exist } = req.query
            // const count = await Car.count()
            // @ts-ignore
            const count = await sequelize.query("select count(*) as count from cars join cars_transactions t on cars.id = t.car_id where t.id in ( select Max(id) from cars_transactions  GROUP by car_id) AND t.transaction_type=0 ")

            console.log(count)
            if (parseInt(exist) == 0) {
                console.log(itemsPerPage)
                let limit = 0;
                let offset = 0;
                let rowCars = [];
                if (parseInt(itemsPerPage) > 0) {
                    limit = parseInt(itemsPerPage);
                    offset = (parseInt(page) - 1) * parseInt(itemsPerPage);

                    // @ts-ignore
                    rowCars = await sequelize.query("select *  from cars join cars_transactions t on cars.id = t.car_id where t.id in ( select Max(id) from cars_transactions  GROUP by car_id) AND t.transaction_type=0 limit " + `${offset}` + " ," + `${limit}`)
                } else {
                    // @ts-ignore
                    rowCars = await sequelize.query("select * from cars join cars_transactions t on cars.id = t.car_id where t.id in ( select Max(id) from cars_transactions  GROUP by car_id) AND t.transaction_type=0")
                }
                console.log(rowCars[1])

                rowCars[1].count = count
                if (!rowCars) {

                } else {
                    return CarResource(res, rowCars[0]);
                }


            } else {
                let countRegistered = await Car.count()
                console.log(itemsPerPage)
                let limit = 0;
                let offset = 0
                let cars = []
                if (parseInt(itemsPerPage) > 0) {
                    //     filter = {
                    // separated:true,
                    limit = parseInt(itemsPerPage);
                    offset = (parseInt(page) - 1) * parseInt(itemsPerPage);

                    cars = await CarTransaction.findAll({
                        limit: limit,
                        offset: offset,
                        group: ["carId"],
                        // @ts-ignore
                        attributes: [[sequelize.fn('MAX', sequelize.col('transaction_time')), "time"], "carId"],
                        include: [{
                            model: Car,
                            group: ["id"],
                            include:
                            {
                                model: Invoice,
                                group: ["carId"],
                                separate: true,
                                // @ts-ignore
                                attributes: [[sequelize.fn('SUM', sequelize.col('invoice_amount')), "sumInvoiceAmount"]],
                            }
                        }],
                    })
                    cars.count = countRegistered
                } else {
                    cars = await CarTransaction.findAll({
                        group: ["carId"],
                        // @ts-ignore
                        attributes: [[sequelize.fn('MAX', sequelize.col('transaction_time')), "time"], "carId"],
                        include: [{
                            model: Car,
                            group: ["id"],
                            include:
                            {
                                model: Invoice,
                                group: ["carId"],
                                separate: true,
                                // @ts-ignore
                                attributes: [[sequelize.fn('SUM', sequelize.col('invoice_amount')), "sumInvoiceAmount"]],
                            }
                        }],
                    })
                    cars.count = countRegistered
                } 
                console.log(cars.countRegistered)
                // cars.count = count

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