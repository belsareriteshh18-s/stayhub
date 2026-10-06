
const User = require("../models/user.js");

// ================= SIGNUP =================

module.exports.rendersignup = (req, res) => {
    res.render("users/signup.ejs");
};

module.exports.signupform = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({
            email,
            username
        });
        const registerUser = await User.register(newUser, password);
        req.login(registerUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "Welcome to StayHub!");
            // Redirect user to the page they originally wanted
            let redirectUrl = req.session.redirectUrl || "/listings";
            // Remove saved URL after using it
            delete req.session.redirectUrl;
            res.redirect(redirectUrl);
        });

    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
};


// ================= LOGIN =================

module.exports.loginform = (req, res) => {
    res.render("users/login.ejs");
};

module.exports.loginuser = async (req, res) => {
    req.flash("success", "Welcome back to StayHub!");
    // Get the page user originally wanted
    let redirectUrl = req.session.redirectUrl || "/listings";
    // Remove saved URL after using it
    delete req.session.redirectUrl;
    res.redirect(redirectUrl);
};


module.exports.logoutuser = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "You have been logged out.");
        res.redirect("/listings");
    });
};

module.exports.isLoggedIn = (req, res, next) => {

    if (!req.isAuthenticated()) {
        // Save the page user wanted to visit
        req.session.redirectUrl = req.originalUrl;
        req.flash(
            "error",
            "You must be logged in to create a listing!"
        );
        return res.redirect("/login");
    }
    next();
};
