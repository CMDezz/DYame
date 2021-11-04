const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/config")
const { Product } = require("./models/Product")
var cors = require('cors')

mongoose.connect(config.mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}).then(() => console.log("Connect to MongoDB successfull"))
    .catch(err => console.log(err))

const app = express();
app.use(express.json());
app.use(cors())


// Product.find({ TypeId: '612085a326ddb04dd075b36b' })
//     // .then(products => {
//     //     products.map(pro => {
//     //         pro.Size = {
//     //             "29": 12,
//     //             "30": 4,
//     //             "31": 6,
//     //             "32": 8,
//     //             "33": 0
//     //         }
//     //         pro.save()
//     //     })
//     //     // products.save()
//     //     return products
//     // })
//     .then(products => console.log(products))
//     .catch(err => console.log(err))


app.use('/api', require('./routes/Api'));

const Port = process.env.PORT || config.port;

app.listen(Port, () => {
    console.log(`App is running on port : ${Port}`)
})