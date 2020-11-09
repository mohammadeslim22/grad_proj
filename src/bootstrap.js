module.exports = async()=>{
    const User = require("./models/employees");
    const Car = require("./models/cars");
    const CarTransaction = require("./models/cars_transactions");
    const Invoice = require("./models/invoice");
    User.hasMany(CarTransaction);
    User.hasMany(Invoice);
    Car.hasMany(CarTransaction);
    User.hasMany(Invoice);
    Car.hasMany(Invoice);
    CarTransaction.belongsTo(Invoice)
    CarTransaction.belongsTo(User)
    Invoice.belongsTo(User)
    Invoice.belongsTo(Car)
    CarTransaction.belongsTo(Car)


// const user1 = await User.create({
//     empUserName:"Mohsen",
//     empPassword:123456,
//     empName:"mohsen",
//     empAddress:"moh@sen.com",
//     role:0
// }).catch(()=>{
    
// })
// const user2 = await User.create({
//     empUserName:"Raed",
//     empPassword:123456,
//     empName:"raed",
//     empAddress:"read@read.com",
//     role:1
// }).catch(()=>{

// })
    
}