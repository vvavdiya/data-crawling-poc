const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser");

// Express settings
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(express.static("public"));

app.get("/serverstatus", function(req, res) {
  console.log("Server is running");
  res.end("Server is running");
});

app.post("/postData", function(req, res) {
  console.log("Received Data on server -" + JSON.stringify(req.body.userData));
  return res.send({
    message: "successfully received data",
    success: true,
    status: 200,
    receivedData: req.body.userData
  });
});

// Create PORT
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log("Connected to port " + PORT);
});

// error handler
app.use(function(err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
