
const Invoice = require("../models/invoice");
const InvoiceResource = require("../resources/invoice_resource");

module.exports = {
    store: async function (req, res, next) {
        console.log(req.body)
        const invoice = await Invoice.create({
            carNumber: req.body.carNumber,
            invoiceAmount: req.body.invoiceAmount,
            InvoiceHourNumber: req.body.InvoiceHourNumber,
            carTransaction: req.body.carTransaction,
            userId: req.body.userId,
            carId: req.body.carId
        }).catch()
        if (!invoice) {
            return res.json(false)
        }
        return res.json(invoice);



    },
    update: function (req, res, next) {

    },
    delete: function (req, res, next) {

    },
    show: function (req, res, next) {

    },
    index: async function (req, res, next) {
        try {
            const invoices = await Invoice.findAll()

            if (!invoices) {

            } else {
                return InvoiceResource(res, invoices);
            }
        } catch (error) {
            console.log(`err ${error}`)
        }
    },
}