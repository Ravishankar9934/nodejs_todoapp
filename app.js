import express from 'express';
import useRouter from "./routes/user.js"
import taskRouter from "./routes/task.js";
import {config} from "dotenv"
import cookieParser from 'cookie-parser';
import { errorMiddleware } from './middlewares/error.js';
import cors from "cors";

export const app = express();

config({
    path:"./data/config.env",
});

// Using Middleware
app.use(express.json());

app.use(cookieParser());

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        // credetaial true mtlb login krne pe cookies phuch jayega o/w nhi phuchega
    })
);

// Using routes
//ye jitne bhi users route h o le lega likhne ka jarurat nhi h.
app.use("/api/v1/users",useRouter);
app.use("/api/v1/task",taskRouter);

app.get("/", (req,res)=>{
    res.send("Nice working...");
});

// Middleware for error handling
app.use(errorMiddleware);
