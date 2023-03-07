import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/index.js";
// import authRoute from "./routers/auth.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
// mongoose config
mongoose .connect(process.env.MONGOBDURL, { useNewUrlParser: true, useUnifiedTopology: true, })
.then(() => {
console.log("connected to mongo db");
})
.catch((err) => {
console.log("connect to mongo db failed\n", err);

});

// ROUTES
app.use("/api", router );
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});


// "start": "nodemon --exec babel-node index.js"