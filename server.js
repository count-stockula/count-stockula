require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const path = require("path");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Use Routes folder
app.use(express.static("client/build"));
app.use(routes);

// Serve up static assets (usually on heroku)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/count-stockula"
);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
