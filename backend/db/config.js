const mongoose = require('mongoose');

const dbConection = async() => {
    try{

        mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true
        });

        console.log('db Online');


    }catch(error){
        console.log(error);

        throw new Error('DB connection error')
    }
}

module.exports = {dbConection}