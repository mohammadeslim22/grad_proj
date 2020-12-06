const resource = (data) => {
  return {
      id: data.id,
      carNumber:data.car_number,
      status:data.status,
      last_Time_entry:new Date(data.transaction_time).toLocaleString(),
    
  };
}
const collection = (arr) => {
  return {
      data: arr.map(record => resource(record))
  };
}
module.exports = function (response, model_data) {
  res_data = {};
  if (model_data) {
    res_data = collection(model_data);
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