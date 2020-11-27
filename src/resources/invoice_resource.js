const resource = (data) => {
  return {
    id: data.id,
    carNumber: data.carNumber,
    userId: data.userId,
    invoiceAmount: data.invoiceAmount,
    InvoiceHourNumber: data.InvoiceHourNumber,
    totalHors: data.totalHours,
    time: new Date(data.createdAt).toLocaleString(),

  };
}
const collection = (arr) => {
  return {
    data: arr.map(record => resource(record))
  };
}
module.exports = function (response, model_data) {
  res_data = {};
  if (model_data.count) {
    res_data = collection(model_data.rows);
    res_data.count = model_data.count

  }
  // if (Array.isArray(model_data)) {
  //     res_data = collection(model_data);
  // }
  else {
    res_data = resource(model_data);
  }
  return response.json(res_data);
}