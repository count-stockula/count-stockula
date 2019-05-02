const jwt = require("jsonwebtoken");

const middleware = (req, res, next) => {
  console.log("Called middleware authenticator");

  console.log(req.cookies.token);

  if (req.cookies.token) {
    next();
  } else {
    res.status(400).end();
  }
};

module.exports = middleware;
