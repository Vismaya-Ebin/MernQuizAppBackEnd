//packages to be imported

//express is a middleware for communicating with request and response
const express = require("express");
//cross origin resource sharing be.5000 fe3000 server doest not connect bw 5000 and 3000 to connect different urls we use cors
//in request headers we can see this ass Access allow request origin as cors is a middleware
const cors = require("cors");
//moongose is used for object data modelling.how data will bo gone to dbServer.
const mongoose = require("mongoose");
require("dotenv").config();

const router = require("./routes/route");

const PORT = process.env.port || 9000;

const app = express();

//body-parser is used to parse the body of the request
app.use(express.json());
//cors
app.use(cors());

app.use('/',router);

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("connected to db");
}).catch(err => console.log(err));

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log(err);
  }
});
