var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { tagline: 'Express' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { status: '' });
});

/* POST login page. */
router.post('/login', function(req, res, next) {
  if(req.body.userName == "alice" && req.body.password == "password"){
    res.cookie("user", "nyvpr")
    res.redirect(302, "/users")
    console.log("Alice has logged in")
  }else{
    res.render('login', { status: 'Wrong Username or Password' });
    console.log("Login has Failed")
  }
});

/* GET logout page. */
router.get('/logout', function(req, res, next) {
  
    res.clearCookie("user");
    res.redirect(302, "/")
    console.log("User has logged out")
  
});
module.exports = router;
