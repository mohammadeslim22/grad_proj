
const Invoice = require("../models/invoice");
const InvoiceResource = require("../resources/invoice_resource");

module.exports = {
    store: async function (req, res, next) {
      
        const invoice = await Invoice.create({
            carNumber: req.body.carNumber,
            invoiceAmount: req.body.invoiceAmount,
            InvoiceHourNumber: req.body.InvoiceHourNumber,
            userId: req.body.userId,
            car_id: req.body.carId,
            totalHours: req.body.totalHours,
            carsTransactionId: req.body.carTransactionId
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
            const { sortBy, sortDesc, page, itemsPerPage } = req.query
           let filter = {}
            let limit;
            let offset;
            let invoices
            if (parseInt(itemsPerPage) > 0) {
              //  filter = {
                    limit= parseInt(itemsPerPage);
                    offset= (parseInt(page) - 1) * parseInt(itemsPerPage);
               // };
                invoices = await Invoice.findAndCountAll({
                    limit: limit,
                    offset: offset,
                    order: [['createdAt', 'DESC']]
                })
            } else {
                invoices = await Invoice.findAndCountAll({
                    order: [['createdAt', 'DESC']]
                })
            }
            // const invoices = await Invoice.findAll()


            if (!invoices) {

            } else {
                return InvoiceResource(res, invoices);
            }
        } catch (error) {
            console.log(`err ${error}`)
        }
    },
}