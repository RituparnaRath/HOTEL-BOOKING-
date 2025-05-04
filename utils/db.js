const mongoose = require('mongoose');
const connectDB = async () => {
    const DB_URL=process.env.DB_URL
    const DB_NAME=process.env.DB_NAME
    try {
        await mongoose.connect(`${DB_URL}/${DB_NAME}`)
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:');
        throw error
    }
};
module.exports = connectDB;