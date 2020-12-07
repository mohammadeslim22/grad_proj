const resource = (data) => {
    return {
        id: data.id,
        username: data.empUserName,
        password:data.empPassword,
        empName: data.empName,
        address: data.empAddress,
        role:data.role,
        firstName:data.firstName,
        lastName:data.lastName
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