var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.cookies['user'] == "nyvpr"){
    console.log("Alice can see her password")
    res.render("secret", {
      name : "Alice",
      secret : "Patty loves her Ass"
    })
  }else if(req.cookies['user'] == "znyybel"){
    console.log("The Flag has been found")
    res.render("secret", {
      name : "mallory",
      secret : "flag{R0t_th1rt33n_1s_NOT_Encr1pt1oN!}"
    })
  }else{
    res.redirect(302, "/")
  }
});

module.exports = router;
