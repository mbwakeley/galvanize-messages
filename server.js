const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");
const logger = require("morgan");
const knexInstance = require("./db/knex");
const { Model } = require("objection");

const messageRoutes = require("./routes/messages");

Model.knex(knexInstance);

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/messages", messageRoutes);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
