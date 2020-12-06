const resource = (data) => {
  return {
    id: data.id,
    carNumber: data.carNumber,
    userId: data.userId,
    transaction_Time: new Date(data.transaction_time).toLocaleString(),
    transactionType:`${data.transactionType}`==0?"Entry":"Leaving",
    
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
  // if (Array.isArray(model_data.rows)) {
  //   res_data = collection(model_data);
  // }
  else {

    res_data = resource(model_data);

  }
  return response.json(res_data);
}