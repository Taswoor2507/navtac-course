import chalk from "chalk";
import mongoose from "mongoose";

async function connectDB(){
    const MONGODB_URL = process.env.MONGODB_URL
    const DB_NAME = process.env.DB_NAME
    try {
        const connectionInstance =await mongoose.connect(`${MONGODB_URL}/${DB_NAME}`);
        console.log(chalk.red.bold.bgGreen.underline.italic(`Database connected at host ${connectionInstance.connection.host} on port ${connectionInstance.connection.port}`))
    } catch (error) {
        throw new Error(`Database connection failed due to --> ${error} `)
    }
}

export default connectDB