const resource = (data) => {
  return {
      id: data.id,
      carNumber:data.carNumber
    
  };
}
const collection = (arr) => {
  return {
      data: arr.map(record => resource(record))
  };
}
module.exports = function (response, model_data) {
  res_data = {};
  console.log(model_data)
  if (Array.isArray(model_data)) {
      res_data = collection(model_data);
  }
  else {

      res_data = resource(model_data);

  }
  return response.json(res_data);
}