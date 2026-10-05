const express = require('express');
const router = express.Router();
const User=require("../models/user.js");
const wrapAsync = require('../utils/wrapAsync');
const passport=require("passport");
const { saveRedirectUrl } = require('../middleware.js');

const userController =require("../controllers/users.js");

router.route("/signup")
.get(userController.rendersignup)
.post(wrapAsync( userController.signupform));

router.route("/login")
.get(
    userController.loginform
)
.post(
    saveRedirectUrl
    ,passport.authenticate("local",{failureRedirect:"/login",failureFlash:true}),
    userController.loginuser
);

router.get("/logout",userController.logoutuser);

module.exports=router;