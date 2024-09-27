import mongoose from "mongoose";
async function connectDB() {
try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("DATABSE CONNECTED SUCESSFULLY")
} catch (error) {
    console.log(`Error : ${error}`); 
}
};
export default connectDB;