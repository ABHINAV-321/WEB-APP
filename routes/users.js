var express = require('express');
var router = express.Router();
const userHelpers=require('../helpers/user-helper');
//const { response } = require('../app');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('./user/index/index');
});

router.get('/login',(req,res)=>{
  res.render('./user/login');
});
router.post('/login',(req,res)=>{
  console.log(req.body)
  console.log('hi')
 // userHelpers.doSignup(req.body).then((response)=>{

  //})
})
 
router.get('/signup',(req,res)=>{
  res.render('./user/signup')
})
module.exports = router;
