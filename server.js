import { app } from "./app.js";
import {connectionDB} from "./data/database.js"

//connect DB
connectionDB();

app.listen(process.env.PORT, ()=>{
    console.log(`Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});