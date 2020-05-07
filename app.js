const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const indexRouter = require("./routes/index");
app.use("/", indexRouter);
const postureRouter = require("./routes/posture");
app.use("/posture", postureRouter);

app.listen(9001, () => {
  console.log("aiServer start");
});
