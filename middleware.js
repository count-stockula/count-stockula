const jwt = require("jsonwebtoken");
const nonce = "any secret nonce value";

const withAuth = function(req, res, next) {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.cookies.token;

  if (!token) {
    res.status(401).send("Authorization failure: token not provided");
  } else {
    jwt.verify(token, nonce, function(err, decoded) {
      if (err) {
        res.status(401).send("Authorization failure: token not valid");
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

module.exports = withAuth;
