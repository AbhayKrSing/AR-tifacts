const mongoose = require('mongoose')

const connect = () => {
    try {
        mongoose.connect("mongodb+srv://kabhay849:M3w4LpDTgtaba6Uj@cluster0.9ajmeor.mongodb.net/?retryWrites=true&w=majority", {
        }).then((conn) => {
            console.log(`MongoDB connected : ${conn.connection.host}`.blue.bold.underline)
        })
    } catch (error) {
        console.log(error.message.red.bold)
        process.exit()
    }

}
module.exports = connect