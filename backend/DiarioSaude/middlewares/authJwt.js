const jwt     = require("jsonwebtoken"),
      config  = require("../config/auth.config.js"),
      db      = require("../index"),
      healthProfessional = db.healthProfessional;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if(!token){
    return res.status(403).send({message: "No token provided!"});
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if(err){
      return res.status(401).send({message: "Unauthorized!"});
    }
    req.userId = decoded.id;
    next();
  })
}

module.exports = {
  verifyToken
}
