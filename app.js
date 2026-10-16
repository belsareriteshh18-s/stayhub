const dns = require("node:dns");
dns.setServers(["8.8.8.8"]);

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

const express = require("express"); // express
const app = express();

const mongoose = require("mongoose"); // require mongoose
const path = require("path"); // path
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js"); // listing route
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");


// Middleware
app.use(express.urlencoded({ extended: true }));


// Database Connection
// const MONGO_URL = 'mongodb://127.0.0.1:27017/StayHub';

const dbUrl = process.env.ATLASDB_URL;

async function main() {
    if (!dbUrl) {
        throw new Error("ATLASDB_URL is missing from .env");
    }

    await mongoose.connect(dbUrl, {
        serverSelectionTimeoutMS: 15000
    });
}


// EJS Configuration
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(methodOverride("_method"));

app.engine("ejs", ejsMate);


// Session Configuration
const sessionOption = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};

app.use(session(sessionOption));

app.use(flash());


// Passport Configuration
app.use(passport.initialize());

app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());

passport.deserializeUser(User.deserializeUser());


// Flash Messages and Current User
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currentuser = req.user;

    next();
});


// Demo User Route (commented)
// app.get("/demouser", async (req, res) => {
//     let fakeuser = new User({
//         email: "your-email@example.com",
//         username: "YOUR_USERNAME"
//     });
//
//     let registeredUser = await User.register(fakeuser, "your-password");
//     res.send(registeredUser);
// });


// Routes
app.use("/listings", listingRouter);

app.use("/listings/:id/reviews", reviewRouter);

app.use("/", userRouter);


// About Route
app.get("/about", (req, res) => {
    res.render("includes/about");
});


// 404 Error Handler
app.use((req, res, next) => {
    console.log("404 URL:", req.method, req.originalUrl);

    next(new ExpressError(404, "Page Not Found"));
});


// Error Handler
app.use((err, req, res, next) => {
    let {
        statusCode = 500,
        message = "Something went wrong"
    } = err;

    console.log("ERROR:", err);

    res.status(statusCode).render("listings/error.ejs", {
        errorMessage: message,
        statusCode: statusCode
    });
});



// Start Server Only After Database Connection
async function startServer() {
    try {
        await main();

        console.log("StayHub-connected to db");

        app.listen(8080, () => {
            console.log("server is listening to port 8080");
        });

    } catch (err) {
        console.error("MongoDB connection failed:", err);
    }
}

startServer();