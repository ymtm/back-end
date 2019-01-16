var db = require("../db/config");
var users ={}

user.findEmail= (req,res,next) => {
    db.oneOrNone("SELECT * FROM users WHERE email =$1;" ,[req.body.email])
.then(function(result) {
    res.user = result ;
    next();
})
.catch( error=>(error))
}

user.create= (req,res,next) => {
    
    const salt = bcrypt.genSalteSync(10)
    db.one("INSERT INTO users (name ,email , password_digest) VALUES($1 ,$2 , $3) " ,[req.body.email])
.then(function(result) {
    res.user = result ;
    next();
})
.catch( error=>(error))
}

module.exports = users;