import mongoose from "mongoose";

export const connectionDB = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"backendapi",
    })
    .then((c)=>console.log(`Databse connected with ${c.connection.host}`))
    .catch((e)=> console.log(e));
}
