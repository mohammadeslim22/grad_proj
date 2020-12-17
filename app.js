const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config({ path: '/config/config.env' });
const PORT = process.env.PORT || 3000;
const { verifyToken } = require('./src/middlewares/verifyToken')
require('dotenv').config()
app.set('view engine', 'pug');
app.set("views", path.resolve('./src/views'))
var cors = require('cors')
app.use(cors({
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(verifyToken)



// const router = express.Router()
// app.use(router)
const rootPath = path.resolve('./dist')
app.use(express.static(rootPath))

//DB CONNTECTION 
require("./src/database/connection")
require("./src/bootstrap")();

app.use('/api', require('./src/routes/api'));


// router.use((err, req, res, next) => {
//     if (err) {
//         return res.send(err)
//     }
// });

app.listen(PORT, console.log(`server is running on ${process.env.NODE_ENV} MODE ON PORT ${PORT}`));