import mongoose from "mongoose";

export const dataBase =() => {
    mongoose.connect(process.env.MONGO_URL,{dbName:"backendApi"})
    //connection ke time per then-catch
    .then(() => {
      console.log('Connected to MongoDB')
    })
    .catch((e) => {console.log(e);})
    
}