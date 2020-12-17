
const CarTransaction = require("../models/cars_transactions");
const Invoice = require("../models/invoice");
const Settings = require("../models/setting");

const Car = require("../models/cars");


const TransactionResource = require("../resources/transaction_resource");
catchFunc = function () {
    console.log("mortaja")
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
                try {
                    car = await Car.create({
                        carNumber: req.body.carNumber,
                    });

                } catch (err) { }
            }
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
            else {
                if (parseInt(req.body.transactionType) == 1) {
                    const entryTransaction = await CarTransaction.findOne({
                        where: {
                            carNumber: req.body.carNumber,
                            transactionType: 0
                        },
                        order: [['createdAt', 'DESC']]
                    }).catch(catchFunc)
                    if(!entryTransaction){
                        return res.json("car_notFounded")
                    }
                    
                    console.log(entryTransaction.transaction_time)
                    console.log(transaction.transaction_time)
                    var difference = transaction.transaction_time - entryTransaction.transaction_time;
                    var hoursDifference = Math.floor(difference / 1000 / 60 / 60);
                    console.log(settings.value)
                    console.log(hoursDifference)
                    let amount = parseInt(hoursDifference) * parseFloat(settings.value)
                    Invoice.create({
                        carNumber: req.body.carNumber,
                        invoiceAmount: amount,
                        InvoiceHourNumber: settings.value,
                        userId: req.user.id,
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


            // const carTransactions = await CarTransaction.findAll({}).limit(page)


            if (!carTransactions) {

            } else {
                return TransactionResource(res, carTransactions);
            }


        } catch (error) {
            console.log(`err ${error}`)
        }
    },
} 