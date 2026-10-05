const User=require("../models/user.js");


module.exports.rendersignup=(req,res)=>{
    //res.send("form");
    res.render("users/signup.ejs");
}

module.exports.signupform=async (req,res)=>{
    try{
 let {username, email,password}=req.body;
    const newUser=new User({email,username});
    const registerUser=await User.register(newUser,password);
    req.login(registerUser,(err)=>{
        if(err){
            return next(err);
        }
    });

    req.flash("success","welcome to stayhub");
    res.redirect("/listings");
    }catch(e){
        req.flash("error",e.message);
        res.redirect("/signup");
    }

};

//login
module.exports.loginform=(req,res)=>{
         res.render("users/login.ejs");
};

module.exports.loginuser= async(req,res)=>{
    req.flash("success","welcome back to stayhub");
    let redirectUrl=res.locals.redirect || "/listings";
    res.redirect(redirectUrl);
};

module.exports.logoutuser=(req,res,next) =>{
    req.logout((err)=>{
        if(err){
           return next(err);
        }
         req.flash("success", "You have been logged out.");
        res.redirect("/listings");

    })
}





