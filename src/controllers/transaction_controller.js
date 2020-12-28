
const CarTransaction = require("../models/cars_transactions");
const Invoice = require("../models/invoice");
const Settings = require("../models/setting");

const Car = require("../models/cars");


const TransactionResource = require("../resources/transaction_resource");
const e = require("cors");
catchFunc = function () {
    console.log("yoyo")
},
    settings = {}

module.exports = {

    store: async function (req, res, next) {
        try {
            if (settings) {
                settings = await Settings.findOne({
                    where: {
                        Name: "Hourly Rate"
                    }
                })
            }

            let car = await Car.findOne({
                where: {
                    carNumber: req.body.carNumber
                }
            });
            if (!car) {
                // car not fount
                try {
                    // car not fount , but it wants to enter 
                    if (parseInt(req.body.transactionType) == 0) {
                        car = await Car.create({
                            carNumber: req.body.carNumber,
                        });
                        const transaction = await CarTransaction.create({
                            carNumber: req.body.carNumber,
                            userId: req.user.id,
                            transaction_time: new Date().getTime(),
                            transactionType: req.body.transactionType,
                            carId: car.id
                        }).catch(err => {
                            console.log(err)
                        })

                        if (!transaction) {

                            return res.json(false)
                        }
                        return res.json(transaction);
                    } else {
                        // car not fount , and leaving transaction !!

                        return res.json("car_not_registered", 400)
                    }
                } catch (err) { }
            } else {
                //car exists, last transaction for the car
                const entryTransaction = await CarTransaction.findOne({
                    where: {
                        carNumber: req.body.carNumber,
                    },
                    order: [['createdAt', 'DESC']]
                }).catch(catchFunc)

                if (parseInt(req.body.transactionType) == 0) {
                    // car wants to enter and last transaction is entering !@!
                    if (parseInt(entryTransaction.transactionType) == 0) {
                        return res.json("this car is inside", 400)
                    } else {
                        // car wants to enter and last transaction is leaving
                        const transaction = await CarTransaction.create({
                            carNumber: req.body.carNumber,
                            userId: req.user.id,
                            transaction_time: new Date().getTime(),
                            transactionType: req.body.transactionType,
                            carId: car.id
                        }).catch(err => {
                            console.log(err)
                        })
                        return res.json(transaction);
                    }

                } else {
                    // car wants to leave and last transaction is entering 
                    if (parseInt(entryTransaction.transactionType) == 0) {
                        const transaction = await CarTransaction.create({
                            carNumber: req.body.carNumber,
                            userId: req.user.id,
                            transaction_time: new Date().getTime(),
                            transactionType: req.body.transactionType,
                            carId: car.id
                        }).catch(err => {
                            console.log(err)
                        })
                        console.log(entryTransaction.transaction_time)
                        console.log(transaction.transaction_time)
                        var difference = transaction.transaction_time - entryTransaction.transaction_time;


                        var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
                        let amount = 0;
                        if (hoursDifference < 1) {
                            amount = parseFloat(settings.value)
                        } else {
                            amount = parseInt(hoursDifference) * parseFloat(settings.value)
                        }
                        console.log(settings.value)
                        console.log(hoursDifference)
                        //let amount = parseInt(hoursDifference) * parseFloat(settings.value)
                        Invoice.create({
                            carNumber: req.body.carNumber,
                            invoiceAmount: amount,
                            InvoiceHourNumber: settings.value,
                            userId: req.user.id,
                            carId: car.id,
                            totalHours: hoursDifference,
                            carsTransactionId: transaction.id
                        }).catch(catchFunc)

                        return res.json(transaction);
                    } else {
                        // car wants to leave and last transaction is leaving !@! 

                        return res.json("how the hell this is happening", 400)
                    }
                }
            }

        } catch (error) {

        }
    },
    update: function (req, res, next) {

    },
    delete: function (req, res, next) {

    },
    show: function (req, res, next) {
        try {

        } catch (error) {

        }


    },
    index: async function (req, res, next) {
        try {
            const { sortBy, sortDesc, page, itemsPerPage } = req.query
            console.log(itemsPerPage)
            filter = {}
            limit = "";
            offset = ""
            let carTransactions
            if (parseInt(itemsPerPage) > 0) {
                filter = {
                    limit: parseInt(itemsPerPage),
                    offset: (parseInt(page) - 1) * parseInt(itemsPerPage),
                };
                limit = parseInt(itemsPerPage),
                    offset = (parseInt(page) - 1) * parseInt(itemsPerPage)

                carTransactions = await CarTransaction.findAndCountAll({
                    limit: limit,
                    offset: offset,
                    order: [['createdAt', 'DESC']]
                })
            } else {
                carTransactions = await CarTransaction.findAndCountAll({

                    order: [['createdAt', 'DESC']]
                })
            }
            if (!carTransactions) {

            } else {
                return TransactionResource(res, carTransactions);
            }


        } catch (error) {
            console.log(`err ${error}`)
        }
    },
    timeline: async function (req, res, next) {
        console.log(req)
        const timeline = await CarTransaction.findAll({
            where: {
                carNumber: req.query.carNo
            }
        })
        return res.json(timeline)
    }
} 