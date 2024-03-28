dotenv.config();
import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import cors from "cors";

dbConnection();

// dotenv.configDotenv();


const app = express();


// middlewares
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsOptions));

// homepage
app.get("/", (req, res) => {
    res.status(201).json({
        success: true,
        message: "Hello from Backend."
    })
})

// api
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at port ${process.env.PORT}.`)
})