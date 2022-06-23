const express = require("express");
const path = require("path");
const url = require("url");
const bodyParser = require("body-parser");

const port = 4000;

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

//app.use(cors(corsOptions));
//app.use(upload());
app.use(bodyParser.json());
console.log(__dirname);
app.use(express.static(path.join(__dirname, "/build")));

app.use(express.json());

app.get("/health-check", (req, res) => {
  const healthcheck = {
   uptime: process.uptime(),
    message: "Ok",
    timestamp: Date.now(),
  };
  res.send(healthcheck);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/'));
}); 

app.listen(port, () => {
  console.log("********************************************");
  console.log("Listening on PORT 4000");
  console.log("********************************************");
});