//Packages
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authAPIs from "./routes/auth.js";
const app = express();
const port = process.env.PORT || 3003;
//middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000", "https://localhost:3003", "*"],
    credentials: true,
}));
// Database connection
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:: "));
// db.once("open", () => console.log("db connected!!"));
app.use("/api/v1", authAPIs); //this includes login signup
// app.use("/api/v1", authGuard);
// app.use('/api/v1', productApis)
// app.use('/api/v1', tweetApi)
// app.post('/api/v1/change-password', psw)
// app.get('/api/v1/users', s)
app.get("/", (req, res) => {
    res.send(`Hello World! ${req.ip}`);
});
//if no route hits
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});
// const __dirname = path.resolve();
// app.use('/', express.static(path.join(__dirname, './web/build')))
// app.use('*', express.static(path.join(__dirname, './web/build')))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
