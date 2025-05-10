import app from "./app.js";
import dotenv from "dotenv";
import connectDb from "./config/db.config.js";
dotenv.config();
// get port variable from env file
const port = process.env.PORT;

// db connection + server listen 
connectDb()
  .then(() => {
    // server
    app.listen(port, (err) => {
      if (err) {
        console.log("Failed to start server due to error --> ", err);
        return;
      }
      console.log("Server started on port --> ", port);
    });

  })
  .catch((err) => {
    console.log(err);
  });
