const Car = require("../models/cars");
const CarTransaction = require("../models/cars_transactions");
const User = require("../models/employees");
const Invoice = require("../models/invoice");
const Sequelize = require('sequelize');
const sequelize = require("../database/connection");
const { Transaction,Op } = require("sequelize");
module.exports = {
    index: async function (req, res, next) {

        const transactions_statistics = await sequelize.query("SELECT count(*)AS TOTAL,MONTH(transaction_time) AS MONTH FROM  cars_transactions WHERE cars_transactions.transaction_type=0 GROUP BY  MONTH(cars_transactions.transaction_time) Order by cars_transactions.transaction_time")
        console.log(transactions_statistics)
        result = []
        statistics = {}
        months = [
            { total: 0, month: 1 },
            { total: 0, month: 2 },
            { total: 0, month: 3 },
            { total: 0, month: 4 },
            { total: 0, month: 5 },
            { total: 0, month: 6 },
            { total: 0, month: 7 },
            { total: 0, month: 8 },
            { total: 0, month: 9 },
            { total: 0, month: 10 },
            { total: 0, month: 11 },
            { total: 0, month: 12 },
        ]


        transactions_statistics[0].map(record => {
            months.map(m => {
                if (record.MONTH == m.month) {
                    m.total = record.TOTAL
                }
            })
        })
        months.map(row => {
            result.push(row.total)
        })
        invoicesInOrder = []
        const invoices = await sequelize.query("SELECT SUM(invoice_amount) as total, DAYNAME((invoices.created_at)) AS DayName FROM invoices WHERE invoices.created_at > DATE(CURDATE() - 7) GROUP BY DayName ORDER BY DayName")
        weekInvoices = [
            { day: "Monday", total: 0 },
            { day: "Tuesday", total: 0 },
            { day: "Wednesday", total: 0 },
            { day: "Thursday", total: 0 },
            { day: "Friday", total: 0 },
            { day: "Saturday", total: 0 },
            { day: "Sunday", total: 0 },
        ]
        invoices[0].map(inv => {
            weekInvoices.map(m => {
                if (inv.DayName == m.day) {
                    m.total = inv.total
                }
            })
        })
        weekInvoices.map(row => {
            invoicesInOrder.push(row.total)
        })
        const carNo = await Car.count();
        var d = new Date();
        d.setDate(d.getDate() - 7);
        const parkingVisits =await  CarTransaction.count({
            where: {
                transactionType: 0,
                transaction_time: {[Op.gt]:d}
            }
        })

        const revenue =await Invoice.findAll({
            attributes: [[sequelize.fn('SUM', sequelize.col('invoice_amount')), "total"]],
        })
        statistics.transactions = result;
        statistics.invoices = invoicesInOrder;
        statistics.parkingVisits=parkingVisits;
        statistics.carsNo=carNo;
        statistics.revenue=revenue[0].dataValues.total;

        if (!transactions_statistics) {
            return res.json(false)
        }
        return res.json(statistics);

    }
}