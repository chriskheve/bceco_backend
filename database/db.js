const mongoose = require('mongoose');

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb://localhost:27017/bceco',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Database connection success')
    } catch (err) {
        console.log(err)
    }
}

module.exports= connectDB;