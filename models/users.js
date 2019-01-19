var db = require("../db/config");
var bcrypt = require("bcrypt");
var user = {};

user.login = (req, res, next) => {
  db.one("SELECT * FROM users WHERE email = $1;", [req.body.email])
    .then(function(result) {
      if (bcrypt.compareSync(req.body.password, result.password_digest)) {
        req.user = result;
      }
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

user.findEmail = (req, res, next) => {
  db.oneOrNone("SELECT * FROM users WHERE email=$1;", [req.body.email])
    .then(function(result) {
      res.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

user.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  db.one(
    "INSERT INTO users (name , email, password_digest) VALUES($1, $2 , $3) RETURNING  email , name , user_type as userType;",
    [
      req.body.name.toLowerCase(),
      req.body.email.toLowerCase(),
      bcrypt.hashSync(req.body.password, salt)
    ]
  )
    .then(function(result) {
      req.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};

user.createCompnay =  (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  db.one(
    "INSERT INTO users (name , email, password_digest , user_type) VALUES($1, $2 , $3 , $4) RETURNING  email , name , user_type as userType;",
    [
      req.body.name.toLowerCase(),
      req.body.email.toLowerCase(),
      bcrypt.hashSync(req.body.password, salt),
      req.body.userType.toLowerCase(),
    ]
  )
    .then(function(result) {
      req.user = result;
      next();
    })
    .catch(function(error) {
      console.log(error);
      next();
    });
};


module.exports = user;