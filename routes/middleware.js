const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = {
  authenticate: (req, res, next) => {
    console.log("called middleware.authenticate");
    console.log("cookie:\n", req.cookies.token);
    if (jwt.verify(req.cookies.token, secret)) {
      const { email, storeId } = jwt.verify(req.cookies.token, secret);
      console.log(email, storeId);
      next();
    } else {
      //res.status(400).end();
      res.status(400).json(false).end();
    }
  }
};
