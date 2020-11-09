
const CarTransaction = require("../models/cars_transactions");
const TransactionResource = require("../resources/transaction_resource");

module.exports = {
    store: async function (req, res, next) {
        console.log(req.body)
        const transaction = await CarTransaction.create({
            carNumber: req.body.carNumber,
            userId: req.body.userId,
            transaction_Time: req.body.transaction_Time,
            transactionType: req.body.transactionType,


        }).catch()
        if (!transaction) {
            return res.json(false)
        }
        return res.json(transaction);


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
            const carTransactions = await CarTransaction.findAll()

            if (!carTransactions) {

            } else {
                return TransactionResource(res, carTransactions);
            }
        } catch (error) {
            console.log(`err ${error}`)
        }
    },
}