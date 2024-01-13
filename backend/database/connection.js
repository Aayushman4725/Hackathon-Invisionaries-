const mongoose =require('mongoose'); 
console.log('req.send');
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://aayushmannp:Nepal%401984@cluster0.wolfmk9.mongodb.net/BillingSystem", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
module.exports = connectDB;