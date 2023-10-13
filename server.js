import { app } from "./app.js";
import { dataBase } from "./data/database.js";
app.listen(process.env.PORT,() => {
    console.log(`Server is running on port:${process.env.PORT} in ${process.env.NODE_ENV} mode`)
  })
  dataBase()
  // "start": "set NODE_ENV=Production && node server.js",
// "dev": "set NODE_ENV=Development && nodemon server.js"
