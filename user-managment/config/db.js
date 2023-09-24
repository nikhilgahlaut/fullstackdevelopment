const mongoose = require('mongoose')

const connectToDb = async() =>{
    mongoose.connect(process.env.MONGO_URI)
    .then((conn) =>{
        console.log(`Connected to Db: ${conn.connection.host}`);
    })
    .catch((err) =>{
        console.log(err.message);
        console.log('error is db connection')
        process.exit(1);
    })
}

module.exports = connectToDb