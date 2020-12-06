const resource = (data) => {
  let invoiceSum = 0
  if (data.Car.Invoices[0]) {
    invoiceSum = JSON.parse(JSON.stringify(data.Car.Invoices[0])).sumInvoiceAmount
  }

  return {
    id: data.Car.id,
    carNumber: data.Car.carNumber,
    status: data.Car.dataValues.status,
    transaction_time: new Date(data.time).toLocaleString(),
    invoices: invoiceSum
  };
}
const collection = (arr) => {
  return {
    data: arr.map(record => resource(record.dataValues))
  };
}
module.exports = function (response, model_data) {
  res_data = {};
  // if (model_data.count) {
  //   res_data = collection(model_data.rows);
  //   res_data.count = model_data.count

  // }

  console.log(typeof (model_data))

  if (Array.isArray(model_data)) {
    res_data = collection(model_data);
    res_data.count = model_data.count
  }
  else {

    res_data = resource(model_data);

  }
  return response.json(res_data);
}