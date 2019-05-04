const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = {
  authenticate: (req, res, next) => {
    if (jwt.verify(req.cookies.token, secret)) {
      const { email, storeId } = jwt.verify(req.cookies.token, secret);
      next();
    } else {
      //res.status(400).end();
      res.status(400).json(false).end();
    }
  }
};
