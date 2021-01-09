if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}
const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const expresslayout = require("express-ejs-layouts");
const indexrouter = require("./routes/index.js");
const authorrouter = require("./routes/authors.js");
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout");

app.use(expresslayout);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: false }));
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connection open"));
app.use("/", indexrouter);
app.use("/authors", authorrouter);
app.use("/authors/new", authorrouter);
app.listen(PORT, (req, res) => {
  console.log("listening on port 3000");
});
