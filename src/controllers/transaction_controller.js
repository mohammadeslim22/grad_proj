
const CarTransaction = require("../models/cars_transactions");
const Invoice = require("../models/invoice");
const Car = require("../models/cars");


const TransactionResource = require("../resources/transaction_resource");
catchFunc = function () {
    console.log("mortaja")
},
    module.exports = {

        store: async function (req, res, next) {
            try {
                let car = await Car.findOne({
                    where: {
                        carNumber: req.body.carNumber
                    }
                });
                if (!car) {
                    try {
                        car = await Car.create({
                            carNumber: req.body.carNumber,
                        });

                    } catch (err) { }
                }
                const transaction = await CarTransaction.create({
                    carNumber: req.body.carNumber,
                    userId: req.body.userId,
                    transaction_time: new Date().getTime(),
                    transactionType: req.body.transactionType,
                    carId: car.id
                }).catch(catchFunc)
                if (!transaction) {
                    return res.json(false)
                }
                else {
                    if (parseInt(req.body.transactionType) == 1) {
                        const entryTransaction = await CarTransaction.findOne({
                            where: {
                                carNumber: req.body.carNumber,
                                transactionType: 0
                            },
                            order: [['createdAt', 'DESC']]
                        }).catch(catchFunc)
                        console.log(entryTransaction.transaction_time)
                        console.log(transaction.transaction_time)
                        var difference = transaction.transaction_time - entryTransaction.transaction_time;
                        var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
                        console.log(hoursDifference)
                        let amount = parseInt(hoursDifference) * parseInt(0.5)
                        Invoice.create({
                            carNumber: req.body.carNumber,
                            invoiceAmount: amount,
                            InvoiceHourNumber: 0.5,
                            userId: req.body.userId,
                            carId: car.id,
                            totalHours: hoursDifference,
                            carsTransactionId: transaction.id
                        }).catch(catchFunc)
                    }
                }
                return res.json(transaction);

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
                if (parseInt(itemsPerPage) > 0) {
                    filter = {
                        limit: parseInt(itemsPerPage),
                        offset: (parseInt(page) - 1) * parseInt(itemsPerPage),
                    };
                }


                // const carTransactions = await CarTransaction.findAll({}).limit(page)
                const carTransactions = await CarTransaction.findAndCountAll(filter)

                if (!carTransactions) {

                } else {
                    return TransactionResource(res, carTransactions);
                }


            } catch (error) {
                console.log(`err ${error}`)
            }
        },
    }