import mongoose from "mongoose";

export const connectionDB = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"backendapi",
    })
    .then(()=>console.log("Databse connected"))
    .catch((e)=> console.log(e));
}
