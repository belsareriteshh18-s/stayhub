if(process.env.NODE_ENV !="production"){
require("dotenv").config();
}

const express=require("express");    //express
const app=express();
const mongoose=require("mongoose");  //require mongoose
const path=require("path");                    //path
const methodOverride= require("method-override");
const ejsMate=require("ejs-mate");
const ExpressError=require("./utils/ExpressError.js");
const session =require("express-session");
const flash=require("connect-flash");
const passport =require("passport");
const LocalStrategy=require("passport-local");
const User =require("./models/user.js");

const listingRouter=require("./routes/listing.js");  //listing route
const reviewRouter= require("./routes/review.js");
const userRouter=require("./routes/user.js");

app.use(express.urlencoded({ extended: true }));
//database
 const MONGO_URL='mongodb://127.0.0.1:27017/StayHub';
//const dbUrl=process.env.ATLASDB_URL;

main()
.then(()=>{
    console.log("StayHub-connected to db");
})
 .catch((err)=>{
    console.log(err)
 });

 async function main(){
    await mongoose.connect(MONGO_URL);
}

app.set("view engine" ,"ejs");      // ejs se view
app.set("views", path.join(__dirname,"views"));  //views folder ko used
app.use(express.static(path.join(__dirname, "/public")));
app.use(methodOverride("_method"));
app.engine("ejs" ,ejsMate);

const sessionOption={
    secret:process.env.SESSION_SECRET ,
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() + 7 *24 *60 *60 *1000,
        maxAge:7 *24 *60 *60 *1000,
        httpOnly:true,
    }
}


app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// app.get("/", (req,res)=>{           //main route
// res.send("app is working proper");
// });


app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currentuser=req.user;

    next();
});

// app.get("/demouser",async(req,res)=>{
//     let fakeuser =new User({
//         email:"riteshh18@gmail.com",
//         username:"RITESHH"
//     });
//   let registeredUser=await User.register(fakeuser,"helloWorld"); //register(user,password)
//   res.send(registeredUser);
// });

app.use("/listings", listingRouter);  //listing route use
app.use("/listings/:id/reviews", reviewRouter);  //review route use
app.use("/",userRouter);





app.get("/about", (req, res) => {
    res.render("includes/about");
});


app.use((req, res, next) => {
    console.log("404 URL:", req.method, req.originalUrl);
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;

    console.log("ERROR:", err);

    res.status(statusCode).render("listings/error.ejs", {
        errorMessage: message,
        statusCode: statusCode
    });
});

app.listen(8080,()=>{
console.log("server is listening to port 8080");

});