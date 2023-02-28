import mongoose from "mongoose";
const DB_USERNAME = process.env.DB_USERNAME || "shehzad";
const DB_PASSWORD = process.env.DB_PASSWORD || "LMLMLM";
const DB_NAME = "ChatApp-SMIT";
// MongoDB(dbURI)
const dbURI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.wclhhvn.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
try {
    await mongoose.connect(dbURI);
}
catch (err) {
    console.log("m dereper", err);
}
// //for status of DB
// ////////////////mongodb connected disconnected events///////////
mongoose.connection.on("connected", () => console.log("Mongoose is connected")
// process.exit(1);
);
//disconnected
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose is disconnected");
    process.exit(1);
});
//any error
mongoose.connection.on("error", (err) => {
    console.log("Mongoose connection error: ", err);
    process.exit(1);
});
process.on("SIGINT", () => {
    //this function will run jst before app is closing
    console.log("app is terminating");
    mongoose.connection.close(() => {
        console.log("Mongoose default connection closed");
        process.exit(0);
    });
});
////////////////mongodb connected disconnected events\\\\\\\\\\\\\\
export default mongoose;
