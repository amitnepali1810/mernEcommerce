// Database Connection

const mongoose = require("mongoose");

connectDatabase = () => {
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then((data) => {
        console.log(`DB connected Successfully...`)
    }).catch((err) => {
        console.log(err)
    })
    
}

module.exports = connectDatabase;