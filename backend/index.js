const cors = require("cors");
const jwt = require("express-jwt");
const express = require("express");

const routes = require("./routes");
const { sequelize } = require("./models");

const PORT = process.env.PORT || 4000;

const app = express();

app.set("json spaces", 2); // optional, format json responses with 2 spaces
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"],
    credentialsRequired: false,
    requestProperty: "user",
  }),
);

app.use("/", routes);

// Handle invalid endpoint error
app.use(function (req, res) {
  res.status(400).json({
    code: 1006,
    msg: "Invalid endpoint/method",
    data: null,
  });
});

// Handle caught error
app.use(function (err, req, res, next) {
  switch (err.name) {
    case "UnauthorizedError":
      res.status(400).json({
        code: 3005,
        msg: err.code,
        data: null,
      });
      break;
    default:
      res.status(400).json({
        code: 1001,
        msg: "Bad request",
        data: null,
      });
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database.");
    app.listen(PORT, () => {
      console.log(`Listen on port ${PORT}.`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database.");
    console.error(error.message);
    process.exit(1);
  });
