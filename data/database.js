import mongoose from "mongoose";
// import { MongoClient, ServerApiVersion } from 'mongodb'

export const dataBase =() => {

    mongoose.connect(process.env.MONGO_URL,{dbName:"backendApi"})
    //connection ke time per then-catch
    .then((c) => {
      console.log(`Connected to MongoDB with ${c.connection.host}`)
    })
    .catch((e) => {console.log(e);})
    
}