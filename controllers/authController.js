const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../models/users");


router.post("/", user.findEmail, user.login, (req, res) => {
  if (!res.user) {
    res.status(400).send("invalid email or password");
  } else {
    const { email, name, usertype, id } = req.user;
    const token = jwt.sign({ email, name, usertype, id }, process.env.JWT_KEY);

    res.send({ token });
  }
});

router.post("/users", user.findEmail, user.create, (req, res) => {
  if (res.user) {
    res.status(400).send("user is already reigister");
  } else {
    // SAME AS // const email = req.user.email ; AND // const name = req.user.name ;
  
    const { email, name, usertype, id } = req.user;

    console.log(req.user)
    const token = jwt.sign({ email, name, usertype, id  }, process.env.JWT_KEY);

    res.send({ token });
  }
});


router.post("/users/company", user.findEmail, user.createCompnay, (req, res) => {
  if (res.user) {
    res.status(400).send("user is already reigister");
  } else {
    // SAME AS // const email = req.user.email ; AND // const name = req.user.name ;
  

    // console.log("\n\n\n\n ****" , process.env)
    const { email, name, usertype, id } = req.user;
    const token = jwt.sign({ email, name, usertype, id  }, process.env.JWT_KEY);

    res.send({ token });
  }
});
module.exports = router;
